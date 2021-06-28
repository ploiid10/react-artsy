const transformData = (data) => {
  const { edges, pageInfo } = data;

  return {
    artworks: edges.map(({ node }) => node),
    ...pageInfo,
  }
}

export default transformData;