import NavLink from "./menu";

export default function Footer() {
  const getYear = () => new Date().getFullYear();
  const name = "Muhammad Adib Alfaini Afifi";
  return (
    <section className="border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto max-w-4xl px-2">
        <div className="flex flex-col items-center justify-between gap-5 py-6 md:flex-row md:gap-0">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
            <NavLink to="/about">About </NavLink>
            <NavLink to="/products">Projects</NavLink>
            <NavLink to="/">Home</NavLink>
          </div>
          <div className="font-mono text-sm font-medium text-zinc-800 dark:text-zinc-200">
            © {getYear()} {name}
          </div>
        </div>
      </div>
    </section>
  );
}
