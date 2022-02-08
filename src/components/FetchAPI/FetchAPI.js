import React from 'react';
import moment from 'moment';

import './FetchAPI.scss';
import useFetch from '../../customize/fetch';



const FetchAPI = () => {

  const today = moment().startOf('day').toISOString(true)
  const priorDate = moment().startOf('day').subtract(31,'days').toISOString(true)

  
  const {data:dataCovid, isLoading, isError} = useFetch
  (`https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${today}`, true)
  
  return (
  <div>
     <h2>Lấy dữ liệu covid từ API</h2>
      <table>
          {/* {console.log(dataCovid)} */}
          <thead>
            <tr>
                <th>Date</th>
                <th>Confirmed</th>
                <th>Active</th>
                <th>Deaths</th>
                <th>Recovered</th>
            </tr>
          </thead>
          <tbody>
          {
              isLoading ===false &&  isError === false && dataCovid && dataCovid.length >0 && 
              dataCovid.map((item) => (
                <tr key ={item.ID}>
                        <td>{item.Date}</td>
                        <td>{item.Confirmed}</td>
                        <td>{item.Active}</td>
                        <td>{item.Deaths}</td>
                        <td>{item.Recovered}</td>
                </tr>
              ))
          }
          {
          isLoading === true &&
          <tr>
            <td colSpan={5}>
                <span>Loading</span>
            </td>
          </tr>
          }
          {
          isError === true &&
          <tr>
            <td colSpan={5}>
                <span>Error API</span>
            </td>
          </tr>
          }
          </tbody>
            
        </table>

    </div>
  );
};

export default FetchAPI;
