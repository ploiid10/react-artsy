import PropTypes from 'prop-types';
import styled from 'styled-components';

import Image from './Image';

const Wrapper = styled.div`
  box-shadow: 0 5px 11px 0 rgba(0, 0, 0.15, 0.15);
  border: 1px solid rgba(151, 151, 151, 0.21);
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  img {
    width: 100%;
    height: 80%;
  }

  p {
    font-weight: bold;
    font-size: 18px;
    margin-left: 2rem;
  }

  grid-column: span 12 / auto;

  @media (min-width: 768px) {
    grid-column: span 6 / auto;
  }

  @media (min-width: 1024px) {
    grid-column: span 4 / auto;
  }
`

Wrapper.displayName = 'ArtistWrapper';

function Artwork({
  imageTitle,
  imageUrl,
}) {
  return (
    <Wrapper>
      <Image
        alt="artwork" 
        src={imageUrl} 
      />
      <p>{imageTitle}</p>
    </Wrapper>
  )  
}

Artwork.propTypes = {
  imageTitle: PropTypes.string,
  imageUrl: PropTypes.string,
}

Artwork.defaultProps = {
  imageTitle: null,
  imageUrl: null,
}


export default Artwork;