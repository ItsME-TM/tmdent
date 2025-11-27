import { Zap } from "lucide-react";
import React from "react";
import Image from "next/image";
import { SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

function HowItWorks() {
  return (
    <section
      className="relative py-14 px-6 outline-hidden 
    z-10 max-w-7xl mx-auto"
    >
      {/* Header */}
      <div className="mb-6">
        {/* bubble */}
        <div
          className="absolute gap-2 hidden md:flex items-center px-4 py-1
        bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border
        border-primary/10 backdrop-blur-sm mb-2"
        >
          <Zap className="size-3 text-primary" />
          <span className="text-primary text-sm font-medium">
            Simple Process
          </span>
        </div>
        {/* Title and description */}
        <h2
          className="text-xl md:text-3xl lg:text-5xl font-bold
        mb-2 tracking-light text-center"
        >
          <span
            className="bg-gradient-to-br from-foreground to-foreground/70
          bg-clip-text text-transparent"
          >
            Three steps to
          </span>
          <br />
          <span
            className="bg-gradient-to-br from-primary to-primary/70
          bg-clip-text text-transparent"
          >
            better dental health
          </span>
        </h2>
        <p className="text-center text-md text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Our streamlined process makes dental care accessible, convenient, and
          stress-free for everyone
        </p>
      </div>

      {/* Steps */}
      <div className="relative">
        {/* Connection Line */}
        <div
          className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 
        to-transparent transform -translate-y-1/2 hidden lg:block"
        ></div>
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-6 items-stretch">
          {/* STEP 1 */}
          <div className="relative group ">
            <div className="relative bg-gradient-to-br from-card/80 h-full to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col">
              {/* Step Number */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg">
                1
              </div>

              <div className="flex-1">
                {/* Icon */}
                <div className="w-20 h-20 md:w-10 md:h-10 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-2">
                  <Image
                    src="/audio.png"
                    alt="Voice Chat"
                    width={40}
                    height={40}
                    className="w-14"
                  />
                </div>

                <h3 className="text-lg font-bold mb-4 text-center">
                  Ask Questions
                </h3>
                <p className="text-muted-foreground text-sm text-center leading-relaxed mb-6">
                  Chat with our AI assistant about any dental concerns. Get
                  instant answers about symptoms, treatments, and oral health
                  tips.
                </p>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 justify-center mt-auto">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  24/7 Available
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  Instant Response
                </span>
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div className="relative group ">
            <div className="relative bg-linear-to-br from-card/80 h-full to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col">
              {/* Step Number */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-linear-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg">
                2
              </div>

              <div className="flex-1">
                {/* Icon */}
                <div className="w-20 h-20 md:w-10 md:h-10 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-2">
                  <Image
                    src="/brain.png"
                    alt="AI Brain"
                    width={40}
                    height={40}
                    className="w-14"
                  />
                </div>

                <h3 className="text-lg font-bold mb-4 text-center">
                  Get Expert Advice
                </h3>
                <p className="text-muted-foreground text-sm text-center leading-relaxed mb-6">
                  Receive personalized recommendations based on thousands of
                  dental cases. Our AI provides professional-grade insights.
                </p>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 justify-center mt-auto">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  AI-Powered
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  Personalized
                </span>
              </div>
            </div>
          </div>

          {/* STEP 3  */}
          <div className="relative group ">
            <div className="relative bg-gradient-to-br from-card/80 h-full to-card/40 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col">
              {/* Step Number */}
              <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold shadow-lg">
                3
              </div>

              <div className="flex-1">
                {/* Icon */}
                <div className="w-20 h-20 md:w-10 md:h-10 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 mb-2">
                  <Image
                    src="/calendar.png"
                    alt="Calendar"
                    width={40}
                    height={40}
                    className="w-14"
                  />
                </div>

                <h3 className="text-lg font-bold mb-4 text-center">
                  Book & Get Care
                </h3>
                <p className="text-muted-foreground text-sm text-center leading-relaxed mb-6">
                  Schedule with verified dentists and receive comprehensive
                  follow-up care. Track your progress seamlessly.
                </p>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap gap-2 justify-center mt-auto">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  Verified Doctors
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                  Follow-up Care
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom ChatAi button */}
      <div className="text-center mt-5">
          <SignUpButton>
            <Button>
              Get Started Now
            </Button>
          </SignUpButton>
      </div>
    </section>
  );
}

export default HowItWorks;
