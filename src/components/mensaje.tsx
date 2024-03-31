'use client'
import React, { useRef, useEffect } from 'react';

interface MessengerProps {
  messages: string[];
}

const Mensaje: React.FC<MessengerProps> = ({ messages }) => {
  const elementRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    let codeletters = "&#*+%?£@§$";
    let messageIndex = 0;
    let currentLength = 0;
    let fadeBuffer: { c: number; l: string }[] | false = false;

    const generateRandomString = (length: number): string => {
      let randomText = '';
      while (randomText.length < length) {
        randomText += codeletters.charAt(Math.floor(Math.random() * codeletters.length));
      }
      return randomText;
    };

    const animateIn = () => {
      if (currentLength < messages[messageIndex].length) {
        currentLength = currentLength + 2;
        if (currentLength > messages[messageIndex].length) {
          currentLength = messages[messageIndex].length;
        }

        let message = generateRandomString(currentLength);
        if (element) element.innerHTML = message;

        setTimeout(animateIn, 20);
      } else {
        setTimeout(animateFadeBuffer, 20);
      }
    };

    const animateFadeBuffer = () => {
      if (fadeBuffer === false) {
        fadeBuffer = [];
        for (let i = 0; i < messages[messageIndex].length; i++) {
          fadeBuffer.push({ c: Math.floor(Math.random() * 12) + 1, l: messages[messageIndex].charAt(i) });
        }
      }

      let doCycles = false;
      let message = '';

      for (let i = 0; i < fadeBuffer.length; i++) {
        const fader = fadeBuffer[i];
        if (fader.c > 0) {
          doCycles = true;
          fader.c--;
          message += codeletters.charAt(Math.floor(Math.random() * codeletters.length));
        } else {
          message += fader.l;
        }
      }

      if (element) element.innerHTML = message;

      if (doCycles) {
        setTimeout(animateFadeBuffer, 50);
      } else {
        setTimeout(cycleText, 2000);
      }
    };

    const cycleText = () => {
      messageIndex++;
      if (messageIndex < messages.length) {
        currentLength = 0;
        fadeBuffer = false;
        if (element) element.innerHTML = '';
        setTimeout(animateIn, 200);
      }
    };

    animateIn();

    return () => {
      // Cleanup if necessary
    };
  }, [messages]);

  return <p ref={elementRef} className="p-4 bg-gray-100 rounded-md text-gray-900 text-sm mb-4" onClick={() => {
    navigator.clipboard.writeText(messages[0]);
    elementRef.current?.classList.add('bg-green-100');
    if (elementRef.current) {
      elementRef.current.innerText = "Copiado!";
    }

    setTimeout(() => {
      elementRef.current?.classList.remove('bg-green-100');
      if (elementRef.current) {
        elementRef.current.innerText = messages[0];
      }
    }, 1000);
  }
  }></p>;
}
export default Mensaje;
