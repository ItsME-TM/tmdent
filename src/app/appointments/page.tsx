"use client";
import DoctorSelectionStep from "@/components/appointments/DoctorSelectionStep";
import ProgressSteps from "@/components/appointments/ProgressSteps";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

function page() {
  const [selectedDentistId, setSelectedDentistId] = useState<string | null>(
    null
  );
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [bookAppointmentError, setBookAppointmentError] = useState<any>(null);

  const handleSelectDentist = (doctorId: string) => {
    setSelectedDentistId(doctorId);

    //clear subsequent selections
    setSelectedDate("");
    setSelectedTime("");
    setSelectedType("");
  };

  const handleBookAppointment = async () => {};
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-8 pt-20">
        {/* header */}
        <div className="mb-4">
            <h1 className="text-3xl font-bold mb-2">
                Book an Appointment
            </h1>
            <p className="text-muted-foreground text-sm mb-4">
                Find and book with verified dentist in your area
            </p>
        </div>
        
        {/* Step */}
        <ProgressSteps currentStep={currentStep}/>

        {currentStep === 1 && (
            <DoctorSelectionStep
                selectedDentistId={selectedDentistId}
                onContinue={() => setCurrentStep(2)}
                onSelectDentist={handleSelectDentist}
            />
        )}

      </div>
    </>
  );
}

export default page;
