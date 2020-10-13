import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import {weatherIconUrl} from '../shared/baseUrls';
import CitiesListItem from './CitiesListItem';
import selectCities from '../selectors/cities'

function CitiesList(props) {
	// TODO: is it possible to usa a hook with the selector instead of connecting to store?
	//TODO: use something different than object.entries
	return(
		<>
		{
			Object.entries(props.cities).map(([key, val]) => {
				let details = {
					id: val[1].id,
					lat: val[1].coord.lat,
					lon: val[1].coord.lon,
					name: val[1].name, 
					weather: val[1].weather[0].main, 
					icon: val[1].weather[0].icon,
					iconUrl: `${weatherIconUrl}${val[1].weather[0].icon}`, 
					temperature: Math.round(val[1].main.temp), 
					time: moment.unix(val[1].dt).format('dddd D, MMMM'),
					hour: moment.unix(val[1].dt).format('kk:mm a')
				};
				return	<CitiesListItem key={key} details={details}/>
			})
		}
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		cities: selectCities(state.weather.locations, state.filters.text)
	}
}

export default connect(mapStateToProps)(CitiesList);