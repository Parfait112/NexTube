import { homeLayout as HomeLayout } from "@/modules/home/ui/layout/home-layout";

interface LayoutProps{
    children: React.ReactNode;
};

function layout({children}: LayoutProps) {
  return (
    <div>
      <HomeLayout>
        {children}
      </HomeLayout>
    </div>
  )
}

export default layout