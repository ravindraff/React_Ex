import React from 'react';
import axios from 'axios';
import urlName from './config';

function assyncCall():any{
    return axios.get(urlName)
}
export default assyncCall;