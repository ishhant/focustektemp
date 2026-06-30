

import { useEffect, useRef, useState } from "react";

export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

export function AnimSection({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function WhatsAppButton({ message = "Hello Focustek, I have an inquiry." }) {
  const encodedMsg = encodeURIComponent(message);
  return (
    <a
      href={`https://wa.me/919311143461?text=${encodedMsg}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
    >
      <svg className="whatsapp-icon" viewBox="0 0 24 24">
        <path d="M12.031 0C5.385 0 0 5.388 0 12.038c0 2.124.553 4.195 1.604 6.015L.15 23.475l5.565-1.46c1.761.956 3.742 1.461 5.816 1.461h.005c6.645 0 12.031-5.387 12.031-12.038C23.567 5.388 18.18 0 12.031 0zm0 21.411c-1.782 0-3.53-.48-5.06-1.386l-.362-.214-3.765.987.996-3.666-.235-.373C2.533 15.02 2.016 13.55 2.016 12.038c0-5.526 4.498-10.024 10.02-10.024 5.523 0 10.021 4.498 10.021 10.024s-4.498 10.024-10.021 10.024zm5.5-7.525c-.302-.15-1.785-.882-2.062-.983-.277-.101-.48-.15-.683.15-.203.303-.782.983-.958 1.185-.177.202-.354.227-.656.076-1.12-.56-2.193-1.258-3.14-2.052-.638-.535-1.144-1.21-1.47-1.96-.127-.276.126-.275.426-.874.101-.202.051-.378-.025-.53-.076-.15-.683-1.644-.937-2.253-.247-.59-.5-.51-.683-.518-.176-.007-.378-.008-.58-.008s-.53.076-.807.378c-.277.302-1.059 1.034-1.059 2.52 0 1.486 1.084 2.923 1.236 3.125.152.202 2.13 3.251 5.161 4.558 2.008.868 2.825 1.002 3.864.845 1.157-.174 2.57-.96 2.95-1.921.378-.96.378-1.783.265-1.96-.112-.176-.416-.277-.718-.428z"/>
      </svg>
    </a>
  );
}
