"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "../prisma";

function transformAppointment(appointment: any) {
  return {
    ...appointment,
    patientName: `${appointment.user.firstName || ""} ${
      appointment.user.lastName || ""
    }`.trim(),
    patientEmail: appointment.user.email,
    doctorName: appointment.doctor.name,
    doctorImageUrl: appointment.doctor.imageUrl || "",
    date: appointment.date.toISOString().split("T")[0],
  };
}

export async function getAppointments() {
  try {
    const appointments = await prisma.appointment.findMany({
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
          },
        },
        doctor: {
          select: {
            name: true,
            imageUrl: true,
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });
    return appointments.map(transformAppointment);
  } catch (error) {
    console.error("Error fetching appointments:", error);
    throw new Error("Failed to fetch appointments");
  }
}

export async function getUserAppointmentStats() {
  try {
    const { userId } = await auth();
    if (!userId)
      throw new Error("Please login to view your appointment stats.");

    const user = await prisma.user.findUnique({ where: { clerkId: userId } });

    if (!user) throw new Error("User not found.");

    //these calls will run in parallel to improve performance
    const [totalCount, completedCount] = await Promise.all([
      prisma.appointment.count({ where: { userId: user.id } }),
      prisma.appointment.count({
        where: { userId: user.id, status: "COMPLETED" },
      }),
    ]);
    return { totalCount, completedCount };
  } catch (error) {
    console.error("Error fetching user appointment stats:", error);
    return { totalCount: 0, completedCount: 0 };
  }
}

export async function getUserAppointments() {
  try {
    const { userId } = await auth();
    if (!userId)
      throw new Error("Please login and view your appointments.");

    const user = await prisma.user.findUnique({ where: { clerkId: userId } });

    if (!user) throw new Error("User not found.");

    const appointments = await prisma.appointment.findMany({
      where: { userId: user.id },
      include: {
        user: { select: { firstName: true, lastName: true, email: true } },
        doctor: { select: { name: true, imageUrl: true } },
      },
      orderBy: { createdAt: "desc" },
    });
    return appointments.map(transformAppointment);
  } catch (error) {
    console.error("Error fetching user appointment stats:", error);
    throw new Error("Failed to fetch user appointment stats.");
  }
}

export async function getBookedTimeSlots(doctorId: string, date: string){
  try{
    const appointments = await prisma.appointment.findMany({
      where: {
        doctorId,
        date: new Date(date),
        status: {
          in: ["CONFIRMED", "COMPLETED"],
        },
      },
      select: { time: true},
    });
    return appointments.map((appointment) => appointment.time);
  }catch(error){
    console.error("Error fetching booked time slots:", error);
    return [];
  }
}

interface BookAppointmentInput{
  doctorId: string;
  date: string;
  time: string;
  reason?: string;
  duration?: number;
}
export async function bookAppointment(input: BookAppointmentInput){
  try{
    const { userId} = await auth();
    if(!userId) throw new Error("Please login to book an appointment.");

    if(!input.doctorId || !input.date || !input.time){
      throw new Error("Missing required appointment details.");
    }

    const user = await prisma.user.findUnique({ where: { clerkId: userId}});
    if(!user) throw new Error("User not found.");

    //create appointment
    const appointment = await prisma.appointment.create({
      data: {
        userId: user.id,
        doctorId: input.doctorId,
        date: new Date(input.date),
        time: input.time,
        reason: input.reason || "General Checkup",
        status: "CONFIRMED",
        duration: input.duration || 30,
      },
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
          },
        },
        doctor:{select: {name: true, imageUrl: true}},
      },
    });
    return transformAppointment(appointment);
  }catch(error: any){
    console.error("Error booking appointment:", error);
    throw new Error(`Failed to book appointment: ${error.message}`);
  }
}