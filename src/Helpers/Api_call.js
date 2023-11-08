import axios from 'axios';

var token = '11E13O2H4HO242Oh';
//var token = localStorage.getItem('token');

export default function API_call(){
    return axios.create({
        baseURL: 'https://localhost:7023',
        timeout:10000, // millisecondes
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, PUT',
          'Access-Control-Allow-Headers': "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept",
          'Accept': 'application/json', // Specify the expected response format
        },
      });
}
