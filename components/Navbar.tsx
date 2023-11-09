const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <div className="logo">
        {/* Replace with your own logo */}
        <img src="/logo.png" alt="Logo" className="h-8" />
      </div>
      <div className="nav-items hidden md:flex">
        <a href="#projects" className="p-2">
          Projects
        </a>
        <a href="#skills" className="p-2">
          Skills
        </a>
        <a href="#testimonials" className="p-2">
          Testimonials
        </a>
        <a href="#contact" className="p-2">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
