import React from "react";
import { useAvailableDoctors } from "../hooks/use-doctors";
import LoadingUI from "../LoadingUI";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { MapPin, Phone, Star } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface DoctorSelectionStepProps {
  selectedDentistId: string | null;
  onSelectDentist: (dentistId: string) => void;
  onContinue: () => void;
}

function DoctorSelectionStep({
  selectedDentistId,
  onSelectDentist,
  onContinue,
}: DoctorSelectionStepProps) {
  const { data: dentists = [], isLoading } = useAvailableDoctors();

  if (isLoading) return <LoadingUI />;

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Choose Your Dentist</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dentists.map((dentist) => (
          <Card
            key={dentist.id}
            className={`cursor-pointer transition-all hover:shadow-lg ${
              selectedDentistId === dentist.id ? "ring-2 ring-primary" : ""
            }`}
            onClick={() => onSelectDentist(dentist.id)}
          >
            <CardHeader className="pb-4">
              <div className="flex items-start gap-4">
                <Image
                  src={dentist.imageUrl!}
                  alt={dentist.name}
                  width={64}
                  height={64}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <CardTitle className="text-md">{dentist.name}</CardTitle>
                  <CardDescription className="text-primary text-sm font-medium">
                    {dentist.speciality || "General Dentistry"}
                  </CardDescription>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-medium">5</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({dentist.appointmentCount} appointments)
                    </span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>DentWise</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>{dentist.phone}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {dentist.bio ||
                  "Experienced dental professional providing quality care."}
              </p>
              <Badge variant="secondary">Licensed Professional</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
      {selectedDentistId && (
        <div className="flex justify-end">
          <Button className="font-bold" onClick={onContinue}>
            Continue to Time Selection
          </Button>
        </div>
      )}
    </div>
  );
}

export default DoctorSelectionStep;
