import { UserButton } from "@clerk/nextjs";
import LinksDropdown from "./LinksDropdown";
import ThemeToggle from "./ThemeToggle"; // فرض بر این است که این کامپوننت را دارید

export default function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-card px-4 sm:px-8 shadow-sm">
      {/* Mobile Menu Trigger */}
      <div className="flex items-center">
        <LinksDropdown />
      </div>

      {/* User Actions & Dark Mode Toggle */}
      <div className="flex items-center gap-x-4">
        <ThemeToggle />
        <UserButton />
      </div>
    </header>
  );
}