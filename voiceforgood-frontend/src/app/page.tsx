import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          VoiceFor<span className="text-[hsl(280,100%,70%)]">Good</span>
        </h1>
        <p className="text-xl text-center max-w-2xl text-gray-300">
          AI-powered testimonial highlighting for nonprofits and community organizations
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="/signup"
          >
            <h3 className="text-2xl font-bold">Start Highlighting →</h3>
            <div className="text-lg">
              Transform your community stories into impactful social media content
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href="/login"
          >
            <h3 className="text-2xl font-bold">Access Dashboard →</h3>
            <div className="text-lg">
              Manage your testimonial highlights and track your impact
            </div>
          </Link>
        </div>
        <div className="text-center text-gray-400 mt-8">
          <p>Empowering nonprofits, educators, and community leaders to amplify authentic voices</p>
          <p className="text-sm mt-2">No editing skills required • Affordable pricing • Fast AI processing</p>
        </div>
      </div>
    </main>
  );
}
