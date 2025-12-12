import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateAvatar(name: string, gender: "MALE" | "FEMALE") {
  const username = name.replace(/\s+/g, "").toLowerCase();
  const base = "https://avatar.iran.liara.run/public";
  if (gender === "FEMALE") return `${base}/girl?username=${username}`;
  // default to boy
  return `${base}/boy?username=${username}`;
}


// Sri Lankan phone formatting (Format: 0XX XXX XXXX) (i got this fucntion from AI)
export const formatPhoneNumber = (value: string) => {
  if (!value) return value;

  // Remove all non-digit characters
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;

  // 1. Initial typing (e.g., "077")
  if (phoneNumberLength < 4) return phoneNumber;

  // 2. Operator code + first part (e.g., "077 123")
  if (phoneNumberLength < 7) {
    return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3)}`;
  }

  // 3. Full number (e.g., "077 123 4567")
  // Slices up to 10 digits to match SL standard length
  return `${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6, 10)}`;
};