import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Noto_Emoji } from "next/font/google"
import { Car, Church, CircleOff, DoorOpen, EarthLock, Eye, FireExtinguisher, FootprintsIcon, Hand, Heading, Heart, View, Warehouse } from "lucide-react"
import { HeadersAdapter } from "next/dist/server/web/spec-extension/adapters/headers"

export function Projet() {
  return (
    <Carousel className="w-lg max-w-lg shadow-2xl">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card >
                <CardContent className="flex aspect-square items-center justify-center p-6">
                <Church className="w-36 h-36 "/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>

          
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
