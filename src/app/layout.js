// Load styles
import './globals.css';

// Load components
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'TV app',
  description: 'TV application website',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`bg-[url('/assets/FeaturedCoverImage.png')]`}>
        <div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}