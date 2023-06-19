import Link from "next/link";

function index() {
  return (
    <>
      <h1>Home</h1>
      <Link href="/account">Login / Signup</Link>
    </>
  );
}

export default index;