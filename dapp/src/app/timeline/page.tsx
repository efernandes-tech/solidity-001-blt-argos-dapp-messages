'use client';

import Head from 'next/head';
import NewMessage from '@/components/NewMessage';
import Message from '@/components/Message';
import { getLastMessages } from '@/services/Web3Service';
import { useEffect, useState } from 'react';

export default function Timeline() {
    const [messages, setMessages] = useState([]);
    const [page, setPage] = useState(1);

    const loadMessages = async (page = 1) => {
        try {
            const results = await getLastMessages(page);
            if (page > 1) {
                // @ts-ignore
                messages.push(...results);
                setMessages(messages.reverse());
            } else {
                // @ts-ignore
                setMessages(results.reverse());
            }
        } catch (err: any) {
            console.error(err);
            alert(err.message);
        }
    };

    useEffect(() => {
        loadMessages(page);
    }, [page]);

    const btnLoadMoreClick = () => {
        setPage(page + 1);
    };

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
                        {messages && messages.length ? (
                            messages.map((m: any) => (
                                <Message key={Number(m.timestamp)} data={m} />
                            ))
                        ) : (
                            <p>
                                Nothing to see here. Make the first publication.
                            </p>
                        )}
                        {messages.length > 0 && messages.length % 10 === 0 ? (
                            <div className="center">
                                <input
                                    type="button"
                                    className="btn btn-primary"
                                    value="More messages"
                                    onClick={btnLoadMoreClick}
                                />
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
