import React from 'react';
import { supabase } from '../supabaseClient';

export default function Header({ session }) {
    return (
        <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <h1 className="text-xl">Numerology Report Generator</h1>
            <div>
                {session ? (
                    <button
                        onClick={() => supabase.auth.signOut()}
                        className="bg-red-500 px-3 py-1 rounded cursor-pointer"
                    >
                        Sign Out
                    </button>
                ) : (
                    <>
                        <a href="#signup" className="mr-4 cursor-pointer">Sign Up</a>
                        <a href="#login" className="cursor-pointer">Log In</a>
                    </>
                )}
            </div>
        </header>
    );
}