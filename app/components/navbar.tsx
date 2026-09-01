import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-lg font-semibold">Your App</h1>
        <ThemeToggle />
      </div>
    </header>
  );
}