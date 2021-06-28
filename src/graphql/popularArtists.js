import { gql } from '@apollo/client'

export default gql`
  query {
    highlights {
      popularArtists {
        slug
        image { 
          imageURL
          height
          width
          url
          imageVersions
        }
        name
      }
    }
  }
`
