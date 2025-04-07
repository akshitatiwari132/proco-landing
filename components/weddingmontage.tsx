"use client";

import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export default function WeddingMontageCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-slate-900 shadow-xl">
      {/* Background blur */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute left-1/3 top-1/3 h-32 w-32 rounded-full bg-rose-500 blur-[50px]" />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center text-white">

        {/* Local video embed */}
        <video controls className="mb-4 w-full rounded-xl">
          <source src="/videos/montage.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h3 className="mb-2 text-2xl font-bold">Wedding Montage</h3>
        <p className="mb-6 max-w-md text-white/70">
          Watch our cinematic video of real people sharing their mentorship experiences and needs
        </p>

        <Button
          size="lg"
          className="rounded-xl bg-white px-6 text-lg font-medium text-slate-900 hover:bg-white/90"
        >
          <Play className="mr-2 h-5 w-5" /> Watch Video
        </Button>
      </div>
    </div>
  );
}
