import { useRouter } from "next/router";

function ClientProjectPage(params) {
  const router = useRouter();

  let projectid = router.query.projectid;

  return (
    <div>
      <h1>Welcome to Client project for Next.js Course</h1>
      <p>Project ID: { projectid }</p>
    </div>
  );
}

export default ClientProjectPage;