import React from 'react';

export default function ReportDetail({ report }) {
    return (
        <div className="p-4 bg-white rounded shadow">
            <h2 className="text-2xl mb-4">{report.fullName}'s Numerology Report</h2>
            <p className="mb-2"><strong>Date of Birth:</strong> {new Date(report.dateOfBirth).toLocaleDateString()}</p>
            <div className="mt-4">
                <p>{report.reportData}</p>
            </div>
        </div>
    );
}