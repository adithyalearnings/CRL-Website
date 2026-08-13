(() => {
  const root = document.documentElement;
  const desktop = window.matchMedia('(min-width: 900px)');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let lastY = window.scrollY;
  let lastT = performance.now();
  let raf = 0;

  const set = (name, value) => root.style.setProperty(name, value);
  const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

  const applyMouse = (event) => {
    if (!desktop.matches || reduced.matches) return;
    const nx = event.clientX / window.innerWidth - 0.5;
    const ny = event.clientY / window.innerHeight - 0.5;
    set('--mx', `${nx * 10}px`);
    set('--my', `${ny * 8}px`);
    set('--mx2', `${nx * 120}px`);
    set('--my2', `${ny * 90}px`);
    set('--rx', `${ny * -5}deg`);
    set('--ry', `${nx * 7}deg`);
  };

  const applyScroll = () => {
    raf = 0;
    const now = performance.now();
    const y = window.scrollY;
    const dt = Math.max(16, now - lastT);
    const velocity = (y - lastY) / dt;
    const tilt = clamp(velocity * 2.6, -5, 5);
    const push = clamp(Math.abs(velocity) * 8, 0, 18);
    set('--scrollTilt', `${tilt}deg`);
    set('--scrollPush', `${push}px`);
    document.body.dataset.scrollDirection = y >= lastY ? 'down' : 'up';
    lastY = y;
    lastT = now;
  };

  const onScroll = () => {
    if (!raf) raf = requestAnimationFrame(applyScroll);
  };

  const addMagneticDepth = () => {
    if (!desktop.matches || reduced.matches) return;
    document.querySelectorAll('.hero-media,.cap-visual,.product-stage,.process-machine,.spec-frame,.cta-visual,.experience-reel figure').forEach((el) => {
      el.addEventListener('pointermove', (event) => {
        const rect = el.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        el.style.setProperty('--localRX', `${y * -8}deg`);
        el.style.setProperty('--localRY', `${x * 10}deg`);
      });
      el.addEventListener('pointerleave', () => {
        el.style.setProperty('--localRX', '0deg');
        el.style.setProperty('--localRY', '0deg');
      });
    });
  };

  window.addEventListener('pointermove', applyMouse, { passive: true });
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', () => {
    if (!desktop.matches) {
      ['--mx','--my','--mx2','--my2'].forEach((key) => set(key, '0px'));
      set('--rx', '0deg');
      set('--ry', '0deg');
    }
  }, { passive: true });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addMagneticDepth, { once: true });
  } else {
    addMagneticDepth();
  }
})();
