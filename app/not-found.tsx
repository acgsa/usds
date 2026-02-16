import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--space-xl)",
        fontFamily: "var(--font-primary)",
        color: "var(--color-text-body)",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "var(--font-size-heading-h4)", marginBottom: "var(--space-sm)" }}>
        Page not found
      </h1>
      <p style={{ marginBottom: "var(--space-lg)", color: "var(--color-text-muted)" }}>
        This page doesn’t exist. Go back to the design system.
      </p>
      <Link
        href="/"
        style={{
          padding: "var(--space-sm) var(--space-md)",
          background: "var(--steel-900)",
          color: "#fff",
          borderRadius: "var(--radius-sm)",
          fontWeight: "var(--font-weight-semibold)",
          textDecoration: "none",
        }}
      >
        US Design System
      </Link>
    </div>
  );
}
