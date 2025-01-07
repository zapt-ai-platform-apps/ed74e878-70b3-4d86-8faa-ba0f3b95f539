import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function NumerologyReport() {
    const location = useLocation();
    const navigate = useNavigate();
    const { report } = location.state || {};

    if (!report) {
        navigate('/');
        return null;
    }

    return (
        <div className="flex flex-col items-center justify-center h-full p-4">
            <div className="w-full max-w-2xl bg-white p-8 rounded shadow">
                <h2 className="text-2xl mb-4 text-gray-800">Your Numerology Report</h2>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-700">Life Path Number: {report.lifePathNumber}</h3>
                    <p className="text-gray-600">{report.lifePathDescription}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-700">Expression Number: {report.expressionNumber}</h3>
                    <p className="text-gray-600">{report.expressionDescription}</p>
                </div>
                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-700">Soul Urge Number: {report.soulUrgeNumber}</h3>
                    <p className="text-gray-600">{report.soulUrgeDescription}</p>
                </div>
                <button 
                    onClick={() => navigate('/')}
                    className="mt-6 bg-blue-500 text-white p-2 rounded cursor-pointer hover:bg-blue-600"
                >
                    Generate Another Report
                </button>
            </div>
        </div>
    )
}