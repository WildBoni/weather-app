import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
	background-color:#888888;
	width: 33%;
`

function FavCitiesColumn() {
	return(
		<Section>
			<AddCity/>
			<FavCitiesList/>
		</Section>
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
			<img alt=""/>
			<h3>18° C</h3>
		</>
	)
}

export default FavCitiesColumn;