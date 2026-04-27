import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Camera, Megaphone, Globe, Sparkles, TrendingUp } from 'lucide-react';

const portfolioData = {
  restaurants: [
    { title: 'Restaurant Reel', views: '+28K views', time: '0:15', video: '/videos/video1.MP4' },
    { title: 'Restaurant Reel', views: '+19K views', time: '0:18', video: '/videos/video2.MP4' },
    { title: 'Restaurant Reel', views: '+33K views', time: '0:16', video: '/videos/video3.MP4' },
    { title: 'Restaurant Reel', views: '+22K views', time: '0:16', video: '/videos/video4.MP4' },
    { title: 'Restaurant Reel', views: '+22K views', time: '0:16', video: '/videos/video5.MP4' },
    { title: 'Restaurant Reel', views: '+22K views', time: '0:16', video: '/videos/video6.MP4' },
    { title: 'Restaurant Reel', views: '+22K views', time: '0:16', video: '/videos/video7.MP4' },
    { title: 'Restaurant Reel', views: '+22K views', time: '0:16', video: '/videos/video8.MP4' },
    { title: 'Restaurant Reel', views: '+22K views', time: '0:16', video: '/videos/video9.MP4' },
    { title: 'Restaurant Reel', views: '+22K views', time: '0:16', video: '/videos/video10.MP4' },
    { title: 'Restaurant Reel', views: '+22K views', time: '0:16', video: '/videos/video11.MP4' },
    { title: 'Restaurant Reel', views: '+22K views', time: '0:16', video: '/videos/video12.MP4' },
    { title: 'Restaurant Reel', views: '+22K views', time: '0:16', video: '/videos/video13.MP4' },
    { title: 'Restaurant Reel', views: '+22K views', time: '0:16', video: '/videos/video14.MP4' },
    { title: 'Restaurant Reel', views: '+22K views', time: '0:16', video: '/videos/video15.MP4' },
  ],

  products: [
    { title: 'Product Reel', views: '+21K views', time: '0:14', video: '/videos/prod1.MP4' },
    { title: 'Product Reel', views: '+15K views', time: '0:16', video: '/videos/prod2.MP4' },
    { title: 'Product Reel', views: '+24K views', time: '0:13', video: '/videos/prod3.MP4' },
    { title: 'Product Reel', views: '+29K views', time: '0:18', video: '/videos/prod4.MP4' },
    { title: 'Product Reel', views: '+17K views', time: '0:15', video: '/videos/prod5.MP4' },
    { title: 'Product Reel', views: '+26K views', time: '0:17', video: '/videos/prod6.MP4' },
  ],

  beauty: [
    { title: 'Beauty Reel', views: '+23K views', time: '0:16', video: '/videos/beauty1.MP4' },
    { title: 'Beauty Reel', views: '+19K views', time: '0:15', video: '/videos/beauty2.MP4' },
    { title: 'Beauty Reel', views: '+35K views', time: '0:18', video: '/videos/beauty3.MP4' },
    { title: 'Beauty Reel', views: '+20K views', time: '0:14', video: '/videos/beauty4.MP4' },
    { title: 'Beauty Reel', views: '+27K views', time: '0:17', video: '/videos/beauty5.MP4' },
    { title: 'Beauty Reel', views: '+22K views', time: '0:16', video: '/videos/beauty6.MP4' },
    { title: 'Beauty Reel', views: '+27K views', time: '0:17', video: '/videos/beauty7.MP4' },
    { title: 'Beauty Reel', views: '+27K views', time: '0:17', video: '/videos/beauty9.MP4' },
    { title: 'Beauty Reel', views: '+22K views', time: '0:16', video: '/videos/beauty10.MP4' },
    { title: 'Beauty Reel', views: '+27K views', time: '0:17', video: '/videos/beauty11.MP4' },
    { title: 'Beauty Reel', views: '+22K views', time: '0:16', video: '/videos/beauty12.MP4' },
    { title: 'Beauty Reel', views: '+27K views', time: '0:17', video: '/videos/beauty13.MP4' },
  ],

  events: [
  { title: 'Event Reel', views: '+35K views', time: '0:15', video: '/videos/event1.MP4' },
  { title: 'Event Reel', views: '+28K views', time: '0:18', video: '/videos/event2.MP4' },
  { title: 'Event Reel', views: '+40K views', time: '0:16', video: '/videos/event3.MP4' },
  { title: 'Event Reel', views: '+32K views', time: '0:17', video: '/videos/event4.mov' },
  { title: 'Event Reel', views: '+29K views', time: '0:14', video: '/videos/event5.MP4' },
],

};

const packages = [
  {
    id: 'content',
    label: 'Content',
    price: '$500-$900',
    subtitle: '/ month',
    features: [
      'Up to 10 High-Quality Reels',
      '1 shoot session',
      'Clean editing',
      'A few supporting photos (for feed & branding)',
      'No Posting or management — you get polished content ready to post',
    ],
    cta: 'Learn More',
    featured: false,
  },
  {
    id: 'growth',
    label: 'Content + Page Management',
    badge: 'Most Popular',
    price: '$1,600',
    subtitle: '/ month',
    features: [
      '16 High-Quality Reels (consistent weekly content)',
      '1–2 shoot sessions',
      'Trend-focused editing',
      'Captions & Content planning',
      'Posting up to 5-6x/week',
      'A few supporting photos (for feed & branding)',
      'I handle everything so you can focus on your business. You do not need to think about what to post, when to post, or how to stay consistent',
    ],
    cta: 'Learn More',
    featured: true,
  },
  {
    id: 'ads',
    label: 'Content + Page Management + Ads',
    price: '$1,800+',
    subtitle: '/ month',
    features: [
      'Everything in "Content + Page Management" package',
      'Ad campaign setup (Meta / Instagram)',
      'Ad management',
      'Content optimized for ads',
      'Strategy support',
      'Most businesses we work with struggle with consistency and visibility.',
      'This system solves both — so you can focus on running your business while your content and ads bring attention and customers.',
    ],
    cta: 'Learn More',
    featured: false,
  },
];

