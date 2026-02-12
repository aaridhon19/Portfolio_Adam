import '@/styles/globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
// import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Portfolio Adam Rizqi Romadhon',
  description: 'Portfolio of Adam Rizqi Romadhon, a Mobile Developer specializing in Kotlin, Flutter, Swift, and React Native',
  icons: {
    icon: 'images/adamicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <ThemeProvider>
          <main>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}