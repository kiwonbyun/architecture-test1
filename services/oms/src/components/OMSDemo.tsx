import Link from "next/link";

export function OMSDemo() {
  return (
    <div>
      <h1>OMS Demo Component</h1>
      <h2>안녕하세요22</h2>
      <Link href="/oms/list">
        <button>go to oms list</button>
      </Link>
    </div>
  );
}
