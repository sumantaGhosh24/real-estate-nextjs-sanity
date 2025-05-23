import {type SchemaTypeDefinition} from "sanity";

import category from "./schemaTypes/categoryType";
import agent from "./schemaTypes/agentType";
import property from "./schemaTypes/propertyType";

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [category, agent, property],
};
