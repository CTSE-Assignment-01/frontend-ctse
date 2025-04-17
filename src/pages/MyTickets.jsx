import axios from 'axios';
import React, { useEffect, useState } from 'react'
const BACKEND = "http://localhost:4005"
import { useNavigate } from 'react-router-dom';
const MyTickets = () => {
    const navigate = useNavigate();
    const[tickets, setTickets] = useState([])
    const fetchTickets = async() => {
        try {
        const userID = "6633128626e585d5f12943a2"
          const response = await axios.get(`${BACKEND}/bookings/user/${userID}`);
          const tickets = response.data;
          setTickets(tickets);
          console.log(tickets)
        } catch (error) {
          console.log(error)
        }
      };
    
    useEffect(()=>{
        fetchTickets()
    }, [])


    const bookings = [
        {
          passengerFirstName: "John",
          passengerLastName: "Doe",
          bookedBy: "userObjectId1", // ObjectId of the user who made the booking
          gender: "Male",
          nicOrPassport: "ABC123456",
          mobileNumber: "1234567890",
          trainDetails: {
            trainId: "222", // ObjectId of the train
            departureDate: new Date("2024-05-02"),
            departureTime: "10:00 AM",
          },
          tickets: {
            adults: 2,
            children: 1,
            infants: 0,
          },
          totalPrice: 150.50,
          isConfirmed: false
        },
        {
          passengerFirstName: "Jane",
          passengerLastName: "Smith",
          bookedBy: "userObjectId2",
          gender: "Female",
          nicOrPassport: "DEF789012",
          mobileNumber: "9876543210",
          trainDetails: {
            trainId: "trainObjectId2",
            departureDate: new Date("2024-05-05"),
            departureTime: "11:30 AM",
          },
          tickets: {
            adults: 1,
            children: 0,
            infants: 0,
          },
          totalPrice: 75.25,
          isConfirmed: true
        },
        // Add more booking objects as needed
      ];
      
  return (
    <div className="container">
            <h2 className="my-4">My Tickets</h2>
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Departure Date</th>
                            <th>Departure Time</th>
                            <th>Train Id</th>
                            <th>Adults</th>
                            <th>Children</th>
                            <th>Infants</th>
                            <th>Total Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((ticket, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{new Date(ticket.trainDetails.departureDate).toLocaleDateString()}</td>
                                <td>{ticket.trainDetails.departureTime}</td>
                                <td>{ticket.trainDetails.trainId}</td>
                                <td>{ticket.tickets.adults}</td>
                                <td>{ticket.tickets.children}</td>
                                <td>{ticket.tickets.infants}</td>
                                <td>{ticket.totalPrice}</td>
                                <td>
                                {ticket.isConfirmed?
                                (
                                    <div className='text-success'>COMPLETED</div>
                                ):
                                (
                                    <div className='text-danger'>PENDING</div>
                                )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className='text-end'>
                <button className='btn btn-warning' style={{borderRadius:'20px'}} onClick={()=>{navigate('/book');}}><b>MAKE NEW BOOKING</b></button>
                </div>
            </div>
        </div>
  )
}

export default MyTickets