// modal window for adding a new city
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {loadWeather} from '../actions/weather';
import {apiUrl} from '../shared/baseUrls';
import {addToast} from '../actions/toasts';

export default () => {
  let dispatch = useDispatch();
  let [modal, setModal] = useState(false);
  let [modalContent, setModalContent] = useState('content');
  let [inputContent, setInputContent] = useState('');

  let addCity = () => {
    dispatch(loadWeather(`${apiUrl}weather?q=${inputContent}&appid=${process.env.REACT_APP_OPENWEATHER_API}&units=metric`))
      .then(
        (res) => dispatch(addToast({text: `${res.name} weather added.`})), 
        (err) => dispatch(addToast({text: `${err}.`}))
      )
    handleModal();
  }

  let handleModal = (content=false) => {
    setModal(!modal);
    if(content) {
      setModalContent(content);
    }
  }

  let handleKeyPress = e => {
    if (e.key === 'Enter') {
      addCity();
    }
  };
  
  let handleChange = (e) => {
    setInputContent(e.target.value);
  }
  
  return {modal, handleModal, modalContent, addCity, handleChange, handleKeyPress};
}