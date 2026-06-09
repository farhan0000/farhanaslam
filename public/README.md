# /public — assets

Drop real images here, then wire them up:

- **Headshot** → save as e.g. `farhan.jpg`, then in `components/sections/About.tsx`
  replace the `.photo-frame` placeholder with
  `<Image src="/farhan.jpg" alt="Farhan Aslam" fill />`.

- **Project screenshots** → add the `src` field to each project in `lib/content.ts`:
  - Browser projects: `visual: { kind: "browser", domain, placeholder, src: "/work/funded-futures.png" }`
    (and pass it through in `Work.tsx` / `BrowserFrame.tsx`).
  - Phone projects: add `src` to each screen object.

Until then, the frames render a labelled placeholder at the correct aspect ratio.
