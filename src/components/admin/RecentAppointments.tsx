import React from "react";
import {
  useGetAppointments,
  useUpdateAppointmentStatus,
} from "../hooks/use-appointment";
import { Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

function RecentAppointments() {
  const { data: appointments = [] } = useGetAppointments();
  const updateAppointmentMutation = useUpdateAppointmentStatus();

  const handleToggleAppointmentStatus = (appointmentId: string) => {
    const appointment = appointments.find((ap) => ap.id === appointmentId);
    if (!appointment) return;

    const newStatus =
      appointment.status === "CONFIRMED" ? "COMPLETED" : "CONFIRMED";

    updateAppointmentMutation.mutate({ id: appointmentId, status: newStatus });
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "CONFIRMED":
        return (
          <Badge className="bg-blue-200 text-blue-800 hover:bg-blue-100">
            Confirmed
          </Badge>
        );
      case "COMPLETED":
        return (
          <Badge className="bg-green-200 text-green-800 hover:bg-green-100">
            Confirmed
          </Badge>
        );
      default:
        return (
          <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-100">
            {status}
          </Badge>
        );
    }
    return <Badge className="secondary">{status}</Badge>;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          Recent Appointments
        </CardTitle>
        <CardDescription>
          Monitor and manage all patient appointments
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Patient</TableHead>
                <TableHead>Doctor</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {appointments.map((appointment) => (
                <TableRow key={appointment.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">
                        {appointment.patientName}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {appointment.patientEmail}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="font-medium">
                    {appointment.doctorName}
                  </TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium">
                        {new Date(appointment.date).toLocaleDateString()}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {appointment.time}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{appointment.reason}</TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() =>
                        handleToggleAppointmentStatus(appointment.id)
                      }
                      className="h-6 px-2"
                    >
                      {getStatusBadge(appointment.status)}
                    </Button>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="text-xs text-muted-foreground">
                      Click status to toggle
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}

export default RecentAppointments;
