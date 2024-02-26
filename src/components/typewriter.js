import { useState, useEffect } from "react";

const useTypewriter = (text, speed = 100) => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let interval;

    if (index < text.length) {
      interval = setInterval(() => {
        setDisplayText((prevText) => prevText + text[index]);
        setIndex((prevIndex) => prevIndex + 1);
      }, speed);
    }

    return () => clearInterval(interval);
  }, [text, speed, index]);

  return displayText;
};

const Typewriter = ({ text, speed }) => {
  const displayText = useTypewriter(text, speed);

  return <p>{displayText}</p>;
};

export default Typewriter;
