import { useRouter } from "next/router";

const ClientPersontPage = () => {
  const router = useRouter();

  console.log(router.query);

  const linkHandler = () => {
    router.push("/client/client01/projecta");
  };

  return (
    <div>
      <h1>ClientPersontPage</h1>
      <button onClick={linkHandler}>Go to ProjectA</button>
    </div>
  );
};

export default ClientPersontPage;
