import Head from 'next/head';
import { useEffect, useMemo, useRef, useState } from 'react';

const work = [
  ['01', 'BRAND FILMS', 'Story / Film / AI'],
  ['02', 'CAMPAIGN WORLDS', 'Launch / World / System'],
  ['03', 'CHARACTER IP', 'Identity / Story / Continuity'],
  ['04', 'PREVIS', 'Frames / Camera / Sequence'],
  ['05', 'PRODUCT STORIES', 'D2C / FMCG / Film']
];

const capabilities = [
  ['CINEMATIC BRAND FILMS', 'Film-strip geometry, wide cinematic frames and title-sequence pacing.'],
  ['CAMPAIGN WORLDS', 'Expandable visual universes designed to carry launches, formats and recurring stories.'],
  ['PREVISUALIZATION', 'Storyboards, camera logic, shot systems and pitch-ready visual sequences.'],
  ['CHARACTER + IP', 'Identity systems, reference logic and recurring worlds built for continuity.'],
  ['PRODUCT STORYTELLING', 'Premium product narratives, performance variations and D2C visual systems.'],
  ['AI VIDEO SYSTEMS', 'Multi-shot prompting, visual locks and repeatable AI production workflows.']
];

const process = [
  ['01', 'SHAPE', 'We sharpen the raw idea, brief or script into one clear creative direction.'],
  ['02', 'VISUALIZE', 'We build the visual world: references, key frames, characters and environments.'],
  ['03', 'STORYBOARD', 'We map shots, camera movement, pacing, continuity and production logic.'],
  ['04', 'PRODUCE', 'We create AI-assisted films, frames, prompts and campaign variations.'],
  ['05', 'SYSTEMIZE', 'We turn the direction into a repeatable content system for future stories.']
];

const audiences = [
  ['D2C + FMCG BRANDS', 'Cinematic product stories, launches, founder films and scalable visual systems.'],
  ['AGENCIES + CREATIVE STUDIOS', 'Pitch worlds, storyboards, concept routes and AI-assisted production support.'],
  ['PRODUCTION HOUSES', 'Previsualization, treatment frames, character references and visual development.'],
  ['FILMMAKERS + STORYTELLERS', 'Original IP, films, characters, music-video worlds and cinematic experiments.']
];

const faqs = [
  ['Can CRL work alongside an existing agency or production house?', 'Yes. CRL can operate as a specialist creative, previsualization and AI-production layer inside an existing team.'],
  ['Do you provide concepts and storyboards, or only AI production?', 'Both. We can enter at raw idea, approved script or production stage and build the layer that is missing.'],
  ['Can a project combine real footage and AI-generated visuals?', 'Yes. Workflows can be fully AI, hybrid, previsualization-first or designed to extend existing live-action production.'],
  ['How do you maintain character and product consistency?', 'We create reference systems first: identity boards, product locks, visual rules, continuity notes and platform-specific prompts.'],
  ['Can one creative direction become multiple formats?', 'Yes. A single world can extend into hero films, cutdowns, social edits, product visuals, pitch frames and recurring campaign routes.']
];

const specWorlds = [
  ['NEON SUTRA', 'ORIGINAL IP / WORLD 01'],
  ['MYTHIC SEQUENCE', 'PREVIS / WORLD 02'],
  ['PRODUCT RITUAL', 'BRAND FILM / WORLD 03']
];

