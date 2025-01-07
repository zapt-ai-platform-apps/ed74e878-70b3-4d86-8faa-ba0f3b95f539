import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateReport } from '../api/reportApi';
import FormFields from './FormFields';

export default function NumerologyForm() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        setError('');
        console.log('Generating numerology report for:', name, birthDate);
        try {
            const response = await generateReport({ name, birthDate });
            console.log('Report generated:', response.data);
            navigate('/report', { state: { report: response.data } });
        } catch (err) {
            setError('Failed to generate report. Please try again.');
            console.error('Error generating report:', err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex items-center justify-center h-full p-4">
            <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded shadow">
                <h2 className="text-2xl mb-4 text-gray-800">Generate Your Numerology Report</h2>
                {error && <div className="mb-4 text-red-500">{error}</div>}
                <FormFields name={name} setName={setName} birthDate={birthDate} setBirthDate={setBirthDate} />
                <button 
                    type="submit" 
                    className={`w-full bg-blue-500 text-white p-2 rounded ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                    disabled={loading}
                >
                    {loading ? 'Generating...' : 'Generate Report'}
                </button>
            </form>
        </div>
    )
}