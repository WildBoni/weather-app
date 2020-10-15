import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {loadWeather} from '../actions/weather';
import {apiUrl} from '../shared/baseUrls';

export default () => {
  let dispatch = useDispatch();
  let [modal, setModal] = useState(false);
  let [modalContent, setModalContent] = useState('content');
  let [inputContent, setInputContent] = useState('');

  let addCity = () => {
    dispatch(loadWeather(`${apiUrl}weather?q=${inputContent}&appid=${process.env.REACT_APP_OPENWEATHER_API}&units=metric`));
    handleModal();
  }

  let handleModal = (content=false) => {
    setModal(!modal);
    if(content) {
      setModalContent(content);
    }
  }

  let handleKeyPress = e => {
    if (e.key == 'Enter') {
      addCity();
    }
  };
  
  let handleChange = (e) => {
    setInputContent(e.target.value);
  }
  
  return {modal, handleModal, modalContent, addCity, handleChange, handleKeyPress};
}