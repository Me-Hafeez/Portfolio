import React, { useEffect, useState } from "react";

/**
 * Design tokens
 * ---------------------------------------------------------
 * Background : #F7F5F1 (soft warm paper, not the AI-cliché cream)
 * Surface    : #FFFFFF
 * Ink        : #1B1A18 (near-black, warm)
 * Ink muted  : #6B6660
 * Border     : #E7E3DC
 * Accent     : #C1592B (burnt terracotta-orange, food-adjacent, used once)
 * Display    : "Space Grotesk"
 * Body       : "Manrope"
 * ---------------------------------------------------------
 */

function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.2.67.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function TelegramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M21.94 4.6 18.63 20.2c-.25 1.11-.9 1.38-1.83.86l-5.06-3.73-2.44 2.35c-.27.27-.5.5-1.02.5l.36-5.18 9.42-8.51c.41-.36-.09-.57-.63-.2L6.3 12.98l-5.02-1.57c-1.09-.34-1.11-1.09.23-1.61L20.58 3.29c.91-.33 1.7.22 1.36 1.31Z" />
    </svg>
  );
}

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Manrope:wght@400;500;600;700&display=swap');

        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; }
        #root { min-height: 100dvh; }

        .bg-animated {
          position: fixed;
          inset: 0;
          z-index: 0;
          background: linear-gradient(
            120deg,
            #F7EFE4,
            #F3E3D3,
            #EFD9CB,
            #F6E9DC,
            #E9DCC8,
            #F3E3D3
          );
          background-size: 300% 300%;
          animation: driftGradient 22s ease-in-out infinite;
        }

        @keyframes driftGradient {
          0%   { background-position: 0% 40%; }
          50%  { background-position: 100% 60%; }
          100% { background-position: 0% 40%; }
        }

        .card {
          position: relative;
          z-index: 1;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .card.mounted {
          opacity: 1;
          transform: translateY(0);
        }

        .avatar-wrap {
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .avatar-wrap:hover {
          transform: translateY(-2px);
        }
        .avatar-img {
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .avatar-wrap:hover .avatar-img {
          transform: scale(1.035);
        }

        .social-link {
          transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }
        .social-link:hover {
          background-color: #1B1A18;
          border-color: #1B1A18;
          color: #F7F5F1;
          transform: translateY(-1px);
        }
        .social-link:focus-visible {
          outline: 2px solid #C1592B;
          outline-offset: 2px;
        }

        @media (max-width: 380px) {
          .card-inner { padding: 24px 18px !important; }
        }

        @media (min-width: 900px) {
          .card { max-width: 380px !important; }
        }

        @media (prefers-reduced-motion: reduce) {
          .bg-animated { animation: none; }
          .card, .avatar-wrap, .avatar-img, .social-link {
            transition: none !important;
          }
        }
      `}</style>

      <div className="bg-animated" aria-hidden="true" />

      <div className={`card ${mounted ? "mounted" : ""}`} style={styles.card}>
        <div className="card-inner" style={styles.cardInner}>
          <div className="avatar-wrap" style={styles.avatarWrap}>
            <img
              className="avatar-img"
              src="https://anya-file-host.vercel.app/aftlp5mbwe"
              alt="Hafeez"
              style={styles.avatarImg}
            />
          </div>

          <div style={styles.nameRow}>
            <h1 style={styles.name}>Hafeez</h1>
          </div>

          <div style={styles.roles}>
            <span style={styles.roleBadge}>Student</span>
            <span style={styles.roleBadge}>Professional Food Enjoyer 🍔</span>
          </div>

          <p style={styles.quote}>"Not much to say. I just like eating."</p>

          <div style={styles.divider} />

          <div style={styles.socials}>
            <a
              className="social-link"
              href="https://github.com/me-hafeez"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hafeez on GitHub"
              title="GitHub"
              style={styles.socialLink}
            >
              <GithubIcon />
            </a>
            <a
              className="social-link"
              href="https://t.me/Hafeez"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hafeez on Telegram"
              title="Telegram"
              style={styles.socialLink}
            >
              <TelegramIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    position: "relative",
    minHeight: "100dvh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Manrope', sans-serif",
    padding: "clamp(16px, 5vw, 24px)",
    overflowX: "hidden",
  },
  card: {
    width: "100%",
    maxWidth: "360px",
  },
  cardInner: {
    backgroundColor: "rgba(255, 255, 255, 0.86)",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    border: "1px solid #E7E3DC",
    borderRadius: "18px",
    padding: "clamp(28px, 6vw, 36px) clamp(20px, 6vw, 32px) 30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    boxShadow: "0 8px 30px rgba(27, 26, 24, 0.06)",
  },
  avatarWrap: {
    width: "clamp(72px, 20vw, 84px)",
    height: "clamp(72px, 20vw, 84px)",
    borderRadius: "50%",
    padding: "3px",
    border: "1px solid #E7E3DC",
    marginBottom: "18px",
    overflow: "hidden",
    flexShrink: 0,
  },
  avatarImg: {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    objectFit: "cover",
    display: "block",
  },
  nameRow: {
    display: "flex",
    alignItems: "baseline",
    gap: "8px",
    marginBottom: "10px",
  },
  name: {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "clamp(20px, 5.5vw, 23px)",
    fontWeight: 700,
    color: "#1B1A18",
    margin: 0,
    letterSpacing: "-0.01em",
  },
  roles: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "8px",
    marginBottom: "18px",
  },
  roleBadge: {
    fontSize: "12px",
    fontWeight: 600,
    color: "#6B6660",
    backgroundColor: "#F7F5F1",
    border: "1px solid #E7E3DC",
    borderRadius: "999px",
    padding: "5px 12px",
    letterSpacing: "0.01em",
  },
  quote: {
    fontSize: "14.5px",
    lineHeight: 1.55,
    color: "#4A453F",
    fontStyle: "italic",
    fontWeight: 500,
    margin: "0 0 24px",
    maxWidth: "260px",
  },
  divider: {
    width: "36px",
    height: "1px",
    backgroundColor: "#E7E3DC",
    marginBottom: "18px",
  },
  socials: {
    display: "flex",
    gap: "10px",
  },
  socialLink: {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    border: "1px solid #E7E3DC",
    backgroundColor: "#FFFFFF",
    color: "#1B1A18",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
  },
};
