import { Link, useParams } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import DatePicker from "react-datepicker";
import axios from 'axios';
import { TimePicker } from 'react-ios-time-picker';
import "react-datepicker/dist/react-datepicker.css";
import {UserContext} from '../components/UserContext';
import AppointmentList from '../components/AppointmentContext';


export default function AppointmentPage() {

    const onChange = (timeValue) => {
        setTime(timeValue);
    }
    const {action} = useParams();
    const {user} = useContext(UserContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const id = user.userId;
    const [nid, setNid] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [time, setTime] = useState('10:00');

    async function makeAppointment(e) {
        e.preventDefault();
        try {
            await axios.post("/account/appointments/new", {
                user_id: id,
                name: name,
                email: email,
                nid: nid,
                time: time,
                startDate: startDate
            });
            alert("Appointment Successful!");
        } catch (e) {
            alert("Appointment couldn't made.");
        }
        
    }

    // axios.get('/account/appointments')
    // .then(response => {
    //   const appointments = response.data;
    // })
    // .catch(error => {
    //   console.error(error);
    // });


  return (
    <div>
      {action !== 'new' && (
        <div className='w-full text-center mt-10'>
          <Link to={'/account/appointments/new'} className="inline-flex py-1 px-3 bg-primary text-white rounded-lg hover:shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
          </svg>
          Add New Appointment
          </Link>
          <div>
              <AppointmentList />
          </div>
        </div>
      )}

      {action === 'new' && (
        <div className='flex w-full justify-center'>
          <form onSubmit={makeAppointment} action="" className='mt-10'>
            <div className='floating-fake border border-gray-200 rounded-lg'>
              <label className='bg-gray-200 py-2 px-5 rounded-l-lg'>Name</label>
              <input 
                className="w-[25rem] py-1 rounded-r-lg pl-6" 
                type="text" 
                id="name"
                value={name} 
                onChange={e => setName(e.target.value)}
                placeholder='name' />
            </div>
            <div className='floating-fake mt-5 border border-gray-200 rounded-lg'>
              <label className='border-none bg-gray-200 py-2 px-5 rounded-l-lg'>Email</label>
              <input 
                className="border border-gray-200 w-[25rem] py-1 rounded-r-lg pl-6 focus:border-none" 
                type="email" 
                id="email"
                value={email} 
                onChange={e => setEmail(e.target.value)}
                placeholder='email' />
            </div>
            <div className='floating-fake mt-5 border border-gray-200 rounded-lg'>
                <label className='border-none bg-gray-200 py-2 px-5 rounded-l-lg'>NID</label>
                <input 
                  className="border border-gray-200 w-[25rem] py-1 rounded-r-lg pl-6 focus:border-none" 
                  type="text" 
                  id="nid"
                  value={nid} 
                  onChange={e => setNid(e.target.value)}
                  placeholder='NID' />
            </div>
            <div className='flex'>
            <div className='floating-fake date-time mt-5 flex justify-center border border-gray-200 rounded-lg mr-6'>
                <label className='border bg-gray-200 px-5 py-auto rounded-l-lg py-1 m-auto'>Date</label>
                <DatePicker 
                  className="border border-gray-200 py-1 rounded-r-lg pl-6 align-middle focus:border-none"  
                  selected={startDate} onChange={(e) => setStartDate(e)} 
                  id="startDate"
                  value={startDate} />            
            </div>
            <div className='floating-fake date-time mt-5 inline-flex border border-gray-200 rounded-lg'>
                <label className='border bg-gray-200 px-5 py-auto rounded-l-lg py-1 m-auto'>Time</label>
                <TimePicker onChange={onChange} value={time} className="border-none w-[25rem] py-1 rounded-r-lg pl-6 focus:border-none" />
            </div>
            </div>
            <div className='mt-5 text-center'>
                <button type='submit' className='border-none bg-primary py-2 px-5 rounded-lg text-white'>Make an Appointment</button>
            </div>
            
          </form>
        </div>
      )}

    </div>
    
      
  )
}