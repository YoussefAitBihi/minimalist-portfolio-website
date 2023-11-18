import { FC } from "react";

const LogoIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="61"
      height="32"
      aria-hidden="true"
      className={className}
    >
      <path
        fill="#33323D"
        fill-rule="evenodd"
        d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"
      />
    </svg>
  );
};

export default LogoIcon;