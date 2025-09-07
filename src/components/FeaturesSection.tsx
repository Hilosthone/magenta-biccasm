import collaboration from '../components/logos/Group 323.png'
import cloud from '../components/logos/Frame 53.png'
import automation from '../components/logos/Group 323.png'

const features = [
  {
    title: 'Collaboration Team',
    desc: 'Here you can handle projects together with team virtually',
    logo: collaboration 
  },

  {
    title: 'Cloud Storage',
    desc: 'No need to worry about storage because we provide storage up to 2 TB.',
    logo: cloud
  },

  {
    title: 'Automation',
    desc: 'We always provide useful informatin to make it easier for you every day.',
    logo: automation  
  },
]

const FeaturesSection = () => {
  return (
    <section className='w-full bg-gray-50 py-20'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 md:mb-20'>
          <h2 className='text-3xl font-bold text-center md:text-left'>
            Our Features You Can Get
          </h2>

          <p className='text-gray-600 text-center md:text-left max-w-md'>
            We offer a variety of interesting features that can help increase
            your productivity at work and manage your project easily.
          </p>

          <button
            className='
          text-white 
          bg-[#54BD95]
          hover:bg-[#4CAF50]
          w-[120px] h-[48px] rounded-full
          md:w-[162px] md:h-[66px] md:rounded-[70px] md:transition-colors
          block mx-auto'
          >
            {' '}
            Get Started
          </button>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-white shadow rounded-2xl p-4 sm:p-6 text-center hover:shadow-lg transition-shadow duration-300'
            >
              <img
                src={feature.logo}
                alt={feature.title}
                className='w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain mx-auto mb-3 sm:mb-4'
              />
              <h3 className='text-lg sm:text-xl font-semibold mb-1 sm:mb-2'>
                {feature.title}
              </h3>
              <p className='text-sm sm:text-base text-gray-600'>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
