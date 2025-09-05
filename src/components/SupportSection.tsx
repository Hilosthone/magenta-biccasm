const SupportSection = () => {
  return (
    <section className='w-full bg-white py-20'>
      <div className='max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12'>

        <div className='flex-1 text-center md:text-left space-y-6'>
          <h2 className='text-2xl md:text-6xl font-medium leading-tight'>
            How we support our partner all over the world
          </h2>
          <p className='text-gray-600 text-lg leading-relaxed'>
            SaaS has become a common delivery model for many business
            applications, including office software, messaging software, payroll
            processing software, DBMS software, and management software.
          </p>
          <div className='flex justify-center md:justify-start gap-8 mt-4'>
            <div>
              <p>⭐️⭐️⭐️⭐️✨</p>
              <p className='text-[#191A15] font-bold text-lg'>4.9 / 5 rating</p>
              <p className='text-[#A6A6A6] font-bold text-lg'>Databricks</p>
            </div>
            <div>
              <p>⭐ ⭐ ⭐ ⭐ ☆</p>
              <p className='text-[#191A15] font-bold text-lg'>4.8 / 5 rating</p>
              <p className='text-[#A6A6A6] font-bold text-lg'>Databricks</p>
            </div>
          </div>
        </div>

        <div className='flex-1 w-full flex justify-center'>
          <div className='w-full md:w-1/2 rounded-2xl p-6 shadow-lg'>
            <div>
              <h3 className='font-bold text-2xl'>Publishing</h3>
              <p className='mt-3 text-gray-600 text-lg leading-relaxed'>
                Plan, collaborate, and publish your content that drives
                meaningful engagement and growth for your brand.
              </p>
            </div>
            <div className='mt-8'>
              <h3 className='font-bold text-2xl'>Analytics</h3>
              <p className='mt-3 text-gray-600 text-lg leading-relaxed'>
                Analyze your performance and create gorgeous reports to share.
              </p>
            </div>
            <div className='mt-8'>
              <h3 className='font-bold text-2xl'>Engagement</h3>
              <p className='mt-3 text-gray-600 text-lg leading-relaxed'>
                Quickly navigate and engage with your audience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SupportSection
