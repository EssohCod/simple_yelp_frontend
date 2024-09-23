export const listRestaurants = `
  query ListRestaurants {
    listRestaurants {
      items {
        id
        name
        description
        city
      }
    }
  }
`;
