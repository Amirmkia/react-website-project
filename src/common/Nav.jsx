import React from 'react';
import {NavLink} from 'react-router-dom'

const Nav = () => {
    return (
        <React.Fragment>
            <div className="landing-layer">
        <div className="container">
            <nav>
                <div className="row">
                    <div className="col-sm-6 col-xs-12">
                        <ul>
                            <li>
                                <NavLink to="/"> صفحه اصلی </NavLink>
                                <a href=""> درباره ما </a>
                                <a href=""> تماس با ما </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-xs-12">
                        <div className="clientarea">
                            {/* <div className="loggein ">
                                 <i className="zmdi zmdi-account"></i><a href=""> ایمان مدائنی ، خوش آمدی </a>
                            </div> */}
                            <div className="signin ">
                                <i className="zmdi zmdi-account"></i>
                                <NavLink to="/login"> ورود </NavLink>/
                                <NavLink to="/register" > عضویت </NavLink>
                            </div>
                        </div>  
                    </div>
                </div>
            </nav>
            <header>
                <a href="" className="logo"><img src="images/logo.png"/></a>
                <h1> با اساتید مجرب و کارآزموده در خودآموز تاپ لرن </h1>
                <h2> آموزش ببینید ، تجربه کسب کنید و بازار کار شوید </h2>
                <h3> با کمترین هزینه خودت یاد بگیر </h3>
            </header>
            <div className="search-form">
                <form>
                    <input type="text" name="" placeholder="چی دوست داری یاد بگیری ؟"/>
                    <button><i className="zmdi zmdi-search"></i></button>
                </form>
            </div>
        </div>
    </div>

    
    <div className="main-menu">
        <div className="container">
            <nav>
                <span className="responsive-sign"><i className="zmdi zmdi-menu"></i></span>
                <ul>
                    <li><a href=""> برنامه نویسی موبایل </a>
                        <ul>
                            <li><a href=""> زامارین  Xamarin </a></li>
                            <li><a href=""> react Native </a></li>
                        </ul>
                    </li>
                    <li><a href=""> برنامه نویسی وب </a>
                        <ul>
                            <li><a href=""> Asp.net WebForms </a></li>
                            <li><a href=""> Asp.net MVC </a></li>
                            <li><a href=""> PHP MVC </a></li>
                            <li><a href=""> PHP FrameWorks </a></li>
                            <li><a href=""> Asp.net Core </a></li>
                        </ul>
                    </li>
                    <li><a href=""> برنامه نویسی تحت ویندوز </a></li>
                    <li><a href=""> طراحی سایت </a>
                        <ul>
                            <li><a href=""> طراحی سایت </a></li>
                            <li><a href=""> Bootstrap </a></li>
                            <li><a href=""> Angular </a></li>
                            <li><a href=""> react </a></li>
                            <li><a href=""> Jquery </a></li>
                        </ul>
                    </li>
                    <li><a href=""> بانک های اطلاعاتی </a></li>
                    <li><a href=""> سئو </a></li>
                    <li><a href=""> سیستم عامل </a></li>
                </ul>
            </nav>
        </div>
    </div>
        </React.Fragment>
      );
}
 
export default Nav;