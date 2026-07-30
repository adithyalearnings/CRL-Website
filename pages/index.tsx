import { useEffect, useState } from 'react';

const services = [
  ['01', 'Cinematic Brand Films', 'Brand stories, product films, founder films, campaign films and lifestyle-led visual concepts for modern consumer brands.'],
  ['02', 'AI-Powered Campaign Worlds', 'Visual universes, moodboards, key frames, character references and campaign routes for launches and brand moments.'],
  ['03', 'Storyboards and Previsualization', 'Director-style storyboards, shot breakdowns, camera movement references and treatment visuals for production teams.'],
  ['04', 'Character, World and IP Development', 'Identity boards, expression sheets, worldbuilding, recurring characters and original IP systems for long-term stories.'],
  ['05', 'Product Storytelling Systems', 'Product-led films, UGC-style variations, performance creative routes and repeatable visual content systems.'],
  ['06', 'AI Video Prompting Systems', 'Multi-shot prompts, character consistency prompts, storyboard-to-video direction and platform-specific AI production systems.']
];

const process = [
  ['01', 'Shape', 'We turn a raw idea, brand problem or script into a sharper creative direction.'],
  ['02', 'Visualize', 'We build the world: references, key frames, characters, environments and mood.'],
  ['03', 'Storyboard', 'We map the sequence with shots, camera movement, pacing and production logic.'],
  ['04', 'Produce', 'We create AI-assisted content assets, films, prompts, frames and campaign variations.'],
  ['05', 'Systemize', 'We turn one creative direction into a repeatable system for future stories.']
];

const capabilities = [
  ['Brand Films', 'Founder films, product launch films, lifestyle films, festive campaigns and premium product stories.'],
  ['Campaign Worlds', 'FMCG launch worlds, skincare campaign universes, fashion drops, wellness stories and digital-first brand moments.'],
  ['Production Previsualization', 'Ad film storyboards, music video treatments, short film key frames, pitch decks and scene-by-scene visual plans.'],
  ['Character and IP Development', 'AI influencers, mythological worlds, anime-inspired sports characters, mascots and recurring story formats.'],
  ['AI Video Experiments', 'Multi-shot AI videos, stylized product films, trailers, action sequences and visual style explorations.'],
  ['Product Storytelling', 'Skincare stories, FMCG scenes, fashion product films, food and beverage campaigns and UGC-style product narratives.']
];

const specWorlds = [
  ['Neon Sutra', 'Original IP / Cyberpunk World', 'A cinematic sci-fi story world built around characters, environments, key frames and long-form episode potential.'],
  ['Mythic Sequence', 'Storyboard / Previsualization', 'A mythological cinematic sequence developed with visual beats, divine atmosphere, camera logic and AI video direction.'],
  ['Product Ritual', 'Brand Film System', 'A premium product-story world designed for FMCG and D2C brands that need cinematic content beyond basic ads.']
];

const audiences = [
  ['D2C and FMCG Brands', 'For brands that need cinematic product stories, campaign films, founder-led content and scalable visual assets.'],
  ['Agencies and Creative Studios', 'For teams that need faster pitch visuals, concept routes, mood films, storyboards and AI-assisted production support.'],
  ['Production Houses', 'For production teams that need previsualization, treatment frames, character references and cinematic concept development.'],
  ['Filmmakers and Storytellers', 'For creators building short films, music videos, visual worlds, characters, mythological stories or original IP.']
];

const faqs = [
  ['Can CRL work alongside an existing agency or production house?', 'Yes. CRL can operate as a specialist creative and previsualization layer, supporting the team with concepts, storyboards, visual worlds, AI production systems and selected final assets.'],
  ['Do you provide concepts and storyboards, or only AI production?', 'Both. Engagements can begin with a raw idea, an existing script or an approved campaign. CRL can shape the concept, build references, storyboard the sequence and produce AI-assisted assets.'],
  ['Can a project combine real footage and AI-generated visuals?', 'Yes. The workflow can be designed for fully AI-generated films, hybrid productions, previsualization for traditional shoots, or AI-supported post-production and campaign variations.'],
  ['How do you maintain character and product consistency?', 'We build reference systems before production: identity boards, visual rules, product locks, shot continuity notes and platform-specific prompts.'],
  ['Can one creative direction become multiple formats?', 'Yes. A single world can be extended into hero films, cutdowns, social edits, product visuals, storyboards, pitch frames and repeatable campaign routes.']
];

const vimeoSource = 'https://player.vimeo.com/video/1209432165?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1';

