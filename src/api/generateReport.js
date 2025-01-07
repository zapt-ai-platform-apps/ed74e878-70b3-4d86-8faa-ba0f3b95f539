import Sentry from '../utils/sentry';
import { calculateLifePathNumber, calculateExpressionNumber, calculateSoulUrgeNumber, numerologyDescriptions } from '../utils/numerology';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ error: 'Method Not Allowed' });
        return;
    }

    try {
        const { name, birthDate } = req.body;
        
        if (!name || !birthDate) {
            res.status(400).json({ error: 'Name and Birth Date are required.' });
            return;
        }

        // Perform calculations
        const lifePathNumber = calculateLifePathNumber(birthDate);
        const expressionNumber = calculateExpressionNumber(name);
        const soulUrgeNumber = calculateSoulUrgeNumber(name);

        // Get descriptions
        const lifePathDescription = numerologyDescriptions.lifePathNumbers[lifePathNumber] || "Description not available.";
        const expressionDescription = numerologyDescriptions.expressionNumbers[expressionNumber] || "Description not available.";
        const soulUrgeDescription = numerologyDescriptions.soulUrgeNumbers[soulUrgeNumber] || "Description not available.";

        // Construct report
        const report = {
            lifePathNumber,
            lifePathDescription,
            expressionNumber,
            expressionDescription,
            soulUrgeNumber,
            soulUrgeDescription
        };

        console.log('Numerology report generated:', report);

        res.status(200).json(report);
    } catch (error) {
        Sentry.captureException(error);
        console.error('Error in generateReport API:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}