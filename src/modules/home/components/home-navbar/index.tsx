import { SidebarTrigger } from "@/components/ui/sidebar"
import Image from "next/image"
import Link from "next/link"
import { SearcheInput } from "./searche-input"
import { AuthButton } from "@/modules/auth/ui/components/auth-button"

export const HomeNavBar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 h-16 bg-white flex items-center px-2 pr-5 z-50">
            <div className="flex items-center gap-4 w-full">
                {/* Menu and Triggers  */}
                <div className="flex items-center shrink-0">
                    <SidebarTrigger />
                    <Link href="/">
                        <div className="p-4 flex items-center gap-1">
                            <Image src="/images.png" alt="Logo" height={42} width={42} />
                            <p className="text-xl font-semibold tracking-tight">NewTube</p>
                        </div>
                    </Link>
                </div>

                {/* Search Bar */}
                <div className="flex-1 flex justify-center max-w-180 mx-auto">
                    <SearcheInput/>
                </div>

                {/* signout Button  */}
                <div className="shrink-0 items-center flex gap-4">
                    <AuthButton />
                </div>
            </div>
        </nav>
    )
}