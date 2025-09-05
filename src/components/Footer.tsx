import { Play } from "react-iconly";

const ellipse = [
  '/ellipse54.jpg',
  '/ellipse55.jpg',
  '/ellipse56.jpg',
  '/ellipse57.jpg',
]

const Footer = () => {
  return (
    <>
      <div className='bg-[#161C28] text-white'>
        <div className='max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-9'>
          <div className='flex-1 bg-[#1E2433] rounded-2xl p-6 shadow-lg'>
            <h2 className='text-6xl font-semibold mb-4'>
              People are Saying About DoWhith
            </h2>

            <div className='mb-4'>
              <p className='text-[#A6A6A6] block mb-1 text-sm'>
                Everything you need to accept to payment and grow your money of
                manage anywhere on planet
              </p>
              <div className='text-[#D9D9D9] text-4xl font-bold mb-4'>//</div>
              <p className='text-[#A6A6A6] block mb-1 text-sm mt-2'>
                I am very helped by this E-wallet application , my days are very
                easy to use this application and its very helpful in my life ,
                even I can pay a short time 😍
              </p>
              <p className='text-[#A6A6A6] block mb-1 text-sm mt-2'>
                _ Aria Zinanrio
              </p>
              <div className='flex relative space-x-2 mt-4'>
                {ellipse.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt='ellipse'
                    className='w-9 h-9 mt-2 rounded-full object-cover border border-gray-300 shadow-sm flex-shrink-0'
                  />
                ))}
                <div className='w-9 h-9 mt-2 rounded-full object-cover border border-gray-300 shadow-sm flex-shrink-0 flex items-center justify-center bg-gray-700 text-sm font-medium hover:bg-gray-600 transition cursor-pointer'>
                  {/* <Iconly
                    name='Tick' // or try "Check"
                    set='bold'
                    primaryColor='#54BD95'
                    size='medium'
                  /> */}
                  {/* ▶️ */}
                  <Play set='light' primaryColor='#000000ff' size='medium' />
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <form className='flex-1 bg-[#1E2433] rounded-2xl p-6 shadow-lg'>
            <div className='w-[72.06px] h-[86px] bg-[#54BD95] rounded-2xl mx-auto'></div>
            <h2 className='text-xl font-light mb-4 text-white text-center'>
              Get Started
            </h2>
            <div className='mb-4'>
              <label htmlFor='email' className='block mb-1 text-sm'>
                Email
              </label>
              <input
                id='email'
                type='email'
                className='w-full p-2 rounded-md bg-white text-black border border-green-500 focus:outline-none focus:border-[#54BD95]'
                placeholder='Enter your email'
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='text' className='block mb-1 text-sm'>
                Message
              </label>
              <input
                id='text'
                type='text'
                className='w-full h-24 p-2 rounded-md bg-white text-black border border-green-500 focus:outline-none focus:border-[#54BD95]'
                placeholder='What are you saying?'
              />
            </div>
            <button
              type='submit'
              className='w-full bg-[#54BD95] text-[#FFFFFF] font-semibold py-2 rounded-md hover:opacity-90 transition'
            >
              Request Demo
            </button>
            <p className='text-center text-sm text-right mt-2 text-gray-500 hover:text-white'>
              <a href='#' className="hover:underline">or Start Free Trial</a>
            </p>
          </form>
        </div>
      </div>

      <footer className='bg-[#161C28] text-gray-300'>
        <div className='max-w-7xl mx-auto px-4 py-12 flex flex-col md:flex-row gap-8'>
          <div className='flex-1'>
            <h2 className='text-[#54BD95] text-2xl font-semibold'>Biccas</h2>
            <p className='text-[#A6A6A6] text-sm mt-2 mb-6 max-w-md'>
              Get started now try our product
            </p>
            <div className='flex items-center gap-2 mb-6'>
              <input
                type='email'
                placeholder='Enter your email here'
                className='flex-1 p-2 rounded-md bg-white text-black border border-gray-300       focus:outline-none focus:border-[#54BD95]'
              />
              <div className='w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center text-sm font-medium cursor-pointer hover:bg-gray-600 transition cursor-pointer'>
                {/* <Iconly
                  name='Play'
                  set='light'
                  primaryColor='#000102ff'
                  size='medium'
                /> */}
                {/* ▶️ */}
                <Play set='light' primaryColor='#000000ff' size='medium' />
              </div>
            </div>
            <p className='text-gray-500 text-sm'>
              © {new Date().getFullYear()} Biccas. All rights reserved.
            </p>
          </div>

          <div className='flex-1 grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div>
              <h3 className='text-white text-lg font-semibold mb-2'>Biccas</h3>
              <p>Productivity tools for modern teams.</p>
            </div>
            <div>
              <h4 className='text-white font-semibold mb-2'>Support</h4>
              <ul className='space-y-1'>
                <li>
                  <a href='#' className="hover:underline">Help centre</a>
                </li>
                <li>
                  <a href='#' className="hover:underline">Account information</a>
                </li>
                <li>
                  <a href='#' className="hover:underline">About</a>
                </li>
                <li>
                  <a href='#' className="hover:underline">Contact us</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='text-white font-semibold mb-2'>
                Help and Solution
              </h4>
              <ul className='space-y-1'>
                <li>
                  <a href='#' className="hover:underline">Talk to support</a>
                </li>
                <li>
                  <a href='#' className="hover:underline">Support docs</a>
                </li>
                <li>
                  <a href='#' className="hover:underline">System status</a>
                </li>
                <li>
                  <a href='#' className="hover:underline">Covid response</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='text-white font-semibold mb-2'>Product</h4>
              <ul className='space-y-1'>
                <li>
                  <a href='#' className="hover:underline">Update</a>
                </li>
                <li>
                  <a href='#' className="hover:underline">Security</a>
                </li>
                <li>
                  <a href='#' className="hover:underline">Beta test</a>
                </li>
                <li>
                  <a href='#' className="hover:underline">Pricing product</a>
                </li>
              </ul>
              <div className='flex text-white mt-4 space-x-1'>
                <p>Terms and Conditions</p>
                <p className='text-[#A6A6A6] opacity-70 cursor-pointer'>.</p>
                <p>Privacy Policy</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
