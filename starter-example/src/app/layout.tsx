import '@/styles/global.css';
import { lusitana } from '@/lib/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>{children}</body>
    </html>
  );
}
