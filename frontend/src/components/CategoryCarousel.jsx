import React from 'react'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel'

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Science",
  "Graphic Designer",
  "Full Stack Developer"
];

const CategoryCarousel = () => {
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent> 
          {
            category.map((cat, index) => (
              <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3 flex justify-center" key={index} >
                <Button variant="outline" className="rounded-full">{cat}</Button>
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </div>
  )
}

export default CategoryCarousel