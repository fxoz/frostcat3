export default function FooterBadges() {
  return;
  const badges = [
  ];

  return (
    <div className="flex justify-center gap-2 pt-4 flex-wrap opacity-70 contrast-150 brightness-75 saturate-[75%] scale-75">
      {badges.map((badge) => (
        <Badge key={badge.alt} {...badge} />
      ))}
    </div>
  );
}

function Badge({ alt, src }: { alt: string; src: string }) {
  return <img alt={alt} src={src} className="h-6" />;
}