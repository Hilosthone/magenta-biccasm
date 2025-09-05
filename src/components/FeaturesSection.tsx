const features = [
  {
    title: 'Collaboration Team',
    desc: 'Here you can handle projects together with team virtually',
  },

  {
    title: 'Cloud Storage',
    desc: 'No need to worry about storage because we provide storage up to 2 TB.',
  },

  {
    title: 'Automation',
    desc: 'We always provide useful informatin to make it easier for you every day.'
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

          <button className='text-white bg-[#54BD95] hover:bg-[#4CAF50] rounded-full py-2 px-6'>
            Get Started
          </button>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-white shadow rounded-2xl p-6 text-center'
            >
              <h3 className='text-xl font-semibold mb-2'>{feature.title}</h3>
              <p className='text-gray-600'>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
