// status/

import API from "@/api/api";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/v1/status")
  const data = await res.json()
  // return { props: { data: "cookies "} }
  return { props: { data } }
}

export default function index({data}) {
  return (
    <>
      <h1>Status</h1>
      <p>Database status: {data.data}</p>
    </>
  );
}