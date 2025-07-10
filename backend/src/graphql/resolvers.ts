type Issue = {
  id: string;
  title: string;
  description: string;
  status: string;
  createdAt: string;
};

const issues: Issue[] = [];
let number = 0;

export const resolvers = {
  Mutation: {
    createIssue: (parent, args) => {
      const issue: Issue = {
        id: Number(number++).toString(),
        title: args.title,
        description: args.description,
        status: "open",
        createdAt: new Date().toISOString(),
      };
      issues.push(issue);
      return issue;
    },
  },
  Query: {
    issues: () => issues,
  },
};
