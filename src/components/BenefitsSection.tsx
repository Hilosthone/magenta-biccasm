import Laptop from '../components/logos/Laptop.png'

const benefits = [
  'Increase productivity across teams',
  'Align stakeholders easily',
  'Fast onboarding process',
  'Secure and reliable platform',
]

const BenefitsSection = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-6">
            What Benefit Will You Get
          </h2>

          <ul className="space-y-3 text-gray-700">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-center justify-center md:justify-start gap-2"
              >
                <span className="w-3 h-3 bg-green-500 rounded-full" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img src={Laptop} alt="Laptop" className="max-w-full h-auto" />
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
