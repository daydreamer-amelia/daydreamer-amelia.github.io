"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function ProfilePhotoSlider({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const count = images.length;
  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  if (count === 0) return null;

  if (count === 1) {
    return (
      <Image
        src={images[0]}
        alt={alt}
        width={719}
        height={1024}
        priority
        quality={100}
        unoptimized
        className="w-full h-auto rounded-xl"
      />
    );
  }

  return (
    <div className="relative group">
      <div
        className="overflow-hidden rounded-xl touch-pan-y aspect-[719/1024]"
        onTouchStart={(e) => {
          touchStartX.current = e.changedTouches[0]?.clientX ?? null;
        }}
        onTouchEnd={(e) => {
          if (touchStartX.current == null) return;
          const delta = e.changedTouches[0].clientX - touchStartX.current;
          touchStartX.current = null;
          if (Math.abs(delta) < 40) return;
          goTo(index + (delta < 0 ? 1 : -1));
        }}
      >
        <div
          className="flex h-full transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src, i) => (
            <div key={src} className="relative w-full h-full shrink-0">
              <Image
                src={src}
                alt={`${alt} (${i + 1}/${count})`}
                fill
                priority={i === 0}
                quality={100}
                unoptimized
                className="object-cover"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous photo"
        onClick={() => goTo(index - 1)}
        className="absolute left-1.5 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/70 text-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        type="button"
        aria-label="Next photo"
        onClick={() => goTo(index + 1)}
        className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1 rounded-full bg-white/70 text-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
      >
        <ChevronRight size={16} />
      </button>

      <div className="flex justify-center gap-1.5 mt-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show photo ${i + 1}`}
            aria-current={i === index}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index ? "w-4 bg-zinc-700" : "w-1.5 bg-zinc-300 hover:bg-zinc-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
