import React from 'react';
import Report from './Report';

export default function ReportList({ reports }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reports.map((report) => (
                <Report key={report.id} report={report} />
            ))}
        </div>
    );
}