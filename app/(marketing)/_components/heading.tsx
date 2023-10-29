"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        Your Ideas, Documents, & Plans. Unified. Welcome to{" "}
        <span className="underline">NoteCraft</span>
      </h1>
      <h3 className="text-base sm:text-sm md:text-xl font-medium">
        NoteCraft is the connected workspace where <br />
        better, faster work happens.
      </h3>
      <Button>
        Enter NoteCraft
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};
