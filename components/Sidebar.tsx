"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/utils/links";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-full bg-card border-r border-border px-6 py-8 flex flex-col gap-y-8">
      {/* Logo Section */}
      <div className="flex items-center gap-x-2 font-bold text-2xl text-primary px-4">
        <span className="bg-primary text-primary-foreground w-10 h-10 flex items-center justify-center rounded-lg text-xl">J</span>
        Jobify
      </div>

      {/* Nav Links */}
      <div className="flex flex-col gap-y-2">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Button
              key={link.href}
              asChild
              variant={isActive ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-x-4 capitalize font-medium h-12 px-4 rounded-md transition-all",
                !isActive && "text-muted-foreground hover:text-foreground"
              )}
            >
              <Link href={link.href}>
                {link.icon}
                {link.label}
              </Link>
            </Button>
          );
        })}
      </div>
    </aside>
  );
}