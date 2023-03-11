import { useRouter } from "next/router";

const ClientProjectPage = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>ClientProjectPage</h1>
    </div>
  );
};

export default ClientProjectPage;
