export default function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, message: 'Method not allowed' });
  }

  const email = String(req.body?.email || '').trim();

  if (!email || !email.includes('@')) {
    return res.status(400).json({ ok: false, message: 'Please enter a valid email address.' });
  }

  return res.status(200).json({
    ok: true,
    message: 'Thanks for subscribing. Resources workflow will be connected soon.',
    email
  });
}
