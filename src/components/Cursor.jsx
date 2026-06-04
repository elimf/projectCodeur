import { useEffect, useRef, useState } from "react";

const CURSOR_SPEED = 0.08;

let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0;

export const Cursor = () => {
  const cursorOutline = useRef();
  const animationFrame = useRef();
  const [hoverButton, setHoverButton] = useState(false);

  const animate = () => {
    if (!cursorOutline.current) {
      return;
    }

    let distX = mouseX - outlineX;
    let distY = mouseY - outlineY;

    outlineX = outlineX + distX * CURSOR_SPEED;
    outlineY = outlineY + distY * CURSOR_SPEED;

    cursorOutline.current.style.left = `${outlineX}px`;
    cursorOutline.current.style.top = `${outlineY}px`;
    animationFrame.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX = event.pageX;
      mouseY = event.pageY;
    };

    document.addEventListener("mousemove", handleMouseMove);
    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  useEffect(() => {
    const handleMouseOver = (e) => {
      const tagName = e.target.tagName?.toLowerCase();
      const parentTagName = e.target.parentElement?.tagName?.toLowerCase();

      if (
        tagName === "button" ||
        parentTagName === "button" ||
        tagName === "input" ||
        tagName === "textarea"
      ) {
        setHoverButton(true);
      } else {
        setHoverButton(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        className={`z-50 fixed -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-transform
        ${
          hoverButton
            ? "bg-transparent border-2 border-indigo-900 w-5 h-5"
            : "bg-indigo-500 w-3 h-3"
        }`}
        ref={cursorOutline}
      ></div>
    </>
  );
};
