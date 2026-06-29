export function ArcanaMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 1.5L13.6 9.4 21.5 12 13.6 14.6 12 22.5 10.4 14.6 2.5 12 10.4 9.4 12 1.5Z"
        fill="currentColor"
      />
      <path
        d="M12 7L12.7 10.3 16 11 12.7 11.7 12 15 11.3 11.7 8 11 11.3 10.3 12 7Z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  );
}
