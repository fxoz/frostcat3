import Image from "next/image";

export default function PortraitAndName() {
  return (
    <div className="mb-2 mt-2 md:my-0 md:mt-6 flex flex-col gap-4">
      <Image src="/assets/design/portrait.avif" alt="Portrait" width={128} height={128} className="rounded-full h-20 w-20 aspect-square mx-auto" />
      <h1 className="m-0 text-3xl leading-none">Felix Orosz</h1>
    </div>
  )
}