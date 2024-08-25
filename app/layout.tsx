import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ragnar054 Portfolio',
  description: 'Hello, I am @ragnar054, I have been on the path of becoming a developer for 1 years. I live in Diyarbakır, Türkiye. ',
  themeColor: '#8B5CF6',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  icons: 'https://cdn.discordapp.com/attachments/1174845295209742386/1276651201320190037/8838b17ac239227c26d7c96520898020.png?ex=66cc47d5&is=66caf655&hm=6c51ed00268b479cbd471c9c86bd0ed4895af83dfa79a49b018c14d9c1a8a99f&',
  openGraph: {
    images: 'https://media.discordapp.net/attachments/1150530493843001415/1277320570484166736/cd2918a9bcafe16b2155ab694c28b275.jpg?ex=66ccbcfb&is=66cb6b7b&hm=b4cb76c4eb1642b77ba4102370a7ea4b78b551f7de84d8545f5233680400f7a5&=&format=webp&width=386&height=430',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
