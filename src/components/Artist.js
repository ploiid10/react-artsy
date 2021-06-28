import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  img {
    width: 100%;
    height: 80%;
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

function Artist({
  name,
  image,
  slug,
}) {
  const history = useHistory();
  const { url } = image;
  const onClick = () => history.push(`/artist/${slug}`);

  return (
    <Wrapper onClick={onClick}>
      <img 
        alt="" 
        src={url} 
      />
      <h1>{name}</h1>
    </Wrapper>
  )  
}

Artist.propTypes = {
  name: PropTypes.string,
  slug: PropTypes.string,
  image: PropTypes.shape(),
}

Artist.defaultProps = {
  name: null,
  slug: null,
  image: {},
}


export default Artist;