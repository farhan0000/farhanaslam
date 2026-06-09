import Image from "next/image";

interface Screen {
  src?: string;
  alt?: string;
  placeholder: string;
}

export function PhoneFrames({ screens }: { screens: Screen[] }) {
  return (
    <div className="phones">
      {screens.map((s, i) => (
        <div className="phone" key={i}>
          <div className="shot">
            {s.src ? (
              <Image src={s.src} alt={s.alt ?? `App screen ${i + 1}`} fill sizes="232px" />
            ) : (
              <div className="ph">{s.placeholder}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
