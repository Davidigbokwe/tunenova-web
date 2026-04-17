interface GooglePlayIconProps {
  className?: string;
}

const GooglePlayIcon = ({ className = "" }: GooglePlayIconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 20.5v-17c0-.4.2-.8.5-1 .3-.2.7-.2 1 0l15.2 8.5c.3.2.5.5.5.9s-.2.7-.5.9L4.5 21.5c-.3.2-.7.2-1 0-.3-.2-.5-.6-.5-1z"/>
    </svg>
  );
};

export default GooglePlayIcon;
