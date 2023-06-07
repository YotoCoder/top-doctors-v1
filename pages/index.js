import Card from './components/CardProfile.jsx'
import FilterProfile from './components/FilterProfile.jsx'
import Navbar from './components/Navbar.jsx'

export default function Home() {
  return (
    <>

    <div className='sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 
  bg-base-100 text-base-content'>
      <Navbar />
    </div>
    <div className='lg:flex'>
      <div className='sticky top-16 z-[10] flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 
  bg-base-100 text-base-content'>
        <FilterProfile />
      </div>

      <div>
        <div className='lg:flex'>
          <Card />
          <Card />
          <Card />
        </div>
        <div className='lg:flex'>
          <Card />
          <Card />
          <Card />
        </div>
        <div className='lg:flex'>
          <Card />
          <Card />
          <Card />
        </div>
        <div className='lg:flex'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
    </>
  )
}
