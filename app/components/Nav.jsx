import React from "react";

function Nav() {
  return (
    <nav className="flex items-center mx-auto justify-around w-11/12 pt-5 mb-5">
      <h1 className="text-4xl text-nowrap mx-5 font-bold bg-clip-text bg-gradient-to-tr text-transparent from-orange-700 to-amber-300">
        <i>Sun Streams</i>
      </h1>
      <ul className="flex items-center gap-10 text-xl font-light">
        {["Home", "Artists", "About"].map((item) => (
          <li key={item} className="text-white/50 hover:text-white/80 transition-colors duration-300 group relative cursor-pointer">
            {item}
            <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-amber-700 group-hover:w-full transition-all duration-300 ease-out"></span>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3">
        <button className="w-44 h-12 border border-white/30 hover:border-amber-400 text-white/70 hover:text-white transition-all duration-300 ease-out rounded-xl">
          Sign-in
        </button>
        <button className="w-44 h-12 rounded-xl bg-gradient-to-tr from-orange-400 to-amber-300 text-orange-900 font-medium hover:opacity-90 transition-opacity duration-300">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Nav;
