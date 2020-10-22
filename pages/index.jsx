import Aside from 'components/Aside';
import Menu from 'components/Menu';
import SocialLinks from 'components/social_links/SocialLinks';
import Logo from 'components/Logo';

export default function Home() {
    return (
        <main className="home-page">
            <Aside />
            <Menu />
            <Logo />
            <SocialLinks />
        </main>
    );
}
