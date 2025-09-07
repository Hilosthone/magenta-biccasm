import { Play } from 'react-iconly'
import heroImage from '../components/logos/avatar.png'
import Vector32 from '../components/logos/Vector 32.png'
import Frame45 from '../components/logos/Frame 45.png'
import Group112 from '../components/logos/Group 112.png'
import Purple from '../components/logos/Rectangle 34.png'
import Yellow from '../components/logos/Group 59.png'
import Pink from '../components/logos/Group 47.png'
import Rectangle from '../components/logos/Rectangle 38.png'
import Mark from '../components/logos/Vector 25.png'
import Money from '../components/logos/$450..00.png'
import Amount from '../components/logos/Enter amount.png'
import Send from '../components/logos/Group 44.png'

const positions = [Frame45, Group112, Purple, Yellow, Pink, Rectangle, Mark, Money, Amount, Send]


const HeroSection = () => {
  return (
    <section
      className='w-full bg-white py-20 bg-[linear-gradient(to_left,rgba(82,189,170,0.06),rgba(82,189,170,0.14))]'
    >
      <div className='max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center md:items-center gap-12'>
        <div className='flex-1 text-center md:text-left space-y-6'>
          <h1 className='text-4xl md:text-6xl font-bold leading-tight'>
            We’re here to increase your productivity
          </h1>
          <div className='w-full'>
            <img
              src={Vector32}
              alt='Vector32'
              className='w-[479px] h-[26px] rotate-0'
            />
          </div>

          <p className='text-black text-lg font-semibold leading-relaxed'>
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
          <div className='relative bg-[#52BD94] rounded-2xl p-4 shadow-lg'>
            <img
              src={heroImage}
              alt='Hero'
              className='w-full max-w-md h-auto object-contain mx-auto'
            />

            {positions.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`ellipse-${index}`}
                className={`absolute shadow-sm ${
                  index === 0
                    ? 'top-58 left-90'
                    : index === 1
                    ? 'top-80 right-100'
                    : index === 2
                    ? 'top-48 right-125'
                    : index === 3
                    ? 'bottom-93 left-110'
                    : index === 4
                    ? 'top-112 left-80'
                    : index === 5
                    ? 'bottom-85 right-97'
                    : index === 6
                    ? 'bottom-65 right-129'
                    : index === 7
                    ? 'bottom-88 right-140'
                    : index === 8
                    ? 'bottom-97 right-140'
                    : index === 9
                    ? 'bottom-90 right-100'
                    : ''
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection