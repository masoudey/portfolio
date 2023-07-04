import './globals.css';
import Navbar from '@/components/Navbar';

import Footer from '@/components/Footer';

export const metadata = {
    title: 'FlexibBle',
    description: 'Showcase rem,markable developer project',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
