import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function SendReportEmail({ reportId }) {
  const [recipientEmail, setRecipientEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const session = supabase.auth.session();
      const response = await fetch('/api/send-report-email', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${session?.access_token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reportId, recipientEmail }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to send email');
      alert('Email sent successfully!');
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSendEmail} className="mt-4">
      <div className="mb-2">
        <label className="block text-gray-700">Recipient's Email</label>
        <input
          type="email"
          className="w-full px-3 py-2 border rounded box-border"
          value={recipientEmail}
          onChange={(e) => setRecipientEmail(e.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className={`bg-blue-500 text-white py-2 px-4 rounded cursor-pointer ${loading ? 'opacity-50' : ''
          }`}
        disabled={loading}
      >
        {loading ? 'Sending...' : 'Send Email'}
      </button>
    </form>
  );
}