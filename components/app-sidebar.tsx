"use client"

import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import { PlusIcon, WorkflowIcon } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"

// Dummy data until workflows are persisted.
const workflows = [
  { id: "1", name: "dominant-wasp" },
  { id: "2", name: "honest-reindeer" },
  { id: "3", name: "expected-llama" },
  { id: "4", name: "essential-ocelot" },
  { id: "5", name: "creepy-echidna" },
  { id: "6", name: "eastern-silkworm" },
  { id: "7", name: "cultural-lion" },
  { id: "8", name: "proud-weasel" },
  { id: "9", name: "regional-bonobo" },
]

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
        <SidebarGroup className="px-3 group-data-[collapsible=icon]:px-2">
          <SidebarGroupLabel className="text-sm">Workflows</SidebarGroupLabel>
          <SidebarGroupAction title="New workflow" className="top-3.5 right-4">
            <PlusIcon />
            <span className="sr-only">New workflow</span>
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu className="gap-0.5">
              {/* The group action is hidden when collapsed, so expose it as an icon button instead. */}
              <SidebarMenuItem className="hidden group-data-[collapsible=icon]:block">
                <SidebarMenuButton tooltip="New workflow">
                  <PlusIcon />
                  <span>New workflow</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              {workflows.map((workflow, index) => (
                <SidebarMenuItem key={workflow.id}>
                  <SidebarMenuButton
                    isActive={index === 0}
                    tooltip={workflow.name}
                    className="h-10 px-3 text-[15px] data-active:font-normal"
                  >
                    <WorkflowIcon />
                    <span>{workflow.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
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

// On mobile the sidebar lives in a sheet, so the main area needs its own
// trigger to open it.
export function AppSidebarOpenTrigger() {
  const { isMobile } = useSidebar()

  if (!isMobile) {
    return null
  }

  return <SidebarTrigger className="absolute top-4 left-4 z-10" />
}
