import styled from 'styled-components';
import PropTypes from 'prop-types';
import Artwork from './Artwork';

const Wrapper = styled.div`
  border-top: 1px solid #e7e7e9;
  padding: 2rem;
  margin-top: 2rem;
  .artworks { 
    display: grid;
    gap: 4rem;
    grid-template-columns: repeat(12, 1fr);
  }
  .actions {
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    button {
      outline: none;
      border: 1px solid rgba(166, 166, 166, 0.5);
      background-color: transparent;
      box-shadow: none;
      font-size: 16px;
      padding: 10px;
      height: 2.5rem;
      border-radius: 4px;
      margin: 0.4rem;
      cursor: pointer;

      &:hover {
        border: 1px solid rgb(255, 126, 0);
      }
    }

  }
`

Wrapper.displayName = 'PopularArtistWrapper'

function Artworks({
  artworks,
  endCursor,
  fetchMoreArtworks,
  refetching,
}) {
  if (!artworks.length) {
    return (
      <div>
        No results found...
      </div>
    );
  }


  return (
   <Wrapper>
      <div className="artworks">
        {artworks.map((artwork) => <Artwork {...artwork} key={artwork.id}/>)}
      </div>
      <div className="actions">
        {!refetching && (
          <button 
            className="next" 
            onClick={() => fetchMoreArtworks({
              after: endCursor,
            })}
          >
            Show more
          </button>
        )}
      </div>
   </Wrapper>
  );
}

Artworks.propTypes = {
  artworks: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  fetchMoreArtworks: PropTypes.func,
  endCursor: PropTypes.string,
  refetching: PropTypes.bool,
}

Artworks.defaultProps = {
  fetchMoreArtworks: () => null,
  endCursor: null,
  refetching: null,
}


export default Artworks;