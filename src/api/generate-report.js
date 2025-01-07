import { authenticateUser } from "./_apiUtils.js";
import { reports } from '../drizzle/schema.js';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { eq } from 'drizzle-orm';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const user = await authenticateUser(req);

    const { fullName, dateOfBirth } = req.body;

    if (!fullName || !dateOfBirth) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    // Generate numerology report (placeholder for actual logic)
    const reportData = `Numerology report for ${fullName} born on ${dateOfBirth}`;

    const client = postgres(process.env.COCKROACH_DB_URL);
    const db = drizzle(client);

    const newReport = await db.insert(reports).values({
      fullName,
      dateOfBirth,
      reportData,
      userId: user.id,
    }).returning();

    res.status(201).json(newReport);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}