'use client';

import NewMessage from '@/components/NewMessage';
import Head from 'next/head';

export default function Timeline() {
    return (
        <>
            <Head>
                <title>ArgosDappMessages | Timeline</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <div className="container">
                <div className="row">
                    <div className="layout">
                        <NewMessage />
                    </div>
                </div>
            </div>
        </>
    );
}
