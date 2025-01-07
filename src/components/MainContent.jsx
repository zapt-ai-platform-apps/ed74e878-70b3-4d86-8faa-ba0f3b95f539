import React from 'react';
import SignUp from './SignUp';
import Login from './Login';
import GenerateReport from './GenerateReport';
import ViewReports from './ViewReports';

export default function MainContent({ session }) {
    return (
        <main className="flex-1 p-4">
            {!session ? (
                <>
                    <section id="signup" className="mb-8">
                        <SignUp />
                    </section>
                    <section id="login">
                        <Login />
                    </section>
                </>
            ) : (
                <>
                    <section className="mb-8">
                        <GenerateReport />
                    </section>
                    <section>
                        <ViewReports />
                    </section>
                </>
            )}
        </main>
    );
}