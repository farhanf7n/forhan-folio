type GitHubIconProps = {
  className?: string;
};

export function GitHubIcon(props: GitHubIconProps) {
  const { className } = props;

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      focusable="false"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0.300003C5.4 0.300003 0 5.7 0 12.3C0 17.6 3.4 22.1 8.2 23.7C8.8 23.8 9 23.4 9 23.1C9 22.8 9 22.1 9 21.1C5.7 21.8 5 19.5 5 19.5C4.5 18.1 3.7 17.7 3.7 17.7C2.5 17 3.7 17 3.7 17C4.9 17.1 5.5 18.2 5.5 18.2C6.6 20 8.3 19.5 9 19.2C9.1 18.4 9.4 17.9 9.8 17.6C7.1 17.3 4.3 16.3 4.3 11.7C4.3 10.4 4.8 9.3 5.5 8.5C5.5 8.1 5 6.9 5.7 5.3C5.7 5.3 6.7 5 9 6.5C10 6.2 11 6.1 12 6.1C13 6.1 14 6.2 15 6.5C17.3 4.9 18.3 5.3 18.3 5.3C19 7 18.5 8.2 18.4 8.5C19.2 9.3 19.6 10.4 19.6 11.7C19.6 16.3 16.8 17.3 14.1 17.6C14.5 18 14.9 18.7 14.9 19.8C14.9 21.4 14.9 22.7 14.9 23.1C14.9 23.4 15.1 23.8 15.7 23.7C20.5 22.1 23.9 17.6 23.9 12.3C24 5.7 18.6 0.300003 12 0.300003Z"
        fill="currentColor"
      />
    </svg>
  );
}
