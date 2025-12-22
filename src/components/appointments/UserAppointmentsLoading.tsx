import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function UserAppointmentCardSkeleton() {
  return (
    <Card className="bg-card/60 border border-border/60 shadow-sm">
      <CardContent className="p-5 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-3 w-24" />
          </div>
        </div>

        <div className="flex items-center gap-3 text-sm">
          <Skeleton className="h-4 w-4 rounded" />
          <Skeleton className="h-4 w-32" />
        </div>

        <div className="flex items-center gap-3 text-sm">
          <Skeleton className="h-4 w-4 rounded" />
          <Skeleton className="h-4 w-16" />
        </div>
      </CardContent>
    </Card>
  );
}

function UserAppointmentsLoading() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <UserAppointmentCardSkeleton key={index} />
      ))}
    </div>
  );
}

export default UserAppointmentsLoading;
