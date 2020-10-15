import React from 'react';
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';
import {weatherIconUrl} from '../shared/baseUrls';
import CitiesListItem from './CitiesListItem';
import {selectCityByName} from '../selectors/cities'
import {selectCity} from '../actions/cities';
import {startRemoveWeatherLocation} from '../actions/weather';

let Container = styled.div`
	@media(min-width:996px) {
		height: 390px;
		overflow: scroll;
		padding-right: 10px;
		&::-webkit-scrollbar {
			width: 10px;
		}
		&::-webkit-scrollbar-track {
			background: #f1f1f1; 
		}
		&::-webkit-scrollbar-thumb {
			background: #888; 
		}
		&::-webkit-scrollbar-thumb:hover {
			background: #555; 
		}
	}
`

function CitiesList(props) {
	// TODO: is it possible to usa a hook with the selector instead of connecting to store?
	//TODO: use something different than object.entries
	const dispatch = useDispatch();
	
	let onSelectCity = (id) => {
		dispatch(selectCity(id))
	}

	let onRemoveCity = (id) => {
		let filtered = props.cities.filter((city) => city[0] !== id.toString());
		if(filtered.length > 0) {
			dispatch(startRemoveWeatherLocation(id));
			dispatch(selectCity(filtered[0][1].id));
		}
	}

	return(
		<Container>
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
				return	(
					<CitiesListItem key={details.id} 
						onRemoveCity={onRemoveCity} 
						onSelectCity={onSelectCity} 
						details={details}
					/>)
			})
		}
		</Container>
	)
}

const mapStateToProps = (state) => {
	return {
		cities: selectCityByName(state.weather.locations, state.filters.text)
	}
}

export default connect(mapStateToProps)(CitiesList);