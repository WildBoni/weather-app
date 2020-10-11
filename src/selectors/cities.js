// Search fav cities
export default (cities, text) => {
  return cities.filter(city => {
    const textMatch = city.name.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  })
}