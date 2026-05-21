import { Sidebar, SidebarContent } from "@/components/ui/sidebar"
import { MainSection } from "./main-section"
import { Separator } from "@/components/ui/separator"
import { PersonSection } from "./person-section"

export const HomeSidebar = () => {
    return (
        <Sidebar className="pt-16 z-40 boder-none" collapsible="icon">
            <SidebarContent className="bg-background">
              <MainSection/>  
              <Separator />
              <PersonSection />
            </SidebarContent>
        </Sidebar>
    )
}