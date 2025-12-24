# 🦷 TMdent

![License](https://img.shields.io/badge/license-ISC-blue.svg)
![Node](https://img.shields.io/badge/node-20.x-green.svg)
![Stack](https://img.shields.io/badge/stack-Next.js%20%7C%20Prisma%20%7C%20Postgres-blueviolet.svg)

# [🔗 🌐LIVE DEMO](https://tmdent.vercel.app/)

# [🔗 📁DOCUMENTATION](https://drive.google.com/drive/folders/1vsCafWQJlXIo5YepZ10h_UxsR92F5P2V?usp=sharing)

**TMdent** is a modern dental appointment and patient experience platform built with **Next.js**. It lets patients discover dentists, book and manage appointments, receive email confirmations, and access a personalized dashboard, while admins can manage doctors and appointments through a dedicated interface.

Authentication is handled via **Clerk**, data is persisted in **PostgreSQL** using **Prisma**, and the UI is powered by a component-driven design with TailwindCSS-style utilities and Radix UI primitives. The app is optimized for deployment on **Vercel**.

## 🚀 Features

- **Patient Dashboard**: Personalized dashboard with welcome section, main actions, activity overview, and next appointment insights.
- **Online Appointment Booking**: Step-by-step booking flow (choose dentist, time, and appointment type) with validation and feedback.
- **Doctor Management (Admin)**: Admin-only dashboard for managing doctors, availability, and appointment statuses.
- **Upcoming Appointments**: Patients can view and track their upcoming bookings directly from the app.
- **Email Notifications**: Automated appointment confirmation emails using Nodemailer + React Email templates.
- **Secure Authentication**: User authentication and session management via Clerk.
- **Voice / AI Integration (Vapi)**: Integration with `@vapi-ai/web` for potential voice/AI-assisted experiences.
- **Responsive Design**: Layout and components designed to work smoothly across desktop and mobile.

## 🛠️ Tech Stack

### Backend & Data Layer

- **Next.js (App Router)**: Full-stack React framework for routing, server components, and API routes.
- **Prisma**: Type-safe ORM for database access.
- **PostgreSQL**: Primary relational database for users, doctors, and appointments.
- **Nodemailer**: Email transport for sending transactional emails.
- **React Email**: Rich, reusable email templates for appointment confirmations.

### Frontend & UI

- **React (via Next.js)**: Component-based UI.
- **TailwindCSS-style utilities**: Utility-first styling (via Tailwind v4 + `tailwind-merge`).
- **Radix UI**: Accessible primitives for dialogs, dropdowns, accordions, tooltips, etc.
- **Lucide Icons**: Icon set for a modern, clean interface.
- **Sonner**: Toast notifications for feedback and errors.

### Authentication, State & Other

- **Clerk**: Authentication and user management (`@clerk/nextjs`).
- **TanStack Query**: Data fetching, caching, and mutations on the client.
- **Zod** & **React Hook Form**: Validation and form handling.
- **Vapi (`@vapi-ai/web`)**: Voice/AI integration client.

## 📂 Project Structure

```bash
tmdent/
├── prisma/
│   └── schema.prisma          # Prisma data model (User, Doctor, Appointment)
├── public/                    # Static assets
├── src/
│   ├── app/
│   │   ├── page.tsx           # Landing page (marketing / hero / pricing)
│   │   ├── layout.tsx         # Root layout and providers
│   │   ├── dashboard/         # Authenticated user dashboard
│   │   │   └── page.tsx
│   │   ├── appointments/      # Appointment booking flow
│   │   │   └── page.tsx
│   │   ├── admin/             # Admin-only dashboard (doctor & appointment management)
│   │   │   └── page.tsx
│   │   ├── pro/               # Pro-related pages (future/extended features)
│   │   ├── voice/             # Voice/AI related UI (via Vapi)
│   │   └── api/
│   │       └── send-appointment-email/
│   │           └── route.ts   # API route for sending confirmation emails
│   ├── components/
│   │   ├── landing/           # Hero, pricing, how-it-works, CTA, etc.
│   │   ├── dashboard/         # Dashboard widgets (Welcome, ActivityOverview, etc.)
│   │   ├── appointments/      # Booking steps, modals, doctor cards, etc.
│   │   ├── admin/             # Admin stats, dialogs, doctor management UI
│   │   ├── emails/            # React Email templates
│   │   ├── hooks/             # Custom hooks (appointments, doctors, mobile, etc.)
│   │   ├── providers/         # TanStack Query provider and other context providers
│   │   ├── ui/                # Reusable UI primitives (buttons, dialogs, forms, etc.)
│   │   └── Navbar.tsx         # Global navigation
│   ├── lib/
│   │   ├── prisma.ts          # Prisma client setup
│   │   ├── nodemailer.ts      # Nodemailer transporter configuration
│   │   ├── vapi.ts            # Vapi client setup
│   │   ├── utils.ts           # Helpers (phone formatting, appointment types, etc.)
│   │   └── actions/           # Server actions for appointments, users, etc.
│   └── prisma/                # Generated Prisma client (from schema)
├── next.config.ts             # Next.js configuration (images, etc.)
├── package.json               # Project scripts & dependencies
└── README.md                  # Project documentation
```

## ⚙️ Installation & Setup

### Prerequisites

- **Node.js** `>= 20.x`
- **PostgreSQL** instance (local or hosted)
- **Clerk** project (for authentication)
- SMTP credentials for sending emails (any SMTP provider)

### 1. Clone the repository

```bash
git clone https://github.com/ItsME-TM/tmdent.git
cd tmdent
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the project root. Adjust names to match your actual config, but it will typically look like this:

```env
# App
NEXT_PUBLIC_APP_URL=https://tmdent.vercel.app
NEXT_PUBLIC_VAPI_ASSISTANT_ID=your_vapi_id
NEXT_PUBLIC_VAPI_API_KEY=your_vapi_public_key

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Database (PostgreSQL)
DATABASE_URL=postgresql://user:password@host:5432/tmdent

# Admin
ADMIN_EMAIL=admin@example.com

# SMTP / Email
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
SMTP_FROM="TMdent <no-reply@tmdent.com>"
```

Update values according to your environment (database host, Clerk keys, SMTP provider, etc.).

### 4. Prisma Setup & Database Migration

Generate the Prisma client and apply your schema to the database:

```bash
npx prisma generate
```

If you add migrations later, follow your usual Prisma migration workflow (e.g. `npx prisma migrate dev`).

### 5. Run the Development Server

```bash
npm run dev
```

The app will be available at: `http://localhost:3000`.

## 🚀 Deployment

TMdent is optimized for deployment on **Vercel**:

- **Framework**: Next.js App Router with API routes and server components.
- **Database**: Point `DATABASE_URL` to your production PostgreSQL instance.
- **Env Vars**: Configure all environment variables (Clerk, database, SMTP, Vapi) in the Vercel project settings.
- **Prisma**: Ensure migrations are applied in your deployment workflow (e.g. via `prisma migrate deploy` in a CI/CD step or Vercel build step, if configured).

Once deployed, your production URL should match `NEXT_PUBLIC_APP_URL`.

## 📡 Key Endpoints & Flows

This project primarily uses **Next.js App Router** with **server actions** and a small number of API routes.

### API Route: Appointment Confirmation Email

- **Method**: `POST`
- **Endpoint**: `/api/send-appointment-email`
- **Description**: Sends an appointment confirmation email to the patient.
- **Body** (JSON):

```json
{
  "userEmail": "string",
  "doctorName": "string",
  "appointmentDate": "string",
  "appointmentTime": "string",
  "appointmentType": "string",
  "duration": "string",
  "price": "string"
}
```

If required fields are missing, the route responds with `400`. On success, it sends an email using Nodemailer and returns `200`.

### Appointment Booking Flow

- **Page**: `/appointments`
- **Steps**:
  - Select a dentist.
  - Select date, time, and appointment type.
  - Confirm booking and trigger confirmation email.
- **Tech**: React components, TanStack Query hooks (`useBookAppointment`, `useBookedTimeSlots`, etc.), and server actions in `lib/actions/appointments`.

### Admin Dashboard

- **Page**: `/admin`
- **Access**: Restricted to users whose email matches `ADMIN_EMAIL`.
- **Features**: Manage doctors and appointment statuses, view stats and recent bookings.

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`.
3. Commit your changes: `git commit -m "feat: add YourFeature"`.
4. Push to your branch: `git push origin feature/YourFeature`.
5. Open a Pull Request.

Please keep changes focused and include any relevant updates to documentation.

## 📄 License

This project is licensed under the **ISC License**.
