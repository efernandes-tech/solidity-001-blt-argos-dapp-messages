import Image from 'next/image';
import { generateAvatarURL } from '@cfx-kit/wallet-avatar';

export default function Message(props: any) {
    return (
        <>
            <div className="message">
                <Image
                    src={generateAvatarURL(props.data.author)}
                    className="message-author-logo"
                    alt={''}
                    width={49}
                    height={49}
                />
                <div>
                    <div className="message-header">
                        <div className="message-author-name">
                            {props.data.username}
                        </div>
                        <div className="message-author-slug">
                            @{props.data.author}
                        </div>
                    </div>
                    <div className="message-publish-time">
                        at{' '}
                        {new Date(
                            Number(props.data.timestamp) * 1000,
                        ).toLocaleString()}
                    </div>
                    <div>{props.data.text}</div>
                </div>
            </div>
        </>
    );
}
