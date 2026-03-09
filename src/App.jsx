import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { translations } from "./translations";
import Hero from "./Hero";
import New from "./New";

const App = () => {
  const [lang, setLang] = useState("en");

  const t = translations[lang];
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prevTheme) => !prevTheme);
  };

  useEffect(() => {
    const root = document.documentElement;

    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white text-[#1f1f1f] transition-colors duration-300 dark:bg-black dark:text-white">
      <Navbar onToggleTheme={toggleTheme} setLang={setLang} lang={lang}/>
      <Hero lang={lang} />
      <New lang={lang} />
    </div>
  );
};

export default App;