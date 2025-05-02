import { GraphQLClient } from 'graphql-request'

export const graphqlClient = new GraphQLClient(
  'https://datastory-cloud-v2.stellate.sh'
)
