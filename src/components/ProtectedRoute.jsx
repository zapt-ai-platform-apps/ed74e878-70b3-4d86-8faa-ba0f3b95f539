import React from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

export default function ProtectedRoute({ children }) {
    const session = supabase.auth.session();

    if (!session) {
        return <Navigate to="/login" />;
    }

    return children;
}