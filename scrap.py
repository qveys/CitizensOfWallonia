import requests
from bs4 import BeautifulSoup
import csv
import time
import os
import re
import html2text
from typing import List, Optional, Union

def scrape_citizens_of_wallonia(base_url='https://www.citizensofwallonia.be', urls: Optional[List[str]] = None):
    """
    Scrape le site Citizens of Wallonia et sauvegarde les données en format Markdown.
    
    Args:
        base_url: L'URL du site à scraper
        urls: Liste optionnelle d'URLs spécifiques à scraper
    """
    # Headers pour simuler un navigateur
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
    }
    
    try:
        # Faire une requête vers la page principale
        response = requests.get(base_url, headers=headers)
        response.raise_for_status()  # Vérifier si la requête a réussi
        
        # Parser le contenu HTML avec l'encodage correct
        response.encoding = 'utf-8'  # Forcer l'encodage UTF-8
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Créer un dossier pour stocker les données
        if not os.path.exists('data'):
            os.makedirs('data')
        
        # Extraire les informations principales
        # Note: Les sélecteurs CSS devront être adaptés à la structure réelle du site
        
        # Exemple: extraire tous les titres h1 et h2
        titles = soup.select('h1, h2')
        with open('data/titles.md', 'w', encoding='utf-8') as f:
            f.write("# Titres extraits de Citizens of Wallonia\n\n")
            for title in titles:
                # Détermine le niveau de titre basé sur le tag HTML
                heading_level = title.name[1]  # Extrait le chiffre de h1, h2, etc.
                f.write(f"{'#' * int(heading_level)} {title.text.strip()}\n\n")
        
        # Exemple: extraire tous les liens
        links = []
        for a in soup.select('a[href]'):
            href = a.get('href')
            # S'assurer que le lien est complet
            if href.startswith('/'):
                href = base_url + href
            if href.startswith('http'):  # Ne considérer que les liens HTTP/HTTPS
                links.append({
                    'text': a.text.strip(),
                    'url': href
                })
        
        # Dédupliquer les liens basés sur l'URL
        unique_links = []
        unique_urls = set()
        for link in links:
            if link['url'] not in unique_urls:
                unique_urls.add(link['url'])
                unique_links.append(link)
        
        # Enregistrer les liens uniques dans un fichier Markdown
        with open('data/links.md', 'w', encoding='utf-8') as f:
            f.write("# Liens extraits de Citizens of Wallonia\n\n")
            f.write(f"## {len(unique_links)} liens uniques trouvés\n\n")
            for link in unique_links:
                f.write(f"- [{link['text']}]({link['url']})\n")
        
        # Explorer les pages liées si nécessaire (utiliser les liens uniques ou les URLs fournies)
        if urls:
            # Utiliser les URLs fournies en paramètre
            pages_to_scrape = urls
        else:
            # Utiliser les liens extraits du site
            pages_to_scrape = [link['url'] for link in unique_links if base_url in link['url']]
        
        # Limiter à un nombre raisonnable de pages pour éviter le blocage
        max_pages = 200
        pages_scraped = []
        
        for i, page_url in enumerate(pages_to_scrape[:max_pages]):
            if page_url in pages_scraped:
                continue  # Éviter de scraper la même page plusieurs fois
                
            try:
                print(f"Scraping page {i+1}/{min(len(pages_to_scrape), max_pages)}: {page_url}")
                page_response = requests.get(page_url, headers=headers)
                page_response.raise_for_status()
                
                # Forcer l'encodage UTF-8 pour les pages également
                page_response.encoding = 'utf-8'
                page_soup = BeautifulSoup(page_response.text, 'html.parser')
                
                # Extraire le titre de la page
                page_title = page_soup.title.string if page_soup.title else f"Page {i+1}"
                
                # Extraire le contenu principal (à adapter selon le site)
                # Tentative de trouver le contenu principal avec différents sélecteurs communs
                content = page_soup.select('main, #content, .content, article, .main-content, #main')
                
                # Créer un fichier Markdown bien structuré
                page_name = page_url.replace(base_url, '').replace('/', '_').replace('?', '_').strip('_')
                if not page_name:
                    page_name = 'index'
                
                with open(f'data/{page_name}.md', 'w', encoding='utf-8') as f:
                    # Ajouter métadonnées et titre en format Markdown
                    f.write(f"---\n")
                    f.write(f"title: {page_title}\n")
                    f.write(f"url: {page_url}\n")
                    f.write(f"date_scraped: {time.strftime('%Y-%m-%d %H:%M:%S')}\n")
                    f.write(f"---\n\n")
                    
                    f.write(f"# {page_title}\n\n")
                    
                    if content:
                        # Utiliser html2text pour une conversion HTML → Markdown de haute qualité
                        h = html2text.HTML2Text()
                        h.ignore_links = False
                        h.bypass_tables = False
                        h.ignore_images = False
                        h.body_width = 0  # Désactive le wrap des lignes
                        
                        # Convertir le contenu HTML en Markdown
                        content_text = h.handle(str(content[0]))
                        
                        # Nettoyage final pour éviter les lignes vides multiples
                        content_text = re.sub(r'\n{3,}', '\n\n', content_text)
                        
                        f.write(content_text)
                    else:
                        f.write("*Aucun contenu principal n'a été trouvé sur cette page.*")
                
                pages_scraped.append(page_url)
                
                # Pause pour ne pas surcharger le serveur
                time.sleep(2)
                
            except Exception as e:
                print(f"Erreur lors du scraping de {page_url}: {e}")
        
        # Création d'un index général en Markdown
        with open('data/index.md', 'w', encoding='utf-8') as f:
            f.write("# Citizens of Wallonia - Index des pages scrapées\n\n")
            f.write(f"*Date de scraping: {time.strftime('%Y-%m-%d %H:%M:%S')}*\n\n")
            f.write(f"URL de base: [{base_url}]({base_url})\n\n")
            f.write(f"## Pages scrapées ({len(pages_scraped)})\n\n")
            
            for i, page_url in enumerate(pages_scraped):
                page_name = page_url.replace(base_url, '').replace('/', '_').replace('?', '_').strip('_')
                if not page_name:
                    page_name = 'index'
                f.write(f"{i+1}. [{page_url}]({page_name}.md)\n")
            
        print(f"Scraping terminé. {len(pages_scraped)} pages scrapées et sauvegardées en format Markdown.")
        return True
        
    except Exception as e:
        print(f"Erreur lors du scraping: {e}")
        return False

if __name__ == "__main__":
    import sys
    
    if len(sys.argv) > 1:
        if sys.argv[1].startswith('--urls='):
            # Format attendu: --urls=url1,url2,url3
            urls_str = sys.argv[1].replace('--urls=', '')
            urls_list = [url.strip() for url in urls_str.split(',')]
            if len(sys.argv) > 2:
                # Si une base_url est aussi fournie
                base_url = sys.argv[2]
                print(f"Scraping des URLs spécifiques avec base_url: {base_url}")
                scrape_citizens_of_wallonia(base_url=base_url, urls=urls_list)
            else:
                # Utiliser l'URL par défaut avec les URLs spécifiques
                print(f"Scraping de {len(urls_list)} URLs spécifiques avec base_url par défaut.")
                scrape_citizens_of_wallonia(urls=urls_list)
        else:
            # Utiliser l'URL fournie comme argument pour base_url
            print(f"Scraping avec base_url: {sys.argv[1]}")
            scrape_citizens_of_wallonia(sys.argv[1])
    else:
        # Utiliser l'URL par défaut
        print("Aucune URL fournie. Utilisation de l'URL par défaut.")
        scrape_citizens_of_wallonia()
