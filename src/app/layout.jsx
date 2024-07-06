import { El_Messiri } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/navbar';

const el_messiri = El_Messiri({ subsets: ['latin'] });

export const metadata = {
  title: 'Timble E-Commerce Store',
  description: 'Designed by Miracle Nzeh and coded by enesi_dev',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={el_messiri.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}