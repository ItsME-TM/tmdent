"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "../prisma";

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
    return appointments;
  } catch (error) {
    console.error("Error fetching appointments:", error);
    throw new Error("Failed to fetch appointments");
  }
}

export async function getUserAppointmentStats(){
  try{
    const {userId} = await auth();
    if(!userId) throw new Error("Please login to view your appointment stats.");

    const user = await prisma.user.findUnique({ where: { clerkId: userId } });

    if(!user) throw new Error("User not found.");

    //these calls will run in parallel to improve performance
    const [totalCount, completedCount] = await Promise.all([
      prisma.appointment.count({ where: { userId: user.id}}),
      prisma.appointment.count({ where: { userId: user.id, status: "COMPLETED"}}),
    ]);
    return { totalCount, completedCount };

  }catch(error){
    console.error("Error fetching user appointment stats:", error);
    return { totalCount: 0, completedCount: 0 };
  }
}