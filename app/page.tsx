import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center h-full">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </main>
  );
}
