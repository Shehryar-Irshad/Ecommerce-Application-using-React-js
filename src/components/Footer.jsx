import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer class="bg-light text-center text-lg-start">
        {/* <!-- Copyright --> */}
        <div class="text-center p-3">
            © 2022 Copyright:
            <a class="text-dark" href="/">LA Collection</a>
            <div className='d-flex flex-md-row justify-content-center py-1'>
          <i className='fa fa-facebook px-1'></i>
          <i className='fa fa-instagram px-1'></i>
          <i className='fa fa-twitter'></i> </div>
        </div>
        {/* <!-- Copyright --> */}
        </footer>
    </div>
  )
}

export default Footer
