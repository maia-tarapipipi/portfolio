import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Home() {
  const gallery = [
    'anzac-bay-1.jpeg',
    'anzac-bay-2.jpeg',
    'kainga-1.jpeg',
    'kainga-2.jpeg',
    'kainga-3.jpeg',
    'kainga-4.jpg',
    'poleroid-1.jpeg',
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

  return (
    <div>
      <div>
        <Slider {...settings} className="my-10">
          {gallery.map((path, index) => (
            <div key={index}>
              <img
                src={`/NoGallery/${path}`}
                alt={`${path}`}
                className="h-96"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex flex-row max-md:flex-col  justify-evenly items-center">
        <div className="w-1/4">
          <img src="/maia-photo.svg" alt="Maia-selfie" />
        </div>
        <div className="w-1/4 text-center">
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
