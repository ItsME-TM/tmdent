import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CrownIcon, LockIcon, MicIcon } from "lucide-react";
import Link from "next/link";

function ProPlanRequired() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 pt-20">
        {/* Access Denied Section */}
        <div className="relative mb-6 overflow-hidden">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-3xl p-6 border border-primary/20">
            <div className="relative z-10 flex items-center justify-between">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                  <LockIcon className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium text-primary">Pro Feature</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold mb-2">Voice Assistant Access Required</h1>
                  <p className="text-muted-foreground text-sm">
                    Upgrade to AI Pro or AI Basic to unlock unlimited voice consultations with our
                    AI dental assistant.
                  </p>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
                  <MicIcon className="w-10 h-10 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Upgrade Card */}
        <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 max-w-2xl mx-auto">
          <CardContent className="relative p-2 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-2 
            group-hover:scale-110 transition-transform duration-300">
              <LockIcon className="w-10 h-10 text-primary" />
            </div>

            <h3 className="text-xl font-bold mb-2">Upgrade Required</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              The voice assistant feature is available to AI Pro and AI Basic subscribers. Get
              instant dental advice through natural voice conversations.
            </p>

            <div className="space-y-1 mb-4">
              <div className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">24/7 voice consultations</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Professional dental guidance</span>
              </div>
              <div className="flex items-center gap-3 justify-center">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Instant pain relief advice</span>
              </div>
            </div>

            <Link href="/pro">
              <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <CrownIcon className="mr-2 h-5 w-5" />
                Upgrade to Pro
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ProPlanRequired;