const pageBackground =
  'radial-gradient(circle at 70% 18%, rgba(100,125,255,.22), transparent 24%), radial-gradient(circle at 25% 42%, rgba(75,120,255,.12), transparent 18%), linear-gradient(180deg, #03050d 0%, #050816 46%, #040713 100%)';

function CosmicBackground() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0" style={{ background: pageBackground }} />
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-10 left-[-10%] h-[35rem] w-[70rem] rounded-full border border-white/10 opacity-40 blur-[1px]" />
        <div className="absolute top-[10rem] right-[-20%] h-[32rem] w-[65rem] rounded-full border border-blue-200/10 opacity-40" />
        <div className="absolute top-[12rem] left-[-5%] h-[20rem] w-[80rem] rotate-[-8deg] bg-[radial-gradient(ellipse_at_center,rgba(150,180,255,.16),transparent_55%)] blur-2xl" />
        <div className="absolute top-[40rem] left-0 h-[18rem] w-full bg-[radial-gradient(ellipse_at_center,rgba(150,180,255,.10),transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:34px_34px] opacity-[0.10]" />
      </div>
    </>
  );
}

function NavBar({ onNavigate }) {
  return (
    <div className="sticky top-0 z-40 border-b border-white/5 bg-[#03050d]/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 overflow-x-auto px-4 py-4 text-xs text-white/85 sm:gap-8 sm:px-6 sm:text-sm">
        <button onClick={() => onNavigate('services')} className="whitespace-nowrap transition hover:text-white">Services</button>
        <button onClick={() => onNavigate('portfolio')} className="whitespace-nowrap transition hover:text-white">Portfolio</button>
        <button onClick={() => onNavigate('about')} className="whitespace-nowrap transition hover:text-white">About</button>
        <button onClick={() => onNavigate('contact')} className="whitespace-nowrap transition hover:text-white">Contact</button>
      </div>
    </div>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center">
      <h2 className="font-serif text-4xl text-white md:text-5xl">{title}</h2>
      {subtitle ? <p className="mx-auto mt-4 max-w-3xl text-base text-white/75 md:text-lg">{subtitle}</p> : null}
    </div>
  );
}

function GlassCard({ children, featured = false }: { children: React.ReactNode; featured?: boolean }) {
  return (
    <div
      className={[
        'rounded-[2rem] border p-8 backdrop-blur-md bg-white/[0.04] shadow-[0_0_0_1px_rgba(255,255,255,.03)]',
        featured
          ? 'border-blue-200/45 shadow-[0_0_40px_rgba(130,160,255,.18)]'
          : 'border-white/15 shadow-[0_0_25px_rgba(120,150,255,.08)]',
      ].join(' ')}
    >
      {children}
    </div>
  );
}

