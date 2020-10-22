import { default as links } from './data';

import { useRouter } from 'next/router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Brands from '@fortawesome/free-brands-svg-icons';

export default function SocialLinks() {
    const router = useRouter();

    return (
        <div className="social-links">
            <ul>
                {links.map((link, index) => (
                    <li key={index} onClick={() => router.replace(link.href)}>
                        <FontAwesomeIcon icon={Brands[link.icon]} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
