import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function GenerateReport() {
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState(null);

  const handleGenerate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const session = supabase.auth.session();
      const response = await fetch('/api/generate-report', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, dateOfBirth }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to generate report');
      setReport(data);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-full">
      <form onSubmit={handleGenerate} className="w-full max-w-lg bg-white p-8 rounded shadow">
        <h2 className="text-2xl mb-6 text-center">Generate Numerology Report</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded box-border"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Date of Birth</label>
          <input
            type="date"
            className="w-full px-3 py-2 border rounded box-border"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className={`w-full bg-purple-500 text-white py-2 rounded cursor-pointer ${loading ? 'opacity-50' : ''
            }`}
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate'}
        </button>
        {report && (
          <div className="mt-6 p-4 bg-gray-100 rounded">
            <h3 className="text-xl mb-2">Your Report</h3>
            <p>{report.reportData}</p>
          </div>
        )}
      </form>
    </div>
  );
}