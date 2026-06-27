/** Decorative organic blob (biophilic accent). Purely visual. */
export function Blob({
  className,
  color = "var(--secondary)",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      className={className}
      style={{ color }}
    >
      <path
        fill="currentColor"
        d="M48.8,-57.8C62.9,-46.7,73.7,-31.1,76.4,-14.2C79.1,2.7,73.7,20.9,63.2,35.4C52.7,49.9,37.1,60.7,19.6,67.3C2.1,73.9,-17.3,76.3,-33.6,69.7C-49.9,63.1,-63.1,47.5,-69.9,29.9C-76.7,12.3,-77.1,-7.3,-70.6,-23.9C-64.1,-40.5,-50.7,-54.1,-35.3,-64.6C-19.9,-75.1,-2.5,-82.5,12.9,-79.4C28.3,-76.3,34.7,-68.9,48.8,-57.8Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}
