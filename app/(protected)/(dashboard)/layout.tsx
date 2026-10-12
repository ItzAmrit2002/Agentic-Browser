import { cookies } from "next/headers"

import { AppSidebar, AppSidebarOpenTrigger } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { TooltipProvider } from "@/components/ui/tooltip"

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // Persisted by SidebarProvider so the open/closed state survives reloads.
  const cookieStore = await cookies()
  const defaultOpen = cookieStore.get("sidebar_state")?.value !== "false"

  return (
    <TooltipProvider>
      <SidebarProvider
      className="h-svh"
        defaultOpen={defaultOpen}
        style={{ "--sidebar-width": "20rem" } as React.CSSProperties}
      >
        <AppSidebar />
        <SidebarInset className="min-h-0 overflow-hidden border !shadow-none">
          <AppSidebarOpenTrigger />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  )
}
