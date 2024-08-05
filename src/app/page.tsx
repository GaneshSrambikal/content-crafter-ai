import Auth from "@/components/auth";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 mt-2 h-14 flex items-center">
        <Logo />
        <nav className="ml-auto flex items-center gap-4 sm:gap-6">
          <Button variant='secondary' asChild className="hover:bg-primary hover:text-white">
            <Link href='/dashboard'>Dashboard</Link>
          </Button>
          <Auth />
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-22 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-gray-800 text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    AI Generated Content
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Create AI Generated descriptions, hashtags and outlines for your social media posts on YouTube, LinkedIn, Instagram, TikTok and X(formerly Twitter).
                  </p>
                  <p className="max-w-[600px] text-muted-foreground md:text-md font-light">Powered by <Link href={`https://ai.google.dev/gemini-api`} target="_blank"><span className="text-blue-800 font-medium underline">Google Gemini</span> </Link></p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/dashboard"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#features"
                    className="inline-flex h-10 items-center justify-center rounded-md  text-black px-8 text-sm font-medium bg-white border border-primary"
                    prefetch={false}
                  >
                    Features
                  </Link>
                </div>
              </div>
              <div className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square">
                <div className="mt-5 p-2 relative">
                  <Image src='/heropagedash.png' unoptimized={true} alt="dashboard" width={400} height={400} className="w-full rounded-md drop-shadow-lg object-cover" />
                </div>
                <div className="relative hidden md:block">
                  <Image src='/heromob.gif' unoptimized={true} alt="mobdash" height={200} width={200} className="shadow-lg absolute right-[100px] top-[-5rem] rounded-t-3xl" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className=" grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/youtubedes.gif"
                width="550"
                height="510"
                alt="Feature 1"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-lg"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl capitalize">YouTube video descriptions</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Content Crafter will provide AI generated video descriptions and outline for your next youtube video. Just provide
                    video title and description prompt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Instagram Captions!</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Create hashfree instagram post captions and hashtags. No need to search for hour for that perfect caption.
                  </p>
                </div>
              </div>
              <Image
                src="/instagramdes.gif"
                width="550"
                height="310"
                alt="Feature 2"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-lg"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/tweetdes.gif"
                width="550"
                height="310"
                alt="Feature 3"
                unoptimized={true}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Twitter Post Outline</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Create Tweet Post outline and hashtags
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 Content Crafter. All rights reserved.</p>
        <div className="flex gap-3 ml-3 items-center">
          <Image src='/razorpay.png' alt="razorpay" width={100} height={100} />
          <Image src='/stripe.png' alt="stripe" width={60} height={40} />
        </div>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
