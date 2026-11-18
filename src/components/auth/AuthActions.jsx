import Button from "../ui/Button.jsx";
import { GoogleIcon } from "../ui/Icons.jsx";

/**
 * Button group shared by login & register:
 * primary submit button, secondary (link to other page), divider, SSO button.
 */
export default function AuthActions({
  submitLabel,
  altLabel,
  altTo,
  ssoLabel,
}) {
  return (
    <div className="auth-actions">
      <Button type="submit" variant="primary" block>
        {submitLabel}
      </Button>
      <Button to={altTo} variant="soft" block>
        {altLabel}
      </Button>
      <div className="divider">atau</div>
      <Button variant="outline" block onClick={() => alert("SSO belum tersedia pada demo ini")}>
        <GoogleIcon /> {ssoLabel}
      </Button>
    </div>
  );
}
