import LicenseItem from "./FooterLicenseItem";

export default function FooterCredits() {
  return (
    <div className="text-center max-w-96 mx-auto">
      <p className="pt-6 font-semibold">Lizenzen</p>
      <ul className="flex flex-wrap justify-center opacity-70">
        <li>
          <LicenseItem href="https://www.flaticon.com/free-icons/pointer">
            Pointer icon created by SeyfDesigner (Flaticon License)
          </LicenseItem>
        </li>
        <li>
          <LicenseItem href="https://www.flaticon.com/free-icons/text">
            Text icon created by Pixel perfect (Flaticon License)
          </LicenseItem>
        </li>
        <li>
          <LicenseItem href="https://github.com/tabler/tabler-icons/blob/main/LICENSE">
            Tabler Icons (MIT License)
          </LicenseItem>
        </li>
        <li>
          <LicenseItem href="https://github.com/rsms/inter/blob/master/LICENSE.txt">
            Inter Font (SIL Open Font License 1.1)
          </LicenseItem>
        </li>
        <li>
          <LicenseItem href="https://github.com/n3r4zzurr0/svg-spinners/blob/main/LICENSE">
            Loading Animation (MIT License)
          </LicenseItem>
        </li>
      </ul>
    </div>
  );
}
