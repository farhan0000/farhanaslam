import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>{footer.left}</span>
        <span>{footer.right}</span>
      </div>
    </footer>
  );
}
