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
    images: 'https://cdn.discordapp.com/attachments/1154444966429462578/1251217816984486029/standard_1.gif?ex=666dc6e6&is=666c7566&hm=3ef26eab048629c1a3c213fe3c36b74223d96ea962338b65d3d5d4693b59350d&',
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
