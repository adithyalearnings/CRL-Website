import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';

const prototypeMedia = [
  {
    type: 'video',
    src: 'https://svs.gsfc.nasa.gov/vis/a000000/a002700/a002709/a002709.mp4',
    credit: 'NASA / GSFC — Blue Marble'
  },
  {
    type: 'video',
    src: 'https://svs.gsfc.nasa.gov/vis/a010000/a012000/a012086/Orion-1280viz-MASTER_high.webm',
    credit: 'NASA / ESA / STScI — Orion Nebula'
  },
  {
    type: 'video',
    src: 'https://svs.gsfc.nasa.gov/vis/a030000/a030900/a030960/STScI-H-M16wide_1x-1920x1080.webm',
    credit: 'NASA / ESA / STScI — Eagle Nebula'
  },
  {
    type: 'image',
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/BEAUTIFUL_LANDSCAPE_ggu.jpg',
    credit: 'Sasu photography — CC0'
  },
  {
    type: 'image',
    src: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Landscape%2C_road%2C_clouds.jpg',
    credit: 'Digitura — CC0'
  }
] as const;

const work = [
  ['01', 'BRAND FILMS', 'STORY / FILM / AI'],
  ['02', 'CAMPAIGN WORLDS', 'LAUNCH / WORLD / SYSTEM'],
  ['03', 'CHARACTER IP', 'IDENTITY / STORY / CONTINUITY'],
  ['04', 'PREVIS', 'FRAMES / CAMERA / SEQUENCE'],
  ['05', 'PRODUCT STORIES', 'D2C / FMCG / FILM']
];

const capabilities = [
  ['CINEMATIC BRAND FILMS', 'Films that feel built from a world, not assembled from assets.'],
  ['CAMPAIGN WORLDS', 'One visual universe that can expand across launches, formats and moments.'],
  ['PREVISUALIZATION', 'Storyboards, shot logic and camera thinking before production begins.'],
  ['CHARACTER + IP', 'Identity systems and recurring worlds designed for continuity.'],
  ['PRODUCT STORYTELLING', 'Premium product narratives for D2C and FMCG brands.'],
  ['AI VIDEO SYSTEMS', 'Repeatable visual locks, prompts and multi-shot production workflows.']
];

const process = [
  ['01', 'SHAPE'], ['02', 'VISUALIZE'], ['03', 'STORYBOARD'], ['04', 'PRODUCE'], ['05', 'SYSTEMIZE']
];

const audiences = ['D2C + FMCG BRANDS', 'AGENCIES + CREATIVE STUDIOS', 'PRODUCTION HOUSES', 'FILMMAKERS + STORYTELLERS'];

const faqs = [
  ['Can CRL work with our existing agency or production house?', 'Yes. CRL can plug in as the creative, previsualization or AI-production layer without replacing the team already in place.'],
  ['Do you build concepts or only execute AI video?', 'Both. We can enter at raw idea, approved script or production stage and build the missing creative layer.'],
  ['Can one creative world become multiple formats?', 'Yes. A single direction can extend into hero films, social edits, product visuals, pitch frames and repeatable campaign routes.']
];

function Media({ index, className = '' }: { index: number; className?: string }) {
  const media = prototypeMedia[index % prototypeMedia.length];
  if (media.type === 'video') {
    return <video className={className} src={media.src} autoPlay muted loop playsInline preload="metadata" aria-label={media.credit} />;
  }
  return <img className={className} src={media.src} alt="Prototype cinematic visual" loading="lazy" />;
}

