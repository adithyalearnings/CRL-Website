import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';

const vimeoSource = 'https://player.vimeo.com/video/1209432165?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1';

const projects = [
  {
    number: '01',
    title: 'DOLL BABY',
    type: 'FILM / CHARACTER WORLD',
    image: 'https://svs.gsfc.nasa.gov/vis/a010000/a012000/a012086/Orion-1280viz-MASTER_high.webm',
    format: 'video' as const,
    note: 'Prototype visual'
  },
  {
    number: '02',
    title: 'MYRA',
    type: 'CHARACTER IP / WORLD BUILDING',
    image: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Landscape%2C_road%2C_clouds.jpg',
    format: 'image' as const,
    note: 'Prototype visual'
  },
  {
    number: '03',
    title: 'BENTODENT',
    type: 'PRODUCT FILM / CAMPAIGN SYSTEM',
    image: 'https://svs.gsfc.nasa.gov/vis/a000000/a002700/a002709/a002709.mp4',
    format: 'video' as const,
    note: 'Prototype visual'
  }
];

const capabilities = [
  ['01', 'CINEMATIC FILMS', 'Brand films and product stories designed to feel authored, not assembled.'],
  ['02', 'CAMPAIGN WORLDS', 'One strong visual universe that can expand into multiple formats and launches.'],
  ['03', 'CHARACTER + IP', 'Recurring characters, identity systems and continuity across scenes and campaigns.'],
  ['04', 'PREVIS', 'Storyboards, shot logic and camera thinking before production begins.'],
  ['05', 'AI VIDEO SYSTEMS', 'Repeatable visual locks and production workflows that scale beyond a single asset.']
];

const process = [
  ['01', 'SHAPE', 'Strategy, audience, hook and creative territory.'],
  ['02', 'VISUALIZE', 'The visual language, characters, environments and product world.'],
  ['03', 'STORYBOARD', 'Frames, camera logic, pacing and continuity before production.'],
  ['04', 'PRODUCE', 'AI-native production, compositing, edit and variation.'],
  ['05', 'SYSTEMIZE', 'Turn the winning direction into an expandable content system.']
];

function ProjectMedia({ project }: { project: typeof projects[number] }) {
  if (project.format === 'video') {
    return <video src={project.image} autoPlay muted loop playsInline preload="metadata" />;
  }
  return <img src={project.image} alt="Temporary project visual" loading="lazy" />;
}

