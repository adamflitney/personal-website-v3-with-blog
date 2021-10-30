import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Navigation() {
  const router = useRouter();
  const [active, setActive] = useState(false);
  return (
    <>
      <div className={"container " + (active ? "active" : "")}>
        <ul>
          <li>
            <Link href="/">
              <a className={router.pathname === "/" ? "active" : null}>About</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a
                className={
                  router.pathname.startsWith("/posts") ? "active" : null
                }
              >
                Blog
              </a>
            </Link>
          </li>
        </ul>
        <style jsx>
          {`
            .container {
              width: 100vw;
            }
            ul {
              width: 100vw;
              height: 4rem;
              list-style: none;
              margin: 0;
              padding: 0;
              position: fixed;
              bottom: 0;
              background-color: #fff;
              display: flex;
              flex-direction: row;
              justify-content: space-evenly;
              align-items: center;
              z-index: 1;
              transition: color 200ms;
            }
            .active ul {
              opacity: 1;
              
            }
            li {
              font-size: 2rem;
            }
            li:last-child {
              margin-bottom: 0;
              margin-right: 0;
            }
            .active {
              color: var(--colors-fancy);
            }

            @media (min-width: 769px) {
              .container {
                display: block;
              }
              ul {
                opacity: 1;
                height: 3rem;
                margin: 0 2rem;
                top: 0;
                right: 0;
                justify-content: flex-end;
                align-items: center;
              }
              li {
                font-size: 2rem;
                padding: 0 1.5rem 0 0;
                margin-right: 2rem;
              }
              .active {
                color: #222;
                text-decoration: underline;
                text-decoration-color: var(--colors-fancy);
              }
            }
          `}
        </style>
      </div>
    </>
  );
}
