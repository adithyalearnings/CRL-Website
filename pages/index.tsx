const services = [
  ['Cinematic Brand Films', 'Brand stories, product films, founder films, campaign films and lifestyle-led visual concepts for modern consumer brands.'],
  ['AI-Powered Campaign Worlds', 'Visual universes, moodboards, key frames, character references and campaign routes for launches and brand moments.'],
  ['Storyboards and Previsualization', 'Director-style storyboards, shot breakdowns, camera movement references and treatment visuals for production teams.'],
  ['Character, World and IP Development', 'Identity boards, expression sheets, worldbuilding, recurring characters and original IP systems for long-term stories.'],
  ['Product Storytelling Systems', 'Product-led films, UGC-style variations, performance creative routes and repeatable visual content systems.'],
  ['AI Video Prompting Systems', 'Multi-shot prompts, character consistency prompts, storyboard-to-video direction and platform-specific AI production systems.']
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
          <a href="#system">System</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#resources">Resources</a>
          <a href="#audit">Start</a>
        </div>
      </nav>

      <section id="top" className="hero dark">
        <div className="glow" />
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">Creative ROI Lab · Cinematic AI storytelling studio</p>
            <h1>Cinematic storytelling systems for brands, agencies and production houses.</h1>
            <p className="lede">CRL helps brands, FMCG teams, agencies, filmmakers and production houses turn ideas into cinematic campaigns, AI-generated visual worlds, storyboards, character systems, brand films, product stories and high-volume content assets.</p>
            <div className="actions">
              <a className="button primary" href="#audit">Start a Creative Build</a>
              <a className="button ghost" href="#portfolio">See Portfolio Areas</a>
            </div>
          </div>
          <div className="heroPanel">
            <div className="panelTop"><span>Story Layer</span><span>01 / 05</span></div>
            <div className="panelCenter">
              <p>Brand Film</p><p>Campaign World</p><p>Storyboard</p><p>Character IP</p><p>AI Video System</p>
            </div>
            <div className="panelBottom">strategy · story · cinema · AI production</div>
          </div>
        </div>
      </section>

      <section className="cream">
        <div className="container split">
          <div>
            <p className="eyebrow darkText">Positioning</p>
            <h2>CRL sits between story, cinema, AI production and brand growth.</h2>
          </div>
          <p className="bodyLarge">We are not only an AI creative studio for social content. We help teams shape visual stories before production begins: the idea, the world, the characters, the storyboard, the visual language and the content system around it.</p>
        </div>
      </section>

      <section id="system" className="dark padded">
        <div className="container">
          <p className="eyebrow">The CRL System</p>
          <h2>From idea to cinematic execution.</h2>
          <div className="processGrid">
            {process.map((item) => <div className="processCard" key={item[0]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></div>)}
          </div>
        </div>
      </section>

      <section id="services" className="cream padded">
        <div className="container">
          <p className="eyebrow darkText">Services</p>
          <h2>What CRL creates.</h2>
          <p className="sectionIntro">We help teams move from idea to cinematic execution, whether it is a brand campaign, product story, film concept, AI video, pitch deck, storyboard or full creative world.</p>
          <div className="cardGrid serviceGrid">
            {services.map((item) => <div className="lightCard" key={item[0]}><h3>{item[0]}</h3><p>{item[1]}</p></div>)}
          </div>
        </div>
      </section>

      <section id="portfolio" className="dark padded">
        <div className="container">
          <p className="eyebrow">Portfolio</p>
          <h2>A portfolio built around stories, worlds and cinematic systems.</h2>
          <p className="sectionIntro lightIntro">Our work is not limited to single assets. We build the creative layer around the idea: the story, visual world, characters, campaign structure and production system behind it.</p>
          <div className="portfolioGrid">
            {portfolio.map((item) => <div className="portfolioCard" key={item[0]}><span>CRL</span><h3>{item[0]}</h3><p>{item[1]}</p></div>)}
          </div>
        </div>
      </section>

      <section className="cream padded">
        <div className="container">
          <p className="eyebrow darkText">Who We Work With</p>
          <h2>For brands and production teams building stories at scale.</h2>
          <div className="cardGrid audienceGrid">
            {audiences.map((item) => <div className="lightCard" key={item[0]}><h3>{item[0]}</h3><p>{item[1]}</p></div>)}
          </div>
        </div>
      </section>

      <section id="resources" className="dark padded newsletterSection">
        <div className="container newsletterGrid">
          <div>
            <p className="eyebrow">Newsletter and Resources</p>
            <h2>Get CRL notes on AI filmmaking, cinematic storytelling and creative systems.</h2>
            <p className="lede">Drop your email to receive free resources, story frameworks, prompt systems, storyboard breakdowns and production notes. The backend workflow will be connected later.</p>
          </div>
          <form className="subscribeForm" action="/api/subscribe" method="post">
            <label htmlFor="email">Email address</label>
            <div className="subscribeRow">
              <input id="email" name="email" type="email" placeholder="you@company.com" required />
              <button className="button primary" type="submit">Subscribe</button>
            </div>
            <p className="formNote">Free resources for brands, agencies, production houses and AI filmmakers. No spam.</p>
          </form>
        </div>
      </section>

      <section id="audit" className="cream padded">
        <div className="container auditGrid">
          <div><p className="eyebrow darkText">Start a Creative Build</p><h2>Have an idea, campaign, product or story that needs a cinematic world?</h2><p className="bodyLarge">CRL helps you shape it before production begins, from strategy and story to visual references, AI-generated frames, storyboards, prompts and content systems.</p></div>
          <form className="auditForm lightForm" action="mailto:hello@creativeroilab.com" method="post" encType="text/plain">
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
