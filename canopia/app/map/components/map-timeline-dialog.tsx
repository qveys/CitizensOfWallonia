"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"
import { format } from "date-fns"
import { fr } from "date-fns/locale"

interface MapTimelineDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onTimelineChange?: (date: Date) => void
}

export function MapTimelineDialog({ open, onOpenChange, onTimelineChange }: MapTimelineDialogProps) {
  const [date, setDate] = useState<Date>(new Date())
  const [timeValue, setTimeValue] = useState([12])

  const handleApply = () => {
    if (onTimelineChange) {
      const newDate = new Date(date)
      newDate.setHours(timeValue[0], 0, 0, 0)
      onTimelineChange(newDate)
    }
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Chronologie des données</DialogTitle>
          <DialogDescription>
            Visualisez les données historiques en sélectionnant une date et une heure.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <div>
            <Label className="text-sm font-medium mb-2 block">Date</Label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={(date) => date && setDate(date)}
              className="border rounded-md p-2"
              locale={fr}
            />
          </div>

          <div>
            <Label className="text-sm font-medium mb-2 block">Heure: {timeValue[0]}:00</Label>
            <Slider value={timeValue} onValueChange={setTimeValue} max={23} min={0} step={1} className="mt-2" />
          </div>

          <div className="p-3 bg-muted rounded-md">
            <p className="text-sm font-medium">Données sélectionnées:</p>
            <p className="text-xs text-muted-foreground">
              {format(date, "d MMMM yyyy", { locale: fr })} à {timeValue[0]}:00
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Annuler
          </Button>
          <Button onClick={handleApply}>Appliquer</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

