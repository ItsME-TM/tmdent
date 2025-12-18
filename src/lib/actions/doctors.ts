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
        imageUrl: generateAvatar(input.name),
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

interface UpdateDoctorInput extends Partial<createDoctorInput>{
  id: string;
}


export async function updateDoctor(input: UpdateDoctorInput){
  try{
    if(!input.name || !input.email) throw new Error("Name and Email are required");

    const currentDoctor = await prisma.doctor.findUnique({
      where: {id: input.id},
      select: {email: true},
    })

    if(!currentDoctor) throw new Error("Doctor not found");
    //if email is being updated, check for uniqueness
    if(input.email !== currentDoctor.email){
      const existingDoctor = await prisma.doctor.findUnique({
        where: {email: input.email},
      });
      if(existingDoctor){
        throw new Error("A doctor with this email already exists");
      }
    }

    const doctor = await prisma.doctor.update({
      where: {id: input.id},
      data: {
        name: input.name,
        email: input.email,
        phone: input.phone,
        speciality: input.speciality,
        gender: input.gender,
        isActive: input.isActive,
        imageUrl: generateAvatar(input.name),
      },
    });
    return doctor;

  }catch(error){
    console.error("Error updating doctor:", error);
    throw new Error("Failed to update doctor");
  }
}

