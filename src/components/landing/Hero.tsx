import { SignOutButton, SignUpButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "../ui/button";
import { Calendar, MicIcon, StarIcon } from "lucide-react";
import Image from "next/image";

function Hero() {
  return (
    <section className="relative h-screen flex items-center pt-20">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-primary/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
      </div>
      {/* Grid Background Objects */}
      <div className="absolute top-20 left-1/4 w-52 h-52 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-gradient-to-r from-primary/15 to-primary/5 rounded-full blur-3xl" />

        {/* Hero Content */}
      <div className="relative z-10 w-full px-6">
        <div className="max-w-7xl mx-auto">
            {/* Hero Columns Content */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div className="space-y-10">
                    <div className="space-y-6">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-2 py-2 bg-gradient-to-r 
                        from-primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm">
                            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"/>
                            <span className="text-sm font-medium text-primary">
                                Ai-Powered Dental Assistant
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 
                            bg-clip-text text-transparent">
                                Skip the wait,
                            </span>
                            <br/>
                            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                                get instant help
                            </span>
                            <br/>
                            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/70 
                            bg-clip-text text-transparent">
                                for your smile
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-md text-muted-foreground leading-relaxed max-w-xl font-medium ">
                            Get instant dental advice, smart appointment scheduling, and personalized
                             care recommendations from our 24/7 AI assistant.
                        </p>
                    </div>

                    {/* Ai Bot Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <SignUpButton mode="modal">
                            <Button size={"lg"}>
                                <MicIcon/>
                                Try Voice agent
                            </Button>
                        </SignUpButton>

                        <SignUpButton  mode="modal">
                            <Button size={"lg"} variant={"outline"}>
                                <Calendar className="mr-2 size-5"/>
                                Book appointment
                            </Button>
                        </SignUpButton>
                    </div>

                    {/* User reviews */}
                    <div className="pt-2">
                        <div className="flex items-center gap-6">
                            {/* User Images */}
                            <div className="flex -space-x-2">
                                <Image
                                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
                                    alt="Jessica Davis"
                                    width={48}
                                    height={48}
                                    className="w-9 h-9 rounded-full object-cover ring-4 ring-background"
                                    />
                                    <Image
                                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
                                    alt="Sam Miller"
                                    width={48}
                                    height={48}
                                    className="w-9 h-9 rounded-full object-cover ring-4 ring-background"
                                    />
                                    <Image
                                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
                                    alt="Anna Lopez"
                                    width={48}
                                    height={48}
                                    className="w-9 h-9 rounded-full object-cover ring-4 ring-background"
                                    />
                                    <Image
                                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face"
                                    alt="Mike Rodriguez"
                                    width={48}
                                    height={48}
                                    className="w-9 h-9 rounded-full object-cover ring-4 ring-background"
                                    />
                                    <Image
                                    src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=100&h=100&fit=crop&crop=face"
                                    alt="Katie Lee"
                                    width={48}
                                    height={48}
                                    className="w-9 h-9 rounded-full object-cover ring-4 ring-background"
                                    />
                            </div>

                            {/* Review Text */}
                            <div>
                                <div className="space-y-1">
                                    <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                            <StarIcon key={star} className="h-4 w-4 fill-amber-400 text-amber-400" />
                                            ))}
                                        </div>
                                        <span className="text-sm font-bold text-foreground">4.9/5</span>
                                    </div>
                                        <p className="text-sm text-muted-foreground">
                                        Trusted by{" "}
                                        <span className="font-semibold text-foreground">1,200+ patients</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Right Content */}
                <div className="relative lg:pl-8 hidden md:block">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl rotate-45 blur-xl"></div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-2xl"></div>
                    <Image 
                        src={"/hero.png"}
                        alt="TMdent AI Assistant"
                        width={600}
                        height={600}
                        className="md:max-w-[350px] sm:max-h-[500px]"
                    />  
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
