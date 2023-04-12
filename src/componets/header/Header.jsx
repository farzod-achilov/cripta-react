import React, { useContext } from "react";
import logo from "/logo.svg";
import coinIcon from "/coin-icon.svg";
import globalIcon from "/global-icon.svg";
import "./Header.scss";
import { LanguageContent } from "../../context/LanguageContent";

export default function Header() {
  const { language, languages, strings, changeLanguage } =
    useContext(LanguageContent);
  return (
    <header>
      <div class="container">
        <div class="header">
          <h1 class="header__logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </h1>
          <nav>
            <ul class="header__nav-list">
              <li>
                <a href="#">{strings.header.function}</a>
              </li>
              <li>
                <a href="#">{strings.header.wallets}</a>
              </li>
              <li>
                <a href="#">{strings.header.participation}</a>
              </li>
              <li>
                <a href="#">{strings.header.resources}</a>
              </li>
              <li>
                <a href="#">{strings.header.news}</a>
              </li>
              <li class="last-link">
                <a href="#">О BTCA</a>
              </li>
            </ul>
          </nav>
          <div class="header__btns">
            <img width="17" height="18" src={globalIcon} alt="global-icon" />

            <button
              onClick={() => changeLanguage("rus")}
              value={strings.languages.rus}
            >
              {strings?.languages?.rus}
            </button>
            <button
              onClick={() => changeLanguage("eng")}
              value={strings.languages.eng}
            >
              {strings?.languages?.eng}
            </button>

            <button>
              <img width="17" height="18" src={coinIcon} alt="coin-icon" />
              10.834
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