export default function Home() {
  const root = useRef<HTMLElement | null>(null);
  const [activeCapability, setActiveCapability] = useState(0);
  const [reelOpen, setReelOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = reelOpen ? 'hidden' : '';
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setReelOpen(false);
    window.addEventListener('keydown', close);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', close);
    };
  }, [reelOpen]);

  useEffect(() => {
    let alive = true;
    let cleanup = () => {};

    const boot = async () => {
      const gsapModule = await import('gsap');
      const triggerModule = await import('gsap/ScrollTrigger');
      const lenisModule = await import('lenis');
      if (!alive) return;

      const gsap = gsapModule.gsap;
      const ScrollTrigger = triggerModule.ScrollTrigger;
      const Lenis = lenisModule.default;
      gsap.registerPlugin(ScrollTrigger);

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const desktop = window.matchMedia('(min-width: 900px)').matches;
      let lenis: InstanceType<typeof Lenis> | null = null;
      let ticker: ((time: number) => void) | null = null;

      if (!reduceMotion) {
        lenis = new Lenis({ lerp: 0.08, smoothWheel: true, wheelMultiplier: 0.9 });
        lenis.on('scroll', ScrollTrigger.update);
        ticker = (time: number) => lenis?.raf(time * 1000);
        gsap.ticker.add(ticker);
        gsap.ticker.lagSmoothing(0);
      }

      const ctx = gsap.context(() => {
        if (reduceMotion) return;

        gsap.from('.hero-kicker, .hero-title span, .hero-actions', {
          y: 36,
          opacity: 0,
          duration: 1.05,
          stagger: 0.08,
          ease: 'power3.out'
        });

        gsap.to('.hero-film', {
          scale: 1.08,
          yPercent: 5,
          ease: 'none',
          scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 }
        });

        gsap.to('.hero-title', {
          yPercent: -12,
          opacity: 0.3,
          ease: 'none',
          scrollTrigger: { trigger: '.hero', start: '35% top', end: 'bottom top', scrub: 1 }
        });

        gsap.utils.toArray<HTMLElement>('.project-card').forEach((card) => {
          const media = card.querySelector('.project-media');
          gsap.from(card, {
            y: 70,
            opacity: 0,
            duration: 1,
            scrollTrigger: { trigger: card, start: 'top 84%', toggleActions: 'play none none reverse' }
          });
          if (media) {
            gsap.fromTo(media, { scale: 1.08 }, {
              scale: 1,
              ease: 'none',
              scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: 1 }
            });
          }
        });

        gsap.from('.capabilities-copy > *', {
          x: -32,
          opacity: 0,
          stagger: 0.08,
          scrollTrigger: { trigger: '.capabilities', start: 'top 72%' }
        });

        gsap.from('.capabilities-visual', {
          scale: 0.92,
          opacity: 0,
          scrollTrigger: { trigger: '.capabilities', start: 'top 74%' }
        });

        gsap.utils.toArray<HTMLElement>('.process-step').forEach((step, index) => {
          gsap.from(step, {
            y: 40,
            opacity: 0,
            delay: index * 0.04,
            scrollTrigger: { trigger: step, start: 'top 88%' }
          });
        });

        if (desktop) {
          const cards = gsap.utils.toArray<HTMLElement>('.project-card');
          cards.forEach((card, index) => {
            gsap.to(card, {
              yPercent: index % 2 === 0 ? -3 : 3,
              ease: 'none',
              scrollTrigger: { trigger: card, start: 'top bottom', end: 'bottom top', scrub: 1.2 }
            });
          });
        }
      }, root);

      ScrollTrigger.refresh();
      cleanup = () => {
        if (ticker) gsap.ticker.remove(ticker);
        lenis?.destroy();
        ctx.revert();
      };
    };

    boot();
    return () => {
      alive = false;
      cleanup();
    };
  }, []);

  const active = projects[activeCapability % projects.length];

  return (
    <main ref={root} className="hybrid-site">
      <Head>
        <title>Creative ROI Lab — Cinematic Worlds for D2C Brands</title>
        <meta name="description" content="Creative ROI Lab is an AI Creative Studio building cinematic films, campaign worlds, character IP, previsualization and scalable content systems." />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </Head>

      <nav className="top-nav">
        <a href="#top" className="brand">CRL</a>
        <div className="nav-links">
          <a href="#work">WORK</a>
          <a href="#capabilities">CAPABILITIES</a>
          <a href="#process">PROCESS</a>
        </div>
        <a className="nav-cta" href="mailto:hello@creativeroilab.com">START ↗</a>
      </nav>

      <section id="top" className="hero">
        <div className="hero-film" aria-hidden="true">
          <iframe src={vimeoSource} title="Creative ROI Lab cinematic film" allow="autoplay; fullscreen; picture-in-picture" />
        </div>
        <div className="hero-vignette" />
        <div className="hero-content">
          <span className="hero-kicker">AI CREATIVE STUDIO · FILM / WORLDS / SYSTEMS</span>
          <h1 className="hero-title">
            <span>WE BUILD</span>
            <span className="serif">CINEMATIC</span>
            <span>WORLDS.</span>
          </h1>
          <div className="hero-actions">
            <button type="button" onClick={() => setReelOpen(true)} className="play-button"><span>▶</span> WATCH REEL</button>
            <a href="#work">SELECTED WORLDS ↓</a>
          </div>
        </div>
        <div className="hero-footer"><span>CONTENT INFRASTRUCTURE FOR D2C BRANDS</span><span>SCROLL TO EXPLORE</span></div>
      </section>

      <section id="work" className="selected-work section-pad">
        <header className="section-head">
          <span className="eyebrow">SELECTED WORLDS / 01</span>
          <h2>THREE WORLDS.<br /><em>THREE DIFFERENT JOBS.</em></h2>
          <p>Film, character and product storytelling—built as expandable creative systems rather than one-off assets.</p>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-media"><ProjectMedia project={project} /><span className="project-shade" /></div>
              <div className="project-top"><span>{project.number}</span><span>{project.type}</span></div>
              <div className="project-bottom"><h3>{project.title}</h3><span>VIEW WORLD ↗</span></div>
              <small>{project.note}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="statement">
        <div className="statement-inner">
          <span className="eyebrow">OUR POINT OF VIEW</span>
          <p>AI makes production faster.</p>
          <p className="muted">The real advantage is building a world worth producing.</p>
        </div>
      </section>

      <section id="capabilities" className="capabilities section-pad">
        <div className="capabilities-copy">
          <span className="eyebrow">CAPABILITIES / 02</span>
          <h2>ONE STUDIO.<br /><em>MULTIPLE CREATIVE LAYERS.</em></h2>
          <div className="cap-list">
            {capabilities.map((item, index) => (
              <button type="button" key={item[0]} className={activeCapability === index ? 'active' : ''} onMouseEnter={() => setActiveCapability(index)} onFocus={() => setActiveCapability(index)} onClick={() => setActiveCapability(index)}>
                <span>{item[0]}</span><strong>{item[1]}</strong><i>↗</i>
              </button>
            ))}
          </div>
          <p className="cap-description">{capabilities[activeCapability][2]}</p>
        </div>

        <div className="capabilities-visual">
          <ProjectMedia project={active} />
          <span className="cap-shade" />
          <div className="cap-visual-meta"><span>ACTIVE LAYER</span><strong>{capabilities[activeCapability][1]}</strong></div>
        </div>
      </section>

      <section className="case-study">
        <div className="case-film">
          <iframe src={vimeoSource} title="CRL case study film" allow="autoplay; fullscreen; picture-in-picture" />
          <span className="case-shade" />
        </div>
        <div className="case-copy">
          <span className="eyebrow">IMMERSIVE DETAIL / 03</span>
          <h2>THE FILM IS ONLY<br /><em>ONE FRAME OF THE SYSTEM.</em></h2>
          <p>Every direction can expand into edits, campaign moments, product visuals, characters, storyboards and performance variations without rebuilding the creative language from zero.</p>
          <a href="#process">SEE HOW WE BUILD ↓</a>
        </div>
      </section>

      <section id="process" className="process section-pad">
        <header className="section-head process-head">
          <span className="eyebrow">HOW WE BUILD / 04</span>
          <h2>FROM IDEA TO<br /><em>REPEATABLE WORLD.</em></h2>
        </header>
        <div className="process-grid">
          {process.map((item) => (
            <article className="process-step" key={item[0]}>
              <span>{item[0]}</span>
              <h3>{item[1]}</h3>
              <p>{item[2]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="fit section-pad">
        <span className="eyebrow">BUILT TO PLUG IN / 05</span>
        <div className="fit-grid">
          <h2>D2C + FMCG<br /><em>AGENCIES<br />PRODUCTION<br />STORYTELLERS</em></h2>
          <div className="fit-copy">
            <p>CRL can operate as the creative studio, the AI-production layer, or the visual development partner inside an existing team.</p>
            <p>Open workflows. Repeatable systems. No dependence on a single shoot day.</p>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-film" aria-hidden="true"><iframe src={vimeoSource} title="CRL background film" allow="autoplay; fullscreen; picture-in-picture" /></div>
        <span className="cta-shade" />
        <div className="cta-content">
          <span className="eyebrow">NEXT WORLD / 06</span>
          <h2>LET’S BUILD<br /><em>SOMETHING ICONIC.</em></h2>
          <a href="mailto:hello@creativeroilab.com">START A CREATIVE BUILD ↗</a>
        </div>
        <footer><span>CREATIVE ROI LAB © 2026</span><a href="#top">BACK TO TOP ↑</a></footer>
      </section>

      <div className={`reel-overlay ${reelOpen ? 'open' : ''}`} aria-hidden={!reelOpen}>
        <button type="button" onClick={() => setReelOpen(false)}>CLOSE ×</button>
        <iframe src={vimeoSource} title="CRL cinematic reel" allow="autoplay; fullscreen; picture-in-picture" />
      </div>
    </main>
  );
}
