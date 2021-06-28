import { gql } from '@apollo/client'

export default gql`
  query artist($id: String!, $after: String) {
    artist(id: $id) {
      name
      nationality
      href
      birthday
      bio
      initials
      image  {
        url
      }
      artworksConnection(first: 5, after: $after) {
        edges {
          cursor
          node {
            id
            imageUrl
            imageTitle
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
      }
      years
    }
  }
`
