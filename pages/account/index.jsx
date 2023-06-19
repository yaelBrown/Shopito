// account/
import Link from "next/link";


function index() {
  return (
    <>
      <h1>Login/signup</h1>
      <Link href="/dashboard">goto dashboard</Link>
    </>
  );
}

export default index;