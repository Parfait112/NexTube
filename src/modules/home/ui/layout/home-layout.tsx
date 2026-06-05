import { SidebarProvider } from "@/components/ui/sidebar";
import { HomeNavBar } from "../../components/home-navbar";
import { HomeSidebar } from "../../components/home-sidebar";


interface LayoutProps {
    children: React.ReactNode;
};

export function homeLayout({ children }: LayoutProps) {
    return (
        <SidebarProvider>
            <div className="flex flex-col w-full">
                <HomeNavBar />
                <div className="flex flex-1 min-h-screen pt-16">
                    <HomeSidebar/>            
                    <main className="flex-1 overflow-y-auto">
                        {children}
                    </main> 
                </div>
            </div>
        </SidebarProvider>
    )
}

