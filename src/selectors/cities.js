// Search selected cities
//TODO: use something different than object.entries
const selectCityByName = (cities, text) => {
  return Object.entries(cities).filter(city => {
    const textMatch = city[1].name.toLowerCase().includes(text.toLowerCase());
    return textMatch;
  })
}

const selectCityById = (cities, id) => {
  return Object.entries(cities).filter(city => {
    const textMatch = city[0].includes(id);
    return textMatch;
  })
}

export {selectCityByName, selectCityById}