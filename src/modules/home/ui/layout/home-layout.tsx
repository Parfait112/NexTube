import { SidebarProvider } from "@/components/ui/sidebar";
import { HomeNavBar } from "../../components/home-navbar";
import { HomeSidebar } from "../../components/home-sidebar";


interface LayoutProps {
    children: React.ReactNode;
};

export function homeLayout({ children }: LayoutProps) {
    return (
        <div>
            <SidebarProvider>
                <div className="w-full">
                    <HomeNavBar />
                </div>
                <div className="flex min-h-screen pt-16">
                    <HomeSidebar/>            
                    <main className="flex-1 overflow-y-auto">
                        {children}
                    </main> 
                </div>
            </SidebarProvider>
           
        </div>
    )
}

