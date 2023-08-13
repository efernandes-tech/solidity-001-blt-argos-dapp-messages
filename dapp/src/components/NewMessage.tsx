'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

import { addMessage } from '@/services/Web3Service';

export default function NewMessage() {
    const [text, setText] = useState('');
    const [message, setMessage] = useState('');
    const { push } = useRouter();

    const btnPublishClick = (): void => {
        setMessage('Sending your message to blockchain... Wait...');
        addMessage(text)
            .then((result) => {
                setText('');
                setMessage('Message was sent. Wait a minute to update.');
            })
            .catch((err) => {
                setMessage(err.message);
                console.error(err);
            });
    };

    useEffect(() => {
        const wallet = localStorage.getItem('wallet');
        if (!wallet) push('/');
    }, []);

    return (
        <>
            <div className="top">
                <div className="left">
                    <Image
                        src="/argos-dapp-messages-icon.svg"
                        alt={''}
                        className="brand"
                        height={64}
                        width={64}
                    />
                </div>
                <h1>Welcome back!</h1>
                <p>What is happening?</p>
                <textarea
                    className="form-control my-3"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                ></textarea>
                <div>
                    <input
                        type="button"
                        className="btn btn-primary"
                        value="Publish"
                        onClick={btnPublishClick}
                    />
                    <span className="message">{message}</span>
                </div>
            </div>
        </>
    );
}
