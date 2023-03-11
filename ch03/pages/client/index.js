import Link from "next/link";

const ClientPage = () => {
  const clientList = [
    { id: "client01", name: "DummyClient01" },
    { id: "client02", name: "DummyClient02" },
    { id: "client03", name: "DummyClient03" },
  ];

  return (
    <div>
      <h1>ClientPage</h1>
      <ul>
        {clientList.map((client) => {
          return (
            <li>
              <Link href={`/client/${client.id}`}>{client.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ClientPage;
