import qs from "query-string";

interface BuildQueryParams {
  type: string;
  query?: string;
  category?: string;
  agent?: string;
}

interface UrlQueryParams {
  params: string;
  key?: string;
  value?: string | null;
  keysToRemove?: string[];
}

export function buildQuery({type, query, category, agent}: BuildQueryParams) {
  const conditions = [`*[_type=="${type}"`];
  if (query) conditions.push(`title match "*${query}*"`);
  if (category && category !== "all") {
    conditions.push(`category->slug.current == "${category}"`);
  }
  if (agent && agent !== "all") {
    conditions.push(`agent->slug.current == "${agent}"`);
  }
  return conditions.length > 1
    ? `${conditions[0]} && (${conditions.slice(1).join(" && ")})]`
    : `${conditions[0]}]`;
}

export function formUrlQuery({
  params,
  key,
  value,
  keysToRemove,
}: UrlQueryParams) {
  const currentUrl = qs.parse(params);
  if (keysToRemove) {
    keysToRemove.forEach((keyToRemove) => {
      delete currentUrl[keyToRemove];
    });
  } else if (key && value) {
    currentUrl[key] = value;
  }
  return qs.stringifyUrl(
    {url: window.location.pathname, query: currentUrl},
    {skipNull: true}
  );
}
