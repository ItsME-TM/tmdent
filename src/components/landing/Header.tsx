import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { SignInButton, SignUpButton } from '@clerk/nextjs'
import { Button } from '../ui/button'

function Header() {
  return (
    <nav className="fixed top-0 right-0 left-0 z-50 px-6 py-2 border-b border-border/50 bg-background/80
    backdrop-blur-md h-14">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
            <Link href="/" className="flex items-center gap-2">
                <Image src={"/logo.png"} alt="TMdent Logo" width={32} height={32} className="w-11"/>
                <span className="font-semibold text-lg">TMdent</span>
            </Link>

            <div className="hidden md:flex items-center gap-8">
                <a href="#how-it-works" className="text-muted-foreground hover:text-foreground">
                    How it works
                </a>
                <a href="#pricing" className="text-muted-foreground hover:text-foreground">
                    Pricing
                </a>
                <a href="#about" className="text-muted-foreground hover:text-foreground">
                    About
                </a>
            </div>

            <div className="flex items-center gap-3">
                <SignInButton mode="modal">
                    <Button variant={"ghost"} size={"sm"}>
                        Login
                    </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                    <Button size={"sm"}>
                        SignUp
                    </Button>
                </SignUpButton>
            </div>
        </div>
    </nav>
  )
}

export default Header
