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

const portfolio = [
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

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="mark" href="#top">CRL</a>
        <div className="navLinks">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#spec">Spec Worlds</a>
          <a href="#resources">Resources</a>
          <a href="#audit">Start</a>
        </div>
      </nav>

      <section id="top" className="hero dark">
        <div className="glow" />
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">Creative ROI Lab · Cinematic AI storytelling studio</p>
            <h1>Cinematic AI stories for brands, agencies and production houses.</h1>
            <p className="lede">CRL helps teams turn ideas into cinematic worlds, brand films, storyboards, character systems, campaign routes and AI-powered visual content systems.</p>
            <div className="actions">
              <a className="button primary" href="#audit">Start a Creative Build</a>
              <a className="button ghost" href="#work">Explore Work Areas</a>
            </div>
          </div>
          <div className="heroPanel">
            <div className="panelTop"><span>Studio Layer</span><span>Story / Cinema / AI</span></div>
            <div className="panelCenter">
              <p>Brand Film</p><p>Campaign World</p><p>Storyboard</p><p>Character IP</p><p>AI Video System</p>
            </div>
            <div className="panelBottom">visual direction · worldbuilding · production systems</div>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marqueeTrack">
          <span>Brand Films</span><span>Campaign Worlds</span><span>Storyboards</span><span>Character IP</span><span>AI Video Systems</span><span>Product Stories</span><span>Production Previsualization</span>
          <span>Brand Films</span><span>Campaign Worlds</span><span>Storyboards</span><span>Character IP</span><span>AI Video Systems</span><span>Product Stories</span><span>Production Previsualization</span>
        </div>
      </div>

      <section className="cream">
        <div className="container split">
          <div>
            <p className="eyebrow darkText">Positioning</p>
            <h2>CRL sits between story, cinema, AI production and brand growth.</h2>
          </div>
          <p className="bodyLarge">We are not only an AI creative studio for social content. We help teams shape visual stories before production begins: the idea, the world, the characters, the storyboard, the visual language and the content system around it.</p>
        </div>
      </section>

      <section id="work" className="dark padded">
        <div className="container">
          <div className="sectionHeadRow">
            <div>
              <p className="eyebrow">Selected Work Areas</p>
              <h2>A portfolio built around stories, worlds and cinematic systems.</h2>
              <p className="sectionIntro lightIntro">For now, these are native portfolio categories. Later, each card can connect to Instagram posts, Google Drive decks, videos, project pages or a proper portfolio backend.</p>
            </div>
            <div className="filters" aria-label="Portfolio filters placeholder">
              <button>All</button><button>Films</button><button>Worlds</button><button>Storyboards</button><button>IP</button><button>AI Video</button>
            </div>
          </div>
          <div className="portfolioGrid">
            {portfolio.map((item) => <div className="portfolioCard" key={item[0]}><span>CRL</span><h3>{item[0]}</h3><p>{item[1]}</p><a href="#audit">Discuss this build →</a></div>)}
          </div>
        </div>
      </section>

      <section id="services" className="cream padded">
        <div className="container">
          <p className="eyebrow darkText">What We Create</p>
          <h2>Creative systems, directed by humans and accelerated by AI.</h2>
          <p className="sectionIntro">Borrowing the editorial service-row structure, CRL presents services like a studio menu rather than generic cards.</p>
          <div className="serviceRows">
            {services.map((item) => <div className="serviceRow" key={item[0]}><span className="serviceNum">/{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p><span className="serviceArrow">→</span></div>)}
          </div>
        </div>
      </section>

      <section id="spec" className="dark padded specSection">
        <div className="container">
          <p className="eyebrow">Spec Worlds</p>
          <h2>Original worlds and concept builds that show how CRL thinks.</h2>
          <p className="sectionIntro lightIntro">Spec worlds let CRL demonstrate cinematic taste, story development, storyboard thinking and AI production workflows before a client brief begins.</p>
          <div className="specGrid">
            {specWorlds.map((item) => <div className="specCard" key={item[0]}><p>{item[1]}</p><h3>{item[0]}</h3><span>{item[2]}</span><a href="#audit">Build something similar →</a></div>)}
          </div>
        </div>
      </section>

      <section id="system" className="cream padded">
        <div className="container">
          <p className="eyebrow darkText">How We Build</p>
          <h2>From idea to cinematic execution.</h2>
          <div className="processGrid lightProcess">
            {process.map((item) => <div className="processCard" key={item[0]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></div>)}
          </div>
        </div>
      </section>

      <section className="dark padded">
        <div className="container">
          <p className="eyebrow">Who We Work With</p>
          <h2>For brands and production teams building stories at scale.</h2>
          <div className="cardGrid audienceGrid darkCards">
            {audiences.map((item) => <div className="lightCard" key={item[0]}><h3>{item[0]}</h3><p>{item[1]}</p></div>)}
          </div>
        </div>
      </section>

      <section id="resources" className="cream padded newsletterSection">
        <div className="container newsletterGrid">
          <div>
            <p className="eyebrow darkText">Newsletter and Resources</p>
            <h2>Get CRL notes on AI filmmaking, cinematic storytelling and creative systems.</h2>
            <p className="bodyLarge">Drop your email to receive free resources, story frameworks, prompt systems, storyboard breakdowns and production notes. The backend workflow will be connected later.</p>
          </div>
          <form className="subscribeForm lightSubscribe" action="/api/subscribe" method="post">
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
          <div><p className="eyebrow">Start a Creative Build</p><h2>Have an idea, campaign, product or story that needs a cinematic world?</h2><p className="lede">CRL helps you shape it before production begins, from strategy and story to visual references, AI-generated frames, storyboards, prompts and content systems.</p></div>
          <form className="auditForm" action="mailto:hello@creativeroilab.com" method="post" encType="text/plain">
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
