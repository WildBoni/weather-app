import React from 'react';

function FavCitiesColumn() {
	return(
		<>
			<AddCity/>
			<FavCitiesList/>
		</>
	)
}

function AddCity() {
	return(
		<button>+ Add city</button>
	)
}

function FavCitiesList() {
	return(
		<>
			<FavCity/>
			<FavCity/>
		</>
	)
}

function FavCity() {
	return(
		<>
			<h4>Rome</h4>
			<h5>Friday 18, September</h5>
			<h6>2.38 pm</h6>
			<img/>
			<h3>18° C</h3>
		</>
	)
}

export default FavCitiesColumn;