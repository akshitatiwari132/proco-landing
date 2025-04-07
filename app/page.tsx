import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  CheckCircle,
  Play,
  Video,
  XCircle,
  Target,
  Award,
  Rocket,
  Bell,
  Mail,
  TrendingUp,
  MessageSquare,
  ExternalLink,
  ChevronRight,
  Users,
  Zap,
  LineChart,
  Star,
  Network,
  Briefcase,
  Filter,
  Goal,
} from "lucide-react"
import VideoModal from "@/components/ui/videomodal"


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 text-white h-screen">
  <div className="absolute inset-0 z-0 opacity-10">
    <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-indigo-400 blur-[120px]" />
    <div className="absolute right-1/4 top-1/2 h-64 w-64 rounded-full bg-slate-400 blur-[120px]" />
    <div className="absolute bottom-1/4 left-1/2 h-64 w-64 rounded-full bg-slate-500 blur-[120px]" />
  </div>

  <div className="relative z-10 w-full max-w-5xl px-4 text-center">
    <div className="mb-4 flex items-center justify-center gap-2">
      <div className="rounded-full bg-white/10 px-4 py-1 text-sm font-medium backdrop-blur-sm">
        72-Hour Sprint Recap
      </div>
    </div>
    <div className="space-y-6">
      <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
        We stopped pitching. <br className="hidden md:inline" />
        <span className="bg-gradient-to-r from-slate-200 via-slate-100 to-white bg-clip-text text-transparent">
          We started building.
        </span>
      </h1>
      <p className="mx-auto max-w-3xl text-xl text-white/80 md:text-2xl">
        Proco is the platform reimagining mentorship — and here's what we built in 72 hours.
      </p>
    </div>
  </div>
