export type TECHNOLOGY_MODERN = "APIRest" | "APIGraphQL";
export type TECHNOLOGY_LEGACY = "WebService" | "RPC";

export type ICRUD = {
  create(): void;
  read(): void;
  update(): void;
  delete(): void;
};

export class APIRest implements ICRUD {
  create(): void {
    throw new Error("Method not implemented.");
  }
  read(): void {
    throw new Error("Method not implemented.");
  }
  update(): void {
    throw new Error("Method not implemented.");
  }
  delete(): void {
    throw new Error("Method not implemented.");
  }
}
export class APIGraphQL implements ICRUD {
  create(): void {
    throw new Error("Method not implemented.");
  }
  read(): void {
    throw new Error("Method not implemented.");
  }
  update(): void {
    throw new Error("Method not implemented.");
  }
  delete(): void {
    throw new Error("Method not implemented.");
  }
}

export class WebService implements ICRUD {
  create(): void {
    throw new Error("Method not implemented.");
  }
  read(): void {
    throw new Error("Method not implemented.");
  }
  update(): void {
    throw new Error("Method not implemented.");
  }
  delete(): void {
    throw new Error("Method not implemented.");
  }
}

export class RPC implements ICRUD {
  create(): void {
    throw new Error("Method not implemented.");
  }
  read(): void {
    throw new Error("Method not implemented.");
  }
  update(): void {
    throw new Error("Method not implemented.");
  }
  delete(): void {
    throw new Error("Method not implemented.");
  }
}

export enum TECHNOLOGY_MODERN_ENUM {
  APIRest = "APIRest",
  APIGraphQL = "APIGraphQL",
}

export enum TECHNOLOGY_LEGACY_ENUM {
  WebService = "WebService",
  RPC = "RPC",
}

const TECHNOLOGY: Record<TECHNOLOGY_MODERN | TECHNOLOGY_LEGACY, ICRUD> = {
  APIRest: new APIRest(),
  APIGraphQL: new APIGraphQL(),
  WebService: new WebService(),
  RPC: new RPC(),
};

export abstract class AbstractFactoryTechnology<T> {
  abstract getTechnology(technology: T): ICRUD;
}

export class Modern extends AbstractFactoryTechnology<TECHNOLOGY_MODERN> {
  getTechnology(technology: TECHNOLOGY_MODERN): ICRUD {
    return TECHNOLOGY[technology];
  }
}

export class Legacy extends AbstractFactoryTechnology<TECHNOLOGY_LEGACY> {
  getTechnology(technology: TECHNOLOGY_LEGACY): ICRUD {
    return TECHNOLOGY[technology];
  }
}

export type TECHNOLOGY_TYPE = "MODERN" | "LEGACY";

export class FactoryTechnology {
  static getFactory(
    type: TECHNOLOGY_TYPE
  ): AbstractFactoryTechnology<TECHNOLOGY_MODERN | TECHNOLOGY_LEGACY> {
    switch (type) {
      case "MODERN":
        return new Modern();
      case "LEGACY":
        return new Legacy();
    }
  }
}
