import { useState, useEffect } from 'react';

type Props = {
  
};
export default function ThemeToggle(any: Props) {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme])

  


  return (
    <>
      <button 
        aria-label={`Change to ${inactiveTheme} mode`}
        title={`Change to ${inactiveTheme} mode`} 
        type="button" className={"toggle-button"} 
        onClick={() => setActiveTheme(inactiveTheme)}>
        <span className={"toggle-thumb"} data-theme={activeTheme}/>
        <span aria-hidden={true}>🌙</span>
        <span aria-hidden={true}>☀️</span>
      </button>
      <style jsx>
        {`
          .toggle-button {
            --toggle-width: 80px;
            --toggle-height: 38px;
            --toggle-padding: 2.5px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-around;
            font-size: 1.5rem;
            line-height: 1;
            width: var(--toggle-width);
            height: var(--toggle-height);
            padding: var(--toggle-padding);
            border: 0;
            border-radius: calc(var(--toggle-width) / 2);
            cursor: pointer;
            background: rgb(196, 196, 196);
            transition: background 0.25s ease-in-out;
          }
          .toggle-button:focus {
            outline-offset: 5px;
          }
          .toggle-button:not(:focus-visible) {
            outline: none;
          }
          .toggle-button:hover {
            box-shadow: 0 0 5px 2px var(--colors-background);
          }
          .toggle-thumb {
            position: absolute;
            top: var(--toggle-padding);
            left: var(--toggle-padding);
            width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
            height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
            border-radius: 50%;
            background: rgb(116, 116, 116);
            transition: transform 0.25s ease-in-out;
          }
          .toggle-thumb[data-theme="light"] {
            transform: none;
          }
          .toggle-thumb[data-theme="dark"] {
            transform: translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0);
          }
        `}
      </style>
    </>
  );
}