</section>{/* STATS GRID + DEMO VIDEO SECTION (CENTERED) */}
<>
  {/* Stats Grid */}
  <section className="relative flex items-center justify-center py-16">
    <div className="relative z-10 w-full max-w-5xl px-4">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-5 text-center">
        {[
          { value: "26+", label: "mentors", color: "from-slate-700 to-slate-800" },
          { value: "66+", label: "waitlist responses", color: "from-slate-600 to-slate-700" },
          { value: "7", label: "in-progress matches", color: "from-slate-500 to-slate-600" },
          { value: "1", label: "working MVP", color: "from-slate-400 to-slate-500" },
          { value: "72", label: "hours", color: "from-slate-300 to-slate-400" },
        ].map((stat, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
          >
            <div
              className={`absolute -right-6 -top-6 h-16 w-16 rounded-full bg-gradient-to-br ${stat.color} opacity-10 transition-all duration-300 group-hover:opacity-20`}
            ></div>
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <span
                className={`bg-gradient-to-r ${stat.color} bg-clip-text text-4xl font-bold text-transparent md:text-5xl`}
              >
                {stat.value}
              </span>
              <span className="mt-1 text-sm font-medium text-slate-600">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Demo Video Section */}
  <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24 text-white">
    <div className="absolute inset-0 z-0 opacity-20">
      <div className="absolute left-1/3 top-1/3 h-64 w-64 rounded-full bg-slate-400 blur-[100px]"></div>
      <div className="absolute right-1/3 top-2/3 h-64 w-64 rounded-full bg-slate-500 blur-[100px]"></div>
    </div>

    <div className="relative z-10 w-full max-w-5xl px-4 text-center">
      <div className="mb-12">
        <div className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium backdrop-blur-sm">
          PRODUCT DEMO
        </div>
        <h2 className="text-4xl font-bold md:text-5xl">See Proco in Action</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
          Watch how we're transforming the mentorship experience with our innovative platform
        </p>
        <VideoModal />
      </div>

      <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
        <div className="flex justify-center">
          <img
            src="demo.png"
            alt="Proco Network Graph"
            className="rounded-2xl max-w-full shadow-2xl border border-white/10"
          />
        </div>
      </div>
    </div>
  </section>
</>


{/* Testimonials */}
<section className="relative flex items-center justify-center bg-slate-50 py-24">
  <div className="relative z-10 w-full max-w-6xl px-4 text-center">
    <div className="mb-16">
      <div className="mb-2 inline-block rounded-full bg-slate-100 px-4 py-1 text-sm font-medium text-slate-700">
        TESTIMONIALS
      </div>
      <h2 className="text-4xl font-bold md:text-5xl">What People Are Saying</h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
        Early feedback from our first users shows the impact of our approach
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-3">
      {[
        {
          quote:
            "The hashtag system on Proco is so refreshing. I can quickly see what a mentee is focused on without digging through cluttered profiles. It saves time and makes every match feel intentional.",
          name: "Dr. S. Surekha",
          role: "Mentor, Engineering Professor at JNTU-K",
          color: "bg-slate-600",
        },
        {
          quote:
            "It's the first time I've seen my network visualized like this — not as posts, but as people. The Circle helps me focus on real connections instead of endless scrolling.",
          name: "Shrikha Balaji",
          role: "Mentee, Student at Virginia Tech",
          color: "bg-slate-700",
        },
        {
          quote:
            "The concept of chatting with my mentee and being able to book right there with Google Calendar integration is amazing. No links, no back-and-forth. It's the kind of flow LinkedIn wishes it had.",
          name: "Deborah Battagani",
          role: "Mentor, Working in healthcare field",
          color: "bg-slate-800",
        },
      ].map((testimonial, index) => (
        <Card
          key={index}
          className="group overflow-hidden rounded-2xl border-0 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <CardContent className="p-0">
            <div className="relative h-3">
              <div className={`absolute inset-x-0 top-0 h-3 w-full ${testimonial.color}`} />
            </div>
            <div className="space-y-4 p-8 text-left">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-200" />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-lg italic text-slate-700">"{testimonial.quote}"</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

{/* Comparison Section */}
<section className="relative flex items-center justify-center py-24">
  <div className="relative z-10 w-full max-w-5xl px-4 text-center">
    <div className="mb-16">
      <div className="mb-2 inline-block rounded-full bg-slate-100 px-4 py-1 text-sm font-medium text-slate-700">
        COMPETITIVE EDGE
      </div>
      <h2 className="text-4xl font-bold md:text-5xl">Why Proco Wins for Mentorship</h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
        A side-by-side comparison shows why we're the future of mentorship
      </p>
    </div>

    <div className="mx-auto overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
      <div className="grid grid-cols-3">
        <div className="border-b border-r border-slate-200 bg-slate-50 p-6 font-medium">
          <span className="text-lg">Feature</span>
        </div>
        <div className="border-b border-r border-slate-200 p-6 font-medium">
          <div className="flex items-center justify-center gap-2">
            <div className="h-8 w-8 rounded bg-blue-100 p-1.5">
              <svg className="text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <span className="text-lg">LinkedIn</span>
          </div>
        </div>
        <div className="border-b border-slate-200 bg-slate-50 p-6 font-medium">
          <div className="flex items-center justify-center gap-2">
            <div className="h-8 w-8 rounded bg-rose-100 p-1.5">
              <svg className="text-rose-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 18a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v9Z" />
                <path d="m12 12 4-4" />
                <path d="M9 9h.01" />
                <path d="M15 15h.01" />
              </svg>
            </div>
            <span className="text-lg">Proco</span>
          </div>
        </div>
      </div>

      {[
        {
          feature: "Matching Algorithm",
          linkedin: "Generic connection requests",
          proco: "Goal-based matching with compatibility scoring",
        },
        {
          feature: "Mentor Incentives",
          linkedin: "Visibility only",
          proco: "Impact tracking, certificates, and community recognition",
        },
        {
          feature: "Progress Tracking",
          linkedin: "None",
          proco: "Structured goal setting and milestone tracking",
        },
        {
          feature: "Communication",
          linkedin: "Generic messaging",
          proco: "AI-assisted introductions and conversation starters",
        },
      ].map((row, index) => (
        <div key={index} className="grid grid-cols-3 border-b border-slate-200 last:border-0 text-left">
          <div className="border-r border-slate-200 bg-slate-50 p-6 font-medium">{row.feature}</div>
          <div className="flex items-center border-r border-slate-200 p-6 text-slate-600">
            <XCircle className="mr-3 h-5 w-5 flex-shrink-0 text-red-500" />
            <span>{row.linkedin}</span>
          </div>
          <div className="flex items-center bg-slate-50 p-6 text-slate-800">
            <CheckCircle className="mr-3 h-5 w-5 flex-shrink-0 text-emerald-500" />
            <span className="font-medium">{row.proco}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* MVP Highlights */}
<section className="relative flex items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24 text-white">
  <div className="absolute inset-0 z-0 opacity-20">
    <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-slate-400 blur-[100px]" />
    <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-slate-500 blur-[100px]" />
  </div>

  <div className="relative z-10 w-full max-w-6xl px-4 text-center">
    <div className="mb-16">
      <div className="mb-2 inline-block rounded-full bg-white/10 px-4 py-1 text-sm font-medium backdrop-blur-sm">
        PRODUCT FEATURES
      </div>
      <h2 className="text-4xl font-bold md:text-5xl">Our MVP Features</h2>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
        Built in just 72 hours, our platform already delivers these powerful capabilities
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2">
      {[
        {
          title: "Smart Match Algorithm",
          description:
            "Our proprietary matching system connects mentees with the perfect mentor based on goals, expertise, and communication style.",
          image: "/aialgorithm.png",
          icon: Zap,
          color: "from-slate-600 to-slate-700",
        },
        {
          title: "Goal Tracking Dashboard",
          description:
            "Set clear objectives, track progress, and celebrate milestones with our intuitive goal tracking system.",
          image: "/goaltrackingdashboard.png",
          icon: Target,
          color: "from-slate-500 to-slate-600",
        },
        {
          title: "AI Introduction Generator",
          description:
            "Break the ice with our AI-powered introduction generator that helps start meaningful conversations.",
          image: "/aichat.png",
          icon: MessageSquare,
          color: "from-slate-400 to-slate-500",
        },
        {
          title: "Impact Dashboard",
          description:
            "Mentors can quantify and showcase their impact with our comprehensive impact metrics and visualization tools.",
          image: "/mentordashboard.png",
          icon: LineChart,
          color: "from-slate-300 to-slate-400",
        },
      ].map((feature, index) => (
        <div
          key={index}
          className="group overflow-hidden rounded-2xl bg-white/10 p-1 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
        >
          <div className="h-full rounded-xl bg-slate-900 p-6">
            <div className="mb-6 flex items-center gap-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${feature.color}`}
              >
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">{feature.title}</h3>
            </div>
            <div className="mb-6 overflow-hidden rounded-lg">
              <Image
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                width={500}
                height={300}
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-white/70">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Onboarding Plan */}
      <section className="py-24">
        <div className="container">
          <div className="mb-16 text-center">
            <div className="mb-2 inline-block rounded-full bg-slate-100 px-4 py-1 text-sm font-medium text-slate-700">
              USER EXPERIENCE
            </div>
            <h2 className="text-4xl font-bold md:text-5xl">Proco Onboarding & Incentive Plan</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              A structured approach to activate users and create meaningful mentorship experiences
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 md:grid-cols-2">
              {/* Mentee Onboarding Flow */}
              <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl">
                <div className="bg-gradient-to-r from-slate-700 to-slate-800 p-6 text-white">
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <Users className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-bold">Mentee Onboarding Flow</h3>
                  </div>
                  <p className="text-white/80">
                    A personalized and lightweight experience to guide students from curiosity to committed action.
                  </p>
                </div>

                <div className="p-8">
                  <h4 className="mb-6 text-lg font-semibold">Step-by-step:</h4>
                  <div className="relative space-y-6 pl-8 before:absolute before:left-3 before:top-0 before:h-full before:w-0.5 before:bg-blue-100">
                    {[
                      {
                        title: "Hashtag Identity",
                        desc: "Mentees select 3 hashtags to define their brand (e.g. #entrepreneurship #AIinhealthcare #firstgen)",
                      },
                      {
                        title: "Goal Declaration",
                        desc: 'Short form: "What\'s something you want help with right now?"',
                      },
                      {
                        title: "Background Input",
                        desc: "School, interest level, past mentorship (if any)",
                      },
                      {
                        title: "Match Preview",
                        desc: "See a mentor match preview + sample intro message generated by AI",
                      },
                      {
                        title: "Start Mentorship",
                        desc: 'Click "Start Mentorship" → Confirm match',
                      },
                    ].map((step, index) => (
                      <div key={index} className="relative">
                        <div className="absolute -left-8 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{step.title}</p>
                          <p className="mt-1 text-slate-600">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-xl bg-blue-50 p-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                        <p className="font-medium text-slate-900">Output: Match made + structured first message sent</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-600" />
                        <p className="font-medium text-slate-900">Tools: Progress bar, milestone setting, chat space</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mentor Onboarding Flow */}
              <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl">
                <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-6 text-white">
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-bold">Mentor Onboarding Flow</h3>
                  </div>
                  <p className="text-white/80">
                    Structured onboarding that respects mentors' time and elevates their impact.
                  </p>
                </div>

                <div className="p-8">
                  <h4 className="mb-6 text-lg font-semibold">Step-by-step:</h4>
                  <div className="relative space-y-6 pl-8 before:absolute before:left-3 before:top-0 before:h-full before:w-0.5 before:bg-rose-100">
                    {[
                      {
                        title: "Quick Interest Form",
                        desc: "What topics do you love mentoring on? → dropdowns (Product, Startup, Design, etc.)",
                      },
                      {
                        title: "Availability Settings",
                        desc: "1–click toggles for how often they want to be matched (1/week, 2/month, custom)",
                      },
                      {
                        title: "Intent Selection",
                        desc: '"What\'s your motivation for mentoring?" → we use this to tailor incentives',
                      },
                      {
                        title: "Impact Dashboard Preview",
                        desc: "Show what their dashboard will look like once active",
                      },
                    ].map((step, index) => (
                      <div key={index} className="relative">
                        <div className="absolute -left-8 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-rose-500 text-xs font-bold text-white">
                          {index + 1}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{step.title}</p>
                          <p className="mt-1 text-slate-600">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-xl bg-rose-50 p-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-rose-600" />
                        <p className="font-medium text-slate-900">Output: Profile ready to match</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-rose-600" />
                        <p className="font-medium text-slate-900">
                          Tools: Session summaries, feedback loop, progress visual
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* User Incentives */}
            <div className="mt-20">
              <div className="mb-12 text-center">
                <div className="mb-2 inline-flex items-center justify-center gap-2 rounded-full bg-slate-100 px-4 py-1 text-sm font-medium text-slate-700">
                  <Award className="h-4 w-4" />
                  <span>INCENTIVES</span>
                </div>
                <h3 className="text-3xl font-bold">User Incentives Breakdown</h3>
                <p className="mx-auto mt-2 max-w-2xl text-slate-600">
                  Carefully designed rewards that drive engagement and quality interactions
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {/* Mentee Incentives */}
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                  <div className="bg-gradient-to-r from-slate-700 to-slate-800 p-4 text-center text-white">
                    <h4 className="text-xl font-bold">For Mentees</h4>
                  </div>
                  <div className="p-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-4 rounded-xl bg-slate-50 p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-200">
                            <Network className="h-5 w-5 text-slate-700" />
                          </div>
                          <h5 className="text-lg font-bold text-slate-900">Visual Network Map</h5>
                        </div>
                        <p className="text-slate-600">
                          See your connections grow in real time — not as a feed, but as a visual network. Track your
                          mentorship journey as it expands, one meaningful connection at a time.
                        </p>
                      </div>

                      <div className="space-y-4 rounded-xl bg-slate-50 p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-200">
                            <MessageSquare className="h-5 w-5 text-slate-700" />
                          </div>
                          <h5 className="text-lg font-bold text-slate-900">Thought of the Day</h5>
                        </div>
                        <p className="text-slate-600">
                          A daily reflection space to spark intention and discover like-minded peers. Your answers can
                          spark connection — no toxic positivity, just real thoughts, from real people.
                        </p>
                      </div>

                      <div className="space-y-4 rounded-xl bg-slate-50 p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-200">
                            <Filter className="h-5 w-5 text-slate-700" />
                          </div>
                          <h5 className="text-lg font-bold text-slate-900">No Feed, No Clout-Chasing</h5>
                        </div>
                        <p className="text-slate-600">
                          Skip the humblebrags and endless scroll. On Proco, there's no algorithm — just clarity, goals,
                          and people who care about the same things you do.
                        </p>
                      </div>

                      <div className="space-y-4 rounded-xl bg-slate-50 p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-200">
                            <Goal className="h-5 w-5 text-slate-700" />
                          </div>
                          <h5 className="text-lg font-bold text-slate-900">Goal-Driven Matching</h5>
                        </div>
                        <p className="text-slate-600">
                          You're not matched based on vague interests — Proco matches you based on the goals you set and
                          the skills you're developing. Your journey, your terms.
                        </p>
                      </div>

                      <div className="space-y-4 rounded-xl bg-slate-50 p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-200">
                            <Target className="h-5 w-5 text-slate-700" />
                          </div>
                          <h5 className="text-lg font-bold text-slate-900">Milestone Rewards</h5>
                        </div>
                        <p className="text-slate-600">
                          Earn badges and recognition for completing your first 3 goals, showing your progress and
                          commitment to growth.
                        </p>
                      </div>

                      <div className="space-y-4 rounded-xl bg-slate-50 p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-200">
                            <Rocket className="h-5 w-5 text-slate-700" />
                          </div>
                          <h5 className="text-lg font-bold text-slate-900">Exclusive Workshops</h5>
                        </div>
                        <p className="text-slate-600">
                          Gain access to invite-only workshops from mentors who opt-in, providing specialized knowledge
                          and skills development.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mentor Incentives */}
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                  <div className="bg-gradient-to-r from-slate-800 to-slate-900 p-4 text-center text-white">
                    <h4 className="text-xl font-bold">For Mentors</h4>
                  </div>
                  <div className="p-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-4 rounded-xl bg-slate-50 p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-200">
                            <Award className="h-5 w-5 text-slate-700" />
                          </div>
                          <h5 className="text-lg font-bold text-slate-900">Impact Profiles</h5>
                        </div>
                        <p className="text-slate-600">
                          Beautifully designed public profile pages showcasing mentees helped, testimonials, and badges
                          like "Top Mentor – March 2025"
                        </p>
                        <p className="text-sm italic text-slate-500">
                          Think: "LinkedIn meets Duolingo streaks + Credly badges"
                        </p>
                      </div>

                      <div className="space-y-4 rounded-xl bg-slate-50 p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-200">
                            <Users className="h-5 w-5 text-slate-700" />
                          </div>
                          <h5 className="text-lg font-bold text-slate-900">Exclusive Network</h5>
                        </div>
                        <p className="text-slate-600">
                          Access to mentor-only community for networking with high-achievers, early access to student
                          projects, and exclusive founder/VC Q&As
                        </p>
                      </div>

                      <div className="space-y-4 rounded-xl bg-slate-50 p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-200">
                            <Video className="h-5 w-5 text-slate-700" />
                          </div>
                          <h5 className="text-lg font-bold text-slate-900">Content Features</h5>
                        </div>
                        <p className="text-slate-600">
                          Highlighted in Mic Drop Monday videos, blog features, and social posts to share their story
                          and amplify their personal brand
                        </p>
                      </div>

                      <div className="space-y-4 rounded-xl bg-slate-50 p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-200">
                            <LineChart className="h-5 w-5 text-slate-700" />
                          </div>
                          <h5 className="text-lg font-bold text-slate-900">Gamified Recognition</h5>
                        </div>
                        <p className="text-slate-600">
                          Track and rank mentors based on sessions, impact scores, and feedback with digital badges,
                          spotlight positions, and newsletter shoutouts
                        </p>
                      </div>

                      <div className="space-y-4 rounded-xl bg-slate-50 p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-200">
                            <Star className="h-5 w-5 text-slate-700" />
                          </div>
                          <h5 className="text-lg font-bold text-slate-900">VIP Invitations</h5>
                        </div>
                        <p className="text-slate-600">
                          Access to exclusive virtual mixers, panels, pitch events, and fireside chats with industry
                          leaders
                        </p>
                      </div>

                      <div className="space-y-4 rounded-xl bg-slate-50 p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-200">
                            <Rocket className="h-5 w-5 text-slate-700" />
                          </div>
                          <h5 className="text-lg font-bold text-slate-900">Future Perks</h5>
                        </div>
                        <p className="text-slate-600">
                          Early contributors may receive equity or advisory roles, free premium access, and recognition
                          in fundraising materials
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 rounded-xl bg-gradient-to-r from-slate-50 to-slate-100 p-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-100">
                          <Briefcase className="h-5 w-5 text-amber-600" />
                        </div>
                        <h5 className="text-lg font-bold text-slate-900">Mentor a Founder Track</h5>
                      </div>
                      <p className="mt-2 text-slate-700">
                        Opportunity for experienced professionals to mentor early-stage student founders, providing an
                        energizing and high-impact mentorship experience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow-up & Retention */}
            <div className="mt-20">
              <div className="mb-12 text-center">
                <div className="mb-2 inline-flex items-center justify-center gap-2 rounded-full bg-slate-100 px-4 py-1 text-sm font-medium text-slate-700">
                  <TrendingUp className="h-4 w-4" />
                  <span>RETENTION</span>
                </div>
                <h3 className="text-3xl font-bold">Follow-up & Retention Features</h3>
                <p className="mx-auto mt-2 max-w-2xl text-slate-600">
                  Smart systems that keep users engaged and relationships growing
                </p>
              </div>

              <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
                {[
                  {
                    icon: Bell,
                    title: "Nudges",
                    desc: '"Hey, your mentee just hit their first goal!"',
                    color: "bg-slate-200 text-slate-700",
                  },
                  {
                    icon: Mail,
                    title: "Automated monthly summaries",
                    desc: "Of mentorship impact",
                    color: "bg-slate-200 text-slate-700",
                  },
                  {
                    icon: TrendingUp,
                    title: "Mentee growth tracking",
                    desc: "Mentor sees what they unlocked",
                    color: "bg-slate-200 text-slate-700",
                  },
                  {
                    icon: MessageSquare,
                    title: "Built-in reflection prompts",
                    desc: "After every session",
                    color: "bg-slate-200 text-slate-700",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    <div
                      className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${item.color}`}
                    >
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-slate-900">{item.title}</p>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcome */}
            <div className="mx-auto mt-20 max-w-4xl overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 p-1 shadow-2xl">
              <div className="rounded-xl bg-slate-900 p-10 text-center text-white">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-3xl font-bold">Outcome</h3>
                <p className="mx-auto max-w-2xl text-xl leading-relaxed text-white/80">
                  Proco turns passive profiles into structured mentorship experiences — with tools, motivation, and
                  measurable value for both sides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="bg-slate-50 py-24">
        <div className="container">
          <div className="mb-16 text-center">
            <div className="mb-2 inline-block rounded-full bg-slate-100 px-4 py-1 text-sm font-medium text-slate-700">
              SUCCESS STORY
            </div>
            <h2 className="text-4xl font-bold md:text-5xl">Real Results, Real Impact</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              See how our platform is already changing lives
            </p>
          </div>

          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl">
            <div className="bg-gradient-to-r from-slate-700 to-slate-800 p-6 text-white">
              <h3 className="text-2xl font-bold">Success Story: Aashna & Deborah</h3>
            </div>
            <div className="p-8">
              <div className="flex flex-col space-y-6">
                <p className="text-xl text-slate-700">
                  We wanted to test how the mentor/mentee matchup would work based on the waitlist form, and we were
                  able to match Aashna Patel, an aspiring medical professional, with Deborah Battagani, who works in the
                  medical field now.
                </p>
                <ul className="space-y-4">
                  {[
                    "Developed a lasting mentorship relationship",
                    "Built off of her existing network through mutuals",
                    "Gained confidence in effective networking",
                    "Now able to plan conversations together",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                        <CheckCircle className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="text-lg text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
<section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white h-screen">
  {/* Background blobs */}
  <div className="absolute inset-0 z-0 opacity-20">
    <div className="absolute left-1/3 top-1/3 h-64 w-64 rounded-full bg-slate-400 blur-[100px]" />
    <div className="absolute right-1/3 bottom-1/3 h-64 w-64 rounded-full bg-slate-500 blur-[100px]" />
  </div>

  {/* Centered content */}
  <div className="relative z-10 mx-auto max-w-4xl px-4 text-center space-y-8">
    <div className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-6 py-2 backdrop-blur-sm">
      <Network className="h-5 w-5 text-amber-400" />
      <span className="text-lg font-medium">Join the revolution in mentorship</span>
    </div>

    <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
      We built this in 72 hours.
      <br />
      <span className="bg-gradient-to-r from-slate-200 via-slate-100 to-white bg-clip-text text-transparent">
        Imagine what we could do with a summer.
      </span>
    </h2>
  </div>
</section>



      {/* Footer */}
      <footer className="border-t py-12">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-slate-900"></div>
              <span className="text-xl font-bold">Proco</span>
            </div>

            <div className="flex flex-wrap items-center gap-8">
              <a href="#" className="text-slate-600 hover:text-slate-900">
                About
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-900">
                Features
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-900">
                Testimonials
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-900">
                Contact
              </a>
            </div>

            <div className="text-center md:text-right">
              <p className="text-sm font-medium text-slate-900">Founders: Akshita, Aditya, Grace | 2025</p>
              <p className="text-sm text-slate-500">© 2025 Proco. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

