import Laptop from '../components/logos/Laptop.png'
import Subtract from '../components/logos/Subtract.png'
import Group38 from '../components/logos/Rectangle 38.png'
import Group112 from '../components/logos/Group 112.png'
import Group113 from '../components/logos/Group 113.png'
import Group114 from '../components/logos/Group 114.png'
import Group110 from '../components/logos/Group 110.png'

const groups = [
  Group38,
  Group112,
  Group113,
  Group114,
  Group110,
]

const benefits = [
  'Increase productivity across teams',
  'Align stakeholders easily',
  'Fast onboarding process',
  'Secure and reliable platform',
]

const BenefitsSection = () => {
  return (
    <section className='w-full py-20'>
      <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12'>
        <div className='w-full md:w-1/2 text-center md:text-left'>
          <h2 className='text-3xl font-bold mb-6'>What Benefit Will You Get</h2>

          <ul className='space-y-3 text-gray-700'>
            {benefits.map((benefit, index) => (
              <li key={index} className='flex items-center justify-start gap-2'>
                <img
                  src={Subtract}
                  alt='✅'
                  className='w-[20px] h-[20px] flex-shrink-0'
                />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className='w-full md:w-1/2 flex justify-center'>
          <div className='relative'>
            <img
              src={Laptop}
              alt='Laptop'
              className='max-w-full h-auto rounded-[20px]'
            />
            {groups.map((group, index) => (
              <img
                key={index}
                src={group}
                alt={`benefit-${index}`}
                className={`absolute shadow-sm ${
                  index === 0
                    ? 'top-10 right-125'
                    : index === 1
                    ? 'top-26 left-135'
                    : index === 2
                    ? 'bottom-50 right-165'
                    : index === 3
                    ? 'top-85 right-100'
                    : index === 4
                    ? 'top-13 right-129'
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

export default BenefitsSection
