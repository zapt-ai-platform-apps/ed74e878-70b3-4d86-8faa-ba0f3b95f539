import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

export default function App(){
    const [session, setSession] = useState(null);

    useEffect(() => {
        const currentSession = supabase.auth.session();
        setSession(currentSession);

        const { data: authListener } = supabase.auth.onAuthStateChange(
            (event, newSession) => {
                setSession(newSession);
            }
        );

        return () => {
            authListener.unsubscribe();
        };
    }, []);

    return (
        <div className="min-h-screen h-full flex flex-col">
            <Header session={session} />
            <MainContent session={session} />
            <Footer />
        </div>
    )
}