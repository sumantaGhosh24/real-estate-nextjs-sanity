"use client";

import {Button} from "@/components/ui/button";

import {usePrimaryColor} from "./_components/primary-provider";

export default function Home() {
  const {primaryColor} = usePrimaryColor();

  return (
    <div>
      <h1 className={`text-${primaryColor}-500`}>Home</h1>
      <Button
        className={`bg-${primaryColor}-700 hover:bg-${primaryColor}-800 disabled:bg-${primaryColor}-300`}
      >
        Button
      </Button>
    </div>
  );
}
