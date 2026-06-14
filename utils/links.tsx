import { AreaChart, Layers, AppWindow } from "lucide-react";

type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

export const links: NavLink[] = [
  {
    href: "/add-job",
    label: "add job",
    icon: <Layers className="w-5 h-5" />,
  },
  {
    href: "/jobs",
    label: "all jobs",
    icon: <AppWindow className="w-5 h-5" />,
  },
  {
    href: "/stats",
    label: "stats",
    icon: <AreaChart className="w-5 h-5" />,
  },
];
 