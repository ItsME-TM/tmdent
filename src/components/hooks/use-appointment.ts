"use client";

import { getAppointments, getBookedTimeSlots } from "@/lib/actions/appointments";
import { useQuery } from "@tanstack/react-query";

export function useGetAppointments(){
    const result = useQuery({
        queryKey: ["getAppointments"],
        queryFn: getAppointments,
    });
    return result;
}

export function useBookedtimeSlots(doctorId: string, date: string){
    const result = useQuery({
        queryKey: ["getBookedTimeSlots"],
        queryFn: () => getBookedTimeSlots(doctorId!, date),
        //run this query only if doctorId and date are provided
        enabled: !!doctorId && !!date,
    });
    return result;
}