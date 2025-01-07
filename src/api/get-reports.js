import { authenticateUser } from "./_apiUtils.js";
import { reports } from '../drizzle/schema.js';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { eq } from 'drizzle-orm';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    const user = await authenticateUser(req);

    const client = postgres(process.env.COCKROACH_DB_URL);
    const db = drizzle(client);

    const userReports = await db.select()
      .from(reports)
      .where(eq(reports.userId, user.id))
      .limit(10);

    res.status(200).json(userReports);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}