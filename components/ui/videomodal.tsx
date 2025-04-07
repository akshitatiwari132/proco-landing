'use client'

import { useState, useEffect } from "react"

export default function VideoModal() {
  const [isOpen, setIsOpen] = useState(false)

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") setIsOpen(false)
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <>
      {/* 🎬 Launch Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-xl bg-white px-6 py-3 text-lg font-medium text-slate-900 shadow hover:bg-white/90"
      >
        Watch Demo
      </button>

      {/* 🎥 Modal */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl rounded-xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 z-10 text-white bg-white/20 hover:bg-white/30 p-2 rounded-full"
            >
              ✕
            </button>

            {/* The Video */}
            <video
              controls
              autoPlay
              className="max-h-[90vh] w-auto max-w-full mx-auto object-contain rounded-lg"
              poster="/thumbnail.png"
            >
              <source src="/proco-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  )
}
