import { addressBase64 } from "../../helpers/SENSITIVE";
import ManualTranslation from "./ManualTranslation";

export default function LegalRepresentative() {
  return (
    <div className="leading-loose select-none cursor-text p-6 my-4  bg-c-primary-ghost rounded-lg">
      <h3 className="mt-0">Diensteanbieter</h3>
      <p>Verantwortlich für redaktionelle Inhalte und Datenschutz ist:</p>

      <p>Felix Orosz</p>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="mt-2"
        src={`data:image/png;base64,${addressBase64}`}
        alt="(Sensitive Info)"
        height={27.5625}
        width={90.5625}
      />

      <h4>Kontakt</h4>

      <p className="text-ctp-red font-bold">
        Nur für Rechtliches! /{" "}
        <ManualTranslation>Legal Matters Only!</ManualTranslation>
      </p>

      <p>Mobil: &nbsp; +49 151 29075260</p>
      <p>E-Mail: &nbsp; legal@frost.cat</p>
    </div>
  );
}
