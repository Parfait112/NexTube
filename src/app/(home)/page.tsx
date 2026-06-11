
export const dynamic = 'force-dynamic';

import { HydrateClient , trpc } from "@/trpc/server"
import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { PageClient } from "./client"
import { HomeView } from "@/modules/home/views/home-view";

interface PageProps{
  searchParams: Promise<{
    categoryId?: string
  }>
}


const  Page = async({searchParams}: PageProps) => {
  const { categoryId } = await searchParams;

  void trpc.categories.getMany.prefetch()
  
    return (
      <HydrateClient >
        <HomeView categoryId={categoryId} />
      </HydrateClient>
    )
}

export default  Page