import React from 'react';
import SendReportEmail from './SendReportEmail';

export default function Report({ report }) {
    return (
        <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl mb-2">{report.fullName}</h3>
            <p className="text-gray-600">DOB: {new Date(report.dateOfBirth).toLocaleDateString()}</p>
            <p className="mt-2">{report.reportData}</p>
            <SendReportEmail reportId={report.id} />
        </div>
    );
}