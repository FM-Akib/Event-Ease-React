import { IoLocationOutline } from "react-icons/io5";
import { RiCommunityLine } from "react-icons/ri";
import { PiShieldStarLight } from "react-icons/pi";
import { useLoaderData } from "react-router-dom";
import Gallery from "../Components/Ui/Gallery";
import Capacity from "../Components/Ui/Capacity";
import Facilities from "../Components/Ui/Facilities";
import Catering from "../Components/Ui/Catering";
import Pricing from "../Components/Ui/Pricing";
import Contact from "../Components/Ui/Contact";
const AHallPage = () => {
    const ahall = useLoaderData()

    const getYouTubeVideoId = (url) => {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
      };
      
      const videoId = getYouTubeVideoId(ahall.video);
      

      
    return (
      <div className="px-4 py-6 md:px-20 md:py-10">
        <div className="grid md:grid-cols-10 gap-4">
          <div className="md:col-span-7">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl md:text-3xl text-center font-semibold text-gray-800 flex items-center justify-center">
                <RiCommunityLine className='mr-1' />
                {ahall.hallName}
              </h1>
              <p className="text-gray-600 flex items-center justify-center bg-slate-100 mt-1 px-2 rounded-md">
                <IoLocationOutline className='mr-1' />
                {ahall.location}
              </p>
            </div>

            <Gallery images={ahall.images} />

            <div className="mt-2 text-gray-700">
              <p>{ahall.description}</p>
              <hr className="my-2" />
              <p>
                <span className="font-semibold text-gray-600">History:</span> {ahall.history}
              </p>
            </div>

            <Capacity ahall={ahall} />

            <div className="my-4 flex flex-col justify-center">
              <p className="mb-2 flex items-center justify-start font-semibold text-gray-600">
                <PiShieldStarLight className="mr-1" />
                Virtual tour of our {ahall.type}.
              </p>
              {videoId ? (
                <iframe
                  className="w-full aspect-video"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="YouTube video player"
                ></iframe>
              ) : (
                <p>Invalid YouTube URL</p>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-3">
            <Facilities ahall={ahall} />
            <Catering hall={ahall} />
            <Pricing hall={ahall} />
            <Contact hall={ahall} />
          </div>
        </div>
      </div>
    );
};

export default AHallPage;