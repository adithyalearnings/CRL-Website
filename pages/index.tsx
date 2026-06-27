const services = [
  ['Brand DNA for AI Content', 'Translate tone, visual codes, buyer psychology and proof routes into a usable creative system.'],
  ['Content Velocity System', 'Reduce the distance between idea, brief, output, review and publishing.'],
  ['Performance Creative Engine', 'Build UGC-style ads, product-led variations and creative tests around buyer beliefs.'],
  ['Founder-Led Content System', 'Turn founder thinking into repeatable hooks, scripts and POV formats.']
];

const process = [
  ['01', 'Translate', 'Brand DNA becomes direction: tone, taste, proof routes and visual rules.'],
  ['02', 'Map', 'One product becomes multiple angles, objections, beliefs and moments to test.'],
  ['03', 'Produce', 'AI-assisted production creates useful creative variations faster.'],
  ['04', 'Review', 'Approval flows protect quality while keeping content velocity alive.'],
  ['05', 'Learn', 'Every month gets sharper through performance signals and customer response.']
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="mark" href="#top">CRL</a>
        <div className="navLinks">
          <a href="#system">System</a>
          <a href="#services">Services</a>
          <a href="#proof">Proof</a>
          <a href="#audit">Audit</a>
        </div>
      </nav>

      <section id="top" className="hero dark">
        <div className="glow" />
        <div className="container heroGrid">
          <div>
            <p className="eyebrow">Creative ROI Lab · AI-assisted content systems for D2C brands</p>
            <h1>Content infrastructure for brands that need more creative experiments without more production drag.</h1>
            <p className="lede">CRL helps growing D2C brands turn product stories, founder POV, UGC-style content and performance creative into a repeatable AI-assisted content system.</p>
            <div className="actions">
              <a className="button primary" href="#audit">Book a Content Audit</a>
              <a className="button ghost" href="#system">See the System</a>
            </div>
          </div>
          <div className="heroPanel">
            <div className="panelTop"><span>Operating Layer</span><span>01 / 05</span></div>
            <div className="panelCenter">
              <p>Brand DNA</p><p>Creative Angles</p><p>AI Production</p><p>Review Flow</p><p>Monthly Learning</p>
            </div>
            <div className="panelBottom">strategy-led output · built to compound</div>
          </div>
        </div>
      </section>

      <section className="cream">
        <div className="container split">
          <div>
            <p className="eyebrow darkText">The real bottleneck</p>
            <h2>Your brand does not need more random posts. It needs a faster creative loop.</h2>
          </div>
          <p className="bodyLarge">Growing brands already have product stories, customer questions, founder thoughts and campaign moments. The bottleneck is usually the system around content: slow approvals, shoot dependency, scattered briefs and not enough variations to test.</p>
        </div>
      </section>

      <section id="system" className="dark padded">
        <div className="container">
          <p className="eyebrow">The CRL System</p>
          <h2>We build the operating layer behind better content.</h2>
          <div className="processGrid">
            {process.map((item) => <div className="processCard" key={item[0]}><span>{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p></div>)}
          </div>
        </div>
      </section>

      <section id="services" className="cream padded">
        <div className="container">
          <p className="eyebrow darkText">Services</p>
          <h2>The systems CRL builds.</h2>
          <div className="cardGrid">
            {services.map((item) => <div className="lightCard" key={item[0]}><h3>{item[0]}</h3><p>{item[1]}</p></div>)}
          </div>
        </div>
      </section>

      <section id="proof" className="dark padded">
        <div className="container split">
          <div><p className="eyebrow">Proof of craft</p><h2>Strategy-led AI content should feel like the brand, not the tool.</h2></div>
          <div className="proofList"><p>Product visual systems</p><p>UGC-style ad variations</p><p>Founder POV reels</p><p>Campaign creative routes</p><p>Meta and Instagram testing sets</p></div>
        </div>
      </section>

      <section className="cream padded">
        <div className="container split">
          <div><p className="eyebrow darkText">Who it is for</p><h2>Built for brands where content has become a growth bottleneck.</h2></div>
          <p className="bodyLarge">For funded D2C founders, brand managers, marketing heads and performance teams that already know content matters, but need a sharper system to produce, approve, test and learn faster.</p>
        </div>
      </section>

      <section id="audit" className="dark padded">
        <div className="container auditGrid">
          <div><p className="eyebrow">Content Audit</p><h2>Let us map where your content system is slowing down.</h2><p className="lede">Share your brand, current bottleneck and first priority. The first conversation should make your next content move clearer.</p></div>
          <form className="auditForm" action="mailto:hello@creativeroilab.com" method="post" encType="text/plain">
            <input name="name" placeholder="Name" required />
            <input name="brand" placeholder="Brand name" required />
            <input name="website" placeholder="Website or Instagram" required />
            <select name="priority" defaultValue=""><option value="" disabled>First priority</option><option>More content volume</option><option>Better ad creatives</option><option>Founder-led content</option><option>AI product visuals</option><option>Faster approvals</option><option>Brand consistency</option></select>
            <textarea name="bottleneck" placeholder="What slows your content system down right now?" rows={5} required />
            <button className="button primary wide" type="submit">Request a Content Audit</button>
          </form>
        </div>
      </section>

      <footer className="footer"><div className="container"><strong>Creative ROI Lab</strong><span>Content infrastructure for D2C brands.</span></div></footer>
    </main>
  );
}
