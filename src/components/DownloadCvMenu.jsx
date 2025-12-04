import { useEffect, useId, useRef, useState } from "react";
import { Download, FileText } from "lucide-react";

import pdfUrl from "@/assets/cv/Kane Resume.pdf?url";
import docxUrl from "@/assets/cv/Kane Resume.docx?url";

/**
 * DownloadCvMenu
 * - Click button to open a small menu with "PDF" and "DOCX"
 * - Uses Vite asset imports so URLs work with GitHub Pages base paths.
 * - Replace the placeholder files in src/assets/cv/ with your real CV files.
 */
export const DownloadCvMenu = () => {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const containerRef = useRef(null);

  useEffect(() => {
    const onPointerDown = (e) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) setOpen(false);
    };

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={containerRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 inline-flex items-center gap-2"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
      >
        <Download className="h-4 w-4" />
        Download CV
      </button>

      {open ? (
        <div
          id={menuId}
          role="menu"
          aria-label="Download CV options"
          className="absolute z-50 mt-2 w-48 rounded-xl border border-border bg-card/95 backdrop-blur shadow-lg overflow-hidden"
        >
          <a
            role="menuitem"
            href={pdfUrl}
            download="Kane_Bernard_CV.pdf"
            className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-primary/10 transition-colors"
            onClick={() => setOpen(false)}
          >
            <FileText className="h-4 w-4 text-primary" />
            Download PDF
          </a>

          <a
            role="menuitem"
            href={docxUrl}
            download="Kane_Bernard_CV.docx"
            className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-primary/10 transition-colors"
            onClick={() => setOpen(false)}
          >
            <FileText className="h-4 w-4 text-primary" />
            Download DOCX
          </a>
        </div>
      ) : null}
    </div>
  );
};
