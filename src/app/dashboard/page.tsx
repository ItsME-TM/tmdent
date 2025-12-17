import ActivityOverview from "@/components/dashboard/ActivityOverview";
import MainActions from "@/components/dashboard/MainActions";
import WelcomeSection from "@/components/dashboard/WelcomeSection";
import Navbar from "@/components/Navbar";
import React from "react";

function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-8 pt-20">
        <WelcomeSection />
        <MainActions />
        <ActivityOverview />
      </div>
    </>
  );
}

export default Dashboard;
