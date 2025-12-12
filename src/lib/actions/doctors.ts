"use server";

import { Gender } from "@/prisma/enums";
import prisma from "../prisma";
import { generateAvatar } from "../utils";
import { revalidatePath } from "next/cache";

export async function getDoctors() {
  try {
    const doctors = await prisma.doctor.findMany({
      include: {
        _count: {
          select: { appointments: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });
    return doctors.map((doctor) => ({
      ...doctor,
      appointmentCount: doctor._count.appointments,
    }));
  } catch (error) {
    console.error("Error fetching doctors:", error);
    throw new Error("Failed to fetch doctors");
  }
}

interface createDoctorInput {
  name: string;
  email: string;
  phone: string;
  speciality: string;
  gender: Gender;
  isActive: boolean;
  bio?: string;
}
export async function createDoctor(input: createDoctorInput) {
  try {
    if (!input.name || !input.email)
      throw new Error("Name and Email are required");

    const doctor = await prisma.doctor.create({
      data: {
        ...input,
        bio: input.bio ?? "",
        imageUrl: generateAvatar(input.name, input.gender),
      },
    });
    //here we get rid of the cache for the doctors list page and force it to fetch fresh data
    revalidatePath("/admin");
    return doctor;
  } catch (error: any) {
    console.error("Error creating doctor:", error);
    if(error?.code === "P2002"){
        throw new Error("A doctor with this email already exists");
    }
    throw new Error("Failed to create doctor");
  }
}

