import { format } from "date-fns";
import React from "react";
import UserAppointmentsLoading from "./UserAppointmentsLoading";

interface UsersUpcommingAppointmentsProps {
  userAppointments: Array<{
    id: string;
    doctorName: string;
    doctorImageUrl: string;
    reason: string;
    date: string;
    time: string;
  }>;
  userAppointmentsLoading: boolean;
}
function UsersUpcommingAppointments({
  userAppointments,
  userAppointmentsLoading,
}: UsersUpcommingAppointmentsProps) {
  if (userAppointmentsLoading)
    return (
      <div className="mb-8 max-w-7xl mx-auto px-6 py-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4">
            Your Upcoming Appointments
          </h2>
          <UserAppointmentsLoading />
        </div>
      </div>
    );
  return (
    <div className="mb-8 max-w-7xl mx-auto px-6 py-8">
      <h2 className="text-xl font-semibold mb-4">Your Upcoming Appointments</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {userAppointments.map((appointment) => (
          <div
            key={appointment.id}
            className="bg-card border rounded-lg p-4 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="size-10 bg-primary/10 rounded-full flex items-center justify-center">
                <img
                  src={appointment.doctorImageUrl}
                  alt={appointment.doctorName}
                  className="size-10 rounded-full"
                />
              </div>
              <div>
                <p className="font-medium text-sm">{appointment.doctorName}</p>
                <p className="text-muted-foreground text-xs">
                  {appointment.reason}
                </p>
              </div>
            </div>
            <div className="space-y-1 text-sm">
              <p className="text-muted-foreground">
                📅 {format(new Date(appointment.date), "MMM d, yyyy")}
              </p>
              <p className="text-muted-foreground">🕐 {appointment.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersUpcommingAppointments;
