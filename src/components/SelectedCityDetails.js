import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
color: white;
padding-top: 20px;
h1 {
	font-size: 32px;
	font-weight: 600;
	text-align: center;
}
h2 {
	font-size: 20px;
	text-align: center;
}
h3 {
	font-size: 20px;
	font-weight: 300;
	text-align: center;
}
`
function SelectedCityDetails(props) { 
	return (
		<Article>
			<h1>{props.data.name}</h1>
			<h2>{props.data.time}</h2>
			<h3>{props.data.weather}</h3>
		</Article>
	) 
}

export default SelectedCityDetails;