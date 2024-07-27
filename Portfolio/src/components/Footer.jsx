import React from 'react'

const Footer = () => {
  return (
    // <div className='w-full h-[30vh] bg-black text-white'>
    //   <h1 className='text-xl font-medium text-center p-10'>Footer</h1>
    // </div>
    <footer className="text-white bg-[#141414] body-font">
      <div className="container p-5 mx-auto flex items-center sm:flex-row flex-col">

        <p className="text-md text-white sm:ml-4 sm:pl-4 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 Aaditya Agarwal
          {/* <a href="https://twitter.com/knyttneve" className="text-white ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a> */}
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href='https://github.com/Aad1tya27' className="mx-3 text-white w-5 h-5">
          <img src="/github.svg" alt="" />
          </a>
          <a href='https://codeforces.com/profile/itzaaditya' className="text-white w-5 h-5">
            <img src="/codeforces.png" alt="" />
          </a>
          <a href='https://x.com/Aaditya74124411' className="ml-3 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill='white' x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
              <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
            </svg>
          </a>
          <a href='https://www.instagram.com/aadityaagarwal27/' className="ml-3 text-white">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a href='https://www.linkedin.com/in/aaditya-agarwal-7aa185284/' className="ml-3 text-white">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer