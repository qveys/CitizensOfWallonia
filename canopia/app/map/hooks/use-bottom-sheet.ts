"use client"

import { useState, useRef, useEffect } from "react"
import { useAnimation, type PanInfo } from "framer-motion"

export const bottomSheetVariants = {
  closed: { y: "100%" },
  partiallyOpen: { y: "70%" },
  fullyOpen: { y: "20%" },
}

export function useBottomSheet(selectedLocation: any = null) {
  const [isOpen, setIsOpen] = useState(false)
  const controls = useAnimation()
  const bottomSheetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (selectedLocation) {
      setIsOpen(true)
      controls.start("partiallyOpen")
    }
  }, [selectedLocation, controls])

  const handleDrag = (info: PanInfo) => {
    if (info.offset.y < -50) {
      controls.start("fullyOpen")
    } else if (info.offset.y > 50) {
      controls.start("partiallyOpen")
    }
  }

  const handleDragEnd = (info: PanInfo) => {
    if (info.velocity.y > 500) {
      setIsOpen(false)
    }
  }

  const toggleState = () => {
    if (!isOpen) {
      setIsOpen(true)
      controls.start("partiallyOpen")
    } else {
      controls.start(controls.getAnimationState().value === "fullyOpen" ? "partiallyOpen" : "fullyOpen")
    }
  }

  return {
    isOpen,
    setIsOpen,
    controls,
    bottomSheetRef,
    handleDrag,
    handleDragEnd,
    toggleState,
  }
}

