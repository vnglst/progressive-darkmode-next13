import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center h-full bg-gradient-to-b from-white dark:from-black to-gray-100 dark:to-gray-900">
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
    </main>
  );
}
