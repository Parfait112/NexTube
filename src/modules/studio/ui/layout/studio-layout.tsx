import { SidebarProvider } from "@/components/ui/sidebar";
import { StudioNavBar } from "../../components/studio-navbar";
import { StudioSidebar } from "../../components/studio-sidebar";


interface LayoutProps {
    children: React.ReactNode;
};

export function StudioLayout({ children }: LayoutProps) {
    return (
        <SidebarProvider>
            <div className="flex flex-col w-full">
                <StudioNavBar/>
                <div className="flex flex-1 min-h-screen pt-16">
                    <StudioSidebar/>            
                    <main className="flex-1 overflow-y-auto">
                        {children}
                    </main> 
                </div>
            </div>
        </SidebarProvider>
    )
}

