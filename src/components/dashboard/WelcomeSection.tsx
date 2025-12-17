import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";


export default async function WelcomeSection() {
  const user = await currentUser();

  return (
    <div
      className="relative z-10 flex items-center justify-between bg-gradient-to-br 
    from-primary/10 via-primary/5 to-background rounded-3xl p-6 border border-primary/20 mb-4 overflow-hidden"
    >
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
          <div className="size-2 bg-primary rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-primary">
            Online & Ready
          </span>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-2" suppressHydrationWarning>
            Good{" "}
            {new Date().getHours() < 12
              ? "morning"
              : new Date().getHours() < 18
              ? "afternoon"
              : "evening"}
            , {user?.firstName}!
          </h1>
          <p className="text-muted-foreground text-sm">
            Your personal AI dental assistant is ready to help you maintain
            perfect oral health.
          </p>
        </div>
      </div>

      <div className="lg:flex hidden items-center justify-center size-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full ">
        <Image
          src="/logo.png"
          alt="DentWise"
          width={64}
          height={64}
          className="w-10 h-10"
        />
      </div>
    </div>
  );
}
