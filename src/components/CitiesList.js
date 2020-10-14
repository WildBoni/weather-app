import React from 'react';
import { connect, useDispatch } from 'react-redux';
import moment from 'moment';
import {weatherIconUrl} from '../shared/baseUrls';
import CitiesListItem from './CitiesListItem';
import {selectCityByName} from '../selectors/cities'
import {selectCity} from '../actions/cities';

function CitiesList(props) {
	// TODO: is it possible to usa a hook with the selector instead of connecting to store?
	//TODO: use something different than object.entries
	const dispatch = useDispatch();
	
	let onSelectCity = (id) => {
		dispatch(selectCity(id))
	}

	return(
		<>
		{
			props.cities.map(([key, val]) => {
				let details = {
					id: val.id,
					lat: val.coord.lat,
					lon: val.coord.lon,
					name: val.name, 
					weather: val.weather[0].main, 
					icon: val.weather[0].icon,
					iconUrl: `${weatherIconUrl}${val.weather[0].icon}`, 
					temperature: Math.round(val.main.temp), 
					time: moment.unix(val.dt).format('dddd D, MMMM'),
					hour: moment.unix(val.dt).format('kk:mm a')
				};
				return	<CitiesListItem key={key} onSelectCity={onSelectCity} details={details}/>
			})
		}
		</>
	)
}

const mapStateToProps = (state) => {
	return {
		cities: selectCityByName(state.weather.locations, state.filters.text)
	}
}

export default connect(mapStateToProps)(CitiesList);