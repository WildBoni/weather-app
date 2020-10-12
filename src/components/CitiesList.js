import React from 'react';
import moment from 'moment';
import {useSelector} from 'react-redux';
import {weatherIconUrl} from '../shared/baseUrls';
import CitiesListItem from './CitiesListItem';

function CitiesList(props) {
	const locations = useSelector(state => state.weather.locations);
	return(
		<>
		{
			Object.entries(locations).map(([key, val]) => {
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
				return	<CitiesListItem key={key} details={details}/>
			})
		}
		</>
	)
}

export default CitiesList;