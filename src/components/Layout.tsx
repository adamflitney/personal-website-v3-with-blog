import Head from "next/head";
import dynamic from "next/dynamic";
import Navigation from "./Navigation";


const ThemeToggle = dynamic(() => import('../components/ThemeToggle'), {
  ssr: false
});

type Props = {
  children: React.ReactNode;
};
export default function Layout({ children }: Props) {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <nav>
        <div className="top-bar">
        <Navigation />
        <ThemeToggle />
          </div>
        
      </nav>
      <main>{children}</main>
      <style jsx>
        {`
          .root {
            display: block;
            padding: 0;
            box-sizing: border-box;
            height: 100%;
          }
          main {
            display: flex;
            min-height: 100%;
          }
          button {
            margin-top: 50px;
          }
          @media (min-width: 769px) {
            .root {
              display: flex;
              flex-direction: column;
              flex: 1 0 auto;
            }
            main {
              flex: 1 0 auto;
            }
            .top-bar {
              padding: 1rem;
            }
          }
        `}
      </style>
    </div>
  );
}
