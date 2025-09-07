import markAll from '../components/logos/Group 152.png'
import markHalf from '../components/logos/Group 152 (1).png'
import Public from '../components/logos/activity 1.png'
import Analytic from '../components/logos/pie-chart 1.png'
import Engagement from '../components/logos/command 1.png'

const supports = [
  {
    pic: Public,
    name: 'Public',
    description:
      'Plan, collaborate, and publish your content that drives meaningful engagement and growth for your brand.',
  },
  {
    pic: Analytic,
    name: 'Analytic',
    description:
      'Analyze your performance and create gorgeous reports to share.',
  },
  {
    pic: Engagement,
    name: 'Engagement',
    description: 'Quickly navigate and engage with your audience.',
  },
]

const SupportSection = () => {
  return (
    <section className='w-full bg-[#F9F8FE] py-16 sm:py-20'>
      <div className='max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12'>
        <div className='flex-1 text-center md:text-left space-y-4 sm:space-y-6'>
          <h2 className='text-2xl sm:text-4xl md:text-5xl font-medium leading-tight'>
            How we support our partners all over the world
          </h2>
          <p className='text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0'>
            SaaS has become a common delivery model for many business
            applications, including office software, messaging software, payroll
            processing software, DBMS software, and management software.
          </p>

          <div className='flex justify-center md:justify-start gap-8 mt-4'>
            <div className='space-y-1'>
              <img
                src={markAll}
                alt='ratings'
                className='h-6 sm:h-8 w-auto mx-auto md:mx-0'
              />
              <p className='text-[#191A15] font-bold text-base sm:text-lg'>
                4.9 / 5 rating
              </p>
              <p className='text-[#A6A6A6] font-semibold text-sm sm:text-base'>
                Databricks
              </p>
            </div>
            <div className='space-y-1'>
              <img
                src={markHalf}
                alt='ratings'
                className='h-6 sm:h-8 w-auto mx-auto md:mx-0'
              />
              <p className='text-[#191A15] font-bold text-base sm:text-lg'>
                4.8 / 5 rating
              </p>
              <p className='text-[#A6A6A6] font-semibold text-sm sm:text-base'>
                Databricks
              </p>
            </div>
          </div>
        </div>

        <div className='flex-1 w-full flex justify-center'>
          <div className='w-full sm:w-3/4 md:w-1/2 rounded-2xl p-4 sm:p-6 shadow-lg space-y-6'>
            {supports.map((support, index) => (
              <div key={index} className='flex flex-col space-y-2'>
                <div className='flex items-center space-x-3'>

                  {/* Icon container */}
                  <div className='flex items-center justify-center w-10 h-10 bg-white rounded-[10] shadow-sm'>
                    <img
                      src={support.pic}
                      alt={support.name}
                      className='w-6 h-6'
                    />
                  </div>

                  {/* Name */}
                  <h3 className='font-bold text-xl sm:text-2xl'>
                    {support.name}
                  </h3>
                </div>

                {/* Description */}
                <p className='text-gray-600 text-base sm:text-lg leading-relaxed ml-[50px]'>
                  {support.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SupportSection
