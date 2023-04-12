import { createContext, useState } from "react";

import rus from "../locales/rus.json";
import eng from "../locales/eng.json";

const languages = ["rus", "eng"];
const languageStrings = {
  rus,
  eng,
};

export const LanguageContent = createContext({
  language: "rus",
  strings: languageStrings.rus,
  languages,
});

export default function LanguageProvider({ children }) {
  const [language, setlanguage] = useState("rus");

  function changeLanguage(lang) {
    if (!languages.includes(lang)) throw Error(`${lang} does not exist`);

    setlanguage(lang);
  }

  return (
    <LanguageContent.Provider
      value={{
        language,
        languages,
        strings: languageStrings[language],
        changeLanguage,
      }}
    >
      {children}
    </LanguageContent.Provider>
  );
}
