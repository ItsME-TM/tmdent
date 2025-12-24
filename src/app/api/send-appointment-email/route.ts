import AppointmentConfirmationEmail from "@/components/emails/AppointmentConfirmationEmail";
import transporter from "@/lib/nodemailer";
import { render } from "@react-email/render";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      userEmail,
      doctorName,
      appointmentDate,
      appointmentTime,
      appointmentType,
      duration,
      price,
    } = body;

    if (!userEmail || !doctorName || !appointmentDate || !appointmentTime) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const html = await render(
      AppointmentConfirmationEmail({
        doctorName,
        appointmentDate,
        appointmentTime,
        appointmentType,
        duration,
        price,
      })
    );

    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || "TMdent <no-reply@TMdent.com>",
      to: [userEmail],
      subject: "Appointment Confirmation - TMdent",
      html,
    });

    return NextResponse.json(
      { message: "Appointment email sent successfully", info },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending appointment email:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
