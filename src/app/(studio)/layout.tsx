import { StudioLayout } from "@/modules/studio/ui/layout/studio-layout";
interface LayoutProps{
    children: React.ReactNode;
};

function layout({children}: LayoutProps) {
  return (
    <div>
      <StudioLayout>
        {children}  
      </StudioLayout>
    </div>
  )
}

export default layout