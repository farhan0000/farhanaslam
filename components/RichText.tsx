import { Fragment } from "react";
import type { RichText as RichTextType } from "@/lib/content";

export function RichText({ value }: { value: RichTextType }) {
  return (
    <>
      {value.map((seg, i) =>
        typeof seg === "string" ? (
          <Fragment key={i}>{seg}</Fragment>
        ) : (
          <b key={i}>{seg.b}</b>
        )
      )}
    </>
  );
}
