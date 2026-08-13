import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';

const vimeoSource = 'https://player.vimeo.com/video/1209432165?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1';

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
        gsap.to('.experience-orbit', { rotate: 360, duration: 18, repeat: -1, ease: 'none' });
        gsap.to('.drift-type-a', { xPercent: 7, yPercent: -5, rotate: 1.5, duration: 7, yoyo: true, repeat: -1, ease: 'sine.inOut' });
        gsap.to('.drift-type-b', { xPercent: -5, yPercent: 6, rotate: -1, duration: 8.5, yoyo: true, repeat: -1, ease: 'sine.inOut' });
        gsap.to('.drift-frame-a', { y: -20, rotate: 3, duration: 5.2, yoyo: true, repeat: -1, ease: 'sine.inOut' });
        gsap.to('.drift-frame-b', { y: 17, rotate: -4, duration: 6.4, yoyo: true, repeat: -1, ease: 'sine.inOut' });

        const hero = gsap.timeline({ scrollTrigger: { trigger: '.hero', start: 'top top', end: '+=145%', scrub: 1.1 } });
        hero
          .to('.type-build', { xPercent: -42, rotate: -4, opacity: 0.1 }, 0)
          .to('.type-cinematic', { scale: 1.18, yPercent: -5, letterSpacing: '-0.075em' }, 0)
          .to('.type-worlds', { xPercent: 38, rotate: 3, opacity: 0.16 }, 0)
          .to('.hero-portal', { scale: 5.8, opacity: 0.95, borderRadius: 0 }, 0.22)
          .to('.view-experience', { y: -30, opacity: 0 }, 0.12);

        gsap.to('.story-ribbon', {
          xPercent: -38,
          ease: 'none',
          scrollTrigger: { trigger: '.manifesto', start: 'top bottom', end: 'bottom top', scrub: 1 }
        });
        gsap.to('.story-ribbon.back', {
          xPercent: 30,
          ease: 'none',
          scrollTrigger: { trigger: '.manifesto', start: 'top bottom', end: 'bottom top', scrub: 1.2 }
        });
        gsap.fromTo('.manifesto-focus', { scale: 0.78, rotate: -6 }, {
          scale: 1.08,
          rotate: 0,
          ease: 'none',
          scrollTrigger: { trigger: '.manifesto', start: 'top 80%', end: 'bottom 30%', scrub: 1 }
        });

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
            gsap.fromTo(panel, { opacity: 0.38 }, {
              opacity: 1,
              scrollTrigger: { trigger: panel, containerAnimation: workTween, start: 'left 72%', end: 'right 28%', scrub: true }
            });
            if (title) gsap.fromTo(title, { xPercent: 12 }, { xPercent: -9, scrollTrigger: { trigger: panel, containerAnimation: workTween, start: 'left right', end: 'right left', scrub: true } });
          });
        }

        gsap.to('.cap-type-river', { xPercent: -22, ease: 'none', scrollTrigger: { trigger: '.capabilities', start: 'top bottom', end: 'bottom top', scrub: 1 } });
        gsap.to('.product-giant-type', { xPercent: -16, rotate: -3, ease: 'none', scrollTrigger: { trigger: '.product', start: 'top bottom', end: 'bottom top', scrub: 1 } });
        gsap.to('.previs-type-object', { xPercent: 18, ease: 'none', scrollTrigger: { trigger: '.previs', start: 'top bottom', end: 'bottom top', scrub: 1 } });

        gsap.from('.previs-cell', {
          clipPath: 'inset(48% 48% 48% 48%)',
          opacity: 0,
          stagger: 0.07,
          scrollTrigger: { trigger: '.previs-grid', start: 'top 76%', end: 'center 45%', scrub: 1 }
        });

        gsap.utils.toArray<HTMLElement>('.process-step').forEach((step, index) => {
          ScrollTrigger.create({
            trigger: step,
            start: 'top center',
            end: 'bottom center',
            onToggle: (self) => self.isActive && setActiveProcess(index)
          });
        });
        gsap.to('.process-orbit', { rotate: 240, ease: 'none', scrollTrigger: { trigger: '.process', start: 'top bottom', end: 'bottom top', scrub: 1 } });

        gsap.utils.toArray<HTMLElement>('.spec-frame').forEach((frame, index) => {
          gsap.fromTo(frame, { y: 80 + index * 25, rotate: index % 2 ? 5 : -5 }, {
            y: -35,
            rotate: index % 2 ? 1.5 : -1.5,
            ease: 'none',
            scrollTrigger: { trigger: '.spec-worlds', start: 'top bottom', end: 'bottom top', scrub: 1.1 }
          });
        });

        gsap.from('.cta-piece', {
          x: () => gsap.utils.random(-330, 330),
          y: () => gsap.utils.random(-220, 220),
          rotate: () => gsap.utils.random(-35, 35),
          opacity: 0,
          stagger: 0.06,
          scrollTrigger: { trigger: '.final-cta', start: 'top 80%', end: 'center 55%', scrub: 1 }
        });
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
          mouseObjects.forEach((object, index) => gsap.to(object, { x: nx * (7 + index * 2), y: ny * (5 + index * 1.5), duration: 0.8, overwrite: true }));
          gsap.to('.hero-glow', { x: nx * 80, y: ny * 55, duration: 1, overwrite: true });
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
        <div className="hero-meta technical"><span>CREATIVE ROI LAB</span><span>FRAME 0001 / STORY ACTIVE</span></div>

        <div className="hero-type" aria-label="We build cinematic worlds">
          <span className="type-object type-build drift-type-a">WE BUILD</span>
          <span className="type-object type-cinematic mouse-object">CINEMATIC</span>
          <span className="type-object type-worlds drift-type-b">WORLDS.</span>
        </div>

        <div className="hero-frame frame-one drift-frame-a mouse-object"><span>STORY / 01</span></div>
        <div className="hero-frame frame-two drift-frame-b mouse-object"><span>WORLD / 02</span></div>
        <div className="hero-portal mouse-object" />

        <button className="view-experience" type="button" onClick={() => setExperienceOpen(true)} onMouseEnter={() => setCursorLabel('VIEW')} onMouseLeave={() => setCursorLabel('')}>
          <span className="experience-orbit" aria-hidden="true" />
          <span className="view-small technical">CLICK TO VIEW</span>
          <strong>CINEMATIC<br />EXPERIENCE</strong>
          <span className="view-arrow">↗</span>
        </button>

        <div className="hero-foot technical"><span>AI CREATIVE STUDIO</span><span>SCROLL — THE STORY CONTINUES ↓</span></div>
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
                <span className="work-frame-inner" /><span className="work-frame-line" /><span className="work-frame-dot" />
                <div className="work-frame-caption technical">CRL / FRAME {String(24 + index * 7).padStart(3, '0')}</div>
              </div>
              <div className="work-meta"><span>{item[0]}</span><strong>{item[1]}</strong><small>{item[2]}</small></div>
            </article>
          ))}
        </div>
        <div className="work-edge technical">SELECTED WORK / KEEP SCROLLING →</div>
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
        <div className="product-copy">
          <span className="technical">PRODUCT STORYTELLING / 04</span>
          <h2>THE PRODUCT<br />BECOMES THE<br /><em>MAIN CHARACTER.</em></h2>
        </div>
        <div className="product-stage" aria-hidden="true"><i className="product-disc" /><i className="product-frame" /><i className="product-plane" /><i className="product-line" /></div>
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
        <div className="process-visual">
          <span className="technical">HOW WE BUILD / 06</span>
          <div className={`process-machine stage-${activeProcess + 1}`}>
            <div className="process-orbit" /><div className="process-orbit inner" />
            <i className="process-node n1" /><i className="process-node n2" /><i className="process-node n3" /><i className="process-node n4" /><i className="process-node n5" />
            <i className="process-frame p1" /><i className="process-frame p2" /><i className="process-frame p3" />
            <strong>{process[activeProcess][1]}</strong>
          </div>
        </div>
        <div className="process-copy">{process.map((item, index) => <article className={`process-step ${activeProcess === index ? 'active' : ''}`} key={item[0]}><span>{item[0]}</span><h3>{item[1]}</h3></article>)}</div>
      </section>

      <section className="spec-worlds chapter" data-nav="dark">
        <span className="technical spec-label">SPEC WORLDS / 07</span>
        <div className="spec-backtype" aria-hidden="true">WORLDS&nbsp;WORLDS&nbsp;WORLDS</div>
        <div className="spec-canvas">
          <article className="spec-frame spec-1"><div className="spec-art"><span /></div><h2>NEON SUTRA</h2><p className="technical">ORIGINAL IP / WORLD 01</p></article>
          <article className="spec-frame spec-2"><div className="spec-art"><span /></div><h2>MYTHIC SEQUENCE</h2><p className="technical">PREVIS / WORLD 02</p></article>
          <article className="spec-frame spec-3"><div className="spec-art"><span /></div><h2>PRODUCT RITUAL</h2><p className="technical">BRAND FILM / WORLD 03</p></article>
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
        <div className="cta-pieces" aria-hidden="true"><i className="cta-piece one" /><i className="cta-piece two" /><i className="cta-piece three" /><i className="cta-piece four" /><i className="cta-piece five" /></div>
        <div className="cta-frame"><span className="technical">FINAL FRAME / BUILD MODE</span><h2>READY TO BUILD<br /><em>YOUR NEXT WORLD?</em></h2><a href="mailto:hello@creativeroilab.com">START A CREATIVE BUILD →</a></div>
        <footer><span>CREATIVE ROI LAB © 2026</span><span>CINEMATIC STORY SYSTEMS</span><a href="#top">BACK TO FRAME 001 ↑</a></footer>
      </section>

      <div className={`experience-overlay ${experienceOpen ? 'open' : ''}`} aria-hidden={!experienceOpen}>
        <button className="experience-close" type="button" onClick={() => setExperienceOpen(false)}>CLOSE ×</button>
        <div className="experience-title"><span className="technical">CRL / CINEMATIC EXPERIENCE</span><strong>ENTER THE<br /><em>WORLD.</em></strong></div>
        <div className="experience-film"><iframe src={vimeoSource} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" title="CRL cinematic film" /></div>
        <div className="experience-strip" aria-hidden="true">
          <div><span>01</span><b>FILM</b></div><div><span>02</span><b>CHARACTER</b></div><div><span>03</span><b>WORLD</b></div><div><span>04</span><b>PRODUCT</b></div><div><span>05</span><b>PREVIS</b></div><div><span>06</span><b>SYSTEM</b></div>
        </div>
        <p className="experience-note technical">THE MEDIA FRAMES ARE READY FOR CRL FILMS, CHARACTER IMAGES AND PROJECT STILLS AS THE LIBRARY GROWS.</p>
      </div>
    </main>
  );
}
