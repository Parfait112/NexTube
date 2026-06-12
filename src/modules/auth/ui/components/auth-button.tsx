"use client"

import { Button } from "@/components/ui/button"
import { ClapperboardIcon, UserCircleIcon } from "lucide-react"
import { SignInButton, UserButton } from "@clerk/nextjs"
import { Show } from "@clerk/nextjs"

export const AuthButton = () => {
    return (
        <>
            <Show when="signed-out">
                <SignInButton>
                    <Button variant="outline" className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-500/20 rounded-full shadow-none">
                        <UserCircleIcon />
                        Sign In
                    </Button>
                </SignInButton>
            </Show>
            <Show when="signed-in">
                <UserButton>
                    <UserButton.MenuItems>
                        <UserButton.Link
                            label="Studio"
                            href="/studio"
                            labelIcon={<ClapperboardIcon className="size-4" />}
                        />
                    </UserButton.MenuItems>
                </UserButton>
            </Show>
        </>
    )
}
