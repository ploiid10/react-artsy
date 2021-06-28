
import { useCallback } from 'react';
import { useQuery } from '@apollo/client';

import popularArtistsQuery from '../graphql/popularArtists';
import ArtistList from '../components/ArtistList';

function PopularArtists() {
  const { loading: popArtistsLoading, data: popData } = useQuery(popularArtistsQuery, {
    fetchPolicy: 'network-only',
  });

  const popularArtists = useCallback(() => !popArtistsLoading && popData && popData.highlights, [popData, popArtistsLoading])();

  if (!popularArtists) {
    return (
      <div>fetching...</div>
    );
  }

  return (
    <ArtistList {...popularArtists}/>
  );
}

export default PopularArtists;