"use client";

import { useEffect, useState } from "react";

const BUNDLE_SRC = "/workspace/app.js";

/**
 * Mounts the IYF Teacher Workspace.
 *
 * The workspace is a compiled React 19 bundle (TanStack Router, memory
 * history). It looks for an element with the id "root" and renders itself
 * there, so this component owns that element and loads the bundle once the
 * page is on screen. The bundle manages its own routes in memory, which is why
 * the Next.js site needs only this one page.
 */
export default function WorkspaceApp() {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${BUNDLE_SRC}"]`,
    );
    if (existing) return;

    const script = document.createElement("script");
    script.type = "module";
    script.crossOrigin = "anonymous";
    script.src = BUNDLE_SRC;
    script.onerror = () => setFailed(true);
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div id="root" />
      {failed ? (
        <main className="mx-auto flex min-h-screen max-w-md flex-col justify-center gap-3 px-6 py-16 text-center">
          <span
            aria-hidden="true"
            className="mx-auto block h-1 w-10 bg-up-cyan"
          />
          <h1 className="font-display text-2xl font-semibold text-up-grey">
            The workspace could not load
          </h1>
          <p className="text-sm leading-6 text-up-grey/80">
            Check your connection and reload the page. If it keeps happening,
            tell the IYF team.
          </p>
        </main>
      ) : null}
      <noscript>
        <main className="mx-auto max-w-md px-6 py-16 text-center text-sm">
          The IYF Teacher Workspace needs JavaScript turned on.
        </main>
      </noscript>
    </>
  );
}
