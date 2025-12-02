import { MessageCircleIcon, MessageSquareIcon } from "lucide-react";
import Image from "next/image";

function WhatToAsk() {
  return (
    <section className="relative py-14 px-6 overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          {/* bubble */}
          <div
            className="absolute gap-2 hidden md:flex items-center px-4 py-1
        bg-gradient-to-r from-primary/5 to-primary/10 rounded-full border
        border-primary/10 backdrop-blur-sm mb-2"
          >
            <MessageCircleIcon className="size-3 text-primary" />
            <span className="text-primary text-sm font-medium">
              AI-Powered Conversations
            </span>
          </div>
          <h2 className="text-xl md:text-3xl lg:text-5xl font-bold tracking-tight">
            <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Ask about
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              anything dental
            </span>
          </h2>
          {/* <p className="text-md text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From simple questions to complex concerns, our AI delivers
            expert-level guidance trained on thousands of real dental cases
          </p> */}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Interactive Chat Examples */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-md font-bold mb-2">
                Common questions our AI answers:
              </h3>

              {/* Chat Bubble 1 */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-3 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                      <MessageSquareIcon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="bg-primary/5 rounded-2xl p-2 border border-primary/10">
                        <p className="font-semibold text-sm text-primary">
                          "My tooth hurts when I bite down"
                        </p>
                      </div>
                      <div className="bg-muted/30 rounded-2xl p-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Get immediate advice on pain management, possible
                          causes, and when to see a dentist urgently
                        </p>
                        <div className="flex gap-2 mt-3">
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            Instant Response
                          </span>
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            Pain Relief
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chat Bubble 2 */}
              <div className="group relative">
                <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-3 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                      <MessageSquareIcon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <div className="bg-primary/5 rounded-2xl p-2 border border-primary/10">
                        <p className="font-semibold text-sm text-primary">
                          "How much does teeth whitening cost?"
                        </p>
                      </div>
                      <div className="bg-muted/30 rounded-2xl p-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          Compare treatment options, pricing ranges, and find
                          the best whitening solution for your budget
                        </p>
                        <div className="flex gap-2 mt-3">
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            Cost Analysis
                          </span>
                          <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                            Treatment Options
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - AI Illustration */}
          <div className="bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-xl rounded-3xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-500">
            <div className="flex items-center justify-center h-full">
              <Image
                src="/confused.png"
                alt="AI Assistant"
                width={500}
                height={500}
                className="w-86 h-86 max-w-lg object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default WhatToAsk;
