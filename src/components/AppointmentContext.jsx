import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';


function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getAppointments() {
      try {
        const response = await axios.get('/account/appointments');
        setAppointments(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    getAppointments();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

    const dateFromMongo = appointments.date; // Replace with date from MongoDB
    const formattedDate = moment(dateFromMongo).format('DD-MM-YYYY');

  return (
    <div className='mx-40'>
    <div className="ag-courses_box justify-center">
      {appointments.map(appointment => (
        // <div key={appointment._id} className="flex flex-col items-center justify-center">
        //     <div className="max-w-[26rem] shadow-lg">
        //         <div>
        //             <div className="mb-3 flex items-center justify-between">
        //             <div variant="h5" color="blue-gray" className="font-medium">
        //                 {appointment.name}
        //             </div>
                   
        //             </div>
        //             <div color="gray">
        //             {appointment.time} <br/>
        //             {formattedDate}
        //             </div>  
        //         </div>
        //     </div>
        // </div>
        
  
    <div className="ag-courses_item">
      <a href="#" className="ag-courses-item_link">
        <div className="ag-courses-item_bg"></div>

        <div className="ag-courses-item_title">
          {appointment.name}
        </div>

        <div className="ag-courses-item_date-box">
          Time:&nbsp;
          <span className="ag-courses-item_date">
            {appointment.time}
          </span>
        </div>

        <div className="ag-courses-item_date-box">
          Date:&nbsp;
          <span className="ag-courses-item_date">
            {formattedDate}
          </span>
        </div>
      </a>
    </div>
        
       



      ))}
    </div>
    </div>
  );
}

export default AppointmentList;
