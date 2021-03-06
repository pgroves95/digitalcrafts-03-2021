import './FunctionBased.css'
import {SignUpButton} from './styleComponents/SignUpFormStyle'

export default function FunctionBased({input, setInput, sendDataReset}) {
    return (
        <div className="fb-main-container">
            <h1 className="fb-h1">Create Account</h1>
            <input className="form-input"
            value={input.firstName}
            onChange={(e)=> {
                const val = e.target.value;
                setInput(oldState => {
                    return{...oldState, firstName: val}
                })
            }} 
            type="text" 
            placeholder="First name"
            />
            <input
            className="form-input"
            value={input.lastName}
            onChange={(e)=> {
                const val = e.target.value;
                setInput(oldState => {
                    return{...oldState, lastName: val}
                })
            }} 
            type="text"
            placeholder="Last name"
            />
            <input
            className="form-input"
            value={input.email}
            onChange={(e)=> {
                const val = e.target.value;
                setInput(oldState => {
                    return{...oldState, email: val}
                })
            }} 
            type="email"
            placeholder="Email"
            />
            <input
            className="form-input"
            value={input.password}
            onChange={(e)=> {
                const val = e.target.value;
                setInput(oldState => {
                    return{...oldState, password: val}
                })
            }} 
            type="password"
            placeholder="Password"
            />
            <SignUpButton onClick={()=>{
                sendDataReset(input)
                }}>Sign Up
            </SignUpButton>
        </div>
    )
}
