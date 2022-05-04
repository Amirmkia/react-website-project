import axios from 'axios';
import React , {useState , useRef} from 'react';
import { toast } from 'react-toastify';
import { registerUser } from './../services/userService';
import SimpleReactValidator from 'simple-react-validator';


const Register = () => {
    const [fullname , setfullname] = useState("");
    const [emaill , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [,forceUpdate] = useState()
    const [policy , setPolicy] = useState()
    const validator = useRef(new SimpleReactValidator({
        messages : {
            required : "پر کردن این فیلد الزامی می باشد",
            min : "کمتر از 5 کاراکتر نباید باشد",
            email : "ایمیل نوشته شده صحیح نمی باشد"
        },
        element : message => <div style = {{color : "red"}}>{message}</div>
    }))
    const reset = () => {
        setfullname('');
        setEmail('');
        setPassword('');
    }

    const handleSubmit = async event =>{
        event.preventDefault();
        const user = {
            fullname,
            emaill,
            password
        };
        try{
            if(validator.current.allValid()){
                const {status} = await registerUser(user)
            if (status === 201){
                toast.success("کاربر با موفقیت ساخته شد" , {
                    position : "top-center"
                })
            }
            }else{
                validator.current.showMessages()
                forceUpdate(1) 
            }
        }catch(ex){
            toast.error("مشکلی پیش آمده" , {
                position : "bottom-center"
                });
            console.log(ex)
        }
    }

    return ( 
        <React.Fragment>
            <div className="container">
            <nav aria-label="breadcrumb">
              <ul className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">تاپ لرن</a></li>
                <li className="breadcrumb-item active" aria-current="page">عضویت در سایت</li>
              </ul>
            </nav>
        </div>

        <main className="client-page">
            <div className="container-content">

                <header><h2> عضویت در سایت </h2></header>

                <div className="form-layer">

                    <form onSubmit = {handleSubmit}>

                        <div className="input-group">
                            <span className="input-group-addon" id="username"><i className="zmdi zmdi-account"></i></span>
                            <input 
                                type="text" 
                                name = "fullname"
                                className="form-control" 
                                placeholder="نام و نام خانوادگی" 
                                aria-describedby="username"
                                value = {fullname}
                                onChange = {e =>{
                                    setfullname(e.target.value);
                                    validator.current.showMessageFor("fullname");
                                }}/>
                                {validator.current.message(
                                    "fullname",
                                    fullname ,
                                    "required|min:5"
                                )}
                        </div>

                        <div className="input-group">
                            <span className="input-group-addon" id="email-address"><i className="zmdi zmdi-email"></i></span>
                            <input 
                                type="text" 
                                name = "email"
                                className="form-control" 
                                placeholder="ایمیل" 
                                aria-describedby="email-address"
                                value = {emaill}
                                onChange = {e => {
                                    setEmail(e.target.value)
                                    validator.current.showMessageFor("email")
                                    }}/>
                                    {validator.current.message(
                                        "email",
                                        emaill,
                                        "required|email"

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
                                    setPassword(e.target.value);
                                    validator.current.showMessageFor("password")
                                }}/>
                                {validator.current.message(
                                    "password",
                                    password,
                                    "required|min:5"
                                )}
                        </div>

                        <div className="accept-rules">
                            <label><input 
                            type="checkbox" 
                            name="policy"
                            value = {policy}
                            onChange = {e =>{
                                setPolicy(e.currentTarget.checked)
                                validator.current.showMessageFor("policy")
                            }}/>
                              قوانین و مقررات سایت را میپذیرم </label>
                              {validator.current.message(
                                  "policy",
                                  policy,
                                  "required"
                              )}
                        </div>

                        <div className="link">
                            <a href=""> <i className="zmdi zmdi-assignment"></i> قوانین و مقررات سایت !</a>
                            <a href=""> <i className="zmdi zmdi-account"></i> ورود به سایت </a>
                        </div>
                        
                        <button className="btn btn-success"> عضویت در سایت </button>

                    </form>
                </div>

            </div>
        </main>
        </React.Fragment>
     );
}
 
export default Register;