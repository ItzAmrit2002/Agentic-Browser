"use client"

import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar"

// On mobile the sidebar lives in a sheet, so the main area needs its own
// trigger to open it.
export function AppSidebarOpenTrigger() {
  const { isMobile } = useSidebar()

  if (!isMobile) {
    return null
  }

  return <SidebarTrigger className="absolute top-4 left-4 z-10" />
}
