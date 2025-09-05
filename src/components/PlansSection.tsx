const plans = [
  {
    name: 'Free',
    price: '$0',
    text: 'Have a go  and test your  superpowers',
    features: [
      '2 Users',
      '2 Files',
      'Public Share & Comments',
      'Chat Support ',
      'New income apps',
    ],
    button: 'Signup for free',
  },
  {
    name: 'Pro',
    text: 'Experiment the power of infinite possibilities',
    price: '$8',
    btn: 'Save $50 a year',
    features: [
      '4 Users',
      'All apps',
      'Unlimited editable exports',
      'Folders and collaboration ',
      'All incoming apps',
    ],
    button: 'Go to pro',
  },
  {
    name: 'Business',
    text: 'Unveil new superpowers and join the Design Leaque',
    price: '$16',
    features: [
      'All the features of pro plan',
      'Account success Manager',
      'Single Sign-On (SSO)',
      'Co-conception pogram',
      'Collaboration-Soon',
    ],
    button: 'Goto Business',
  },
]

const PlansSection = () => {
  return (
    <section className='w-full bg-gray-50 py-20'>
      <div className='max-w-7xl mx-auto px-4 text-center'>
        <h2 className='text-3xl font-bold'>Choose Plans </h2>
        <h2 className='text-3xl font-bold mb-5'>That’s Right For You</h2>
        <p className='text-[#A6A6A6] mb-4'>
          Choose plan that works best for you, feel free to contact us
        </p>

        <div className='flex flex-col sm:flex-row justify-center items-center text-center m-4 space-y-4 sm:space-y-0 sm:space-x-4'>
          <button className='bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 hover:scale-105 transition-all duration-300 shadow-md'>
            Contact Sales
          </button>
          <button className='bg-gray-300 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-400 hover:scale-105 transition-all duration-300 shadow-md'>
            Learn More
          </button>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          {plans.map((plan, index) => (
            <div key={index} className='bg-white rounded-2xl shadow p-6'>
              <h3 className='text-xl font-semibold mb-2'>{plan.name}</h3>
              <p className='text-neutral-400'>{plan.text}</p>
              <p className='text-2xl font-bold mb-4'>{plan.price}</p>
              <button className='text-lg rounded bg-green-200 text-white'>
                {plan.btn}
              </button>
              <ul className='text-gray-600 mb-6 space-y-1'>
                {plan.features.map((feature, idx) => (
                  <li className='flex items-left' key={idx}>
                    ✅
                    {feature}
                  </li>
                ))}
              </ul>
              <button className='w-2/5 rounded-full bg-green-500 text-white py-2 hover:bg-green-600 hover:scale-105 transition-all duration-300 shadow-md'>
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PlansSection
