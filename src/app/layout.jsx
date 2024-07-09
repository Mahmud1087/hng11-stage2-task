import { El_Messiri } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/navbar';
import Footer from '@/components/footer/footer';
import AppProvider from './context';
import { ToastContainer } from 'react-toastify';

const el_messiri = El_Messiri({ subsets: ['latin'] });

export const metadata = {
  title: 'Helendo E-Commerce Store',
  description: 'Designed by Miracle Nzeh and coded by enesi_dev',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={el_messiri.className}>
        <AppProvider>
          <ToastContainer />
          <Navbar />
          {children}
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
