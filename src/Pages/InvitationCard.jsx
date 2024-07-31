import { useState, useRef } from 'react';
import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';
import { FcInvite } from 'react-icons/fc';

import card1 from '../assets/Invitation1.png';
import card2 from '../assets/invitation2.png';
import card3 from '../assets/Invitation3.png';
import card4 from '../assets/Invitation4.png';
import card5 from '../assets/Invitation5.png';

const InvitationCard = () => {
  const [groomName, setGroomName] = useState('');
  const [brideName, setBrideName] = useState('');
  const [date, setDate] = useState('');
  const [address, setAddress] = useState('');
  const [selectedBg, setSelectedBg] = useState(card1);
  const componentRef = useRef();

  const backgrounds = [card1, card2, card3, card4, card5];

  const handleGeneratePdf = async () => {
    const dataUrl = await toPng(componentRef.current);
    const pdf = new jsPDF('p', 'mm', 'a4');
    pdf.addImage(dataUrl, 'PNG', 0, 0, 210, 297); // Adjust size to fit A4
    pdf.save('download.pdf');
  };

  const dateParts = date.split(' ');

  return (
    <div className="bg-[url(https://i.ibb.co/tc5HwLj/pattern.jpg)] bg-cover bg-center">
      <div className="p-4 bg-white/85 md:px-36">
        <section className="dark:bg-dark bg-white/70 py-6">
          <div className="mx-auto px-4 sm:container">
            <div className="border-orange-400 border-l-[5px] pl-5">
              <h2 className="text-dark mb-2 text-2xl font-semibold">Invitation Card</h2>
              <p className="text-body-color dark:text-dark-6 text-sm font-medium">
                Make invitation card easily.
              </p>
            </div>
          </div>
        </section>

        <div className="mb-4">
          <div className="bg-white/80 py-5 md:px-10 rounded-md">
           
            <div className="md:flex  md:gap-5 gap-2">
              <div className="w-full md:w-1/2">
                <label className="block mb-2">Groom Name</label>
                <input
                  type="text"
                  className="w-full p-2 border mb-4 rounded-md"
                  placeholder="Enter groom name"
                  value={groomName}
                  onChange={(e) => setGroomName(e.target.value)}
                />
              </div>

              <div className="w-full md:w-1/2">
                <label className="block mb-2">Bride Name</label>
                <input
                  type="text"
                  className="w-full p-2 border mb-4 rounded-md"
                  placeholder="Enter bride name"
                  value={brideName}
                  onChange={(e) => setBrideName(e.target.value)}
                />
              </div>
            </div>

            <div className="md:flex md:gap-5 gap-2">
              <div className="w-full md:w-1/2">
                <label className="block mb-2">Date</label>
                <input
                  type="text"
                  className="w-full p-2 border mb-4 rounded-md"
                  placeholder="8AM Sunday 18 August 2024"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="w-full md:w-1/2">
                <label className="block mb-2">Address</label>
                <input
                  type="text"
                  className="w-full p-2 border mb-4 rounded-md"
                  placeholder="Enter address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 mb-5">
          <h2 className="text-lg mb-2">Select Background:</h2>
          <div className="flex flex-wrap gap-2 md:gap-4">
            {backgrounds.map((bg, index) => (
              <img
                key={index}
                src={bg}
                alt={`Background ${index}`}
                className="w-16 h-20 cursor-pointer"
                onClick={() => setSelectedBg(bg)}
              />
            ))}
          </div>
        </div>

        <button
          className="bg-orange-500 text-white px-4 py-2 mb-10 flex items-center gap-1 font-semibold rounded-sm"
          onClick={handleGeneratePdf}
        >
          Generate PDF <FcInvite className="text-2xl" />
        </button>

        <div
          ref={componentRef}
          className="relative mb-20 mx-auto"
          style={{
            width: '100%',
            maxWidth: '500px',
            height: '700px',
            backgroundImage: `url(${selectedBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-700 gap-3 p-4">
            <div className="flex flex-col justify-center items-center mb-4">
              <h2 className="text-3xl font-bold">{groomName}</h2>
              <span className={`${brideName===''? 'hidden':'block'}  text-5xl mx-2 text-orange-400 font-extrabold`}>&</span>
              <h2 className="text-3xl font-bold">{brideName}</h2>
            </div>
            <p className="mb-4 flex items-center gap-2">
              {dateParts[1]}
              <span className="flex flex-col border-s-2 border-e-2 border-gray-700 px-4 items-center">
                <span className="">{dateParts[3]}</span>
                <span className="font-bold text-4xl">{dateParts[2]}</span>
                <span className="">{dateParts[4]}</span>
              </span>
              <span className={`${dateParts[0]===''?'hidden':'block'}`}>to {dateParts[0]}</span>
            </p>
            <p className="bg-orange-100 px-4 rounded-sm">{address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvitationCard;
