import React from 'react';
import Nav from './../common/Nav';
import Footer from './../common/Footer';

const Login = () => {
    return ( 
        <React.Fragment>
            <div className="container">
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">تاپ لرن</a></li>
                <li className="breadcrumb-item active" aria-current="page">ورود به سایت</li>
              </ul>
            </nav>
        </div>

        <main className="client-page">
            <div className="container-content">

                <header><h2> ورود به سایت </h2></header>

                <div className="form-layer">

                    <form action="" method="">

                        <div className="input-group">
                            <span className="input-group-addon" id="email-address"><i className="zmdi zmdi-email"></i></span>
                            <input type="text" className="form-control" placeholder="ایمیل" aria-describedby="email-address" />
                        </div>

                        <div className="input-group">
                            <span className="input-group-addon" id="password"><i className="zmdi zmdi-lock"></i></span>
                            <input type="text" className="form-control" placeholder="رمز عبور " aria-describedby="password"/>
                        </div>

                        <div className="remember-me">
                            <label><input type="checkbox" name=""/>  مرا بخاطر بسپار </label>
                        </div>

                        <div className="link">
                            <a href=""> <i className="zmdi zmdi-lock"></i> رمز عبور خود را فراموش کرده ام !</a>
                            <a href=""> <i className="zmdi zmdi-account"></i> عضویت در سایت </a>
                        </div>
                        
                        <button className="btn btn-success"> ورود به سایت </button>

                    </form>
                </div>

            </div>
        </main>
          
        </React.Fragment>
     );
}
 
export default Login;