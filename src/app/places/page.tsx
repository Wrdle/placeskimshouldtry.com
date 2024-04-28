import {PlaceCard} from "@/app/places/PlaceCard";
import React from "react";

export default function PlacesPage() {
  return (
    <main className={"px-2 sm-px-0"}>
      <div className={"text-center py-10"}>
        <h1 className={"mb-2 text-4xl font-bold"}>Take your pick!</h1>
        <h5 className={"text-lg text-default-500"}>A curated list of places to try in Brisbane City.</h5>
      </div>
      <div className={"grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}>
        <PlaceCard/>
        <PlaceCard/>
        <PlaceCard/>
        <PlaceCard/>
        <PlaceCard/>
        <PlaceCard/>
        <PlaceCard/>
        <PlaceCard/>
        <PlaceCard/>
        <PlaceCard/>
      </div>
    </main>
  );
}
