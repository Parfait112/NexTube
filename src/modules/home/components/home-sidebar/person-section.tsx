"use client"
import { url } from "inspector"
import {  HistoryIcon, ListVideoIcon, ThumbsUpIcon } from "lucide-react"
import { SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import Link from "next/link"
import { useAuth, useClerk } from "@clerk/nextjs"

 

const Items = [
    {
        title: "History",
        url: "/playslist/history",
        icon: HistoryIcon,
        auth: true
    },
    {
        title: "Liked videos",
        url: "/playslist/liked",
        icon: ThumbsUpIcon,
        auth: true,
    },
    {
        title: "All Playlist",
        url: "/playslist",
        icon: ListVideoIcon,
        auth: true
    }
]

export  const PersonSection = () =>{
    const {isSignedIn} = useAuth();
    const clerk = useClerk();
    
    return (
        <SidebarGroup>
            <SidebarGroupLabel>you</SidebarGroupLabel>
            <SidebarGroupContent>
                <SidebarMenu>
                    {Items.map((item)=>(
                        <SidebarMenuItem key={item.title} >
                            <SidebarMenuButton tooltip={item.title} isActive={false} onClick={(e)=>{
                                if (!isSignedIn && item.auth) {
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