const loaders: Array<{ id: string; load: () => Promise<void> }> = [];

/** Old feature-section hashes still land on the emotion-first home flow. */
const SECTION_ALIASES: Record<string, string> = {
  "#features": "#in-the-app",
  "#family": "#in-the-app",
  "#family-hub-features": "#in-the-app",
  "#reminders": "#in-the-app",
  "#ai": "#problems",
  "#reports": "#problems",
  "#health": "#problems",
  "#senior-mode": "#who-its-for",
  "#automation": "#problems"
};

export function resolveSectionHash(hash: string) {
  const id = hash.startsWith("#") ? hash : `#${hash}`;
  return SECTION_ALIASES[id] ?? id;
}

export function registerLazySection(id: string, load: () => Promise<void>) {
  const entry = { id, load };
  loaders.push(entry);
  return () => {
    const i = loaders.indexOf(entry);
    if (i >= 0) loaders.splice(i, 1);
  };
}

function paint() {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
  });
}

/** Load deferred home sections, then smooth-scroll to the hash target. */
export async function scrollToSection(hash: string) {
  const id = resolveSectionHash(hash);
  await Promise.all(loaders.map((item) => item.load()));
  await paint();

  const el = document.querySelector(id);
  if (!el) return false;

  el.scrollIntoView({ behavior: "smooth", block: "start" });
  if (window.location.hash !== id) {
    history.replaceState(null, "", `/${id}`);
  }
  return true;
}
