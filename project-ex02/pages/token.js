import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";

const token = () => {
  return <div>token</div>;
};

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});

export default token;
