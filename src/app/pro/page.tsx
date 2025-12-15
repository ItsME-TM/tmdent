import Navbar from "@/components/Navbar";
import { PricingTable } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Crown } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";

async function ProPage() {
  const user = await currentUser();
  if (!user) {
    redirect("/");
  }

  const {has} = await auth();
  const hasProPlan = has({plan: "ai_basic"}) || has({plan: "ai_pro"});
  
  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        <div className="mb-8 overflow-hidden">
          <div
            className="flex items-center justify-between bg-gradient-to-br from-primary/10
                to-background rounded-3xl p-8 border border-primary/20"
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-primary">
                  Upgrade to Pro
                </span>
              </div>
              <div>
                <h1 className="text-xl font-bold mb-1">
                  Unlock Premium AI Dental Care
                </h1>
                <p className="text-muted-foreground">
                  Get unlimited AI consultations and priority support to enhance
                  your dental practice.
                </p>
              </div>
            </div>
            {/* Crown Icon */}
            <div className="hidden lg:block">
              <div
                className="w-20 h-20 items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10
                rounded-full flex"
              >
                <Crown className="w-12 h-12 text-primary" />
              </div>
            </div>
          </div>
        </div>
        {/* Pricing */}
        <div className="space-y-4">
          <div className="text-center space-y-2">
            <h2 className="text-xl font-bold">Choose Your Plan</h2>
            <p className="text-sm max-w-2xl mx-auto text-muted-foreground">
              Select the plan that best fits your dental practice needs and
              start enjoying premium features today.
            </p>
          </div>
          <PricingTable />
        </div>
      </div>
    </>
  );
}

export default ProPage;
