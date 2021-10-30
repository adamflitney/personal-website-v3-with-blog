import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";
import { SocialList } from "../components/SocialList";
import Avataaar from "../assets/me-avataaar.svg";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className="container">
        <div>
          <div className="avatar">
            <Avataaar />
          </div>
          <h1>
            Hi, I'm <span className="fancy">Adam Flitney</span>!
          </h1>
          <h2>A full stack developer who loves javascript and all things front end.</h2>
          <p></p>
          <SocialList />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
          flex: 1 1 auto;
          padding: 0 1.5rem;
        }
        h1 {
          font-size: 2.5rem;
          margin: 0;
          font-weight: 500;
        }
        h2 {
          font-size: 1.75rem;
          font-weight: 400;
          line-height: 1.25;
        }
        .fancy {
          color: var(--colors-fancy);
        }

        @media (min-width: 769px) {
          .container > div {
            margin-top: -12rem;
          }
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-size: 2.25rem;
          }
          .avatar {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </Layout>
  );
}
