import Tool from "./Tool";
import { IconSparkles, IconDatabase, IconTool, IconFileTypePdf, IconLink } from "@tabler/icons-react";

export default function ToolsPage() {
  return (
    <main>
      <h2>Online-Tools</h2>
      <p>
        Hier findest du eine Übersicht über experimentelle Projekte, die ich entwickelt habe.
      </p>
      <p>
        Das besondere an diesen Projekten ist, dass du sie direkt im Browser verwenden kannst, ohne etwas installieren zu müssen.
      </p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <Tool
          title="Shinigami Eyes"
          text="Dies ist mein aufwendigstes Web-Projekt, welches ohne ein Backend läuft: ein komplexer Text-Effekt-Generator."
          icon={IconSparkles}
          github="https://github.com/fxoz/shinigami-eyes"
          website="https://fxoz.github.io/shinigami-eyes/"
        />
        <Tool
          title="LocalStash"
          text="Speichere & verwalte Dateien in deinem Browser - ohne jegliche Verbindung zu einer Cloud."
          icon={IconDatabase}
          github="https://github.com/fxoz/local-stash"
          website="https://fxoz.github.io/local-stash/" />
        <Tool
          title="http-ui"
          text="Teste HTTP-Anfragen direkt im Browser. Nützlich für Entwickler und zum Debuggen von APIs."
          icon={IconTool}
          github="https://github.com/fxoz/http-ui"
          website="https://fxoz.github.io/http-ui/"
        />
        <Tool
          title="GitHub to Google PDF"
          text="Erstelle Links zum Anzeigen von PDFs auf GitHub in Google Drive."
          icon={IconFileTypePdf}
          github="https://github.com/fxoz/github-to-google-pdf"
          website="https://fxoz.github.io/github-to-google-pdf/"
        />
        <Tool
          title="0 Storage Cloud"
          text="Teile (sehr) kleine Dateien lediglich über URLs!"
          icon={IconLink}
          github="https://github.com/fxoz/zero-storage-cloud"
          website="https://fxoz.github.io/zero-storage-cloud/" />
      </div>
    </main >
  );
}
