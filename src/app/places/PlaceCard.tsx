'use client'

import {Card, CardFooter, CardHeader} from "@nextui-org/card";
import {Image, useDisclosure} from "@nextui-org/react";
import {Chip} from "@nextui-org/chip";
import {PlaceModal} from "@/app/places/PlaceModal";

export function PlaceCard() {

  const disclosure = useDisclosure();

  return (
    <>
      <PlaceModal disclosure={disclosure}/>
      <a onClick={disclosure.onOpen} className={"cursor-pointer"}>
        <Card isFooterBlurred className="max-w-[500px] h-[350px] justify-self-center">
          <CardHeader className="flex gap-3 bg-white m-0">
            <Image
              alt="Place Logo"
              height={40}
              radius="sm"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmarurestaurant.com.au%2Fwp-content%2Fuploads%2F2021%2F07%2FMaru-Logo.png&f=1&nofb=1&ipt=7c374804383cccdada5dc5b2c4a653f6003b11811fd2b53a61f901d1fbea0e02&ipo=images"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">Little Maru</p>
              <p className="text-small text-default-500">Korean Rice Bowls with Korean Chicken</p>
            </div>
          </CardHeader>

          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            src="https://img.restaurantguru.com/r3c3-Little-Maru-food.jpg"
          />

          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div className={"flex w-full justify-between"}>
              <div className={"flex flex-wrap gap-1"}>
                <Chip color="default" size={"sm"}>Korean</Chip>
                <Chip color="default" size={"sm"}>Bowl</Chip>
                <Chip color="default" size={"sm"}>Chicken</Chip>
                <Chip color="default" size={"sm"}>Rice</Chip>
                <Chip color="default" size={"sm"}>Rice</Chip>
                <Chip color="default" size={"sm"}>Rice</Chip>
              </div>
              <p className={""}>✅</p>
            </div>
          </CardFooter>
        </Card>
      </a>
    </>
  )
}
