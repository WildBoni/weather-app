import React from 'react';
import styled from 'styled-components';

import CitiesList from './CitiesList';
import AddCity from './AddCity';

function FavCitiesContainer() {
	// const Section = styled.section`
	// 	background-color:#888888;
	// 	width: 33%;
	// `
	
	return(
		<section>
			<AddCity/>
			<CitiesList/>
		</section>
	)
}

export default FavCitiesContainer;