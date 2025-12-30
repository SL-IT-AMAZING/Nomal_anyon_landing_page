import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitMap.get(ip);

  if (!userLimit || now > userLimit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (userLimit.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  userLimit.count++;
  return true;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'Email is required' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
    const ip = Array.isArray(clientIp) ? clientIp[0] : clientIp;

    if (!checkRateLimit(ip)) {
      return res.status(429).json({ error: 'Too many requests. Please try again later.' });
    }

    await resend.emails.send({
      from: 'ANYON Beta <onboarding@resend.dev>',
      to: 'slit.amazing@gmail.com',
      subject: 'New Beta Signup - ANYON',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #B8C5D0;">New Beta Signup</h2>
          <p>A new user has signed up for the ANYON beta program.</p>
          <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0 0 0;"><strong>Time:</strong> ${new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' })}</p>
          </div>
        </div>
      `
    });

    await resend.emails.send({
      from: 'ANYON <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome to ANYON Beta Program!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #B8C5D0 0%, #C8D5E0 100%); padding: 40px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: #000; margin: 0;">Welcome to ANYON Beta!</h1>
          </div>

          <div style="padding: 40px; background: #fff; border-radius: 0 0 8px 8px;">
            <p style="font-size: 16px; color: #333; line-height: 1.6;">
              Thank you for joining the ANYON Beta Program!
            </p>

            <p style="font-size: 16px; color: #333; line-height: 1.6;">
              You're now among the first to experience our AI development platform for non-technical founders.
            </p>

            <div style="background: #f9f9f9; padding: 20px; border-left: 4px solid #B8C5D0; margin: 30px 0;">
              <h3 style="margin: 0 0 10px 0; color: #333;">What's Next?</h3>
              <ul style="margin: 0; padding-left: 20px; color: #666;">
                <li>We'll send you download links soon</li>
                <li>Get access to all features completely free during beta</li>
                <li>Our dev team will be ready to help when you need it</li>
              </ul>
            </div>

            <p style="font-size: 16px; color: #333; line-height: 1.6;">
              Have questions? Just reply to this email and our team will get back to you.
            </p>

            <p style="font-size: 16px; color: #333; line-height: 1.6;">
              Best regards,<br>
              <strong>The ANYON Team</strong>
            </p>
          </div>

          <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
            © 2025 ANYON. All rights reserved.
          </div>
        </div>
      `
    });

    return res.status(200).json({
      success: true,
      message: 'Beta signup successful'
    });

  } catch (error) {
    console.error('Beta signup error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
