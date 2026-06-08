import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center gap-4">
      <Button>default</Button>
      <Button variant="outline" size="icon">
        <Camera />
      </Button>
    </div>
  );
}