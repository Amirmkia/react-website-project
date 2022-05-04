import React , {useState , useRef} from 'react';
import {withRouter} from 'react-router-dom'
import { toast } from 'react-toastify';
import Nav from './../common/Nav';
import Footer from './../common/Footer';
import { userLogin } from '../services/userService';
import SimpleReactValidator from 'simple-react-validator';
import {Sugar} from 'react-preloaders'

const Login = ({history}) => {
    const [email , setEmail]  = useState('');
    const [password , setPassword] = useState('');
    const [,forceUpdate] = useState()
    const [loading , setLoading] = useState(false)
    const validator = useRef(new SimpleReactValidator({
        messages : {
            required : "پر کردن این فیلد الزامی می باشد",
            min : "کمتر از 5 کاراکتر نباید باشد",
            email : "ایمیل نوشته شده صحیح نمی باشد"
        },
        element : message => <div style = {{color : "red"}}>{message}</div>
    }))
    const reset =() => {
        setEmail("");
        setPassword("");
    }
    const handleSubmit = async event =>{
        event.preventDefault();
        const user = {email , password}
        try{
            if(validator.current.allValid()){
                setLoading(true)
                const {status , data} = await userLogin(user)
            if (status ===200){
                toast.success("ورود موفقیت آمیز بود" , {
                    position : "top-center"
                })
                console.log(data);
                localStorage.setItem("token" , data.token)
                setLoading(false)
                history.replace("/")
                reset()
            }
            }else{
                setLoading(false)
                validator.current.showMessages()
                forceUpdate(1) 
            }
        }catch(ex){
            toast.error("مشکلی پیش آمده" , {
                position : "bottom-center"
                });
            console.log(ex);
        }
    }
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
                {loading ? (<Sugar time = {0} color = "red" customLoading = {loading} /> ): null}

                <div className="form-layer">

                    <form onSubmit={handleSubmit}>

                        <div className="input-group">
                            <span className="input-group-addon" id="email-address"><i className="zmdi zmdi-email"></i></span>
                            <input 
                                type="text" 
                                name = "email"
                                className="form-control" 
                                placeholder="ایمیل" 
                                aria-describedby="email-address"
                                value = {email}
                                onChange = {e => {
                                    setEmail(e.target.value)
                                    validator.current.showMessageFor("email")
                                }} />
                                {validator.current.message(
                                    "email",
                                    email,
                                    "required"
                                )}
                        </div>

                        <div className="input-group">
                            <span className="input-group-addon" id="password"><i className="zmdi zmdi-lock"></i></span>
                            <input 
                                type="text" 
                                name = "password"
                                className="form-control" 
                                placeholder="رمز عبور " 
                                aria-describedby="password"
                                value = {password}
                                onChange = {e => {
                                    setPassword(e.target.value)
                                    validator.current.showMessageFor("password")
                                }}/>
                                {validator.current.message(
                                    "password",
                                    password,
                                    "required"
,                                )}
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
 
export default withRouter(Login);