export default function Home() {
  const root = useRef<HTMLElement | null>(null);
  const [activeCapability, setActiveCapability] = useState(0);
  const [activeProcess, setActiveProcess] = useState(0);
  const [cursorLabel, setCursorLabel] = useState('');
  const [navDark, setNavDark] = useState(true);

  const capSceneClass = useMemo(() => `cap-scene cap-scene-${activeCapability + 1}`, [activeCapability]);

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
        lenis = new Lenis({ lerp: 0.085, smoothWheel: true, wheelMultiplier: 0.9 });
        lenis.on('scroll', ScrollTrigger.update);
        ticker = (time: number) => lenis?.raf(time * 1000);
        gsap.ticker.add(ticker);
        gsap.ticker.lagSmoothing(0);
      }

      const ctx = gsap.context(() => {
        if (reduceMotion) return;

        gsap.to('.ambient-grid', { backgroundPosition: '120px 80px', duration: 18, repeat: -1, ease: 'none' });
        gsap.to('.ambient-orbit', { rotate: 360, duration: 32, repeat: -1, ease: 'none' });
        gsap.to('.hero-frame.float-a', { y: -18, rotate: 4, duration: 4.8, yoyo: true, repeat: -1, ease: 'sine.inOut' });
        gsap.to('.hero-frame.float-b', { y: 22, rotate: -6, duration: 6.2, yoyo: true, repeat: -1, ease: 'sine.inOut' });
        gsap.to('.hero-frame.float-c', { x: 16, y: -12, duration: 5.5, yoyo: true, repeat: -1, ease: 'sine.inOut' });

        const hero = gsap.timeline({
          scrollTrigger: { trigger: '.hero', start: 'top top', end: '+=130%', scrub: 1 }
        });
        hero
          .to('.hero-word-build', { yPercent: -90, opacity: 0.12 }, 0)
          .to('.hero-word-cinematic', { scaleX: 1.12, letterSpacing: '-0.085em' }, 0)
          .to('.hero-word-worlds', { scale: 1.34, transformOrigin: '50% 50%' }, 0)
          .to('.portal-frame', { scale: 7.5, borderWidth: 0.5, opacity: 1 }, 0.25)
          .to('.hero-meta', { opacity: 0, y: -30 }, 0.15);

        const manifestoWords = gsap.utils.toArray<HTMLElement>('.manifesto-word');
        const manifestoTl = gsap.timeline({
          scrollTrigger: { trigger: '.manifesto', start: 'top top', end: '+=280%', pin: '.manifesto-stage', scrub: 1 }
        });
        manifestoWords.forEach((word, index) => {
          manifestoTl.fromTo(word,
            { opacity: index === 0 ? 1 : 0, xPercent: index % 2 ? 12 : -12, scale: 0.78 },
            { opacity: 1, xPercent: 0, scale: 1, duration: 0.45 },
            index * 0.58
          );
          if (index < manifestoWords.length - 1) {
            manifestoTl.to(word, { opacity: 0.08, xPercent: index % 2 ? -22 : 22, scale: 1.1, duration: 0.38 }, index * 0.58 + 0.45);
          }
        });
        manifestoTl.to('.manifesto-word:last-child', { scale: 1.35, letterSpacing: '-0.09em', duration: 0.5 }, '>-0.1');
        manifestoTl.to('.system-blocks span', { opacity: 1, scale: 1, stagger: 0.04, duration: 0.35 }, '<');

        if (desktop) {
          const panels = gsap.utils.toArray<HTMLElement>('.work-panel');
          const workTween = gsap.to('.work-track', {
            xPercent: -80,
            ease: 'none',
            scrollTrigger: {
              trigger: '.work-world',
              start: 'top top',
              end: () => `+=${window.innerWidth * 4.2}`,
              pin: true,
              scrub: 0.8,
              onUpdate: (self) => {
                const tilt = Math.max(-3.5, Math.min(3.5, self.getVelocity() / -700));
                gsap.to('.work-art', { rotateY: tilt, duration: 0.35, overwrite: true });
              }
            }
          });
          panels.forEach((panel) => {
            gsap.fromTo(panel, { opacity: 0.48, scale: 0.94 }, {
              opacity: 1,
              scale: 1,
              scrollTrigger: { trigger: panel, containerAnimation: workTween, start: 'left 68%', end: 'right 32%', scrub: true }
            });
          });
        }

        gsap.utils.toArray<HTMLElement>('.chapter').forEach((chapter) => {
          const shapes = chapter.querySelectorAll('.parallax-shape');
          if (!shapes.length) return;
          gsap.fromTo(shapes, { yPercent: 16 }, {
            yPercent: -16,
            stagger: 0.06,
            ease: 'none',
            scrollTrigger: { trigger: chapter, start: 'top bottom', end: 'bottom top', scrub: 1.2 }
          });
        });

        gsap.from('.previs-cell', {
          clipPath: 'inset(50% 50% 50% 50%)',
          opacity: 0,
          stagger: 0.08,
          scrollTrigger: { trigger: '.previs-grid', start: 'top 72%', end: 'center 45%', scrub: 1 }
        });

        const processSteps = gsap.utils.toArray<HTMLElement>('.process-step');
        processSteps.forEach((step, index) => {
          ScrollTrigger.create({
            trigger: step,
            start: 'top center',
            end: 'bottom center',
            onToggle: (self) => self.isActive && setActiveProcess(index)
          });
        });
        gsap.to('.process-ring', { rotate: 220, ease: 'none', scrollTrigger: { trigger: '.process', start: 'top bottom', end: 'bottom top', scrub: 1 } });
        gsap.to('.process-line-fill', { scaleY: 1, transformOrigin: 'top', ease: 'none', scrollTrigger: { trigger: '.process-copy', start: 'top 55%', end: 'bottom 55%', scrub: true } });

        gsap.utils.toArray<HTMLElement>('.spec-frame').forEach((frame, index) => {
          gsap.fromTo(frame, { y: 90 + index * 20, rotate: index % 2 ? 7 : -6 }, {
            y: -30,
            rotate: index % 2 ? 2 : -2,
            ease: 'none',
            scrollTrigger: { trigger: '.spec-worlds', start: 'top bottom', end: 'bottom top', scrub: 1.1 }
          });
        });

        gsap.from('.cta-fragment', {
          x: () => gsap.utils.random(-420, 420),
          y: () => gsap.utils.random(-260, 260),
          rotate: () => gsap.utils.random(-60, 60),
          opacity: 0,
          stagger: 0.05,
          scrollTrigger: { trigger: '.final-cta', start: 'top 78%', end: 'center 55%', scrub: 1 }
        });
      }, root);

      const darkSections = Array.from(document.querySelectorAll<HTMLElement>('[data-nav="dark"]'));
      const navObserver = new IntersectionObserver((entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setNavDark((visible.target as HTMLElement).dataset.nav === 'dark');
      }, { threshold: [0.2, 0.45, 0.7] });
      darkSections.forEach((section) => navObserver.observe(section));
      document.querySelectorAll<HTMLElement>('[data-nav="light"]').forEach((section) => navObserver.observe(section));

      let moveHandler: ((event: MouseEvent) => void) | null = null;
      if (desktop) {
        const dot = document.querySelector<HTMLElement>('.cursor-dot');
        const follower = document.querySelector<HTMLElement>('.cursor-follower');
        const frames = gsap.utils.toArray<HTMLElement>('.mouse-frame');
        const dotX = dot ? gsap.quickTo(dot, 'x', { duration: 0.16, ease: 'power3' }) : null;
        const dotY = dot ? gsap.quickTo(dot, 'y', { duration: 0.16, ease: 'power3' }) : null;
        const followX = follower ? gsap.quickTo(follower, 'x', { duration: 0.42, ease: 'power3' }) : null;
        const followY = follower ? gsap.quickTo(follower, 'y', { duration: 0.42, ease: 'power3' }) : null;
        moveHandler = (event: MouseEvent) => {
          dotX?.(event.clientX); dotY?.(event.clientY); followX?.(event.clientX); followY?.(event.clientY);
          const nx = event.clientX / window.innerWidth - 0.5;
          const ny = event.clientY / window.innerHeight - 0.5;
          frames.forEach((frame, index) => gsap.to(frame, { x: nx * (10 + index * 4), y: ny * (8 + index * 3), duration: 0.8, overwrite: true }));
          gsap.to('.hero-glow', { x: nx * 90, y: ny * 70, duration: 0.9, overwrite: true });
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
        <title>Creative ROI Lab — Cinematic Worlds & AI Story Systems</title>
        <meta name="description" content="Creative ROI Lab builds cinematic brand films, campaign worlds, character IP, previsualization and AI video systems for modern brands and production teams." />
      </Head>

      <div className="cursor-dot" aria-hidden="true" />
      <div className={`cursor-follower ${cursorLabel ? 'has-label' : ''}`} aria-hidden="true"><span>{cursorLabel}</span></div>

      <nav className={`nav ${navDark ? 'nav-on-dark' : 'nav-on-light'}`}>
        <a className="nav-mark" href="#top">CRL</a>
        <div className="nav-links">
          <a href="#work">WORK</a><a href="#capabilities">CAPABILITIES</a><a href="#process">PROCESS</a><a href="#start">START</a>
        </div>
      </nav>

      <section id="top" className="hero chapter" data-nav="dark">
        <div className="ambient-grid" /><div className="hero-glow" /><div className="ambient-orbit" />
        <div className="hero-meta technical"><span>CREATIVE ROI LAB</span><span>STORY SYSTEM / ACTIVE</span><span>FRAME 0001</span></div>
        <div className="hero-type">
          <span className="hero-word hero-word-build">WE BUILD</span>
          <span className="hero-word hero-word-cinematic">CINEMATIC</span>
          <span className="hero-word hero-word-worlds">WORLDS.</span>
        </div>
        <div className="hero-frame mouse-frame float-a"><span>CRL / 01</span></div>
        <div className="hero-frame mouse-frame float-b chrome-frame"><span>VISUAL SYSTEM</span></div>
        <div className="hero-frame mouse-frame float-c glass-frame"><span>SEQUENCE</span></div>
        <div className="portal-frame mouse-frame" />
        <div className="hero-foot technical"><span>AI CREATIVE STUDIO</span><span>BUILDING CONTENT INFRASTRUCTURE FOR D2C BRANDS</span><span>SCROLL TO ENTER ↓</span></div>
      </section>

      <section className="manifesto chapter" data-nav="dark">
        <div className="manifesto-stage">
          <div className="manifesto-lines" aria-hidden="true"><span /><span /><span /><span /></div>
          <p className="scene-kicker">THE CREATIVE LAYER / 01</p>
          <div className="manifesto-stack" aria-label="Story. World. Character. Sequence. System.">
            {['STORY.', 'WORLD.', 'CHARACTER.', 'SEQUENCE.', 'SYSTEM.'].map((word) => <span className="manifesto-word" key={word}>{word}</span>)}
          </div>
          <p className="manifesto-copy">CRL turns ideas into coherent films, campaign worlds, characters, storyboards and repeatable content systems — so creative does not stop at one asset.</p>
          <div className="system-blocks" aria-hidden="true">{Array.from({ length: 12 }).map((_, i) => <span key={i} />)}</div>
        </div>
      </section>

      <section id="work" className="work-world chapter" data-nav="dark" onMouseEnter={() => setCursorLabel('VIEW')} onMouseLeave={() => setCursorLabel('')}>
        <div className="work-track">
          {work.map((item, index) => (
            <article className="work-panel" key={item[0]}>
              <div className="work-number">{item[0]}</div>
              <div className="work-copy"><p className="technical">CRL / {item[0]} · FRAME 0{24 + index * 7}</p><h2>{item[1]}</h2><p>{item[2]}</p></div>
              <div className={`work-art work-art-${index + 1}`}><span className="frame-outline" /><span className="frame-outline second" /><span className="frame-dot" /></div>
            </article>
          ))}
        </div>
        <div className="work-index technical">SELECTED WORK / HORIZONTAL WORLD / 02</div>
      </section>

      <section id="capabilities" className="capabilities chapter" data-nav="dark">
        <div className="cap-noise" />
        <div className="cap-copy">
          <p className="scene-kicker">CAPABILITIES / 03</p>
          <div className="cap-list">
            {capabilities.map((item, index) => (
              <button key={item[0]} className={activeCapability === index ? 'active' : ''} onMouseEnter={() => { setActiveCapability(index); setCursorLabel('OPEN'); }} onMouseLeave={() => setCursorLabel('')} onFocus={() => setActiveCapability(index)}>
                <span>0{index + 1}</span>{item[0]}
              </button>
            ))}
          </div>
          <p className="cap-description">{capabilities[activeCapability][1]}</p>
        </div>
        <div className={capSceneClass} aria-hidden="true">
          <div className="scene-core" /><div className="scene-frame scene-frame-a" /><div className="scene-frame scene-frame-b" /><div className="scene-frame scene-frame-c" />
          <div className="scene-orbit" /><div className="scene-node node-a" /><div className="scene-node node-b" />
          <span className="scene-ghost">WORLD WORLD WORLD</span>
        </div>
        <div className="vertical-label technical">CRL / VISUAL SYSTEM ACTIVE</div>
      </section>

      <section className="product chapter" data-nav="dark">
        <div className="product-copy"><p className="scene-kicker">PRODUCT STORYTELLING / 04</p><h2>PRODUCTS<br />DESERVE<br /><em>WORLDS.</em></h2><p>Premium D2C and FMCG storytelling built around the product — not generic ad templates.</p></div>
        <div className="product-stage" aria-hidden="true">
          <div className="parallax-shape product-disc" /><div className="parallax-shape product-podium" /><div className="parallax-shape product-window"><span>AD CROP / 4:5</span></div><div className="parallax-shape product-bar" />
        </div>
        <div className="product-meta technical">D2C / FMCG / LAUNCH / PERFORMANCE / FILM</div>
      </section>

      <section className="previs chapter" data-nav="light">
        <div className="previs-head"><p className="scene-kicker dark-kicker">PREVISUALIZATION / 05</p><h2>SEE THE FILM<br />BEFORE THE FILM.</h2><p>Storyboard thinking, camera logic and visual continuity before production becomes expensive.</p></div>
        <div className="previs-grid">
          {[
            ['CAM 01', '35MM', 'PUSH IN'], ['CAM 02', '50MM', 'LOCKED'], ['CAM 03', '24MM', 'TRACK R'], ['CAM 04', '85MM', 'HOLD'],
            ['CAM 05', '35MM', 'ORBIT'], ['CAM 06', '50MM', 'DOLLY'], ['CAM 07', '24MM', 'WIDE'], ['CAM 08', '85MM', 'DETAIL']
          ].map((cell, index) => <div className="previs-cell" key={cell[0]}><span className={`previs-art art-${index + 1}`} /><div className="technical"><b>{cell[0]}</b><span>{cell[1]}</span><span>{cell[2]}</span><span>FRAME {String(index + 1).padStart(2, '0')}</span></div></div>)}
        </div>
        <div className="previs-side technical">SEQUENCE 02 / STORYBOARD SYSTEM / ACTIVE</div>
      </section>

      <section id="process" className="process chapter" data-nav="dark">
        <div className="process-visual">
          <p className="scene-kicker">HOW WE BUILD / 06</p>
          <div className={`process-machine stage-${activeProcess + 1}`}>
            <div className="process-ring" /><div className="process-ring inner" />
            <div className="machine-node n1" /><div className="machine-node n2" /><div className="machine-node n3" /><div className="machine-node n4" /><div className="machine-node n5" />
            <div className="machine-frame f1" /><div className="machine-frame f2" /><div className="machine-frame f3" />
            <span className="machine-label technical">SYSTEM / {String(activeProcess + 1).padStart(2, '0')} / ACTIVE</span>
          </div>
        </div>
        <div className="process-copy">
          <div className="process-line"><span className="process-line-fill" /></div>
          {process.map((item, index) => <article className={`process-step ${activeProcess === index ? 'active' : ''}`} key={item[0]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></article>)}
        </div>
      </section>

      <section className="spec-worlds chapter" data-nav="dark">
        <p className="scene-kicker">SPEC WORLDS / 07</p>
        <div className="spec-canvas">
          {specWorlds.map((world, index) => <article className={`spec-frame spec-${index + 1}`} key={world[0]}><div className="spec-art"><span /></div><h2>{world[0]}</h2><p className="technical">{world[1]}</p></article>)}
        </div>
      </section>

      <section className="audience chapter" data-nav="dark">
        <div className="audience-head"><p className="scene-kicker">WHO WE WORK WITH / 08</p><h2>BUILT TO PLUG INTO<br />MODERN CREATIVE TEAMS.</h2></div>
        <div className="audience-list">
          {audiences.map((item, index) => <article key={item[0]}><span>0{index + 1}</span><h3>{item[0]}</h3><p>{item[1]}</p></article>)}
        </div>
      </section>

      <section className="resources chapter" data-nav="light">
        <div><p className="scene-kicker dark-kicker">RESOURCES / FIELD NOTES</p><h2>AI FILMMAKING.<br />STORY SYSTEMS.<br />PRODUCTION NOTES.</h2></div>
        <form className="resource-form" action="/api/subscribe" method="post"><label htmlFor="email">JOIN THE CRL FIELD NOTES</label><div><input id="email" name="email" type="email" placeholder="YOU@COMPANY.COM" required /><button type="submit">SUBSCRIBE →</button></div><p>No spam. Just useful creative systems, breakdowns and experiments.</p></form>
      </section>

      <section className="faq chapter" data-nav="dark">
        <div className="faq-title"><p className="scene-kicker">FAQ / 09</p><h2>HOW CRL FITS<br />THE WORKFLOW.</h2></div>
        <div className="faq-list">{faqs.map((item) => <details key={item[0]}><summary>{item[0]}<span>+</span></summary><p>{item[1]}</p></details>)}</div>
      </section>

      <section id="start" className="final-cta chapter" data-nav="dark" onMouseEnter={() => setCursorLabel('START')} onMouseLeave={() => setCursorLabel('')}>
        <div className="cta-fragments" aria-hidden="true"><i className="cta-fragment red" /><i className="cta-fragment blue" /><i className="cta-fragment violet" /><i className="cta-fragment orange" /><i className="cta-fragment green" /></div>
        <div className="cta-frame">
          <p className="technical">CRL / FINAL FRAME / BUILD MODE</p><h2>READY TO BUILD<br />YOUR NEXT WORLD?</h2><a href="mailto:hello@creativeroilab.com">START A CREATIVE BUILD →</a>
        </div>
        <footer><span>CREATIVE ROI LAB © 2026</span><span>AI CREATIVE STUDIO / CINEMATIC STORY SYSTEMS</span><a href="#top">BACK TO FRAME 001 ↑</a></footer>
      </section>
    </main>
  );
}
