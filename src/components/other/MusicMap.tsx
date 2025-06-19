export function ArtistBubble({ name, size }: { name: string; size: number }) {
  return (
    <p
      className="mx-2 whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity"
      style={{ fontSize: size / 8 }}
    >
      {name}&nbsp;
    </p>
  );
}

export default function MusicMap() {
  return (
    <div className="text-center bg-c-primary-soul rounded-lg p-4">
      <p className="my-6">Meine Streams vom 06.07.-04.10.2024:</p>
      <div className="">
        {Object.entries(SCROBBLES).map(([artist, scrobble]) => (
          <ArtistBubble name={artist} size={scrobble} key={artist} />
        ))}
      </div>
    </div>
  );
}

const SCROBBLES = {
  "Kendrick Lamar": 218,
  "Billie Eilish": 150,
  "Death Grips": 112,
  HAARPER: 100,
  "Playboi Carti": 92,
  Nas: 91,
  Madvillain: 89,
  "Kanye West": 82,
  "Charli xcx": 79,
  "Chief Keef": 77,
  "Three 6 Mafia": 77,
  "Magdalena Bay": 72,
  "2Pac": 70,
  "Travi$ Scott": 63,
  "Ice Cube": 59,
  "MF DOOM": 59,
  "A$AP Rocky": 57,
  "21 Savage": 48,
  Eminem: 48,
  Yeat: 45,
};
