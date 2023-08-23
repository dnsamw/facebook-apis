interface Props {
  url: string;
}

import { useEffect } from "react";

export default function useExternalScripts({ url }: Props) {
  useEffect(() => {
    const head = document.querySelector("head");
    if (!head) return;

    const script = document.createElement("script");
    script.setAttribute("src", url);
    head.appendChild(script);

    return () => {
      head.removeChild(script);
    };
  }, [url]);

  return null;
}
