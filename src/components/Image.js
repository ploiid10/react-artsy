import { useState } from 'react'; 

const Image = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <img
      onLoad={() => {
        setIsLoaded(true);
      }}
      style={{ opacity: isLoaded ? 1 : 0 }}
      alt={props.alt}
      src={props.src}
    />
  );
};

export default Image