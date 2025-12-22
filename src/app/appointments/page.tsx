"use client";
import BookingConfirmationStep from "@/components/appointments/BookingConfirmationStep";
import DoctorSelectionStep from "@/components/appointments/DoctorSelectionStep";
import ProgressSteps from "@/components/appointments/ProgressSteps";
import TimeSelectionStep from "@/components/appointments/TimeSelectionStep";
import UsersUpcommingAppointments from "@/components/appointments/UsersUpcommingAppointments";
import {
  useBookAppointment,
  useUserAppointments,
} from "@/components/hooks/use-appointment";
import Navbar from "@/components/Navbar";
import { APPOINTMENT_TYPES } from "@/lib/utils";
import { format } from "date-fns";
import React, { useState } from "react";
import { toast } from "sonner";

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
  const [bookedAppointment, setBookedAppointment] = useState<any>(null);
  const bookAppointmentMutation = useBookAppointment();
  const { data: userAppointments = [], isLoading: userAppointmentsLoading } =
    useUserAppointments();

  const handleSelectDentist = (doctorId: string) => {
    setSelectedDentistId(doctorId);

    //clear subsequent selections
    setSelectedDate("");
    setSelectedTime("");
    setSelectedType("");
  };

  const handleBookAppointment = async () => {
    if (!selectedDentistId || !selectedDate || !selectedTime) {
      toast.error(
        "Please complete all selections before confirming the appointment."
      );
      return;
    }
    const appointmentType = APPOINTMENT_TYPES.find(
      (type) => type.id === selectedType
    );

    // derive duration in minutes from the selected appointment type (e.g. "60 min" -> 60)
    const durationInMinutes = appointmentType?.duration
      ? parseInt(appointmentType.duration)
      : undefined;

    bookAppointmentMutation.mutate(
      {
        doctorId: selectedDentistId,
        date: selectedDate,
        time: selectedTime,
        reason: appointmentType?.name,
        duration: durationInMinutes,
      },
      {
        onSuccess: async (appointment) => {
          setBookedAppointment(appointment);

          setShowConfirmation(true);

          setSelectedDentistId(null);
          setSelectedDate("");
          setSelectedTime("");
          setSelectedType("");
          setCurrentStep(1);
        },
        onError: (error) =>
          toast.error(`Failed to book appointemnt: ${error.message}`),
      }
    );
  };

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-8 pt-20">
        {/* header */}
        <div className="mb-4">
          <h1 className="text-3xl font-bold mb-2">Book an Appointment</h1>
          <p className="text-muted-foreground text-sm mb-4">
            Find and book with verified dentist in your area
          </p>
        </div>

        {/* Step */}
        <ProgressSteps currentStep={currentStep} />

        {currentStep === 1 && (
          <DoctorSelectionStep
            selectedDentistId={selectedDentistId}
            onContinue={() => setCurrentStep(2)}
            onSelectDentist={handleSelectDentist}
          />
        )}

        {currentStep === 2 && selectedDentistId && (
          <TimeSelectionStep
            selectedDentistId={selectedDentistId}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            selectedType={selectedType}
            onBack={() => setCurrentStep(1)}
            onContinue={() => setCurrentStep(3)}
            onDateChange={setSelectedDate}
            onTimeChange={setSelectedTime}
            onTypeChange={setSelectedType}
          />
        )}

        {currentStep === 3 && selectedDentistId && (
          <BookingConfirmationStep
            selectedDentistId={selectedDentistId}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            selectedType={selectedType}
            isBooking={bookAppointmentMutation.isPending}
            onBack={() => setCurrentStep(2)}
            onModify={() => setCurrentStep(2)}
            onConfirm={handleBookAppointment}
          />
        )}
      </div>
      {/* shows user's existing appointments */}
      {(currentStep === 1) && (userAppointmentsLoading || userAppointments.length > 0) && (
        <UsersUpcommingAppointments
          userAppointments={userAppointments}
          userAppointmentsLoading={userAppointmentsLoading}
        />
      )}
    </>
  );
}

export default page;
