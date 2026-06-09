import Image from "next/image";
import { LockIcon } from "./icons";

interface BrowserFrameProps {
  domain: string;
  /** Real screenshot path under /public, e.g. "/work/funded-futures.png". */
  src?: string;
  alt?: string;
  placeholder: string;
}

export function BrowserFrame({ domain, src, alt, placeholder }: BrowserFrameProps) {
  return (
    <div className="browser">
      <div className="browser-bar">
        <span className="dots">
          <i />
          <i />
          <i />
        </span>
        <span className="url">
          <LockIcon />
          {domain}
        </span>
      </div>
      <div className="shot">
        {src ? (
          <Image src={src} alt={alt ?? `${domain} screenshot`} fill sizes="(max-width: 880px) 100vw, 560px" />
        ) : (
          <div className="ph">{placeholder}</div>
        )}
      </div>
    </div>
  );
}
