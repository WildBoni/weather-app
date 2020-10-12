import React from 'react';

import CitiesList from './CitiesList';
import AddCity from './AddCity';

function FavCitiesContainer() {
	return(
		<section>
			<AddCity/>
			<CitiesList/>
		</section>
	)
}

export default FavCitiesContainer;