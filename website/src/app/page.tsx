import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>main</h1>
      <Link href="/oms">OMS LINK</Link>
      <Link href="/tms">TMS LINK</Link>
      <Link href="/wms">WMS LINK</Link>
    </div>
  );
}
