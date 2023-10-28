import type { LinksFunction, MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import styles from './tailwind.css';
import { ReactNode } from 'react';
import Layout from './components/Layout';
import custom from './custom.css';

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  { rel: 'stylesheet', href: custom },
];

export const meta: MetaFunction = () => {
  return [
    { title: 'Marc Louie Asoy' },
    { name: `Marc's Portfolio`, content: 'Welcome to my new Portfolio Website' },
  ];
};

const Document = ({ children }: { children: ReactNode }) => (
  <html lang='en'>
    <head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <Meta />
      <Links />
    </head>
    <body>
      {children}
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </body>
  </html>
);

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}
