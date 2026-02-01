import React, { useState } from "react";
import { useGetDoctors } from "../hooks/use-doctors";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Edit, Mail, Phone, Plus, Stethoscope } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Badge } from "../ui/badge";
import AddDoctorDialog from "./AddDoctorDialog";
import EditDoctorDialog from "./EditDoctorDialog";
import { Doctor } from "@/prisma/client";

function DoctorsManagement() {
  const { data: doctors = [] } = useGetDoctors();
  const [isAddDialogOpen, setIsAddDialogOpen] = React.useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = React.useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const handleEditDoctor = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setIsEditDialogOpen(false);
    setSelectedDoctor(null);
  }

  return (
    <>
      <Card className="mb-8">
        <CardHeader className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Stethoscope className="size-5 text-primary" />
              Doctors Management
            </CardTitle>
            <CardDescription>Manage all the Doctors</CardDescription>
          </div>
          <Button
            onClick={() => setIsAddDialogOpen(true)}
            className="bg-linear-to-r from-primary to-primary/80 hover:from-primary/90
                    hover:to-primary"
          >
            <Plus className="mr-2 size-4" />
            Add Doctor
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-muted/30 rounded-xl
                            border border-border/50 gap-4 sm:gap-0"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <Image
                    src={doctor.imageUrl}
                    alt={doctor.name}
                    width={50}
                    height={50}
                    className="size-12 rounded-full object-cover ring-2 ring-background shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="font-semibold truncate">{doctor.name}</div>
                    <div className="text-sm text-muted-foreground flex items-center flex-wrap gap-1">
                      <span className="truncate">{doctor.speciality}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="px-2 py-0.5 bg-muted rounded text-xs shrink-0">{doctor.gender === "MALE" ? "Male" : "Female"}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-1">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground truncate">
                        <Mail className="h-3 w-3 shrink-0" />
                        <span className="truncate max-w-[120px] sm:max-w-none">{doctor.email}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground shrink-0">
                        <Phone className="h-3 w-3 shrink-0" />
                        {doctor.phone}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-border/50 mt-2 sm:mt-0">
                  <div className="text-center sm:text-right pr-4 border-r border-border/50 sm:border-none sm:pr-0">
                    <div className="font-semibold text-primary">
                      {doctor.appointmentCount}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Visits
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                  {doctor.isActive ? (
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100 shrink-0">
                      Active
                    </Badge>
                  ) : (
                    <Badge variant="secondary" className="shrink-0">Inactive</Badge>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 px-3 shrink-0"
                    onClick={() => handleEditDoctor(doctor)}
                  >
                    <Edit className="size-4 mr-1" />
                    Edit
                  </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <AddDoctorDialog
        isOpen={isAddDialogOpen}
        onClose={() => setIsAddDialogOpen(false)}
      />

      <EditDoctorDialog
        isOpen={isEditDialogOpen}
        onClose={handleCloseEditDialog}
        doctor={selectedDoctor}
        key={selectedDoctor?.id}
      />
    </>
  );
}

export default DoctorsManagement;
