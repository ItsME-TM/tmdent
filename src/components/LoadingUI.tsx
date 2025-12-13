"use client";

import React from "react";
import { Spinner } from "@/components/ui/spinner";

function LoadingUI() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full gap-4">
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
        <Spinner className="size-12 text-primary" />
      </div>
      <p className="text-muted-foreground text-sm font-medium animate-pulse">
        Loading...
      </p>
    </div>
  );
}

export default LoadingUI;
