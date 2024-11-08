import {
  AbstractFactoryTechnology,
  FactoryTechnology,
  TECHNOLOGY_MODERN,
  TECHNOLOGY_MODERN_ENUM,
} from "./technology";

const factoryType: AbstractFactoryTechnology<TECHNOLOGY_MODERN> =
  FactoryTechnology.getFactory("MODERN");

const apiRest = factoryType.getTechnology(TECHNOLOGY_MODERN_ENUM.APIRest);
const apiGraphQL = factoryType.getTechnology(TECHNOLOGY_MODERN_ENUM.APIGraphQL);
