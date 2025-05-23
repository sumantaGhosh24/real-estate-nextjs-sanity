interface SearchHeaderProps {
  query: string;
  category: string;
  agent: string;
}

const SearchHeader = ({query, category, agent}: SearchHeaderProps) => {
  if (query && category && agent) {
    return (
      <h1 className="mb-5 font-sans text-base font-medium">
        Search results for &quot;{query}&quot; in category{" "}
        <span className="font-bold">{category}</span> in agent{" "}
        <span className="font-bold">{agent}</span>
      </h1>
    );
  }
  if (query && category) {
    return (
      <h1 className="mb-5 font-sans text-base font-medium">
        Search results for &quot;{query}&quot; in category{" "}
        <span className="font-bold">{category}</span>
      </h1>
    );
  }
  if (query && agent) {
    return (
      <h1 className="mb-5 font-sans text-base font-medium">
        Search results for &quot;{query}&quot; in agent{" "}
        <span className="font-bold">{agent}</span>
      </h1>
    );
  }
  if (query) {
    return (
      <h1 className="mb-5 font-sans text-base font-medium">
        Search results for &quot;{query}&quot;
      </h1>
    );
  }
  if (category) {
    return (
      <h1 className="mb-5 font-sans text-base font-medium">
        Search result for category <span className="font-bold">{category}</span>
      </h1>
    );
  }
  if (agent) {
    return (
      <h1 className="mb-5 font-sans text-base font-medium">
        Search result for agent <span className="font-bold">{agent}</span>
      </h1>
    );
  }
  return (
    <h1 className="mb-5 font-sans text-base font-medium">No Filter Added</h1>
  );
};

export default SearchHeader;
