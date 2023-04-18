import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";

const Post = () => {
  return <div>Post</div>;
};

// export const getServerSideProps = withPageAuthRequired(() => {
//   return {
//     props: {},
//   };
// });

export default Post;
