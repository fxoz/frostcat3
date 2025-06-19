export default function LoadingAnimation() {
  return (
    <svg className="w-24 h-24" viewBox="0 0 24 24" fill="none">
      <title>Loading...</title>
      <style>{`
@keyframes spinner_qV4G {
  0% { r: 0; opacity: 1; }
  100% { r: 11px; opacity: 0; }
}
.spinnerA {
  animation: spinner_qV4G 1.2s cubic-bezier(0.52, 0.6, 0.25, 0.99) infinite;
}
.spinner_gaIW {
  animation-delay: 0.6s;
}
`}</style>
      <circle
        className="spinner_ZCsl"
        cx="12"
        cy="12"
        r="0"
        fill="currentColor"
      />
      <circle
        className="spinner_ZCsl spinner_gaIW"
        cx="12"
        cy="12"
        r="0"
        fill="currentColor"
      />
    </svg>
  );
}
