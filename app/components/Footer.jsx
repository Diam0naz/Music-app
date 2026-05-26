import React from "react";
import { Twitter, Instagram, Github } from "lucide-react";

function Footer() {
  return (
    <>
      <div className="flex flex-col gap-5 justify-center pt-20">
        <section className="grid w-11/12 grid-cols-4 mx-auto">
          <div className="col-span-2 flex flex-col gap-2.5 items-start">
            <h1 className="text-5xl text-nowrap font-medium bg-clip-text bg-gradient-to-tr text-transparent from-orange-700 to-amber-300">
               <i>Sun Streams</i>
            </h1>
            <p className="text-lg leading-snug text-amber-500/50">
              Your ultimate destination for discovering, streaming, and sharing
              music. <br /> Connect with artists and fellow music lovers
              worldwide.
            </p>
            <aside className="flex gap-5 pt-5 ">
              <span className="border border-white/40 hover:border-amber-500 transition-colors duration-300 ease-out p-2 hover:text-amber-400 rounded-full text-white/70">
                <Twitter />
              </span>
              <span className="border border-white/40 hover:border-amber-500 transition-colors duration-300 ease-out p-2 hover:text-amber-400 rounded-full text-white/70">
                <Instagram />
              </span>
              <span className="border border-white/40 hover:border-amber-500 transition-colors duration-300 ease-out p-2 hover:text-amber-400 rounded-full text-white/70">
                <Github />
              </span>
            </aside>
          </div>
          <div className="col-span-1 flex flex-col items-start gap-5">
            <p className="text-2xl text-stone-200 font-extralight">
              {" "}
              Quick Links
            </p>
            <ul className="space-y-2.5">
              <li className="text-white/50 hover:text-white transition-colors duration-300 ease-out group relative">
                Browse Music{" "}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-l from-orange-400 to-amber-700 group-hover:w-full transition-discrete duration-500 ease-out"></span>
              </li>
              <li className="text-white/50  hover:text-white transition-colors duration-300 ease-out group relative">
                Top Charts{" "}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-l from-orange-400 to-amber-700 group-hover:w-full transition-discrete duration-500 ease-out"></span>
              </li>
              <li className="text-white/50  hover:text-white transition-colors duration-300 ease-out group relative">
                New Releases{" "}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-l from-orange-400 to-amber-700 group-hover:w-full transition-discrete duration-500 ease-out"></span>
              </li>
              <li className="text-white/50  hover:text-white transition-colors duration-300 ease-out group relative">
                Genres{" "}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-l from-orange-400 to-amber-700 group-hover:w-full transition-discrete duration-500 ease-out"></span>
              </li>
              <li className="text-white/50  hover:text-white transition-colors duration-300 ease-out group relative">
                Radio{" "}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-l from-orange-400 to-amber-700 group-hover:w-full transition-discrete duration-500 ease-out"></span>
              </li>
            </ul>
          </div>
          <div className="col-span-1 flex flex-col items-start gap-5">
            <p className="text-2xl text-stone-200 font-extralight">Support</p>
            <ul className="space-y-2.5 text-white/50">
              <li className="text-white/50  hover:text-white transition-colors duration-300 ease-out group relative">
                Help Center{" "}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-l from-orange-400 to-amber-700 group-hover:w-full transition-discrete duration-500 ease-out"></span>
              </li>
              <li className="text-white/50 hover:text-white transition-colors duration-300 ease-out group relative">
                Contact us{" "}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-l from-orange-400 to-amber-700 group-hover:w-full transition-discrete duration-500 ease-out"></span>
              </li>
              <li className="text-white/50  hover:text-white transition-colors duration-300 ease-outgroup relative">
                Privacy Policy{" "}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-l from-orange-400 to-amber-700 group-hover:w-full transition-discrete duration-500 ease-out"></span>
              </li>
              <li className="text-white/50  hover:text-white transition-colors duration-300 ease-outgroup relative">
                Terms of Service{" "}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-l from-orange-400 to-amber-700 group-hover:w-full transition-discrete duration-500 ease-out"></span>
              </li>
              <li className="text-white/50  hover:text-white transition-colors duration-300 ease-outgroup relative">
                About Us{" "}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-l from-orange-400 to-amber-700 group-hover:w-full transition-discrete duration-500 ease-out"></span>
              </li>
            </ul>
          </div>
        </section>{" "}
        <hr className="w-11/12 border-orange-500 mx-auto" />{" "}
        <section>
          <h4 className="text-white/50 w-11/12 mx-auto text-center">
            © 2024 SoundWave. All rights reserved.
          </h4>
        </section>
      </div>
    </>
  );
}

export default Footer;