export default function Home() {
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('isVisible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('isVisible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <nav className="nav">
        <a className="mark" href="#top">CRL</a>
        <div className="navLinks">
          <a href="#work">Work</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#services">Services</a>
          <a href="#resources">Resources</a>
          <a href="#audit">Start</a>
        </div>
      </nav>

      <section id="top" className="hero dark">
        <div className="glow" />
        <div className="container heroGrid">
          <div className="reveal isVisible">
            <p className="eyebrow">Creative ROI Lab · Cinematic AI storytelling studio</p>
            <h1>Cinematic AI stories for brands, agencies and production houses.</h1>
            <p className="lede">CRL helps teams turn ideas into cinematic worlds, brand films, storyboards, character systems, campaign routes and AI-powered visual content systems.</p>
            <div className="actions">
              <a className="button primary" href="#audit">Start a Creative Build</a>
              <a className="button ghost" href="#work">Watch Selected Work</a>
            </div>
          </div>

          <div className="heroFilm reveal isVisible">
            <iframe
              src={vimeoSource}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Ayurveda AI brand film"
            />
            <div className="filmShade" />
            <div className="filmLabel"><span>Featured Film</span><strong>Ayurveda</strong></div>
            <div className="filmIndex">01 / CRL FILMS</div>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marqueeTrack">
          <span>Brand Films</span><span>Campaign Worlds</span><span>Storyboards</span><span>Character IP</span><span>AI Video Systems</span><span>Product Stories</span><span>Production Previsualization</span>
          <span>Brand Films</span><span>Campaign Worlds</span><span>Storyboards</span><span>Character IP</span><span>AI Video Systems</span><span>Product Stories</span><span>Production Previsualization</span>
        </div>
      </div>

      <section className="cream manifestoSection">
        <div className="container manifestoGrid reveal">
          <p className="eyebrow darkText">The Creative Layer</p>
          <div className="manifestoWords">
            <span>Story.</span><span>World.</span><span>Character.</span><span>Sequence.</span><span className="goldWord">System.</span>
          </div>
          <p className="bodyLarge manifestoCopy">We shape the creative layer before production begins, so one idea can become a coherent film, campaign world, pitch, character system and repeatable content engine.</p>
        </div>
      </section>

      <section id="work" className="dark padded selectedWorkSection">
        <div className="container">
          <div className="workIntro reveal">
            <p className="eyebrow">Selected Films & Worlds</p>
            <h2>The work should be the first proof.</h2>
            <p className="sectionIntro lightIntro">A growing collection of films, visual worlds, storyboards and original concept builds. More projects can be added to this same media system later.</p>
          </div>

          <article className="featuredProject reveal">
            <div className="featuredMedia">
              <iframe
                src={vimeoSource}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                loading="lazy"
                title="Ayurveda AI brand film portfolio presentation"
              />
            </div>
            <div className="featuredMeta">
              <div><span>01</span><p>AI Wellness Film · Brand Story</p></div>
              <h3>Ayurveda</h3>
              <p>A cinematic visual exploration built around wellness, ritual and premium brand atmosphere using an AI-assisted production workflow.</p>
              <a href="#audit">Build something with this visual depth →</a>
            </div>
          </article>

          <div className="projectRail reveal" aria-label="CRL project directions">
            <div><span>02</span><strong>Campaign Worlds</strong><small>Launch systems · Visual universes</small></div>
            <div><span>03</span><strong>Character IP</strong><small>Identity boards · Recurring worlds</small></div>
            <div><span>04</span><strong>Previsualization</strong><small>Storyboards · Pitch-ready frames</small></div>
            <div><span>05</span><strong>Product Stories</strong><small>D2C · FMCG · Lifestyle films</small></div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="cream padded">
        <div className="container">
          <p className="eyebrow darkText reveal">Capabilities</p>
          <h2 className="reveal">What the studio can build around an idea.</h2>
          <div className="capabilityGrid">
            {capabilities.map((item, index) => (
              <div className={`capabilityCard reveal ${index === 0 || index === 3 ? 'wideCapability' : ''}`} key={item[0]}>
                <span>0{index + 1}</span><h3>{item[0]}</h3><p>{item[1]}</p><a href="#audit">Explore this capability →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="dark padded interactiveServices">
        <div className="container serviceExperience">
          <div className="servicePreview reveal">
            <p className="eyebrow">What We Create</p>
            <div className="previewNumber">/{services[activeService][0]}</div>
            <h2>{services[activeService][1]}</h2>
            <p>{services[activeService][2]}</p>
            <div className="previewTags"><span>Story</span><span>Direction</span><span>AI Production</span></div>
          </div>
          <div className="serviceRows darkServiceRows reveal">
            {services.map((item, index) => (
              <button
                className={`serviceRow ${activeService === index ? 'activeService' : ''}`}
                key={item[0]}
                onMouseEnter={() => setActiveService(index)}
                onFocus={() => setActiveService(index)}
                type="button"
              >
                <span className="serviceNum">/{item[0]}</span><h3>{item[1]}</h3><span className="serviceArrow">→</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="spec" className="dark padded specSection">
        <div className="container">
          <p className="eyebrow reveal">Spec Worlds</p>
          <h2 className="reveal">Original worlds that show how CRL thinks.</h2>
          <p className="sectionIntro lightIntro reveal">Spec worlds demonstrate cinematic taste, story development, storyboard thinking and AI production workflows before a client brief begins.</p>
          <div className="specGrid">
            {specWorlds.map((item) => <div className="specCard reveal" key={item[0]}><p>{item[1]}</p><h3>{item[0]}</h3><span>{item[2]}</span><a href="#audit">Build something similar →</a></div>)}
          </div>
        </div>
      </section>

      <section id="system" className="cream padded">
        <div className="container">
          <p className="eyebrow darkText reveal">How We Build</p>
          <h2 className="reveal">From idea to cinematic execution.</h2>
          <div className="processGrid lightProcess">
            {process.map((item) => <div className="processCard reveal" key={item[0]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></div>)}
          </div>
        </div>
      </section>

      <section className="dark padded">
        <div className="container">
          <p className="eyebrow reveal">Who We Work With</p>
          <h2 className="reveal">For brands and production teams building stories at scale.</h2>
          <div className="cardGrid audienceGrid darkCards">
            {audiences.map((item) => <div className="lightCard reveal" key={item[0]}><h3>{item[0]}</h3><p>{item[1]}</p></div>)}
          </div>
        </div>
      </section>

      <section className="cream padded faqSection">
        <div className="container faqGrid">
          <div className="reveal"><p className="eyebrow darkText">FAQ</p><h2>How CRL fits into a modern production workflow.</h2></div>
          <div className="faqList reveal">
            {faqs.map((item) => <details key={item[0]}><summary>{item[0]}<span>+</span></summary><p>{item[1]}</p></details>)}
          </div>
        </div>
      </section>

      <section id="resources" className="cream padded newsletterSection">
        <div className="container newsletterGrid">
          <div className="reveal">
            <p className="eyebrow darkText">Newsletter and Resources</p>
            <h2>Get CRL notes on AI filmmaking, cinematic storytelling and creative systems.</h2>
            <p className="bodyLarge">Drop your email to receive free resources, story frameworks, prompt systems, storyboard breakdowns and production notes. The backend workflow will be connected later.</p>
          </div>
          <form className="subscribeForm lightSubscribe reveal" action="/api/subscribe" method="post">
            <label htmlFor="email">Email address</label>
            <div className="subscribeRow">
              <input id="email" name="email" type="email" placeholder="you@company.com" required />
              <button className="button primary" type="submit">Subscribe</button>
            </div>
            <p className="formNote darkNote">Free resources for brands, agencies, production houses and AI filmmakers. No spam.</p>
          </form>
        </div>
      </section>

      <section id="audit" className="dark padded">
        <div className="container auditGrid">
          <div className="reveal"><p className="eyebrow">Start a Creative Build</p><h2>Have an idea, campaign, product or story that needs a cinematic world?</h2><p className="lede">CRL helps you shape it before production begins, from strategy and story to visual references, AI-generated frames, storyboards, prompts and content systems.</p></div>
          <form className="auditForm reveal" action="mailto:hello@creativeroilab.com" method="post" encType="text/plain">
            <input name="name" placeholder="Name" required />
            <input name="company" placeholder="Brand, agency or production house" required />
            <input name="website" placeholder="Website, Instagram or portfolio" required />
            <select name="priority" defaultValue=""><option value="" disabled>What are you building?</option><option>Brand film</option><option>Campaign world</option><option>Storyboard or previsualization</option><option>Character or IP system</option><option>AI video production</option><option>Product storytelling</option></select>
            <textarea name="brief" placeholder="Tell us about the idea, story or project." rows={5} required />
            <button className="button primary wide" type="submit">Start a Creative Build</button>
          </form>
        </div>
      </section>

      <footer className="footer"><div className="container"><strong>Creative ROI Lab</strong><span>Cinematic AI storytelling for brands, agencies and production houses.</span></div></footer>
    </main>
  );
}
