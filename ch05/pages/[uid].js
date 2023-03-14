// import useSWR from "swr"

const UserIdPage = (props) => {
  const { id } = props;

  // const {data, error} = useSWR(url, (url) => fetch(url).then(res => res.json()))

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default UserIdPage;

export async function getServerSideProps(context) {
  const { params, req, res } = context;

  const userId = params.uid;

  return {
    props: { id: "user-id: " + userId },
  };
}
