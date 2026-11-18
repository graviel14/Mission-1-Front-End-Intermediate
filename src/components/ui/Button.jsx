import { Link } from "react-router-dom";

/**
 * Reusable button. Renders a <Link> when `to` is passed, otherwise a <button>.
 * variant: "primary" | "soft" | "accent" | "outline"
 */
export default function Button({
  variant = "primary",
  block = false,
  to,
  type = "button",
  className = "",
  children,
  ...rest
}) {
  const classes = `btn btn--${variant}${block ? " btn--block" : ""} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
