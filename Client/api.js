import sanityClient from "./sanity";

let sanityQuery = (query, param) => {
  console.log("Query:", query);
  console.log("Param", param);
  return sanityClient.fetch(query, param);
};
/*
export const getFeaturedRestaurants = () => {
  return sanityQuery(`
    
    *[_type=='featured']{
        ...,
        restaurants[]->{
          ...,
          dishes[]->{
            ...
          },
          type->{
          name
          }
        }
      }    
    `);
};*/

export const getCategories = () => {
  return sanityQuery(`*[_type=='category']`);
};
/*
export const getfesturedResturantById = (id) => {
  return (
    `*[_type=='featured'&& _id == $id]{
    ...,
    restaurants[]->{
      ...,
      dishes[]->,
      type->{
        name
      }
    }
  }[0]`,
    { id }
  );
};
*/
