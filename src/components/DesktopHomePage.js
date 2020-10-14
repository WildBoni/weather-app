import React, {useContext, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import DesktopMainDisplay from './DesktopMainDisplay';
import DesktopFavCitiesColumn from './DesktopFavCitiesColumn';
import { connect } from 'react-redux';
import moment from 'moment';
import {weatherIconUrl} from '../shared/baseUrls';
import {selectCityById} from '../selectors/cities'

const Container = styled.section`
	display: flex;
	padding: 50px;
`
const Article = styled.article`
	position: relative;
	width: 66.666%;
`
const Section = styled.section`
	width: 33.333%;
`

function DesktopHomePage(props) {
  // const weather = useSelector(state => state.weather.locations[state.cities.selectedCity]);
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
					maxTemperature: Math.round(val.main.temp_max), 
					minTemperature: Math.round(val.main.temp_min), 
					time: moment.unix(val.dt).format('dddd D, MMMM'),
					hour: moment.unix(val.dt).format('kk:mm a')
				};
				return	(
          <Article>
             <DesktopMainDisplay key={key} details={details}/>
          </Article>
        )
			})
		}
      <Section>
        <DesktopFavCitiesColumn/>
      </Section>
    </Container>
  )
}

const mapStateToProps = (state) => {
	return {
		cities: selectCityById(state.weather.locations, state.cities.selectedCity)
	}
}

export default connect(mapStateToProps)(DesktopHomePage);