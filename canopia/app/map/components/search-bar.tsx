"use client"

import { useState, useEffect, useRef } from "react"
import { Input } from "@/components/ui/input"
import { Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface SearchResult {
  id: string
  name: string
  type: string
  address?: string
}

interface SearchBarProps {
  onSelectLocation?: (location: SearchResult) => void
}

export function SearchBar({ onSelectLocation }: SearchBarProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  // Mock search results - in a real app, this would be an API call
  useEffect(() => {
    if (searchQuery.length > 2) {
      setLoading(true)

      // Simulate API delay
      const timer = setTimeout(() => {
        // Mock search results based on query
        const mockResults: SearchResult[] = [
          { id: "loc1", name: "Centre-Ville", type: "zone", address: "Charleroi, Belgique" },
          { id: "loc2", name: "Quartier Nord", type: "zone", address: "Charleroi, Belgique" },
          { id: "loc3", name: "Parc Sud", type: "zone", address: "Charleroi, Belgique" },
          { id: "loc4", name: "Zone Industrielle", type: "zone", address: "Charleroi, Belgique" },
          { id: "loc5", name: "Quartier Est", type: "zone", address: "Charleroi, Belgique" },
          { id: "poi1", name: "Hôtel de Ville de Charleroi", type: "poi", address: "Place Charles II, Charleroi" },
          { id: "poi2", name: "Parc Reine Astrid", type: "poi", address: "Rue de la Montagne, Charleroi" },
          { id: "poi3", name: "Beffroi", type: "poi", address: "Place Charles II, Charleroi" },
        ].filter(
          (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (item.address && item.address.toLowerCase().includes(searchQuery.toLowerCase())),
        )

        setResults(mockResults)
        setLoading(false)
      }, 500)

      return () => clearTimeout(timer)
    } else {
      setResults([])
    }
  }, [searchQuery])

  const handleSelectResult = (result: SearchResult) => {
    if (onSelectLocation) {
      onSelectLocation(result)
    }
    setOpen(false)
    setSearchQuery(result.name)
  }

  const clearSearch = () => {
    setSearchQuery("")
    setResults([])
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className="absolute top-4 left-4 right-4 z-10">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="relative">
            <Input
              ref={inputRef}
              placeholder="Rechercher un lieu..."
              className="pl-10 pr-10 py-2 bg-white border-none rounded-full shadow-md text-[#2B2B2B]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setOpen(true)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#5F5B52] w-5 h-5" />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                onClick={clearSearch}
              >
                <X className="h-4 w-4 text-[#5F5B52]" />
              </Button>
            )}
          </div>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-[calc(100vw-2rem)] max-w-md" align="start">
          <Command>
            <CommandInput placeholder="Rechercher un lieu..." value={searchQuery} onValueChange={setSearchQuery} />
            <CommandList>
              {loading && (
                <div className="py-6 text-center">
                  <div className="w-8 h-8 border-2 border-[#688F4E] border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                  <p className="text-sm text-muted-foreground">Recherche en cours...</p>
                </div>
              )}
              <CommandEmpty>Aucun résultat trouvé</CommandEmpty>
              <CommandGroup heading="Zones">
                {results
                  .filter((result) => result.type === "zone")
                  .map((result) => (
                    <CommandItem key={result.id} onSelect={() => handleSelectResult(result)} className="cursor-pointer">
                      <div>
                        <div className="font-medium">{result.name}</div>
                        {result.address && <div className="text-xs text-muted-foreground">{result.address}</div>}
                      </div>
                    </CommandItem>
                  ))}
              </CommandGroup>
              <CommandGroup heading="Points d'intérêt">
                {results
                  .filter((result) => result.type === "poi")
                  .map((result) => (
                    <CommandItem key={result.id} onSelect={() => handleSelectResult(result)} className="cursor-pointer">
                      <div>
                        <div className="font-medium">{result.name}</div>
                        {result.address && <div className="text-xs text-muted-foreground">{result.address}</div>}
                      </div>
                    </CommandItem>
                  ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}

