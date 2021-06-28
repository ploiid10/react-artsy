import { useState } from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components'
import get from 'lodash/get';
import pick from 'lodash/pick';

import artistQuery from '../graphql/artist';
import transformData from '../utils/transformArtworkData';
import Artworks from '../components/Artworks';

const Wrapper = styled.div`
  margin: 4rem;

  .artist__info {
    display: flex;
    flex-direction: row;
    img {
      border-radius: 50%;
      width: 200px;
      height: 200px;
    }
    .info {
      max-width: 300px;
      margin: auto;
      margin-left: 1rem;
      p {
        margin-bottom: 0;
      }

      p:first-child{
        margin-top: 0;
        font-weight: 600;
        font-size: 1.5rem;
      }

      p:last-child {
        font-size: 1rem;
      }
    }
  }

  .artist__works {
    margin-top: 4rem;
  }
`

function ArtistProfile({
  history
}) {
  const { location } = history;
  const artistID = location.pathname.split('/')[2];
  
  const { loading, data, fetchMore } = useQuery(artistQuery, {
    variables: {
      id: artistID,
      after: '',
    }
  });
  const [refetching, setRefetching] = useState(false);

  if (loading && !refetching) {
    return (
      <div>
        fetching artist data...
      </div>
    );
  }

  const artworksData = transformData(get(data, 'artist.artworksConnection'));
  const imageURL = get(data, 'artist.image.url');
  const info = pick(data.artist, [
    'name',
    'birthday',
    'bio',
  ]);

  const fetchMoreArtworks =  async (queryProps) => {
    setRefetching(true);
    await fetchMore({
      variables: {
        ...queryProps,
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        fetchMoreResult.artist.artworksConnection.edges = [
          ...prevResult.artist.artworksConnection.edges,
          ...fetchMoreResult.artist.artworksConnection.edges,
        ]
        return fetchMoreResult;
      }
    })
    setRefetching(false);
  }

  const artworksProps = {
    ...artworksData,
    refetching,
    fetchMoreArtworks,
  }

  return (
    <Wrapper>
      <div className="artist__info">
        <img 
          src={imageURL}
          alt="Artist"
        /> 
        <div className="info">
         {Object.values(info).map((val) => (
           val && <p key={val}>{val}</p>
         ))}
        </div>
      </div>
      <div className="artist__works">
        <h2>Artworks</h2>
        <Artworks {...artworksProps} />
        {refetching && (
          <div>
            Fetching more artworks...
          </div>
        )}
      </div>
    </Wrapper>
  )
}

export default ArtistProfile;