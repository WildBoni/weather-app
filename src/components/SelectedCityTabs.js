import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from "styled-components";
import SelectedCityWeekForecastContainer from './SelectedCityWeekForecastContainer';
import SelectedCityTodayDetails from './SelectedCityTodayDetails';

const Header = styled.div`
  overflow: hidden;
  background: #fff;
  font-family: Open Sans;
  height: 3em;
`;
const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 40%;
  position: relative;
  margin-right: 0.1em;
  font-size: 1em;
  border: ${props => (props.active ? "1px solid #ccc" : "")};
  border-bottom: ${props => (props.active ? "none" : "")};
  background-color: ${props => (props.active ? "white" : "lightgray")};
  height: ${props => (props.active ? "3em" : "2.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;
  :hover {
    background-color: white;
  }
`;
const Content = styled.div`
  ${props => (props.active ? "" : "display:none")}
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
    <>
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
    </>
  )
}

export default SelectedCityTabs;