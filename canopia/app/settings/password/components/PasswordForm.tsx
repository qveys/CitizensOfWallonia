"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"
import { cn } from "@/lib/utils"

interface PasswordFormProps {
  currentPassword: string
  onCurrentPasswordChange: (value: string) => void
  newPassword: string
  onNewPasswordChange: (value: string) => void
  confirmPassword: string
  onConfirmPasswordChange: (value: string) => void
  showCurrentPassword: boolean
  onToggleCurrentPassword: () => void
  showNewPassword: boolean
  onToggleNewPassword: () => void
  showConfirmPassword: boolean
  onToggleConfirmPassword: () => void
  errors: {
    currentPassword: boolean
    newPassword: boolean
    confirmPassword: boolean
  }
  passwordStrengthInfo: {
    strength: number
    label: string
    color: string
  }
  onSubmit: (e: React.FormEvent) => void
}

export default function PasswordForm({
  currentPassword,
  onCurrentPasswordChange,
  newPassword,
  onNewPasswordChange,
  confirmPassword,
  onConfirmPasswordChange,
  showCurrentPassword,
  onToggleCurrentPassword,
  showNewPassword,
  onToggleNewPassword,
  showConfirmPassword,
  onToggleConfirmPassword,
  errors,
  passwordStrengthInfo,
  onSubmit,
}: PasswordFormProps) {
  const { strength, label, color } = passwordStrengthInfo

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="text-sm font-medium text-[#2B2B2B] mb-1 block">Mot de passe actuel</label>
        <div className="relative">
          <Input
            type={showCurrentPassword ? "text" : "password"}
            value={currentPassword}
            onChange={(e) => onCurrentPasswordChange(e.target.value)}
            className={cn("border-[#D8D3CA] pr-10", errors.currentPassword && "border-[#C64747]")}
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={onToggleCurrentPassword}
          >
            {showCurrentPassword ? (
              <EyeOff className="h-4 w-4 text-[#5F5B52]" />
            ) : (
              <Eye className="h-4 w-4 text-[#5F5B52]" />
            )}
          </Button>
        </div>
        {errors.currentPassword && (
          <p className="text-xs text-[#C64747] mt-1">Veuillez entrer votre mot de passe actuel</p>
        )}
      </div>

      <div>
        <label className="text-sm font-medium text-[#2B2B2B] mb-1 block">Nouveau mot de passe</label>
        <div className="relative">
          <Input
            type={showNewPassword ? "text" : "password"}
            value={newPassword}
            onChange={(e) => onNewPasswordChange(e.target.value)}
            className={cn("border-[#D8D3CA] pr-10", errors.newPassword && "border-[#C64747]")}
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={onToggleNewPassword}
          >
            {showNewPassword ? (
              <EyeOff className="h-4 w-4 text-[#5F5B52]" />
            ) : (
              <Eye className="h-4 w-4 text-[#5F5B52]" />
            )}
          </Button>
        </div>
        {errors.newPassword && (
          <p className="text-xs text-[#C64747] mt-1">Le mot de passe doit contenir au moins 8 caractères</p>
        )}

        {newPassword && (
          <div className="mt-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs text-[#5F5B52]">Force du mot de passe</span>
              <span className="text-xs font-medium" style={{ color: color.replace("bg-", "text-") }}>
                {label}
              </span>
            </div>
            <div className="h-1 w-full bg-[#EAE6DC] rounded-full overflow-hidden">
              <div className={cn("h-full", color)} style={{ width: `${strength}%` }}></div>
            </div>
          </div>
        )}
      </div>

      <div>
        <label className="text-sm font-medium text-[#2B2B2B] mb-1 block">Confirmer le mot de passe</label>
        <div className="relative">
          <Input
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => onConfirmPasswordChange(e.target.value)}
            className={cn("border-[#D8D3CA] pr-10", errors.confirmPassword && "border-[#C64747]")}
          />
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
            onClick={onToggleConfirmPassword}
          >
            {showConfirmPassword ? (
              <EyeOff className="h-4 w-4 text-[#5F5B52]" />
            ) : (
              <Eye className="h-4 w-4 text-[#5F5B52]" />
            )}
          </Button>
        </div>
        {errors.confirmPassword && (
          <p className="text-xs text-[#C64747] mt-1">Les mots de passe ne correspondent pas</p>
        )}
      </div>

      <div className="pt-2">
        <Button type="submit" className="w-full bg-[#688F4E] hover:bg-[#82A768] text-white">
          Mettre à jour le mot de passe
        </Button>
      </div>
    </form>
  )
}

