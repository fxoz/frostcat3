export default function HeroButton({
  children,
}: { children: React.ReactNode }) {
  return (
    <div>
      <button
        className="hover:opacity-100 opacity-80 bg-c-primary-shade hover:bg-c-gradient-primary-light px-6 py-3 rounded-full cursor-pointer active:scale-95 duration-200"
        type="button"
      >
        <span className="flex">{children}</span>
      </button>
    </div>
  );
}
