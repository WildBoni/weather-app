import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import CitiesContainer from './CitiesContainer';
import SearchBar from './SearchBar';
import AddLocalization from './AddLocalization';
import {apiUrl} from '../shared/baseUrls';
import {loadWeather} from '../actions/weather';
import {setTextFilter} from '../actions/filters';

// const Section = styled.section`
// 	width: 33%;
// `

function DesktopFavCitiesColumn() {
	let dispatch = useDispatch()
	let filters = useSelector(state => state.filters);
	
	let onTextChange = (e) => {
		dispatch(setTextFilter(e.target.value));
	}

	function getGeolocation(e) {
		e.preventDefault();
		if('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition((position) => {
				dispatch(loadWeather(`${apiUrl}weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_OPENWEATHER_API}&units=metric`));
			});
			//TODO: create a snackbar to show related messages
		} else {
			//TODO: handle devices without geolocation navigator
		}
	}

	return(
		<>
			<CitiesContainer/>
			<SearchBar value={filters.text} onChange={onTextChange}/>
			<AddLocalization geolocation={getGeolocation}/>
		</>
	)
}

export default DesktopFavCitiesColumn;