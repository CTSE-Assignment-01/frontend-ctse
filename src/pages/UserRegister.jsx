import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const API_BASE = "http://localhost:4000";

const UserRegister = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [nic, setNIC] = useState("");
    const [password, setPassword] = useState("");
    const [passwordre, setPasswordRe] = useState("");
    const [role, setRole] = useState("user");

    const addUser = async () => {
        const user = {
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            nic: nic,
            password: password,
            role: role
        };

        try {
            const response = await axios.post(API_BASE + '/users/signup', user);
            console.log(response.data);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Account created Successfully',
                showConfirmButton: false,
                timer: 1500
            });
        } catch (error) {
            console.error('Error creating user:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            });
        }
    };


    const validatePassword = (e) => {
        e.preventDefault();
        if (!name || !email || !phoneNumber || !nic || !password || !passwordre) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all fields'
            });
            return;
        }

        if (password === passwordre) {
            addUser();
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Passwords don't match"
            })
        }
    }



    return (
        <section className="vh-100" style={{ backgroundImage: `url('images/register.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
            <div className="container-fluid h-custom h-100 text-dark font-weight-bold">
                <div className="row d-flex justify-content-center align-items-center h-100s h-100 text-light">
                    <div className="col-md-9 col-lg-6 col-xl-5"></div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1" style={{ padding: '80px', borderRadius: '15px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}>
                    <div className='bg-primary rounded-top text-center p-2' >Register</div>
                        <form className="p-4 d-flex flex-column bg-light rounded-bottom">
                            <div className="form-outline mb-4 bg-light">
                                <input type="text" id="formName" className="form-control form-control-lg"
                                    placeholder="Enter Name"
                                    onChange={e => setName(e.target.value)}
                                    value={name}
                                    style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
                                />
                            </div>

                            <div className="form-outline mb-4 bg-light">
                                <input type="email" id="formEmail" className="form-control form-control-lg"
                                    placeholder="Enter Email"
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                    style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
                                />
                            </div>

                            <div className="form-outline mb-4 bg-light">
                                <input type="text" id="formPhone" className="form-control form-control-lg"
                                    placeholder="Enter Phone"
                                    onChange={e => setPhoneNumber(e.target.value)}
                                    value={phoneNumber}
                                    style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
                                />
                            </div>

                            <div className="form-outline mb-4 bg-light">
                                <input type="text" id="formNIC" className="form-control form-control-lg"
                                    placeholder="Enter NIC"
                                    onChange={e => setNIC(e.target.value)}
                                    value={nic}
                                    style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
                                />
                            </div>

                            <div className="form-outline mb-3 bg-light">
                                <input type="password" id="formPassword" className="form-control form-control-lg"
                                    placeholder="Enter password"
                                    onChange={e => setPassword(e.target.value)}
                                    value={password}
                                    style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
                                />
                            </div>

                            <div className="form-outline mb-3 bg-light">
                                <input type="password" id="formPasswordRe" className="form-control form-control-lg"
                                    placeholder="Enter password again"
                                    onChange={e => setPasswordRe(e.target.value)}
                                    value={passwordre}
                                    style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
                                />
                            </div>

                            <div className="form-outline mb-3 bg-light">
                                <select className="form-select form-select-lg" value={role} onChange={(e) => setRole(e.target.value)}
                                    style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
                                >
                                    <option value="user">User</option>
                                    <option value="admin">Admin</option>
                                    <option value="staff">Staff</option>
                                </select>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2 bg-light">
                                <button className="btn btn-primary btn-lg rounded-pill"
                                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }} onClick={validatePassword}>Register</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0 text-light">Already have an account? <a href="login"
                                    className="link-primary">Login</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserRegister;
