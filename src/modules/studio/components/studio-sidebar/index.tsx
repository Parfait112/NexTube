"use client"

import { Sidebar, SidebarContent, SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"

import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { LogOutIcon, VideoIcon } from "lucide-react"
import { usePathname } from "next/navigation"
import { StudioSidebarHeader } from "./studio-sidebar-header"

export const StudioSidebar = () => {
    const pathName = usePathname();

    return (
        <Sidebar className="pt-16 z-40 " collapsible="icon">
            <SidebarContent className="bg-background">
              <SidebarGroup>
                <SidebarMenu>
                    <StudioSidebarHeader />
                    <SidebarMenuItem>
                        <SidebarMenuButton isActive={pathName === "/studio"} tooltip="Content" >
                            <Link href="/studio" className="flex items-center gap-10">
                                <VideoIcon className="size-5" />
                                <span className="text-sm">Content</span>
                            </Link>
                        </SidebarMenuButton>
                        <Separator/>
                        <SidebarMenuButton tooltip="Exit studio" >
                            <Link href="/" className="flex items-center gap-10">
                                <LogOutIcon className="size-5" />
                                <span className="text-sm">Exit Studio</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}