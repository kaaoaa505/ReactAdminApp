import '../public.css';
import logo from '../logo.svg';
import { SyntheticEvent } from 'react';
// import axios from 'axios';
import { redirect } from "react-router-dom";


let first_name = 'Khaled';
let last_name = 'Allam';
let email = 'kaaoaa505@gmail.com';
let password = 'test';
let password_confirmation = 'test';

const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const result = redirect('/test');

    console.log(result);

    // const response = await axios.post('http://localhost:8000/api/register', {
    //     first_name: first_name,
    //     last_name: last_name,
    //     email: email,
    //     password: password,
    //     password_confirmation: password_confirmation,
    // });

    // console.log(response);

    console.log({
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        password_confirmation: password_confirmation,
    });

}

const Register = () => (
    <div className="RegisterComponent">

        <div className="container-fluid">
            <div className="row text-center">
                <main className="form-signin w-100 m-auto">
                    <form action='/' method='get' autoComplete='off' onSubmit={submit}>
                        <img className="mb-4" src={logo} alt="" width="72" height="57" />

                        <h1 className="h3 mb-3 fw-normal">Register</h1>

                        <div className="form-floating">
                            <input type="text" className="form-control" id="first_name" placeholder="First Name..." onChange={e => first_name = e.target.value} />
                            <label htmlFor="first_name">First Name</label>
                        </div>

                        <div className="form-floating">
                            <input type="text" className="form-control" id="last_name" placeholder="Last Name..." onChange={e => last_name = e.target.value} />
                            <label htmlFor="last_name">Last Name</label>
                        </div>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={e => email = e.target.value} />
                            <label htmlFor="email">Email address</label>
                        </div>

                        <hr />

                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => password = e.target.value} />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="form-floating">
                            <input type="password" className="form-control" id="PasswordConfirm" placeholder="Password Confirm" onChange={e => password_confirmation = e.target.value} />
                            <label htmlFor="PasswordConfirm">Password Confirm</label>
                        </div>

                        <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>

                        <p className="mt-5 mb-3 text-muted">&copy; 2010-{new Date().getFullYear()}</p>
                    </form>
                </main>
            </div>
        </div>

    </div>
);

export default Register;