import React from 'react';
import styled from 'styled-components';

const Article = styled.article`
	background-color: #f7f7f7;
	width: 66%;
`

function MainDisplay() { 
	return (
		<Article>
			<h1>Turin</h1>
			<h2>Friday 18, September</h2>
			<h3>Sunny</h3>
		</Article>
	)
}

export default MainDisplay;