export default function Home() {
  const root = useRef<HTMLElement | null>(null);
  const [activeCapability, setActiveCapability] = useState(0);
  const [activeProcess, setActiveProcess] = useState(0);
  const [cursorLabel, setCursorLabel] = useState('');
  const [navOnLight, setNavOnLight] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = experienceOpen ? 'hidden' : '';
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setExperienceOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [experienceOpen]);

  useEffect(() => {
    let alive = true;
    let destroy = () => {};

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
        lenis = new Lenis({ lerp: 0.075, smoothWheel: true, wheelMultiplier: 0.82 });
        lenis.on('scroll', ScrollTrigger.update);
        ticker = (time: number) => lenis?.raf(time * 1000);
        gsap.ticker.add(ticker);
        gsap.ticker.lagSmoothing(0);
      }

      const ctx = gsap.context(() => {
        if (reduceMotion) return;

        gsap.to('.ambient-grid', { backgroundPosition: '90px 62px', duration: 24, repeat: -1, ease: 'none' });
        gsap.to('.hero-media-a', { y: -18, rotate: -1.5, duration: 7.2, yoyo: true, repeat: -1, ease: 'sine.inOut' });
        gsap.to('.hero-media-b', { y: 20, rotate: 2, duration: 8.4, yoyo: true, repeat: -1, ease: 'sine.inOut' });
        gsap.to('.drift-type-a', { xPercent: 5, yPercent: -4, rotate: 1, duration: 7.5, yoyo: true, repeat: -1, ease: 'sine.inOut' });
        gsap.to('.drift-type-b', { xPercent: -4, yPercent: 5, rotate: -0.8, duration: 8.8, yoyo: true, repeat: -1, ease: 'sine.inOut' });

        const hero = gsap.timeline({ scrollTrigger: { trigger: '.hero', start: 'top top', end: '+=145%', scrub: 1.1 } });
        hero
          .to('.type-build', { xPercent: -32, opacity: 0.08 }, 0)
          .to('.type-cinematic', { scale: 1.15, letterSpacing: '-0.075em' }, 0)
          .to('.type-worlds', { xPercent: 28, opacity: 0.12 }, 0)
          .to('.hero-media-a', { xPercent: -20, scale: 1.14 }, 0)
          .to('.hero-media-b', { xPercent: 18, scale: 1.1 }, 0)
          .to('.hero-scroll-cue', { y: -20, opacity: 0 }, 0.1);

        gsap.to('.story-ribbon', { xPercent: -38, ease: 'none', scrollTrigger: { trigger: '.manifesto', start: 'top bottom', end: 'bottom top', scrub: 1 } });
        gsap.to('.story-ribbon.back', { xPercent: 30, ease: 'none', scrollTrigger: { trigger: '.manifesto', start: 'top bottom', end: 'bottom top', scrub: 1.2 } });
        gsap.fromTo('.manifesto-focus', { scale: 0.82, rotate: -4 }, { scale: 1.04, rotate: 0, ease: 'none', scrollTrigger: { trigger: '.manifesto', start: 'top 80%', end: 'bottom 30%', scrub: 1 } });

        if (desktop) {
          const panels = gsap.utils.toArray<HTMLElement>('.work-panel');
          const workTween = gsap.to('.work-track', {
            xPercent: -80,
            ease: 'none',
            scrollTrigger: {
              trigger: '.work-world',
              start: 'top top',
              end: () => `+=${window.innerWidth * 4.1}`,
              pin: true,
              scrub: 0.9,
              onUpdate: (self) => {
                const tilt = Math.max(-3, Math.min(3, self.getVelocity() / -850));
                gsap.to('.work-frame', { rotateY: tilt, duration: 0.4, overwrite: true });
              }
            }
          });
          panels.forEach((panel) => {
            const title = panel.querySelector('.work-title-object');
            gsap.fromTo(panel, { opacity: 0.38 }, { opacity: 1, scrollTrigger: { trigger: panel, containerAnimation: workTween, start: 'left 72%', end: 'right 28%', scrub: true } });
            if (title) gsap.fromTo(title, { xPercent: 12 }, { xPercent: -9, scrollTrigger: { trigger: panel, containerAnimation: workTween, start: 'left right', end: 'right left', scrub: true } });
          });
        }

        gsap.to('.cap-type-river', { xPercent: -22, ease: 'none', scrollTrigger: { trigger: '.capabilities', start: 'top bottom', end: 'bottom top', scrub: 1 } });
        gsap.to('.product-giant-type', { xPercent: -16, rotate: -2, ease: 'none', scrollTrigger: { trigger: '.product', start: 'top bottom', end: 'bottom top', scrub: 1 } });
        gsap.to('.previs-type-object', { xPercent: 18, ease: 'none', scrollTrigger: { trigger: '.previs', start: 'top bottom', end: 'bottom top', scrub: 1 } });

        gsap.from('.previs-cell', { clipPath: 'inset(48% 48% 48% 48%)', opacity: 0, stagger: 0.07, scrollTrigger: { trigger: '.previs-grid', start: 'top 76%', end: 'center 45%', scrub: 1 } });

        gsap.utils.toArray<HTMLElement>('.process-step').forEach((step, index) => {
          ScrollTrigger.create({ trigger: step, start: 'top center', end: 'bottom center', onToggle: (self) => self.isActive && setActiveProcess(index) });
        });
        gsap.to('.process-orbit', { rotate: 240, ease: 'none', scrollTrigger: { trigger: '.process', start: 'top bottom', end: 'bottom top', scrub: 1 } });

        gsap.utils.toArray<HTMLElement>('.spec-frame').forEach((frame, index) => {
          gsap.fromTo(frame, { y: 80 + index * 25, rotate: index % 2 ? 5 : -5 }, { y: -35, rotate: index % 2 ? 1.5 : -1.5, ease: 'none', scrollTrigger: { trigger: '.spec-worlds', start: 'top bottom', end: 'bottom top', scrub: 1.1 } });
        });

        gsap.fromTo('.cta-visual', { scale: 0.82, opacity: 0.18 }, { scale: 1.08, opacity: 0.42, ease: 'none', scrollTrigger: { trigger: '.final-cta', start: 'top bottom', end: 'bottom bottom', scrub: 1 } });
      }, root);

      const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-nav]'));
      const navObserver = new IntersectionObserver((entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setNavOnLight((visible.target as HTMLElement).dataset.nav === 'light');
      }, { threshold: [0.25, 0.5, 0.75] });
      sections.forEach((section) => navObserver.observe(section));

      let moveHandler: ((event: MouseEvent) => void) | null = null;
      if (desktop) {
        const dot = document.querySelector<HTMLElement>('.cursor-dot');
        const follower = document.querySelector<HTMLElement>('.cursor-follower');
        const mouseObjects = gsap.utils.toArray<HTMLElement>('.mouse-object');
        const dotX = dot ? gsap.quickTo(dot, 'x', { duration: 0.14, ease: 'power3' }) : null;
        const dotY = dot ? gsap.quickTo(dot, 'y', { duration: 0.14, ease: 'power3' }) : null;
        const followX = follower ? gsap.quickTo(follower, 'x', { duration: 0.36, ease: 'power3' }) : null;
        const followY = follower ? gsap.quickTo(follower, 'y', { duration: 0.36, ease: 'power3' }) : null;
        moveHandler = (event: MouseEvent) => {
          dotX?.(event.clientX); dotY?.(event.clientY); followX?.(event.clientX); followY?.(event.clientY);
          const nx = event.clientX / window.innerWidth - 0.5;
          const ny = event.clientY / window.innerHeight - 0.5;
          mouseObjects.forEach((object, index) => gsap.to(object, { x: nx * (6 + index * 2), y: ny * (5 + index * 1.4), duration: 0.8, overwrite: true }));
          gsap.to('.hero-glow', { x: nx * 72, y: ny * 50, duration: 1, overwrite: true });
        };
        window.addEventListener('mousemove', moveHandler, { passive: true });
      }

      ScrollTrigger.refresh();
      destroy = () => {
        navObserver.disconnect();
        if (moveHandler) window.removeEventListener('mousemove', moveHandler);
        if (ticker) gsap.ticker.remove(ticker);
        lenis?.destroy();
        ctx.revert();
      };
    };

    boot();
    return () => { alive = false; destroy(); };
  }, []);

  return (
    <main ref={root} className="site-shell">
      <Head>
        <title>Creative ROI Lab — Cinematic Worlds</title>
        <meta name="description" content="Creative ROI Lab builds cinematic brand films, campaign worlds, previsualization, character IP and AI video systems." />
      </Head>

      <div className="cursor-dot" aria-hidden="true" />
      <div className={`cursor-follower ${cursorLabel ? 'has-label' : ''}`} aria-hidden="true"><span>{cursorLabel}</span></div>

      <nav className={`nav ${navOnLight ? 'nav-light' : 'nav-dark'}`}>
        <a className="nav-mark" href="#top">CRL</a>
        <div className="nav-links"><a href="#work">WORK</a><a href="#capabilities">CAPABILITIES</a><a href="#process">PROCESS</a><a href="#start">START</a></div>
      </nav>

      <section id="top" className="hero chapter" data-nav="dark">
        <div className="ambient-grid" /><div className="hero-glow" />

        <figure className="hero-media hero-media-a mouse-object" aria-hidden="true"><Media index={1} /><span /></figure>
        <figure className="hero-media hero-media-b mouse-object" aria-hidden="true"><Media index={3} /><span /></figure>

        <div className="hero-type" aria-label="We build cinematic worlds">
          <span className="type-object type-build drift-type-a">WE BUILD</span>
          <span className="type-object type-cinematic mouse-object">CINEMATIC</span>
          <span className="type-object type-worlds drift-type-b">WORLDS.</span>
        </div>

        <button className="hero-scroll-cue" type="button" onClick={() => setExperienceOpen(true)} aria-label="View cinematic experience">
          <span className="mouse-icon" aria-hidden="true"><i /></span>
          <small>VIEW EXPERIENCE</small>
        </button>
      </section>

      <section className="manifesto chapter" data-nav="dark">
        <div className="story-ribbon">STORY&nbsp;&nbsp;WORLD&nbsp;&nbsp;CHARACTER&nbsp;&nbsp;SEQUENCE&nbsp;&nbsp;SYSTEM&nbsp;&nbsp;STORY&nbsp;&nbsp;WORLD&nbsp;&nbsp;CHARACTER</div>
        <div className="story-ribbon back">SYSTEM&nbsp;&nbsp;SEQUENCE&nbsp;&nbsp;CHARACTER&nbsp;&nbsp;WORLD&nbsp;&nbsp;STORY&nbsp;&nbsp;SYSTEM&nbsp;&nbsp;SEQUENCE</div>
        <div className="manifesto-focus">
          <span className="technical">THE CREATIVE LAYER / 01</span>
          <strong>ONE IDEA.<br /><em>ONE WORLD.</em><br />ENDLESS FRAMES.</strong>
          <p>We build the visual logic first, then let every film, character, storyboard and campaign grow from the same world.</p>
        </div>
      </section>

      <section id="work" className="work-world chapter" data-nav="dark" onMouseEnter={() => setCursorLabel('VIEW')} onMouseLeave={() => setCursorLabel('')}>
        <div className="work-track">
          {work.map((item, index) => (
            <article className="work-panel" key={item[0]}>
              <div className="work-title-object">{item[1]}</div>
              <div className="work-frame">
                <Media index={index} className="work-media" />
                <span className="work-frame-inner" />
                <div className="media-credit technical">{prototypeMedia[index].credit}</div>
              </div>
              <div className="work-meta"><span>{item[0]}</span><strong>{item[1]}</strong><small>{item[2]}</small></div>
            </article>
          ))}
        </div>
        <div className="work-edge technical">PROTOTYPE MEDIA / SCROLL →</div>
      </section>

      <section id="capabilities" className="capabilities chapter" data-nav="dark">
        <div className="cap-type-river" aria-hidden="true">BUILD&nbsp;&nbsp;DIRECT&nbsp;&nbsp;FRAME&nbsp;&nbsp;WORLD&nbsp;&nbsp;BUILD&nbsp;&nbsp;DIRECT&nbsp;&nbsp;FRAME&nbsp;&nbsp;WORLD</div>
        <div className="cap-copy">
          <span className="technical">CAPABILITIES / 03</span>
          <div className="cap-list">
            {capabilities.map((item, index) => (
              <button type="button" key={item[0]} className={activeCapability === index ? 'active' : ''} onMouseEnter={() => { setActiveCapability(index); setCursorLabel('OPEN'); }} onMouseLeave={() => setCursorLabel('')} onFocus={() => setActiveCapability(index)}>
                <span>0{index + 1}</span><strong>{item[0]}</strong>
              </button>
            ))}
          </div>
          <p>{capabilities[activeCapability][1]}</p>
        </div>
        <div className={`cap-visual cap-visual-${activeCapability + 1}`} aria-hidden="true">
          <div className="cap-core" /><div className="cap-frame a" /><div className="cap-frame b" /><div className="cap-frame c" />
          <span className="cap-word">{capabilities[activeCapability][0].split(' ')[0]}</span>
        </div>
      </section>

      <section className="product chapter" data-nav="dark">
        <div className="product-giant-type" aria-hidden="true">PRODUCTS DESERVE WORLDS.</div>
        <div className="product-copy"><span className="technical">PRODUCT STORYTELLING / 04</span><h2>THE PRODUCT<br />BECOMES THE<br /><em>MAIN CHARACTER.</em></h2></div>
        <div className="product-stage"><div className="product-media"><Media index={4} /></div><i className="product-disc" /><i className="product-frame" /><i className="product-line" /></div>
      </section>

      <section className="previs chapter" data-nav="light">
        <div className="previs-type-object" aria-hidden="true">SEE IT BEFORE YOU SHOOT IT.</div>
        <div className="previs-head"><span className="technical">PREVISUALIZATION / 05</span><h2>SEE THE FILM<br /><em>BEFORE THE FILM.</em></h2></div>
        <div className="previs-grid">
          {['PUSH IN', 'LOCKED', 'TRACK R', 'HOLD', 'ORBIT', 'DOLLY', 'WIDE', 'DETAIL'].map((move, index) => (
            <div className="previs-cell" key={move}><span className={`previs-art art-${index + 1}`} /><div className="technical"><b>CAM {String(index + 1).padStart(2, '0')}</b><span>{index % 3 === 0 ? '35MM' : index % 3 === 1 ? '50MM' : '24MM'}</span><span>{move}</span><span>FRAME {String(index + 1).padStart(2, '0')}</span></div></div>
          ))}
        </div>
      </section>

      <section id="process" className="process chapter" data-nav="dark">
        <div className="process-visual"><span className="technical">HOW WE BUILD / 06</span><div className={`process-machine stage-${activeProcess + 1}`}><div className="process-orbit" /><div className="process-orbit inner" /><i className="process-node n1" /><i className="process-node n2" /><i className="process-node n3" /><i className="process-node n4" /><i className="process-node n5" /><i className="process-frame p1" /><i className="process-frame p2" /><i className="process-frame p3" /><strong>{process[activeProcess][1]}</strong></div></div>
        <div className="process-copy">{process.map((item, index) => <article className={`process-step ${activeProcess === index ? 'active' : ''}`} key={item[0]}><span>{item[0]}</span><h3>{item[1]}</h3></article>)}</div>
      </section>

      <section className="spec-worlds chapter" data-nav="dark">
        <span className="technical spec-label">SPEC WORLDS / 07</span>
        <div className="spec-backtype" aria-hidden="true">WORLDS&nbsp;WORLDS&nbsp;WORLDS</div>
        <div className="spec-canvas">
          {['NEON SUTRA', 'MYTHIC SEQUENCE', 'PRODUCT RITUAL'].map((title, index) => <article className={`spec-frame spec-${index + 1}`} key={title}><div className="spec-art"><Media index={index + 1} /></div><h2>{title}</h2><p className="technical">PROTOTYPE WORLD / 0{index + 1}</p></article>)}
        </div>
      </section>

      <section className="audience chapter" data-nav="dark">
        <div className="audience-title"><span className="technical">WHO WE WORK WITH / 08</span><h2>BUILT TO PLUG INTO<br /><em>MODERN CREATIVE TEAMS.</em></h2></div>
        <div className="audience-list">{audiences.map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}</div>
      </section>

      <section className="faq chapter" data-nav="light">
        <div className="faq-title"><span className="technical">FAQ / 09</span><h2>THE PRACTICAL<br /><em>PART.</em></h2></div>
        <div className="faq-list">{faqs.map((item) => <details key={item[0]}><summary>{item[0]}<span>+</span></summary><p>{item[1]}</p></details>)}</div>
      </section>

      <section id="start" className="final-cta chapter" data-nav="dark" onMouseEnter={() => setCursorLabel('START')} onMouseLeave={() => setCursorLabel('')}>
        <div className="cta-visual" aria-hidden="true"><Media index={0} /></div>
        <div className="cta-minimal"><h2>BUILD THE<br /><em>NEXT WORLD.</em></h2><a href="mailto:hello@creativeroilab.com">START A CREATIVE BUILD ↗</a></div>
        <div className="cta-bottom technical"><span>CRL © 2026</span><a href="#top">↑</a></div>
      </section>

      <div className={`experience-overlay ${experienceOpen ? 'open' : ''}`} aria-hidden={!experienceOpen}>
        <button className="experience-close" type="button" onClick={() => setExperienceOpen(false)}>CLOSE ×</button>
        <div className="experience-heading"><span className="technical">PROTOTYPE CINEMATIC EXPERIENCE</span><strong>A WORLD<br /><em>IN MOTION.</em></strong></div>
        <div className="experience-reel">
          <figure className="reel-main"><Media index={1} /><figcaption>{prototypeMedia[1].credit}</figcaption></figure>
          <figure className="reel-small reel-top"><Media index={3} /><figcaption>{prototypeMedia[3].credit}</figcaption></figure>
          <figure className="reel-small reel-bottom"><Media index={2} /><figcaption>{prototypeMedia[2].credit}</figcaption></figure>
        </div>
        <p className="experience-note">Temporary public/CC0 prototype media. Every frame can later be replaced by CRL films, characters, products and storyboards.</p>
      </div>
    </main>
  );
}
