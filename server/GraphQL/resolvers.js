module.exports = {
  Query: {
    // boards: async (_, _, {dataSources.})
  },
  Mutation: {
    login: async (_, {email, password}, { dataSources }) => {
      const user = await dataSources.userAPI.loginUser({email, password});
      return user;
    }
  }
}