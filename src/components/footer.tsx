import NavLink from "./menu";

export default function Footer() {
  const getYear = () => new Date().getFullYear();
  const name = "Muhammad Adib Alfaini Afifi";
  return (
    <footer className="mt-20 border-t border-border bg-zinc-50/50 dark:bg-zinc-950/50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 py-10 md:flex-row md:gap-0">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
          <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            © {getYear()} <span className="text-zinc-900 dark:text-zinc-100">{name}</span>. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
