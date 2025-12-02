import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MicIcon, CalendarIcon } from "lucide-react";

function CTA() {
  return (
    <section className="relative min-h-screen py-16 px-6 overflow-hidden bg-gradient-to-br from-muted/10 via-background to-muted/5">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.03),transparent_70%)]"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center mb-16 gap-2 px-3 py-1 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border border-primary/10">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-primary">
                  Ready When You Are
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Your dental health
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  journey starts here
                </span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Join 1,200+ patients who trust our AI for instant guidance and
                personalized care.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                size="lg"
                className="px-6 py-3 font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/95 hover:to-primary/85 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl"
              >
                <MicIcon className="mr-2 h-4 w-4" />
                Start free chat
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-6 py-3 font-semibold border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 rounded-xl"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                Book appointment
              </Button>
            </div>
          </div>

          {/* Right Content - CTA Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Floating Badge */}
              <div className="absolute top-12 left-4 bg-gradient-to-r from-green-500/90 to-emerald-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg z-10">
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                  Available 24/7
                </div>
              </div>

              {/* Main Image */}
              <div className="relative">
                {/* Subtle glow */}
                <div className="absolute inset-0  rounded-2xl blur-xl scale-110"></div>

                <Image
                  src="/cta.png"
                  alt="DentWise AI Assistant"
                  width={300}
                  height={300}
                  className="relative w-100 h-auto drop-shadow-xl hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CTA;
