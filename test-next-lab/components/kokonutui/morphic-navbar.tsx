"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

const navItems = {
  "/": {
    name: "home",
  },
  "/works": {
    name: "About",
  },
  "/blog": {
    name: "Features",
  },
  "/about": {
    name: "Active Projects",
  },
  "/LegalDocs": {
    name: "Legal Documents",
  },
  "/contact": {
    name: "Contact",
  },
};

export function MorphicNavbar() {
  const [activePath, setActivePath] = useState("/");

  const isActiveLink = (path: string) => {
    if (path === "/") {
      return activePath === "/";
    }
    return activePath.startsWith(path);
  };

  return (
    // <nav className="mx-auto max-w-4xl px-4 py-2 ">
    //   <div className="flex items-center justify-center">
    //     <div className="glass flex items-center justify-between overflow-hidden rounded-xl">
    //       {Object.entries(navItems).map(([path, { name }], index, array) => {
    //         const isActive = isActiveLink(path);
    //         const isFirst = index === 0;
    //         const isLast = index === array.length - 1;
    //         const prevPath = index > 0 ? array[index - 1][0] : null;
    //         const nextPath =
    //           index < array.length - 1 ? array[index + 1][0] : null;

    //         return (
    //           <Link
    //             className={clsx(
    //               "flex items-center justify-center bg-black p-1.5 px-4 text-sm text-white transition-all duration-300 dark:bg-white dark:text-black",
    //               isActive
    //                 ? "mx-2 rounded-xl font-semibold text-sm"
    //                 : clsx(
    //                     (isActiveLink(prevPath || "") || isFirst) &&
    //                       "rounded-l-xl",
    //                     (isActiveLink(nextPath || "") || isLast) &&
    //                       "rounded-r-xl"
    //                   )
    //             )}
    //             href="#"
    //             key={path}
    //             onClick={() => setActivePath(path)}
    //           >
    //             {name}
    //           </Link>
    //         );
    //       })}
    //     </div>
      
    //   </div>
    //     {/* auth buttons */}
    //     <div className="flex items-end">
    //       <button className="ml-4 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
    //         Login
    //       </button>
    //       <button className="ml-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700">
    //         Sign Up
    //       </button>
    //     </div>
    // </nav>
    
    <nav className="mx-auto max-w-4xl px-4 py-2">
  <div className="flex items-center justify-between">
    {/* Left: Nav Links */}
    <div className="glass flex items-center overflow-hidden rounded-xl">
      {Object.entries(navItems).map(([path, { name }], index, array) => {
        const isActive = isActiveLink(path);
        const isFirst = index === 0;
        const isLast = index === array.length - 1;
        const prevPath = index > 0 ? array[index - 1][0] : null;
        const nextPath =
          index < array.length - 1 ? array[index + 1][0] : null;

        return (
          <Link
            className={clsx(
              "flex items-center justify-center bg-black p-1.5 px-4 text-sm text-white transition-all duration-300 dark:bg-white dark:text-black",
              isActive
                ? "mx-2 rounded-xl font-semibold text-sm"
                : clsx(
                    (isActiveLink(prevPath || "") || isFirst) &&
                      "rounded-l-xl",
                    (isActiveLink(nextPath || "") || isLast) &&
                      "rounded-r-xl"
                  )
            )}
            href="#"
            key={path}
            onClick={() => setActivePath(path)}
          >
            {name}
          </Link>
        );
      })}
    </div>

    {/* Right: Auth buttons */}
    <div className="flex items-center">
      <button className="ml-2 rounded-[50px] bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
        Login
      </button>
      <button className="ml-2 rounded-[50px] bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700">
        Sign Up
      </button>
    </div>
  </div>
</nav>

  );
}

export default MorphicNavbar;
