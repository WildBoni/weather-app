import React, {useContext} from 'react';
import styled, {ThemeContext} from 'styled-components';

const Content = styled.div`
	margin: 20px 0 20px 20px;
`
const Title = styled.h2`
	color: ${props => props.styles.blue};
	font-size: 28px;
	padding: 20px;
`
const Search = styled.div`
	position: relative;
	display: flex;
`
const Input = styled.input`
	border: none;
	border-radius: 25px;
	box-sizing: border-box;
	box-shadow: 5px 10px 20px 0 rgba(0,0,0,0.17);
	color: #4f4f4f;
	font-size: 28px;
	font-weight: 600;
	padding: 40px 20px 40px 20px;
	width: 100%;
	&:focus {
		outline: none;
	}
`
const Button = styled.button`
	border-radius: 25px;
	border: none;
	background: radial-gradient(circle, #5374E7 0%, #77B9F5 100%);
	box-sizing: border-box;
	cursor: pointer;
	position: absolute;
	right: 0;
	img {
		padding: 40px 0;
	}
	&:focus {
		outline: none;
	}
`

function SearchBar(props) {
	const themeContext = useContext(ThemeContext);

	return(
		<Content>
			<Title styles={themeContext}>Search</Title>
			<Search>
				<Input type="text" placeholder="ex: Miami" onChange={props.onChange}/>
				<Button><img src="../images/SearchWhite.png" alt="search icon"/></Button>
			</Search>
		</Content>
	)
}

export default SearchBar;