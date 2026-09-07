import DashboardNavbar from "./_admin_components/DashboardNavbar";
import SidebarComponents from "./_admin_components/SidebarComponents";

function AdminDashboardLayout({ children }) {
  return (
    <div>
      <div className="flex min-h-screen">
        <SidebarComponents />
        <div className="flex-1">
          <DashboardNavbar></DashboardNavbar>
          {children}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboardLayout;