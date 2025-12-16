import { Mic } from "lucide-react";
import React from "react";

function WelcomeSection() {
  return (
    <div
      className="z-10 flex items-center justify-between border border-primary/20  mb-12 overflow-hidden
    bg-linear-to-br from-primary/10 via-primary/5 to-background rounded-3xl p-6"
    >
      {/* left side */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 bg-primary/10 rounded-full border border-primary/20">
          <div className="w-2 h-2 bg-primary animate-pulse rounded-full" />
          <span className="text-sm font-medium text-primary">Voice Assistant Ready</span>
        </div>
        <h1 className="text-xl font-bold mb-2">
            AI Voice Assistant
        </h1>
        <p className="text-sm text-muted-foreground">
            Interact with our AI dental assistant using natural voice and get instant advice and Professional guidance. 
        </p>
      </div>
        {/* right side */}
        <div className="hidden lg:block">
            <div className="flex w-20 h-20 bg-linear-to-br from-primary/20 to-primary/10 rounded-full items-center justify-center">
                <Mic className="w-10 h-10 text-primary"/>
            </div>
        </div>
    </div>
  );
}

export default WelcomeSection;
