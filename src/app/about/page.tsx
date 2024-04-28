import React from "react";

export default function AboutPage() {
  return (
    <main>
      <div className={"text-center py-10"}>
        <h1 className={"mb-2 text-4xl font-bold"}>About</h1>
        <h5 className={"text-lg text-default-500"}>Why does this website exist?</h5>
      </div>
      <div className={"prose"}>
        <h1>Why does this website exist?</h1>
      </div>
    </main>
  );
}
