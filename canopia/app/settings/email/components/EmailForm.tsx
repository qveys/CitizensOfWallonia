"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface EmailFormProps {
  currentEmail: string
  newEmail: string
  onNewEmailChange: (value: string) => void
  password: string
  onPasswordChange: (value: string) => void
  errors: {
    newEmail: boolean
    password: boolean
  }
  onSubmit: (e: React.FormEvent) => void
}

export default function EmailForm({
  currentEmail,
  newEmail,
  onNewEmailChange,
  password,
  onPasswordChange,
  errors,
  onSubmit,
}: EmailFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="text-sm font-medium text-[#2B2B2B] mb-1 block">Nouvelle adresse e-mail</label>
        <Input
          type="email"
          value={newEmail}
          onChange={(e) => onNewEmailChange(e.target.value)}
          className={cn("border-[#D8D3CA]", errors.newEmail && "border-[#C64747]")}
        />
        {errors.newEmail && <p className="text-xs text-[#C64747] mt-1">Veuillez entrer une adresse e-mail valide</p>}
      </div>

      <div>
        <label className="text-sm font-medium text-[#2B2B2B] mb-1 block">Mot de passe</label>
        <Input
          type="password"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          className={cn("border-[#D8D3CA]", errors.password && "border-[#C64747]")}
          placeholder="Entrez votre mot de passe pour confirmer"
        />
        {errors.password && <p className="text-xs text-[#C64747] mt-1">Veuillez entrer votre mot de passe</p>}
      </div>

      <div className="pt-2">
        <Button type="submit" className="w-full bg-[#688F4E] hover:bg-[#82A768] text-white">
          Mettre à jour l'adresse e-mail
        </Button>
      </div>
    </form>
  )
}

