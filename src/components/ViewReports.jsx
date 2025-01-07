import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function ViewReports() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReports = async () => {
    try {
      const session = supabase.auth.session();
      const response = await fetch('/api/get-reports', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to fetch reports');
      setReports(data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-6">My Numerology Reports</h2>
      {loading ? (
        <p>Loading reports...</p>
      ) : reports.length === 0 ? (
        <p>No reports found. Generate one now!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reports.map((report) => (
            <div key={report.id} className="bg-white p-4 rounded shadow">
              <h3 className="text-xl mb-2">{report.fullName}</h3>
              <p className="text-gray-600">DOB: {new Date(report.dateOfBirth).toLocaleDateString()}</p>
              <p className="mt-2">{report.reportData}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}