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

function DoctorsManagement() {
  const { data: doctors = [] } = useGetDoctors();
  const [isAddDialogOpen, setIsAddDialogOpen] = React.useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = React.useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleEditDoctor = () => {};

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
            className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90
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
                className="flex items-center justify-between p-4 bg-muted/30 rounded-xl
                            border border-border/50"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={doctor.imageUrl}
                    alt={doctor.name}
                    width={50}
                    height={50}
                    className="size-12 rounded-full object-cover ring-2 ring-background"
                  />
                  <div>
                    <div className="font-semibold">{doctor.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {doctor.speciality}
                      <span className="ml-2 px-2 py-0.5 bg-muted rounded text-xs">
                        {doctor.gender === "MALE" ? "Male" : "Female"}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Mail className="h-3 w-3" />
                        {doctor.email}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Phone className="h-3 w-3" />
                        {doctor.phone}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-center">
                    <div className="font-semibold text-primary">
                      {doctor.appointmentCount}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Appointments
                    </div>
                  </div>
                  {doctor.isActive ? (
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                      Active
                    </Badge>
                  ) : (
                    <Badge variant="secondary">Inactive</Badge>
                  )}
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 px-3"
                    onClick={() => handleEditDoctor()}
                  >
                    <Edit className="size-4 mr-1" />
                    Edit
                  </Button>
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
    </>
  );
}

export default DoctorsManagement;
