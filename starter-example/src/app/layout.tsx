import '@/styles/global.css';
import { lusitana } from '@/lib/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lusitana.className} scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-100 antialiased`}
      >
        {children}
        <div className="fixed left-0 top-0 flex h-8 w-8 items-center justify-center bg-black text-white">
          <div className="block md:hidden">SM</div>
          <div className="hidden md:block lg:hidden">MD</div>
          <div className="hidden lg:block xl:hidden">LG</div>
          <div className="hidden xl:block 2xl:hidden">XL</div>
          <div className="hidden 2xl:block">2XL</div>
        </div>
      </body>
    </html>
  );
}
