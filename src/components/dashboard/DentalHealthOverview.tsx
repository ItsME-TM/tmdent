
import { getUserAppointmentStats } from '@/lib/actions/appointments';
import { currentUser } from '@clerk/nextjs/server';

import React from 'react'

async function DentalHealthOverview() {
    const appointmentStatus = await getUserAppointmentStats();
    const user = await currentUser();
    
  return (
    <div>
      Dental Health
    </div>
  )
}

export default DentalHealthOverview
