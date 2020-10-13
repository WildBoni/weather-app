// Search selected cities
//TODO: use something different than object.entries
export default (cities, text) => {
  return Object.entries(cities).filter(city => {
    const textMatch = city[1].name.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  })
}