import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from "styled-components";
import SelectedCityWeekForecastContainer from './SelectedCityWeekForecastContainer';
import SelectedCityTodayDetails from './SelectedCityTodayDetails';

const Wrapper = styled.div`
`
const Header = styled.div`
  overflow: hidden;
  font-size: 28px;
  padding: 20px 30px 0 30px;
`;
const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 40%;
  position: relative;
  margin-right: 0.1em;
  font-size: 1em;
  border: none;
  color: ${props => (props.active ? "white" : "#01175F")};
  background-color: ${props => (props.active ? "#5a82ea" : "white")};
  padding: 20px;
  transition: background-color 0.3s ease-in-out;
  border-radius: 25px 25px 0 0;
  :hover {
    background-color: #5a82ea;
  }
`;
const Content = styled.div`
  ${props => (props.active ? "" : "display:none")};
  background-color: #5a82ea;
  border-radius: 25px;
  padding: 20px;
`;

const SelectedCityTabs = (props) => {
  const forecast = useSelector(state => state.forecast.details.result);
  const [active, setActive] = useState(0);
  const handleClick = e => {
    const index = parseInt(e.target.id);
    if(index !== active) {
      setActive(index);
    }
  }
  return(
    <Wrapper>
      <Header>
        <Tab onClick={handleClick} active={active === 0} id={0}>
          This week
        </Tab>

        <Tab onClick={handleClick} active={active === 1} id={1}>
          Today
        </Tab>
      </Header>
      <>
        <Content active={active === 0}>
          <SelectedCityWeekForecastContainer dailyForecast={forecast.daily}/>
        </Content>
        <Content active={active === 1}>
          <SelectedCityTodayDetails current={props.current} data={props.data}/>
        </Content>
      </>
    </Wrapper>
  )
}

export default SelectedCityTabs;