function PackageCard({ item, onLearnMore }: { item: any; onLearnMore: (id: string, data?: any) => void }) {
  const isPopular = item.id === 'growth';

  return (
    <div
      className={`
        group relative overflow-visible rounded-[1.5rem] p-5 backdrop-blur-md transition-all duration-300 cursor-pointer active:scale-[0.98] sm:rounded-[2rem] sm:p-8
        ${isPopular
          ? 'scale-[1.03] border border-blue-200/45 bg-white/[0.05] shadow-[0_0_45px_rgba(130,160,255,.22)] hover:scale-[1.07] hover:border-blue-200/55 hover:shadow-[0_0_70px_rgba(130,160,255,.34)]'
          : 'border border-white/15 bg-white/[0.04] shadow-[0_0_25px_rgba(120,150,255,.08)] hover:scale-[1.05] hover:border-blue-200/30 hover:shadow-[0_0_50px_rgba(120,160,255,.20)]'
        }
      `}
    >
      <div
        className={`
          pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-400/12 via-blue-300/6 to-transparent transition-opacity duration-300
          ${isPopular ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
        `}
      />

      <div className="relative z-10 text-center">
        <div className="mb-2 min-h-7">
          {item.badge ? (
            <span className="inline-flex rounded-full border border-amber-200/30 bg-amber-200/10 px-4 py-1 text-xs uppercase tracking-[0.22em] text-amber-100 shadow-[0_0_22px_rgba(255,220,160,.35)]">
              {item.badge}
            </span>
          ) : (
            <span className="text-white/70">&nbsp;</span>
          )}
        </div>

        <h3 className="font-serif text-3xl text-white">{item.label}</h3>

        <div className="mt-4 text-white">
          <span className="text-4xl font-medium sm:text-5xl">{item.price}</span>
          <span className="ml-2 text-xl text-white/75">{item.subtitle}</span>
        </div>

        <div className="mx-auto my-7 h-px w-full bg-white/15" />

        <ul className="space-y-4 text-left text-lg text-white/88">
          {item.features.map((feature: string) => (
            <li key={feature} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => onLearnMore(item.id)}
          className="mt-8 inline-flex rounded-full border border-white/25 px-8 py-3 text-lg text-white transition hover:bg-white/10 hover:shadow-[0_0_20px_rgba(120,160,255,.25)]"
        >
          {item.cta}
        </button>
      </div>
    </div>
  );
}

function PortfolioCard({ item }) {
  return (
    <div className="relative overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/[0.03] shadow-lg sm:rounded-[1.4rem]">
      
      <div className="aspect-[9/16] w-full bg-black">
        <video
          src={item.video}
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-sm text-white/90">
        {item.views}
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/65 to-transparent p-4 text-white">
        <div className="flex items-center justify-between gap-3 text-lg">
          <span>{item.title}</span>
          <span className="text-white/80">{item.time}</span>
        </div>
      </div>

    </div>
  );
}

function PortfolioCarousel({ items }: { items: any[] }) {
  const [startIndex, setStartIndex] = React.useState(0);
  const visibleCount = 4;

  const canGoLeft = startIndex > 0;
  const canGoRight = startIndex + visibleCount < items.length;

  const visibleItems = items.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="relative mt-6">
      <button
        type="button"
        onClick={() => setStartIndex((prev) => Math.max(prev - 1, 0))}
        disabled={!canGoLeft}
        className="absolute left-2 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/15 bg-black/70 p-2 text-white/85 backdrop-blur-md transition hover:bg-white/10 disabled:opacity-30"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {visibleItems.map((item, index) => (
  <PortfolioCard key={`${item.video}-${startIndex}-${index}`} item={item} />
))}
      </div>

      <button
        type="button"
        onClick={() =>
          setStartIndex((prev) =>
            Math.min(prev + 1, Math.max(items.length - visibleCount, 0))
          )
        }
        disabled={!canGoRight}
        className="absolute right-2 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/15 bg-black/70 p-2 text-white/85 backdrop-blur-md transition hover:bg-white/10 disabled:opacity-30"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
function MovingVideoStrip({ items }: { items: any[] }) {
  const doubledItems = [...items, ...items];

  return (
    <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-4">
      <motion.div
        className="flex gap-5"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          duration: 28,
          ease: 'linear',
        }}
      >
        {doubledItems.map((item, index) => (
          <div
            key={`${item.video}-${index}`}
            className="w-[160px] shrink-0 sm:w-[220px] md:w-[260px]"
          >
            <PortfolioCard item={item} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function HomePage({ onNavigate }: { onNavigate: (page: string, data?: any) => void }) {
  return (
    <div className="relative z-10 min-h-screen text-white">
      <NavBar onNavigate={onNavigate} />
      <main className="mx-auto max-w-7xl px-6 pb-24 pt-8">
        <section className="pt-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-5xl font-serif text-4xl leading-[1.05] text-white sm:text-5xl md:text-7xl"
          >
            SOCIAL MEDIA <br /> CONTENT &amp; MANAGEMENT
          </motion.h1>
<p className="mx-auto mt-6 max-w-3xl text-lg text-white/78 md:text-2xl">
  <span className="block text-white font-semibold md:text-3xl">
  I create content that brings{" "}
  <span className="text-blue-200">real clients</span> to your business.
</span>

  <span className="block mt-2 text-white/60">
    Video-first content and strategy that turns attention into results.
  </span>
</p>

          <div className="relative mx-auto mt-10 flex max-w-3xl justify-center">
            <div className="absolute inset-x-[-10%] bottom-0 h-56 bg-[radial-gradient(ellipse_at_center,rgba(150,180,255,.22),transparent_60%)] blur-3xl" />
            <img
              src="/images/me.png"
              alt="Photographer holding a camera"
              className="relative z-10 max-h-[22rem] w-auto object-contain drop-shadow-[0_0_45px_rgba(147,170,255,.2)] sm:max-h-[28rem] md:max-h-[32rem]"
            />
          </div>

          <p className="mx-auto mt-8 max-w-5xl text-2xl text-white/85 md:text-4xl">
            Short-form video (Reels) is currently the most powerful way to reach new customers.
          </p>
        </section>

        <section id="services" className="mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
          {packages.map((item) => (
            <PackageCard key={item.id} item={item} onLearnMore={onNavigate} />
          ))}
        </section>

        <section className="mt-10 text-center">
          <p className="text-2xl text-white/84 md:text-3xl">Consistent video content = consistent customer flow.</p>
        </section>

        <section className="mt-12 text-center">
          <h3 className="font-serif text-4xl text-white md:text-5xl">Real Results:</h3>
          <div className="mx-auto mt-5 max-w-3xl space-y-3 text-xl text-white/82 md:text-2xl">
            <p>• Reels designed to maximize reach and engagement</p>
            <p>• Increased engagement and visibility</p>
          </div>
        </section>

<section id="portfolio" className="mt-14">
  <SectionTitle title="Curated Work" />

  <PortfolioCarousel items={portfolioData.restaurants} />

  <div className="mt-8 flex justify-center">
    <button
      onClick={() => onNavigate('portfolio')}
      className="rounded-full border border-white/20 px-8 py-3 text-xl hover:bg-white/10"
    >
      View Full Gallery
    </button>
  </div>
</section>

<section className="mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 backdrop-blur-sm">
  <div className="grid gap-8 px-5 py-8 md:grid-cols-[1fr,1.2fr] md:px-10 md:py-10">
    <div className="flex flex-col items-center justify-center text-center max-w-xl mx-auto">
      <h3 className="font-serif text-4xl text-white md:text-5xl">Need a website as well?</h3>
      <p className="mt-6 max-w-xl text-base leading-7 text-white/80 md:text-xl md:leading-8">
        I create clean, modern websites that work seamlessly with your content and turn visitors into clients.
      </p>
      <button
        onClick={() => onNavigate('website')}
        className="mt-8 w-fit rounded-full border border-white/20 px-8 py-3 text-lg hover:bg-white/10"
      >
        Learn More
      </button>
      <p className="mt-8 text-base leading-7 text-white/70 md:mt-10">Works best when combined with content packages.</p>
      <p className="mt-2 text-base leading-7 text-white/70">Everything can be tailored to your brand and goals.</p>
    </div>

    <div className="space-y-8">
      <div>
        <img src="/images/111.png" alt="Website preview"
          className="mx-auto h-auto w-full scale-110 object-contain opacity-95 md:scale-100"
        />
      </div>

      <div className="rounded-[1.4rem] border border-blue-200/20 bg-white/[0.04] p-6 text-center backdrop-blur-md shadow-[0_0_30px_rgba(120,160,255,.10)] md:rounded-[1.6rem] md:p-8">
        <h3 className="font-serif text-3xl text-white md:text-4xl">
          What’s included
        </h3>

        <div className="mx-auto mt-6 max-w-sm text-left text-base text-white/85 md:text-lg">
          <div className="space-y-3 md:hidden">
            {[
              'Custom website design & development',
              'Clean, modern, user-friendly UI',
              'Mobile-optimized experience',
              'Integration with your content',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/80" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="hidden space-y-6 md:block">
            {[
              'Custom website design & development',
              'Clean, modern, user-friendly UI',
              'Mobile-optimized experience',
              'Integration with your content',
            ].map((item) => (
              <div key={item} className="flex items-center justify-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-2xl text-white md:mt-12 md:text-3xl">
          Website design & development starting from $500
        </p>

        <p className="mt-3 text-base text-white/75 md:text-lg">
          Tailored to your brand and goals
        </p>

        <button
          onClick={() => onNavigate('contact')}
          className="mx-auto mt-6 inline-flex rounded-full border border-blue-200/30 px-8 py-3 text-lg text-white transition hover:bg-white/10 hover:shadow-[0_0_20px_rgba(120,160,255,.25)]"
        >
          Get Website Quote
        </button>
      </div>

<div className="rounded-[1.4rem] border border-blue-200/20 bg-white/[0.03] p-6 backdrop-blur-md shadow-[0_0_40px_rgba(120,160,255,.12)] md:mt-10 md:rounded-[1.6rem] md:p-8">
  <h3 className="text-center font-serif text-3xl text-white md:text-4xl">
    How it works
  </h3>

  <div className="mt-7 space-y-4 md:mt-10 md:grid md:grid-cols-3 md:gap-8 md:space-y-0 md:text-center md:items-center">
    <div className="group relative flex items-center gap-4 rounded-2xl border border-blue-200/20 bg-blue-400/5 p-4 shadow-[0_0_22px_rgba(120,160,255,.13)] md:block md:border-0 md:bg-transparent md:p-0 md:shadow-none">
      <div
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-blue-200/40 bg-blue-400/10 text-lg text-white
        shadow-[0_0_20px_rgba(120,160,255,.25)]
        transition-all duration-300
        group-hover:scale-110
        group-hover:shadow-[0_0_40px_rgba(120,160,255,.45)]
        md:mx-auto md:h-16 md:w-16 md:text-xl"
      >
        01
      </div>

      <p className="text-left text-base leading-6 text-white/85 md:mt-4 md:text-center md:text-lg">
        Content attracts attention
      </p>
    </div>

    <div className="group relative flex items-center gap-4 rounded-2xl border border-blue-200/20 bg-blue-400/5 p-4 shadow-[0_0_22px_rgba(120,160,255,.13)] md:block md:border-0 md:bg-transparent md:p-0 md:shadow-none">
      <div className="hidden md:block absolute -left-10 top-6 text-3xl text-blue-200/40 transition-all duration-300 group-hover:text-blue-200 group-hover:scale-110">
        →
      </div>

      <div
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-blue-200/40 bg-blue-400/10 text-lg text-white
        shadow-[0_0_20px_rgba(120,160,255,.25)]
        transition-all duration-300
        group-hover:scale-110
        group-hover:shadow-[0_0_40px_rgba(120,160,255,.45)]
        md:mx-auto md:h-16 md:w-16 md:text-xl"
      >
        02
      </div>

      <p className="text-left text-base leading-6 text-white/85 md:mt-4 md:text-center md:text-lg">
        Visitors go to your website
      </p>
    </div>

    <div className="group relative flex items-center gap-4 rounded-2xl border border-blue-200/20 bg-blue-400/5 p-4 shadow-[0_0_22px_rgba(120,160,255,.13)] md:block md:border-0 md:bg-transparent md:p-0 md:shadow-none">
      <div className="hidden md:block absolute -left-10 top-6 text-3xl text-blue-200/40 transition-all duration-300 group-hover:text-blue-200 group-hover:scale-110">
        →
      </div>

      <div
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-blue-200/40 bg-blue-400/10 text-lg text-white
        shadow-[0_0_20px_rgba(120,160,255,.25)]
        transition-all duration-300
        group-hover:scale-110
        group-hover:shadow-[0_0_40px_rgba(120,160,255,.45)]
        md:mx-auto md:h-16 md:w-16 md:text-xl"
      >
        03
      </div>

      <p className="text-left text-base leading-6 text-white/85 md:mt-4 md:text-center md:text-lg">
        Website converts them into clients
      </p>
            </div> {/* конец grid */}

      </div> {/* ← ВАЖНО: закрываем How it works блок */}

    </div> {/* конец правой колонки */}

  </div> {/* конец grid */}
   </div>

</section>

        <section id="contact" className="mt-14 text-center">
          <h2 className="font-serif text-5xl text-white md:text-6xl">Let’s Grow Your Social Media</h2>
          <p className="mx-auto mt-5 max-w-3xl text-xl text-white/80">Get in touch to discuss how I can help elevate your brand online.</p>
          <button onClick={() => onNavigate('contact')} className="mt-8 rounded-full border border-white/20 px-10 py-4 text-2xl hover:bg-white/10">
            Get Started
          </button>
        </section>
      </main>
    </div>
  );
}

function SimplePage({ title, eyebrow, subtitle, children, onBack }: any) {
  return (
    <div className="relative z-10 min-h-screen text-white">
      <NavBar onNavigate={onBack} />
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <button onClick={() => onBack('home')} className="mb-8 inline-flex items-center gap-2 text-sm text-white/85 hover:text-white sm:text-base">
          <ChevronLeft className="h-5 w-5" /> Back to Services
        </button>
        {eyebrow ? <div className="text-center text-base text-white/70 sm:text-xl">{eyebrow}</div> : null}
        <h1 className="mt-3 text-center font-serif text-4xl text-white sm:text-5xl md:text-6xl">{title}</h1>
        {subtitle ? <p className="mx-auto mt-5 max-w-4xl text-center text-lg leading-8 text-white/80 sm:text-xl md:text-2xl md:leading-9">{subtitle}</p> : null}
        {children}
      </main>
    </div>
  );
}

function PackageDetailPage({ kind, onNavigate }: { kind: string; onNavigate: (page: string, data?: any) => void }) {
  const content = useMemo(() => {
    if (kind === 'content') {
      return {
        eyebrow: 'Content ($500-$900)',
        title: 'Clean Content That Elevates Your Brand',
        subtitle:
          'High-quality video content designed to make your business stand out and look professional online.',
        bullets: ['Up to 10 High-Quality Reels', '1 on-site shoot session', 'Clean, professional editing', 'A few supporting photos for feed & branding'],
        body: 'This package is perfect if you need strong, visually appealing content but prefer to manage your page yourself. You receive polished content that is ready to post and built to attract attention.',
        support: 'You get content that looks premium — ready to post and built to elevate your brand.',
      };
    }

    if (kind === 'growth') {
      return {
        eyebrow: 'Content + Page Management ($1,600)',
        title: 'Turn Your Content Into Real Clients',
        subtitle:
          'This is not just content — this is a complete system to grow your page and keep your business visible.',
        bullets: [
          '16 High-Quality Reels (consistent weekly content)',
          '1–2 shoot sessions',
          'Trend-focused editing',
          'Content planning',
          'Posting up to 5–6x/week',
          'A few supporting photos for feed & branding',
        ],
        body: 'This is a done-for-you content and management solution. You do not need to think about what to post, when to post, or how to stay consistent — I handle everything for you.',
        support: 'I handle everything so you can focus on your business.',
      };
    }

    return {
      eyebrow: 'Content + Page Management + Ads ($1,800+)',
      title: 'Scale Your Business With Content + Ads',
      subtitle:
        'Combine strong content with targeted ads to reach more people and grow faster.',
      bullets: ['Everything in "Content + Page Management" package', 'Ad campaign setup (Meta / Instagram)', 'Ad management', 'Content optimized for ads', 'Strategy support'],
      body: 'This package is for businesses that want faster and more predictable growth. Content builds your presence. Ads amplify it. Ad budget is separate and depends on your goals.',
      support: 'Content attracts attention. Ads bring it to the right people.',
    };
  }, [kind]);

  const mixedVideos = [
    ...portfolioData.restaurants.slice(0, 2),
    ...portfolioData.products.slice(0, 2),
    ...portfolioData.beauty.slice(0, 2),
    ...portfolioData.events.slice(0, 2),
  ];

  return (
    <SimplePage eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} onBack={onNavigate}>
      <MovingVideoStrip items={mixedVideos} />

      <div className="mt-10 grid gap-8 md:grid-cols-[1fr,.95fr]">
        <GlassCard>
          <ul className="mt-6 space-y-4 text-lg text-white/85">
            {content.bullets.map((bullet: string) => (
              <li key={bullet} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </GlassCard>

        <GlassCard featured>
          <h3 className="text-center font-serif text-3xl text-white">Why It Works</h3>
          <p className="mt-6 text-center text-lg leading-8 text-white/85">{content.body}</p>
          <p className="mt-6 text-center text-2xl font-medium text-white">{content.support}</p>
          <button
            onClick={() => onNavigate('contact', { selectedPackage: kind })}
            className="mx-auto mt-8 block rounded-full border border-white/20 px-8 py-3 text-lg hover:bg-white/10"
          >
            Get Started
          </button>
        </GlassCard>
      </div>
    </SimplePage>
  );
}

function WebsitePage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <SimplePage
      eyebrow="Website Add-On"
      title="Turn Attention Into Bookings"
      subtitle="Your content brings people in. Your website gives them a clear reason to trust you, understand your offer, and reach out."
      onBack={onNavigate}
    >
      <div className="space-y-12">

        {/* IMAGE — БЕЗ РАМКИ */}
        <div>
          <img src="/images/111.png" alt="Website preview"
            className="w-full object-cover opacity-95"
          />
        </div>

        {/* TEXT */}
        <div className="mx-auto max-w-4xl text-center">
          <h3 className="font-serif text-4xl text-white md:text-5xl">
            A beautiful Instagram is not enough.
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80 md:text-xl">
            People may discover you through Reels, but they often need one more step before they become a client.
            A website gives them that step — a polished place to learn, trust, and take action.
          </p>
        </div>

        {/* 3 STEPS */}
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['01', 'Build Trust', 'A polished website makes your brand feel established and professional.'],
            ['02', 'Explain Clearly', 'Your services, offers, location, and next steps are easy to understand.'],
            ['03', 'Convert Better', 'Visitors know exactly how to contact you, book, or request more information.'],
          ].map(([number, title, text]) => (
            <div
              key={title}
              className="rounded-[1.5rem] border border-blue-200/20 bg-white/[0.04] p-6 text-center shadow-[0_0_30px_rgba(120,160,255,.10)]"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-blue-200/40 bg-blue-400/10 text-white shadow-[0_0_22px_rgba(120,160,255,.25)]">
                {number}
              </div>
              <h4 className="mt-5 font-serif text-2xl text-white">{title}</h4>
              <p className="mt-3 leading-7 text-white/75">{text}</p>
            </div>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="grid gap-8 md:grid-cols-[1fr,.9fr]">
          <GlassCard>
            <h3 className="text-center font-serif text-3xl">What You Get</h3>

            <ul className="mt-6 space-y-4 text-lg text-white/85">
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80" />Custom website tailored to your brand and business goals</li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80" />Clean, premium visual design</li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80" />Mobile-optimized layout</li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80" />Clear sections for services, content, and contact</li>
              <li className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80" />Designed to support your social media content</li>
            </ul>
          </GlassCard>

          <GlassCard featured>
            <h3 className="text-center font-serif text-3xl">Perfect For</h3>

            <div className="mt-6 space-y-4 text-center text-lg text-white/85">
              <p>Restaurants & cafés</p>
              <p>Beauty brands & salons</p>
              <p>Showrooms & local businesses</p>
              <p>Service-based brands</p>
            </div>

            <div className="mx-auto my-7 h-px w-full bg-white/10" />

            <p className="text-center text-2xl font-medium text-white">
              Starting from $500
            </p>

            <p className="mt-4 text-center leading-7 text-white/75">
              Best when paired with content packages, so your brand looks consistent everywhere.
            </p>

            <button
              onClick={() => onNavigate('contact')}
              className="mx-auto mt-8 block rounded-full border border-white/20 px-8 py-3 text-lg hover:bg-white/10"
            >
              Get Website Quote
            </button>
          </GlassCard>
        </div>

      </div>
    </SimplePage>
  );
}
function PortfolioPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const categories = [
    {
      key: 'restaurants',
      title: 'Restaurants',
      subtitle: 'Mouthwatering food & drink content that makes people hungry.',
      items: portfolioData.restaurants,
    },
    {
      key: 'products',
      title: 'Products & Brands',
      subtitle: 'Elevating products and brand stories through engaging content.',
      items: portfolioData.products,
    },
    {
      key: 'beauty',
      title: 'Beauty & Salons',
      subtitle: 'Clean, aesthetic content for beauty, hair, and wellness brands.',
      items: portfolioData.beauty,
    },
    {
  key: 'events',
  title: 'Events & Experiences',
  subtitle: 'Capturing energy, atmosphere, and real moments that make people want to be there.',
  items: portfolioData.events,
},
  ];

  return (
    <SimplePage
      title="Curated Portfolio"
      subtitle="Explore a curated selection of my work across different industries. High-quality content tailored to elevate every brand."
      onBack={onNavigate}
    >
      <div className="mt-10 space-y-12">
        {categories.map((section) => (
          <div key={section.key}>
            <h3 className="font-serif text-4xl">{section.title}</h3>
            <p className="mt-2 text-lg text-white/75">{section.subtitle}</p>

            <PortfolioCarousel items={section.items} />
          </div>
        ))}
      </div>
    </SimplePage>
  );
}

function ContactPage({
  onNavigate,
  selectedPackage,
}: {
  onNavigate: (page: string, data?: any) => void
  selectedPackage?: string | null
}) {
  const [submitted, setSubmitted] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/mrerojbb', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setSubmitted(true)
        form.reset()
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <SimplePage
        title=""
        subtitle=""
        onBack={onNavigate}
      >
        <div className="mx-auto max-w-3xl">
          <GlassCard>
            <div className="space-y-8 text-center text-white/90">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-green-300/30 bg-green-400/10 shadow-[0_0_40px_rgba(120,255,180,.18)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-green-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <div>
                <h2 className="font-serif text-5xl text-white">Request Sent</h2>
                <p className="mt-4 text-2xl text-white/85">
                  Thank you! I’ve received your request.
                </p>
              </div>

              <div className="h-px w-full bg-white/10" />

              <div className="space-y-4">
                <p className="text-2xl text-white/85">
                  I’ll review your details and get back to you
                </p>
                <p className="text-3xl font-medium text-white">within 24 hours.</p>
              </div>

              <div className="h-px w-full bg-white/10" />

              <div className="space-y-4">
                <p className="text-3xl text-white">Next step:</p>
                <p className="mx-auto max-w-2xl text-2xl leading-10 text-white/85">
                  We’ll schedule your content shoot and plan everything together.
                </p>
              </div>

              <div className="h-px w-full bg-white/10" />

              <p className="text-2xl text-white/85">
                You’re one step closer to elevating your brand.
              </p>

              <button
                onClick={() => onNavigate('home')}
                className="mx-auto inline-flex rounded-full border border-white/20 px-10 py-4 text-2xl text-white transition hover:bg-white/10 hover:shadow-[0_0_20px_rgba(120,160,255,.25)]"
              >
                Back to Home
              </button>
            </div>
          </GlassCard>
        </div>
      </SimplePage>
    )
  }

  return (
    <SimplePage
      title="Let’s Create Something Beautiful"
      subtitle="Tell me a bit about your business — I’ll take care of the rest."
      onBack={onNavigate}
    >
      <GlassCard>
        <form onSubmit={handleSubmit} className="space-y-6 text-white/90">
          <input type="hidden" name="_subject" value="New website inquiry from your portfolio site" />
          <input type="hidden" name="selectedPackage" value={selectedPackage ?? ''} />

          <p className="text-center text-white/70">
            This form helps me understand your brand and what kind of content you need. It only takes a minute.
          </p>

<div className="grid gap-6 md:grid-cols-2">
  <label className="block space-y-2">
    <span>1. Name</span>
    <input
      name="name"
      placeholder="Your name"
      required
      className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3"
    />
  </label>

  <label className="block space-y-2">
    <span>2. Email</span>
    <input
      type="email"
      name="email"
      placeholder="your@email.com"
      required
      className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3"
    />
  </label>
</div>

<div className="grid gap-6 md:grid-cols-2">
  <label className="block space-y-2">
    <span>3. Phone / WhatsApp</span>
    <input
      type="tel"
      name="phone"
      placeholder="+1 (___) ___-____"
      className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3"
    />
  </label>

  <label className="block space-y-2">
    <span>4. Business / Brand Name</span>
    <input
      name="businessName"
      className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3"
    />
  </label>
</div>

<label className="block space-y-2">
  <span>5. Instagram (or Website) (optional)</span>
  <input
    name="instagramOrWebsite"
    className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3"
  />
</label>

          <div>
            <p className="mb-3 text-lg">6. Which package are you interested in?</p>
            <div className="grid gap-3 md:grid-cols-2">
              {[
                { label: 'Content', value: 'content' },
                { label: 'Content + Page Management', value: 'growth' },
                { label: 'Content + Page Management + Ads', value: 'ads' },
                { label: 'Not sure yet', value: 'not-sure' },
              ].map((x) => (
                <label key={x.value} className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/10 px-4 py-3">
                  <input type="radio" name="package" value={x.label} defaultChecked={selectedPackage === x.value} />
                  {x.label}
                </label>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-lg">7. What type of business do you have?</p>
            <div className="flex flex-wrap gap-3">
              {['Restaurant / Cafe', 'Store / Showroom', 'Beauty / Salon', 'Other'].map((x) => (
                <label key={x} className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/10 px-4 py-2">
                  <input type="checkbox" name="businessType" value={x} /> {x}
                </label>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-lg">8. What kind of content are you looking for?</p>
            <div className="flex gap-3">
              {['Photos', 'Reels / Videos', 'Both'].map((x) => (
                <label key={x} className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/10 px-4 py-2">
                  <input type="checkbox" name="contentType" value={x} /> {x}
                </label>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-lg">9. How involved would you like to be with posting?</p>
            <div className="flex flex-wrap gap-3">
              <label className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/10 px-4 py-2">
                <input type="checkbox" name="postingPreference" value="I prefer to handle it myself" /> I prefer to handle it myself
              </label>
              <label className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/10 px-4 py-2">
                <input type="checkbox" name="postingPreference" value="I want full support" /> I want full support
              </label>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="mb-3 text-lg">10. Do you already have a website?</p>
              <div className="flex flex-wrap gap-3">
                <label className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/10 px-4 py-2">
                  <input type="radio" name="websiteStatus" value="No" /> No
                </label>
                <label className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/10 px-4 py-2">
                  <input type="radio" name="websiteStatus" value="Yes" /> Yes
                </label>
                <label className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/10 px-4 py-2">
                  <input type="radio" name="websiteStatus" value="Yes, but it needs improvement" /> Yes, but it needs improvement
                </label>
              </div>

              <p className="mt-3 text-sm text-white/70">
                If you already have a website, I can improve or redesign it to better match your content.
              </p>
            </div>

            <div>
              <p className="mb-3 text-lg">11. What kind of website do you need?</p>
              <div className="flex flex-wrap gap-3">
                <label className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/10 px-4 py-2">
                  <input type="radio" name="websiteType" value="Landing page" /> Landing page
                </label>
                <label className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/10 px-4 py-2">
                  <input type="radio" name="websiteType" value="Small website" /> Small website
                </label>
                <label className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/10 px-4 py-2">
                  <input type="radio" name="websiteType" value="Not sure yet" /> Not sure yet
                </label>
              </div>
            </div>

            <div>
              <p className="mb-3 text-lg">12. What is the main goal of your website?</p>
              <div className="flex flex-wrap gap-3">
                <label className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/10 px-4 py-2">
                  <input type="radio" name="websiteGoal" value="Attract more clients" /> Attract more clients
                </label>
                <label className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/10 px-4 py-2">
                  <input type="radio" name="websiteGoal" value="Showcase my brand" /> Showcase my brand
                </label>
                <label className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/10 px-4 py-2">
                  <input type="radio" name="websiteGoal" value="Support my content" /> Support my content
                </label>
                <label className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/10 px-4 py-2">
                  <input type="radio" name="websiteGoal" value="Take bookings / inquiries" /> Take bookings / inquiries
                </label>
              </div>
            </div>
          </div>

          <label className="block space-y-2">
            <span>13. Location (Where the shoot will take place)</span>
            <input name="location" className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3" />
          </label>

          <label className="block space-y-2">
            <span>14. Preferred timeline (When do you want to start?)</span>
            <input name="timeline" className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3" />
          </label>

          {/* BUDGET */}
<div>
  <p className="mb-3 text-lg">15. How much are you planning to invest in your content monthly?</p>

  <div className="flex flex-wrap gap-3">
    {[
      'Under $500',
      '$500 – $900',
      '$1,000 – $2,000',
      '$2,000+',
      'Not sure yet',
    ].map((x) => (
      <label
        key={x}
        className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/10 px-4 py-2"
      >
        <input type="radio" name="contentBudget" value={x} /> {x}
      </label>
    ))}
  </div>

  <p className="mt-3 text-sm text-white/70">
    This helps me recommend the best approach for your goals.
  </p>
</div>

{/* ADS */}
<div>
  <p className="mb-3 text-lg">16. Are you interested in paid promotion or ads? (optional)</p>

  <p className="mb-3 text-white/70">
    Paid promotion can help your content reach more people and grow faster.
  </p>

  <div className="grid gap-3 md:grid-cols-[120px,120px,1fr]">
    <label className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/10 px-4 py-2">
      <input type="radio" name="adsInterest" value="No" /> No
    </label>

    <label className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/10 px-4 py-2">
      <input type="radio" name="adsInterest" value="Yes" /> Yes
    </label>

    <input
      name="adBudget"
      placeholder="If yes, estimated ad budget"
      className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3"
    />
  </div>

  <p className="mt-3 text-sm text-white/70">
    Ad strategy, setup, and management are offered separately based on your goals.
  </p>
</div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mx-auto block rounded-full border border-white/20 px-10 py-4 text-xl transition hover:bg-white/10 disabled:opacity-60"
          >
            {isSubmitting ? 'SENDING...' : 'SUBMIT REQUEST'}
          </button>

          <div className="text-center">
            <h4 className="font-serif text-3xl">What happens next?</h4>

            <div className="mt-4 space-y-2 text-white/80">
              <p>• I’ll review your request.</p>
              <p>• I’ll get back to you within 24 hours.</p>
              <p>• I’ll recommend the best option for your goals.</p>
            </div>

            <p className="mt-4 text-white/75">
              You don’t need to overthink anything — I’ll guide you through the entire process.
            </p>
          </div>
        </form>
      </GlassCard>
    </SimplePage>
  )
}

function AboutPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <SimplePage title="About" subtitle="Content designed to look premium, feel intentional, and help brands stay visible." onBack={onNavigate}>
  <div className="mt-16 grid md:grid-cols-2 gap-6 items-center">

  {/* LEFT SIDE */}
  <div className="space-y-8 text-left">

    <p className="text-white/80 text-lg leading-8 max-w-xl">
      I create video-first content for restaurants, brands, beauty businesses, and lifestyle spaces.
      My focus is not only making your page look good, but helping it stay active, consistent,
      and aligned with your business goals.
    </p>

    <div className="grid gap-4">

      <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.05] transition">
        <Camera className="h-6 w-6 text-blue-300 drop-shadow-[0_0_12px_rgba(120,160,255,.5)]" />
        <span className="text-white/90">Premium content shoots</span>
      </div>

      <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.05] transition">
        <TrendingUp className="h-6 w-6 text-blue-300 drop-shadow-[0_0_12px_rgba(120,160,255,.5)]" />
        <span className="text-white/90">Growth-focused strategy</span>
      </div>

      <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.05] transition">
        <Globe className="h-6 w-6 text-blue-300 drop-shadow-[0_0_12px_rgba(120,160,255,.5)]" />
        <span className="text-white/90">Website add-on available</span>
      </div>

      <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.05] transition">
        <Sparkles className="h-6 w-6 text-blue-300 drop-shadow-[0_0_12px_rgba(120,160,255,.5)]" />
        <span className="text-white/90">Clean premium aesthetic</span>
      </div>

    </div>
  </div>

  {/* RIGHT SIDE (ФОТО) */}
  <div className="flex justify-center md:justify-start">
    <img
      src="/images/me.png"
      alt="Me"
      className="h-[320px] w-auto object-contain drop-shadow-[0_0_80px_rgba(120,160,255,.35)] sm:h-[420px] md:h-[520px] md:-mt-10
      drop-shadow-[0_0_80px_rgba(120,160,255,.35)]"
    />
  </div>

</div>
    </SimplePage>
  );
}

export default function App() {
  const [page, setPage] = useState('home');
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const navigate = (nextPage: string, data?: any) => {
    if (data?.selectedPackage) setSelectedPackage(data.selectedPackage);
    setPage(nextPage);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [page]);


  const currentPage = useMemo(() => {
    switch (page) {
      case 'content':
      case 'growth':
      case 'ads':
        return <PackageDetailPage kind={page} onNavigate={navigate} />;
      case 'website':
        return <WebsitePage onNavigate={navigate} />;
      case 'portfolio':
        return <PortfolioPage onNavigate={navigate} />;
      case 'contact':
        return <ContactPage onNavigate={navigate} selectedPackage={selectedPackage} />;
      case 'about':
        return <AboutPage onNavigate={navigate} />;
      default:
        return <HomePage onNavigate={navigate} />;
    }
  }, [page]);

  return (
    <div className="min-h-screen bg-[#03050d] font-[Georgia]">
      <CosmicBackground />
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.28 }}
        >
          {currentPage}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}



