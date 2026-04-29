import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { Leva } from "leva";
import { useEffect, useState } from "react";
import { Cursor } from "./components/Cursor";
import { Experience } from "./components/Experience";
import { Interface } from "./components/Interface";
import { Menu } from "./components/Menu";
import { ScrollManager } from "./components/ScrollManager";
import { framerMotionConfig } from "./config";
import ForMobile from "./components/ForMobile";


function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px)");

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("portfolio-language");
    const browserLanguage = window.navigator.language?.toLowerCase().startsWith("fr")
      ? "fr"
      : "en";

    setLanguage(savedLanguage === "fr" || savedLanguage === "en" ? savedLanguage : browserLanguage);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  return (
    <>
      <MotionConfig
        transition={{
          ...framerMotionConfig,
        }}
      >
        {isMobile ? (
          <ForMobile language={language} setLanguage={setLanguage} />
        ) : (
          <>
            <Canvas shadows camera={{ position: [0, 3, 10], fov: 42 }}>
              <color attach="background" args={["#e6e7ff"]} />
              <ScrollControls pages={5} damping={0.1}>
                <ScrollManager section={section} onSectionChange={setSection} />
                <Scroll>
                  <Experience section={section} menuOpened={menuOpened} />
                </Scroll>
                <Scroll html>
                  <Interface language={language} setSection={setSection} />
                </Scroll>
              </ScrollControls>
            </Canvas>
            <Menu
              onSectionChange={setSection}
              menuOpened={menuOpened}
              setMenuOpened={setMenuOpened}
              activeSection={section}
              language={language}
              setLanguage={setLanguage}
            />
            <Cursor className="hidden lg:block" />
          </>
        )}
      </MotionConfig>
      <Leva hidden />
    </>
  );
}

export default App;
