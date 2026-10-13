import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { WorkflowNav } from "@/features/workflows/components/workflow-nav"

export function AppSidebar() {
  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader className="flex-row items-center justify-between px-4 pt-4 group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:px-2">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: "min-w-0 group-data-[collapsible=icon]:!hidden",
              organizationSwitcherTrigger:
                "px-2 py-1.5 text-sidebar-foreground/70 hover:bg-sidebar-accent group-data-[collapsible=icon]:p-0.5",
              organizationPreviewTextContainer:
                "group-data-[collapsible=icon]:hidden",
              organizationSwitcherTriggerIcon:
                "group-data-[collapsible=icon]:hidden",
            },
          }}
        />
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <WorkflowNav />
      </SidebarContent>
      <SidebarFooter className="px-4 pb-4 group-data-[collapsible=icon]:px-2">
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: "size-9 group-data-[collapsible=icon]:size-8",
            },
          }}
        />
      </SidebarFooter>
    </Sidebar>
  )
}
