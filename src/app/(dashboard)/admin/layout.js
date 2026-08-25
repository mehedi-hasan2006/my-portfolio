export default function AdminLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between border-b border-border">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-900 transition-colors duration-150 hover:text-primary"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-900 transition-colors duration-150 hover:text-primary"
                  >
                    Team
                  </a>
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-900 transition-colors duration-150 hover:text-primary"
                  >
                    Projects
                  </a>
                  {/* <a
                    href="#"
                    className="text-sm font-medium text-gray-900 transition-colors duration-150 hover:text-primary"
                  >
                    Calendar
                  </a> */}
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
