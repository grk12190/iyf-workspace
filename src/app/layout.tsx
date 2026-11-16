import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./workspace.css";

export const metadata: Metadata = {
  title: "IYF Teacher Workspace",
  description:
    "Sessions, slides, handouts, pitch day and the Bain visit for the Imagine Your Future course at UP Education Network, grades 6 to 8.",
  applicationName: "IYF Teacher Workspace",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#00B9E4",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* The workspace bundle names Inter and Jost directly, so the fonts load by family name. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Jost:wght@500;600&display=swap"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
