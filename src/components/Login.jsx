import React from 'react'

const Login = () => {
  return (
    <div className=''>
        <form className='container-sm w-50 h-50 py-5'>
            <h1 className="h3 mb-3 fw-normal">Please Login</h1>

            <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating py-2">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me"/>Remember me
            </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
        </form>
    </div>
  )
}

export default Login