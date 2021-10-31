import React from "react";
import Twitter from "../assets/twitter-alt.svg";
import GitHub from "../assets/github-alt.svg";
import GitLab from "../assets/gitlab-alt-like.svg";
import Codepen from "../assets/codepen.svg";
import LinkedIn from "../assets/linkedin-alt.svg";
import config from "../lib/config";

export function SocialList({}) {
  return (
    <div>
      <a
        title="Twitter"
        href={`https://twitter.com/${config.twitter_account}`}
        target="_blank"
        rel="noopener"
      >
        <Twitter width={24} height={24} fill={"var(--colors-text)"} />
      </a>
      <a
        title="GitHub"
        href={`https://github.com/${config.github_account}`}
        target="_blank"
        rel="noopener"
      >
        <GitHub width={24} height={24} fill={"var(--colors-text)"} />
      </a>
      <a
        title="GitLab"
        href={`https://gitlab.com/${config.github_account}`}
        target="_blank"
        rel="noopener"
      >
        <GitLab width={24} height={24} fill={"var(--colors-text)"} />
      </a>
      <a
        title="Codepen"
        href={`https://codepen.io/blueberrypie`}
        target="_blank"
        rel="noopener"
      >
        <Codepen width={24} height={24} fill={"var(--colors-text)"} />
      </a>
      <a
        title="LinkedIn"
        href={`https://www.linkedin.com/in/adamflitney/`}
        target="_blank"
        rel="noopener"
      >
        <LinkedIn width={24} height={24} fill={"var(--colors-text)"} />
      </a>
      <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
        svg {
          transition: 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}
