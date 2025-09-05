import logo1 from '../components/logos/unspalsh.png'
import logo2 from '../components/logos/notion.png'
import logo3 from '../components/logos/intercom.png'
import logo4 from '../components/logos/descript.png'
import logo5 from '../components/logos/grammerly.png'

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
]
const LogosSection = () => {
  return (
    <section className='w-full bg-gray-50 py-10'>
      <div className='max-w-7xl mx-auto px-4 text-center'>
        <p className='text-gray-600 mb-4'>More than 25,000 teams use Collabs</p>
        <div className='flex justify-center flex-wrap gap-8'>
          {logos.map((src, index) => (
            <img key={index} src={src} alt='Logo' className='w-[169px] h-[75px]' />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LogosSection
