import React from "react";
import { sessionData } from "@/lib/session";
import { DashboardLayoutSidebar } from "./DashboardLayoutSidebar";


export default async function SidebarComponents() {
  const session = await sessionData();
  const user = session;

  return (
    <div>
      <DashboardLayoutSidebar user={user}></DashboardLayoutSidebar>
    </div>
  );
}
