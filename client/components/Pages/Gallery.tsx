import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Gallery() {
  const NoHeaKoeGallery = [
    'campus-1.jpeg',
    'campus-2.jpeg',
    'campus-3.jpeg',
    'campus-4.jpeg',
    'campus-5.jpeg',
    'campus-6.jpeg',
    'campus-7.jpeg',
    'campus-8.jpeg',
    'campus-9.jpeg',
    'campus-10.jpeg',
    'campus-11.jpeg',
    'campus-12.jpeg',
    'campus-13.jpeg',
    'campus-14.jpeg',
    'campus-15.jpeg',
    'campus-16.jpeg',
    'campus-17.jpeg',
    'campus-18.jpeg',
    'campus-19.jpeg',
    'campus-20.jpeg',
  ]

  const KaingaGallery = [
    'kainga-1.jpeg',
    'kainga-2.jpeg',
    'kainga-3.jpeg',
    'kainga-4.jpeg',
    'kainga-5.jpeg',
    'kainga-6.jpeg',
    'photocopy-1.jpg',
    'photocopy-2.jpg',
    'photocopy-3.jpg',
  ]

  const settings = {
    dots: true,
    centerMode: true,
    centerPadding: '0',
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  }
  return (
    <div>
      <div className="relative my-12">
        <Slider {...settings} className="z-10 hover:opacity-80">
          {NoHeaKoeGallery.map((path, index) => (
            <div key={index}>
              <img
                src={`/NoHeaKoeGallery/${path}`}
                alt={`${path}`}
                className="h-96 "
              />
            </div>
          ))}
        </Slider>
        <Link
          to="/NoHeaKoe"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 border-2 border-solid bg-white border-slate-500 p-2 text-slate-500 hover:border-2 hover:border-solid hover:text-white hover:bg-slate-500 hover:border-slate-700 "
        >
          Nō hea koe?
        </Link>
      </div>

      <div className="relative">
        <Slider {...settings} className="my-12  hover:opacity-80">
          {KaingaGallery.map((path, index) => (
            <div key={index}>
              <img
                src={`/KaingaGallery/${path}`}
                alt={`${path}`}
                className="h-96"
              />
            </div>
          ))}
        </Slider>
        <Link
          to="/Kainga"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 border-2 border-solid  bg-white border-slate-500 p-2 text-slate-500 hover:border-2 hover:border-solid hover:text-white hover:bg-slate-500 hover:border-slate-700 "
        >
          Kāinga
        </Link>
      </div>
    </div>
  )
}
export default Gallery
