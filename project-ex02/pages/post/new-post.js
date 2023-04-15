import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { AppLayout } from "../../components/AppLayout";

const NewPost = (props) => {
  return <div>NewPost</div>;
};

NewPost.getLayout = function getLayout(page, pageProps) {
  return <AppLayout {...pageProps}>{page}</AppLayout>;
};

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});

export default NewPost;
