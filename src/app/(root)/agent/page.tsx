import {getAgent} from "@/sanity/actions";

import AgentCard from "./_components/agent-card";

export const metadata = {
  title: "Agent",
};

const AgentsPage = async () => {
  const agents = await getAgent();

  return (
    <section className="container mx-auto my-10">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {agents?.length > 0 ? (
          agents.map((agent: any) => (
            <AgentCard
              key={agent._id}
              name={agent.name}
              email={agent.email}
              phone={agent.phone}
              image={agent.image}
              slug={agent.slug}
            />
          ))
        ) : (
          <p>No agent found</p>
        )}
      </div>
    </section>
  );
};

export default AgentsPage;
