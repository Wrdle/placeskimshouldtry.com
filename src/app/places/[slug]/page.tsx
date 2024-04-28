import React from "react";
import {Card, CardBody, Divider, Image} from "@nextui-org/react";
import {Chip} from "@nextui-org/chip";

export default function Page({params}: { params: { slug: string } }) {
  return <main>
    <button className={"text-blue-600 my-4"}>See all places</button>

    <div className={"max-h-[300px] h-[300px]"}>
      <Image
        radius={"none"}
        alt="Card example background"
        removeWrapper
        className="border-none max-h-full"
        src="https://img.restaurantguru.com/r3c3-Little-Maru-food.jpg"
      />
    </div>
    <Divider className={"my-4"}/>
    <div className={"flex gap-5 w-full"}>
      <div className={""}>
        <h1 className={"text-3xl my-2"}>Little Maru</h1>
        <div className={"flex w-full justify-between my-3"}>
          <div className={"flex flex-wrap gap-1"}>
            <p className={"font-bold"}>Tags:</p>
            <Chip color="default" size={"sm"}>Korean</Chip>
            <Chip color="default" size={"sm"}>Bowl</Chip>
            <Chip color="default" size={"sm"}>Chicken</Chip>
            <Chip color="default" size={"sm"}>Rice</Chip>
            <Chip color="default" size={"sm"}>Rice</Chip>
            <Chip color="default" size={"sm"}>Rice</Chip>
          </div>
        </div>

        <p>
          Little Maru is a Korean takeaway restaurant serving rice bowls with fried chicken and an assortment of
          korean sides dishes.
        </p>
        <p>Things to try at Little Maru:</p>
        <ul className={"list-disc"}>
          <li>test</li>
        </ul>
        <Divider className={"my-4"}/>
        <h2 className={"text-2xl"}>Top Picks</h2>
        <Card>
          <CardBody>
            <div className={"flex gap-5"}>
              <div>
                <Image
                  radius={"none"}
                  alt="Card example background"
                  removeWrapper
                  className="border-none h-40"
                  src="https://img.restaurantguru.com/r3c3-Little-Maru-food.jpg"
                />
              </div>
              <div>
                <h3 className={"text-xl"}>Signature Chicken and Rice Bowl</h3>
                <p>Cost: $11 (04/2024)</p>
                <p>Tasty chicken and rice</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className={"basis-2/6"}>
        <iframe
          width="100%"
          height="250px"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDyXQcaLDgUePV0l1EGgWcbGWHuwNRZObs
    &q=Little+Maru,Brisbane+AU">
        </iframe>
        <p>20 Adelaide St, Brisbane, QLD</p>
      </div>
    </div>
  </main>
}