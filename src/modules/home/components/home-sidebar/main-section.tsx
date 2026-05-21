"use client"
import { url } from "inspector"
import { FlameIcon, HomeIcon, PlaySquare } from "lucide-react"
import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import Link from "next/link"
import { useAuth, useClerk } from "@clerk/nextjs"

 

const Items = [
    {
        title: "Home",
        url: "/",
        icon: HomeIcon
    },
    {
        title: "Subscribtions",
        url: "/feed/subscritions",
        icon: PlaySquare,
        auth: true,
    },
    {
        title: "Trending",
        url: "/feed/trending",
        icon: FlameIcon
    }
]

export  const MainSection = () =>{
    const { isSignedIn } = useAuth();
    const clerk = useClerk();
    return (
        <SidebarGroup>
            <SidebarGroupContent>
                <SidebarMenu>
                    {Items.map((item)=>(
                        <SidebarMenuItem key={item.title} >
                            <SidebarMenuButton tooltip={item.title} isActive={false} onClick={(e)=>{
                                if(!isSignedIn && item.auth){
                                    e.preventDefault();
                                    return clerk.openSignIn();
                                }
                            }}>
                                <Link href={item.url} className="flex items-center gap-4 ">
                                    <item.icon/>
                                    <span className="text-sm">{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
    )
}