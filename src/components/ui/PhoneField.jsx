import TextField from "./TextField.jsx";

const COUNTRY_CODES = [
  { code: "+62", label: "🇮🇩 +62" },
  { code: "+60", label: "🇲🇾 +60" },
  { code: "+65", label: "🇸🇬 +65" },
  { code: "+1", label: "🇺🇸 +1" },
];

export default function PhoneField({
  label = "No. HP",
  countryCode,
  onCountryCodeChange,
  ...props
}) {
  return (
    <TextField
      label={label}
      type="tel"
      inputMode="numeric"
      placeholder="812345678"
      prefix={
        <select
          className="field__select"
          value={countryCode}
          onChange={(e) => onCountryCodeChange(e.target.value)}
          aria-label="Kode negara"
        >
          {COUNTRY_CODES.map((c) => (
            <option key={c.code} value={c.code}>
              {c.label}
            </option>
          ))}
        </select>
      }
      {...props}
    />
  );
}
