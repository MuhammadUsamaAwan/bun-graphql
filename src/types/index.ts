export type JWTPayload = {
  sub: string;
};

export type GraphQLContext = {
  user?: JWTPayload;
};
