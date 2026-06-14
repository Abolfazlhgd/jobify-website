"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { links } from "@/utils/links";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function LinksDropdown() {
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-52 mt-2">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <DropdownMenuItem key={link.href} asChild>
              <Link
                href={link.href}
                className={cn(
                  "w-full flex items-center gap-x-3 capitalize py-2 px-3 text-sm cursor-pointer rounded-sm transition-colors",
                  isActive ? "bg-primary text-primary-foreground font-medium" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {link.icon}
                {link.label}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}