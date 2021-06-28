import React from 'react'

import renderSuspense from './renderSuspense'

const PopularArtists = React.lazy(() => import('./PopularArtists'))
const ArtistProfile = React.lazy(() => import('./ArtistProfile'))

const routes =  [
  {
    path: '/',
    name: 'home',
    exact: true,
    render: renderSuspense(PopularArtists),
  },
  {
    path: '/popular-artists',
    name: 'popular-artists',
    render: renderSuspense(PopularArtists),
  },
  {
    path: '/artist/:id',
    name: 'artist-profile',
    render: renderSuspense(ArtistProfile),
  }
];

export default routes;
