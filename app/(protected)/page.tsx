import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col items-start gap-4 p-4">
      <UserButton />
      <OrganizationSwitcher hidePersonal />
    </div>
  )
}
