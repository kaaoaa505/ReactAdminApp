import '../public.css';
import logo from '../logo.svg';

const Login = () => (
    <div className="LoginComponent">

        <div className="container-fluid">
            <div className="row text-center">
                <main className="form-signin w-100 m-auto">
                    <form action='/' method='get'>
                        <img className="mb-4" src={logo} alt="" width="72" height="57" />
                        <h1 className="h3 mb-3 fw-normal">Login</h1>

                        <div className="form-floating">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" /> Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                        <p className="mt-5 mb-3 text-muted">&copy; 2010-2023</p>
                    </form>
                </main>
            </div>
        </div>

    </div>
);

export default Login;