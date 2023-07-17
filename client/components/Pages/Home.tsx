import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Home() {
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
  }

  // add buttons to ON TOP of sliders
  // sliders change colour on hover - bg on button changes colour and bg becomes transparent
  // edit slider animation to be smoother

  return (
    <div>
      <div>
        <div>
          <Slider {...settings} className="my-12">
            {NoHeaKoeGallery.map((path, index) => (
              <div key={index}>
                <img
                  src={`/NoHeaKoeGallery/${path}`}
                  alt={`${path}`}
                  className="h-96"
                />
              </div>
            ))}
          </Slider>
        </div>

        <div>
          <Slider {...settings} className="my-12">
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
        </div>
      </div>

      <div className="flex flex-row max-md:flex-col  justify-evenly items-center">
        <div className="w-1/4">
          <img src="/maia-photo.svg" alt="Maia-selfie" />
        </div>
        <div className="w-1/2 text-center mx-4">
          <p className="mt-3">
            Ngāti Hauā, Te Arawa, Te Rarawa, Waikato Tainui
          </p>
          <p className="mt-3">
            I am a Māori Software Developer and textile designer. I embarked on
            my journey as a developer to find new horizons, new challenges and
            explore new ideas.
          </p>
          <p className="mt-3">
            Transitioning into the tech sector has been deeply fulfilling so far
            and I&apos;m looking forward to seeing where the next steps will
            take me.
          </p>
          <p className="mt-3">
            I enjoy mixing photography, knit programming, drawing and screen
            printing to create multi-layered artwork. I aim to connect to ideas
            around personal identity, whakapapa and my personal journey of Māori
            in modern spaces.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Home
