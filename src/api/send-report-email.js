import { Resend } from 'resend';
import { authenticateUser } from "./_apiUtils.js";
import { reports } from '../drizzle/schema.js';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { eq } from 'drizzle-orm';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const user = await authenticateUser(req);

    const { reportId, recipientEmail } = req.body;

    if (!reportId || !recipientEmail) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const client = postgres(process.env.COCKROACH_DB_URL);
    const db = drizzle(client);

    const report = await db.select().from(reports).where(eq(reports.id, reportId)).one();

    if (!report) {
      res.status(404).json({ error: 'Report not found' });
      return;
    }

    const emailResponse = await resend.emails.send({
      from: 'Numerology App <no-reply@numerologyapp.com>',
      to: [recipientEmail],
      subject: 'Your Numerology Report',
      html: `<strong>${report.reportData}</strong>`,
    });

    res.status(200).json({ message: 'Email sent successfully', data: emailResponse });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}