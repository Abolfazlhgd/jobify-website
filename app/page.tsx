import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import Logo from "@/assets/logo.svg";
import LandingImg from "@/assets/main.svg";

export default async function Home() {
  const { userId } = await auth();
  const isSignedIn = !!userId;

  return (
    <main>
      <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6 flex justify-between items-center">
        <Image src={Logo} alt="logo" />

        {isSignedIn ? (
          <UserButton />
        ) : (
          <Link href="/sign-in">
            <Button variant="outline">Sign In</Button>
          </Link>
        )}
      </header>

      <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20 grid lg:grid-cols-[1fr,400px] items-center">
        <div>
          <h1 className="capitalize text-4xl md:text-7xl font-bold">
            job <span className="text-primary">tracking</span> app
          </h1>
          <p className="leading-loose max-w-md mt-4">
            Find and track your dream job with Jobify. Manage applications, get
            notifications, and land your next opportunity.
          </p>
          <Button asChild className="mt-4">
            <Link href={isSignedIn ? "/add-job" : "/sign-in"}>Get Started</Link>
          </Button>
        </div>
        <Image src={LandingImg} alt="landing" className="hidden lg:block" />
      </section>
    </main>
  );
}
