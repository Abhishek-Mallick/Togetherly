// pages/index.js or pages/index.tsx
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Landing = () => {

    // Function to handle sign-in

    return (
        <div>
            <Link href="/">
                <li>Continue to Dashboard</li>
            </Link>
        </div>
    );
};

export default Landing;
