"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"
import { motion, AnimatePresence, type PanInfo } from "framer-motion"
import { BottomSheetContent } from "./bottom-sheet-content"
import { bottomSheetVariants } from "../hooks/use-bottom-sheet"

interface BottomSheetProps {
  open: boolean
  selectedLocation: any
  activeLayer: string
  bottomSheetRef: React.RefObject<HTMLDivElement>
  dragConstraintsRef: React.RefObject<HTMLDivElement>
  bottomSheetControls: any
  onDrag: (_, info: PanInfo) => void
  onDragEnd: (_, info: PanInfo) => void
  toggleState: () => void
  navigateToZoneDetails: () => void
}

export function BottomSheet({
  open,
  selectedLocation,
  activeLayer,
  bottomSheetRef,
  dragConstraintsRef,
  bottomSheetControls,
  onDrag,
  onDragEnd,
  toggleState,
  navigateToZoneDetails,
}: BottomSheetProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={bottomSheetRef}
          className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-lg z-20"
          initial="closed"
          animate={bottomSheetControls}
          exit="closed"
          variants={bottomSheetVariants}
          drag="y"
          dragConstraints={dragConstraintsRef}
          dragElastic={0.2}
          onDrag={onDrag}
          onDragEnd={onDragEnd}
        >
          <div className="flex justify-center py-2">
            <div className="w-10 h-1 bg-[#D8D3CA] rounded-full"></div>
          </div>

          <div className="px-4 pt-2 pb-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-[#2B463C] font-montserrat">
                {selectedLocation?.name || "Lieu sélectionné"}
              </h2>
              <Button variant="ghost" size="sm" className="p-0 h-8 w-8" onClick={toggleState}>
                <ChevronUp className="h-5 w-5 text-[#5F5B52]" />
              </Button>
            </div>

            <BottomSheetContent
              activeLayer={activeLayer}
              selectedLocation={selectedLocation}
              navigateToZoneDetails={navigateToZoneDetails}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

