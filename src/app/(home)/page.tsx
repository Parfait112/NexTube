
export const dynamic = 'force-dynamic';

import { HydrateClient , trpc } from "@/trpc/server"
import { Suspense } from "react"
import { ErrorBoundary } from "react-error-boundary"
import { PageClient } from "./client"


export default function Home() {
  void trpc.categories.getMany.prefetch()
  
    return (
      <HydrateClient >
        <Suspense fallback={<p>Loading...</p>}>
        <ErrorBoundary fallback={<p>Error...</p>}>
          <PageClient />
        </ErrorBoundary>
        </Suspense>
      </HydrateClient>
    )
}
