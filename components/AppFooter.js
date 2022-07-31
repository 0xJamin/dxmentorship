import AppLogo from "./AppLogo";
export default function AppFooter() {
  function currentYear() {
    return new Date().getFullYear();
  }
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <AppLogo />
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © {currentYear()} DXTraining. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
