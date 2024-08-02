/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/NzT90k92xBR
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export function CarouselFinal() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <Carousel className="relative">
        <CarouselContent>
          <CarouselItem>
            <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Slide 1"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.1)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Elevate Your Style
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl">
                  Discover our latest collection of premium fashion essentials
                  that will transform your wardrobe.
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Slide 2"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.1)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Timeless Elegance
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl">
                  Explore our collection of classic and sophisticated pieces
                  that will never go out of style.
                </p>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="Slide 3"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.1)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Effortless Chic
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl">
                  Discover our collection of versatile and comfortable pieces
                  that will elevate your everyday style.
                </p>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          <div />
          <div />
          <div />
        </div>
        <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-4 text-white hover:text-primary transition-colors">
          <ChevronLeftIcon className="w-8 h-8" />
        </CarouselPrevious>
        <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-4 text-white hover:text-primary transition-colors">
          <ChevronRightIcon className="w-8 h-8" />
        </CarouselNext>
      </Carousel>
    </div>
  );
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
