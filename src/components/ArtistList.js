import styled from 'styled-components';
import PropTypes from 'prop-types';
import Artist from './Artist';

const Wrapper = styled.div`
  margin-top: 2rem;
  display: grid;
  gap: 0 10px;
  grid-template-columns: repeat(12, 1fr);
`

Wrapper.displayName = 'PopularArtistWrapper'

function ArtistList({
  popularArtists
}) {
  return (
    <Wrapper>
        {popularArtists.map((artist) => <Artist {...artist} key={artist.slug}/>)}
    </Wrapper>
  )
}

ArtistList.propTypes = {
  popularArtists: PropTypes.arrayOf(PropTypes.shape()).isRequired,
}


export default ArtistList;