"use client";

import Script from "next/script";

export default function B24UScript() {
  return (
    <Script
      src="https://i.b24u.ru/it-delta.ru"
      strategy="afterInteractive"
      onLoad={() => {
        if ((window as any).B24U) {
            (window as any).B24U.init();
        }
      }}
    />
  );
}
