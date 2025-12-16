import Navbar from '@/components/Navbar';
import FeatureCards from '@/components/voice/FeatureCards';
import ProPlanRequired from '@/components/voice/ProPlanRequired';
import VapiWidget from '@/components/voice/VapiWidget';
import WelcomeSection from '@/components/voice/WelcomeSection';
import { auth } from '@clerk/nextjs/server'
import React from 'react'

async function VoicePage() {
    const {has} = await auth();
    const hasProPlan = has({plan: "ai_basic"}) || has({plan: "ai_pro"});
    if(!hasProPlan) return <ProPlanRequired/>
  return (
    <div className='min-h-screen bg-background'>
      <Navbar/>
        <div className='max-w-7xl mx-auto px-6 pt-20'>
            <WelcomeSection/>
            <FeatureCards/>
        </div>
        <VapiWidget/>
    </div>
  )
}

export default VoicePage
