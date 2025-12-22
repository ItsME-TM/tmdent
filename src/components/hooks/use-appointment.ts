"use client";

import { bookAppointment, getAppointments, getBookedTimeSlots, getUserAppointments } from "@/lib/actions/appointments";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
//useMutation for post/put/delete requests
//useQuery for get requests

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

export function useBookAppointment() {
    const queryClient = useQueryClient();

    const result = useMutation({
        mutationFn: bookAppointment,
        onSuccess: (appointment) => {
            //this say getUserAppointments query is outdated and needs to be refetched
            queryClient.invalidateQueries({
                queryKey: ["getUserAppointments"]
            });
        },
        onError: (error) => console.log("Error booking appointment", error),
    });
    return result;
}

export function useUserAppointments() {
    const result = useQuery({
        queryKey: ["getUserAppointments"],
        queryFn: getUserAppointments,
    });
    return result;
}