import { useRouter } from "next/router";

const ProjectPage = () => {
  const router = useRouter();
  console.log(`router.pathname: ${router.pathname}`);
  console.log(`router.query: `);
  console.log(router.query);

  return (
    <div>
      <h1>ProjectPage</h1>
    </div>
  );
};

export default ProjectPage;
