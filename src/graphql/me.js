import { gql } from '@apollo/client'

export default gql`
  query me {
    me {
      name
      email
    }
  }
`
