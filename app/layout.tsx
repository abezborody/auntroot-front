import type { Metadata } from 'next';
import './globals.css';
import { Navigation } from '@/components';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import theme from '@/theme/themeConfig';

export const metadata: Metadata = {
  title: 'Tbilisi flower deilivery',
  description: 'Buy flowers in Tbilisi',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <AntdRegistry>
          <ConfigProvider theme={theme}>
            <Navigation />
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
