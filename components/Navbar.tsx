import { NavLinks } from '@/constant';
import Image from 'next/image';
import Link from 'next/link';
import AuthProviders from './AuthProviders';

const Navbar = () => {
    const session = {};
    return (
        <nav className="flexbetween navbar">
            <div className="flex-1 flexstart gap-10 ">
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        alt="Flexibble"
                        width={115}
                        height={43}
                    />
                </Link>
                <ul className="xl:flex hidden text-sm gap-7">
                    {NavLinks.map((link) => (
                        <li key={link.key}>
                            <Link href={link.href} key={link.key}>
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flexCenter gap-4">
                {session ? (
                    <>
                        UserPhoto
                        <Link href="/create-project">Share Work</Link>
                    </>
                ) : (
                    <AuthProviders />
                )}
            </div>
        </nav>
    );
};
export default Navbar;
