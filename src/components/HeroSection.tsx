import { Play } from 'react-iconly'
import heroImage from '../components/logos/avatar.png'

const HeroSection = () => {
  return (
    <section className='w-full bg-white py-20'>
      <div className='max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center md:items-center gap-12'>
        <div className='flex-1 text-center md:text-left space-y-6'>
          <h1 className='text-4xl md:text-6xl font-bold leading-tight'>
            We’re here to increase your productivity
          </h1>
          <p className='text-gray-600 text-lg leading-relaxed'>
            Let's make your work more organized and easier using the Taskio
            Dashboard with many of the latest features in managing work every
            day.
          </p>
          <div className='flex justify-center md:justify-start gap-4'>
            <button className='rounded-full bg-[#54BD95] hover:bg-[#44a482] text-white py-3 px-8 font-medium transition'>
              Try Free Trial
            </button>
            <button className='rounded-full flex items-center gap-2 text-[#191A15] border border-gray-300 py-3 px-8 font-medium hover:bg-gray-100 transition'>
              <Play set='light' primaryColor='#000000ff' size='medium' />
              View Demo
            </button>
          </div>
        </div>

        <div className='flex-1 flex justify-center'>
          <div className='bg-[#52BD94] rounded-2xl p-4 shadow-lg'>
            <img
              src={heroImage}
              alt='Hero'
              className='w-full max-w-md h-auto object-contain'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection