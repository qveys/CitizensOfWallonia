"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface ProfileEditDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  profileForm: {
    name: string
    email: string
    bio: string
  }
  setProfileForm: (form: {
    name: string
    email: string
    bio: string
  }) => void
  onSave: () => void
}

export default function ProfileEditDialog({
  open,
  onOpenChange,
  profileForm,
  setProfileForm,
  onSave,
}: ProfileEditDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-[#2B463C] font-montserrat">Modifier le profil</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <div>
            <label className="text-sm font-medium text-[#5F5B52] mb-1 block">Nom</label>
            <Input
              value={profileForm.name}
              onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
              className="border-[#D8D3CA]"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[#5F5B52] mb-1 block">Email</label>
            <Input
              value={profileForm.email}
              onChange={(e) => setProfileForm({ ...profileForm, email: e.target.value })}
              className="border-[#D8D3CA]"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-[#5F5B52] mb-1 block">Bio</label>
            <Textarea
              value={profileForm.bio}
              onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
              className="border-[#D8D3CA] min-h-[100px]"
            />
          </div>

          <div className="flex justify-end space-x-2 pt-2">
            <Button variant="outline" onClick={() => onOpenChange(false)} className="border-[#D8D3CA] text-[#5F5B52]">
              Annuler
            </Button>
            <Button onClick={onSave} className="bg-[#688F4E] hover:bg-[#82A768] text-white">
              Enregistrer
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

