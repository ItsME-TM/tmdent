"use client";

import { useGetDoctors } from "@/components/hooks/use-doctors";
import Navbar from "@/components/Navbar";
import { useUser } from "@clerk/nextjs";
import { Settings } from "lucide-react";
import { useGetAppointments } from "@/components/hooks/use-appointment";
import AdminStats from "@/components/admin/AdminStats";
import DoctorsManagement from "@/components/admin/DoctorsManagement";
import LoadingUI from "@/components/LoadingUI";

 
function AdminDashboardClient() {
  const {user} = useUser();
  const {data: doctors = [], isLoading: doctorLoading} = useGetDoctors();
  const {data: appointments = [], isLoading: appointmentsLoading} = useGetAppointments();
  
   //calculcate stats form data
  const stats = {
    totalDoctors: doctors.length,
    activeDoctors: doctors.filter((doc) => doc.isActive).length,
    totalAppointments: appointments.length,
    completedAppointments: appointments.filter((app) =>  app.status === "COMPLETED").length,
  };

  if (doctorLoading || appointmentsLoading) return <LoadingUI/>;

  return (
    <div className="min-h-screen bg-background">
      <Navbar/>
      <div className="max-w-7xl mx-auto px-6 py-1 pt-20">
        {/* Admin welcome */}
        <div className="mb-4 flex items-center justify-between bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-3xl p-5 border border-primary/20">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-xs font-medium text-primary">Admin Dashboard</span>
            </div>
            <div>
              <h1 className="text-xl font-bold mb-1">
                Welcome back, {user?.firstName || "Admin"}!
              </h1>
              <p className="text-muted-foreground">
                Manage doctors, oversee appointments, and monitor your dental practice performance.
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
              <Settings className="w-10 h-10 text-primary" />
            </div>
          </div>
        </div>
        <AdminStats
          totalDoctors={stats.totalDoctors}
          activeDoctors={stats.activeDoctors}
          totalAppointments={stats.totalAppointments}
          completedAppointments={stats.completedAppointments}
        />

        <DoctorsManagement />
      </div>
    </div>
  )
}

export default AdminDashboardClient
