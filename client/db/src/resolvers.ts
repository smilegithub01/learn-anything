import { ResolverMap } from "./types/graphql-utils";
import { User } from "./entity/User";

export const resolvers: ResolverMap = {
  Query: {
    hello: (_, { name }: GQL.IHelloOnQueryArguments) => `Hello ${name || "World"}`
  },
  Mutation: {
    register: async (
      _,
      { name, email }: GQL.IRegisterOnMutationArguments
    ) => {
      const user = User.create({
        name,
        email
      });

      await user.save();
      return true;
    }
  }
};
