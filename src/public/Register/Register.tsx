import '../public.css';
import logo from '../logo.svg';
import { Component, ReactNode, SyntheticEvent } from 'react';
import axios from 'axios';


class Register extends Component {
    first_name = 'Khaled';
    last_name = 'Allam';
    email = 'kaaoaa505@gmail.com';
    password = 'test';
    password_confirm = 'test';

    submit = (e: SyntheticEvent) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/register', {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            password: this.password,
            password_confirm: this.password_confirm,
        }).then(
            res => {
                console.log(res);
            }
        )

        return false;
    }

    render(): ReactNode {
        return (
            <div className="RegisterComponent">

                <div className="container-fluid">
                    <div className="row text-center">
                        <main className="form-signin w-100 m-auto">
                            <form action='/' method='get' autoComplete='off' onSubmit={this.submit}>
                                <img className="mb-4" src={logo} alt="" width="72" height="57" />

                                <h1 className="h3 mb-3 fw-normal">Register</h1>

                                <div className="form-floating">
                                    <input type="text" className="form-control" id="first_name" placeholder="First Name..." onChange={e => this.first_name = e.target.value } />
                                    <label htmlFor="first_name">First Name</label>
                                </div>

                                <div className="form-floating">
                                    <input type="text" className="form-control" id="last_name" placeholder="Last Name..." onChange={e => this.last_name = e.target.value } />
                                    <label htmlFor="last_name">Last Name</label>
                                </div>

                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" placeholder="name@example.com" onChange={e => this.email = e.target.value } />
                                    <label htmlFor="email">Email address</label>
                                </div>

                                <hr />

                                <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => this.password = e.target.value } />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>

                                <div className="form-floating">
                                    <input type="password" className="form-control" id="PasswordConfirm" placeholder="Password Confirm" onChange={e => this.password_confirm = e.target.value } />
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
    }
}

export default Register;