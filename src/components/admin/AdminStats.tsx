import { Card, CardContent } from "@/components/ui/card";
import { Users, Calendar, UserCheck, Clock } from "lucide-react";

interface AdminStatsProps {
  totalDoctors: number;
  activeDoctors: number;
  totalAppointments: number;
  completedAppointments: number;
}

function AdminStats({
  activeDoctors,
  totalDoctors,
  completedAppointments,
  totalAppointments,
}: AdminStatsProps) {
  return (
    <div className="grid md:grid-cols-4 gap-4 mb-4">
      <Card className="border-2 hover:border-primary/30 transition-all duration-300">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
              <Users className="size-4" />
            </div>
            <div>
              <div className="text-lg font-bold">{totalDoctors}</div>
              <div className="text-sm text-muted-foreground">Total Doctors</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 hover:border-primary/30 transition-all duration-300">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
              <UserCheck className="size-4" />
            </div>
            <div>
              <div className="text-lg font-bold">{activeDoctors}</div>
              <div className="text-sm text-muted-foreground">
                Active Doctors
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 hover:border-primary/30 transition-all duration-300">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
              <Calendar className="size-4" />
            </div>
            <div>
              <div className="text-lg font-bold">{totalAppointments}</div>
              <div className="text-sm text-muted-foreground">
                Total Appointments
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 hover:border-primary/30 transition-all duration-300">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center">
              <Clock className="size-4" />
            </div>
            <div>
              <div className="text-lg font-bold">{completedAppointments}</div>
              <div className="text-sm text-muted-foreground">
                Completed Appointments
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default AdminStats;
