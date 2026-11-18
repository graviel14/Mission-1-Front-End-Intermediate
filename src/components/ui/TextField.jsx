import { useId } from "react";

/**
 * Labeled input. `addon` (optional) renders at the right inside the control,
 * `prefix` (optional) renders at the left (e.g. a country-code select).
 */
export default function TextField({
  label,
  required = false,
  error,
  addon,
  prefix,
  className = "",
  ...inputProps
}) {
  const id = useId();

  return (
    <div className={`field${error ? " field--error" : ""} ${className}`.trim()}>
      <label htmlFor={id} className="field__label">
        {label} {required && <b>*</b>}
      </label>
      <div className="field__control">
        {prefix}
        <input
          id={id}
          className="field__input"
          required={required}
          aria-invalid={Boolean(error)}
          {...inputProps}
        />
        {addon}
      </div>
      {error && <p className="field__error">{error}</p>}
    </div>
  );
}
