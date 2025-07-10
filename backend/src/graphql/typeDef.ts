export const typeDefs = `
type Query
type Mutation

extend type Query {
    issues: [Issue!]
}

extend type Mutation {
    createIssue(title: String!, description: String!): Issue
}

type Issue {
    id: Int!
    title: String!
    description: String!
    status: String!
    createdAt: String
}

`;
