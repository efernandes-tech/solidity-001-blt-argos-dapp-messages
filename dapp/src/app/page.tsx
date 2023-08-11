'use client';

import Head from 'next/head';
import Image from 'next/image';
import { doLogin } from '@/services/Web3Service';
import { useState } from 'react';

export default function Home() {
    const [message, setMessage] = useState('');

    const btnLoginClick = (): void => {
        setMessage('Connecting with Metamask. Wait...');
        doLogin()
            .then((wallet) => setMessage(wallet))
            .catch((err) => setMessage(err));
    };

    return (
        <>
            <Head>
                <title>ArgosDappMessages | Login</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <div className="container px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <Image
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                            className="d-block mx-lg-auto img-fluid"
                            width={700}
                            height={500}
                            alt="Friends"
                        />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                            ArgosDappMessages
                        </h1>
                        <p className="lead">Your dapp network social.</p>
                        <p className="lead mb-3">
                            Authenticate with your wallet, write your messages,
                            and know what&apos;s happening in the world.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button
                                type="button"
                                className="btn btn-primary btn-lg px-4 me-md-2"
                                onClick={btnLoginClick}
                            >
                                <Image
                                    src="/metamask-icon.svg"
                                    alt="Metamask icon"
                                    width={50}
                                    height={46}
                                    className="me-3"
                                />
                                Connect as Metamask
                            </button>
                        </div>
                        <p className="message">{message}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
