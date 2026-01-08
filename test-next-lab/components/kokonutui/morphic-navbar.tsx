"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import AuthButtons from "./auth-buttons";
import MainLogo from "../LogoMain";

const navItems = {
  "/": { name: "home" },
  "#AboutPage": { name: "About" },
  "/blog": { name: "Features" },
  "/works": { name: "Active Projects" },
  "/LegalDocs": { name: "LegalDocuments" },
  "#contact": { name: "Contact" },
};

export function MorphicNavbar() {
  const [activePath, setActivePath] = useState("/");

  const isActiveLink = (path: string) => {
    if (path === "/") return activePath === "/";
    return activePath.startsWith(path);
  };

  return (
    <nav className="w-full px-6 py-4 drop-shadow-2xl">
      <div className="relative flex items-center justify-between">

        {/* Left: Logo */}
        <div className="shrink-0">
          <MainLogo />
        </div>

        {/* Center: Nav */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <div className="glass flex items-center overflow-hidden rounded-xl">
            {Object.entries(navItems).map(([path, { name }], index, array) => {
              const isActive = isActiveLink(path);
              const isFirst = index === 0;
              const isLast = index === array.length - 1;
              const prevPath = index > 0 ? array[index - 1][0] : "";
              const nextPath =
                index < array.length - 1 ? array[index + 1][0] : "";

              return (
                <Link
                  key={path}
                  href={path}
                  onClick={() => setActivePath(path)}
                  className={clsx(
                    "flex items-center justify-center bg-black px-4 py-2 text-sm text-white transition-all duration-300 dark:bg-white dark:text-black",
                    isActive
                      ? "mx-2 rounded-xl font-semibold"
                      : clsx(
                          (isActiveLink(prevPath) || isFirst) &&
                            "rounded-l-xl",
                          (isActiveLink(nextPath) || isLast) &&
                            "rounded-r-xl"
                        )
                  )}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right: Auth Buttons */}
        <div className="shrink-0">
          <AuthButtons />
        </div>

      </div>
    </nav>
  );
}

export default MorphicNavbar;
