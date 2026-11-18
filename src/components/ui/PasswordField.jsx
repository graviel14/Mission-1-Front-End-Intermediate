import { useState } from "react";
import TextField from "./TextField.jsx";
import { EyeIcon, EyeOffIcon } from "./Icons.jsx";

export default function PasswordField({ label = "Kata Sandi", ...props }) {
  const [visible, setVisible] = useState(false);

  return (
    <TextField
      label={label}
      type={visible ? "text" : "password"}
      addon={
        <button
          type="button"
          className="field__addon"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}
        >
          {visible ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      }
      {...props}
    />
  );
}
