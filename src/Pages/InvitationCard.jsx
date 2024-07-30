import  { useState, useRef } from 'react';
import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';
import card1 from '../assets/Invitation1.png';


const InvitationCard = () => {
  
    const [groomName, setGroomName] = useState('');
    const [brideName, setBrideName] = useState('');
    const [date, setDate] = useState('');
    const [address, setAddress] = useState('');
    const [selectedBg, setSelectedBg] = useState(card1);
    const componentRef = useRef();
  
    const backgrounds = [card1 /* Add more backgrounds as needed */];
  
    const handleGeneratePdf = async () => {
      const dataUrl = await toPng(componentRef.current);
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(dataUrl, 'PNG', 0, 0, 210, 297); // Adjust size to fit A4
      pdf.save('download.pdf');
    };
  
  
  
  return (
    <div className="p-4">
    <h1 className="text-xl mb-4">PDF Generator</h1>

    <div className="mb-4">
      <label className="block mb-2">Groom Name</label>
      <input
        type="text"
        className="w-full p-2 border mb-4"
        placeholder="Enter groom name"
        value={groomName}
        onChange={(e) => setGroomName(e.target.value)}
      />

      <label className="block mb-2">Bride Name</label>
      <input
        type="text"
        className="w-full p-2 border mb-4"
        placeholder="Enter bride name"
        value={brideName}
        onChange={(e) => setBrideName(e.target.value)}
      />

      <label className="block mb-2">Date</label>
      <input
        type="text"
        className="w-full p-2 border mb-4"
        placeholder="Enter date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label className="block mb-2">Address</label>
      <input
        type="text"
        className="w-full p-2 border mb-4"
        placeholder="Enter address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </div>

    <div className="mb-4">
      <h2 className="text-lg mb-2">Select Background:</h2>
      <div className="flex space-x-2">
        {backgrounds.map((bg, index) => (
          <img
            key={index}
            src={bg}
            alt={`Background ${index}`}
            className="w-16 h-16 cursor-pointer"
            onClick={() => setSelectedBg(bg)}
          />
        ))}
      </div>
    </div>

    <button
      className="bg-blue-500 text-white px-4 py-2 mb-4"
      onClick={handleGeneratePdf}
    >
      Generate PDF
    </button>

    <div
      ref={componentRef}
      className="relative"
      style={{
        width: '500px',
        height: '700px',
        backgroundImage: `url(${selectedBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center mt-36 text-slate-700  p-4">
        <h2 className="text-2xl mb-4">{groomName}</h2>
        <h2 className="text-2xl mb-4">{brideName}</h2>
        <p className="mb-4">{date}</p>
        <p>{address}</p>
      </div>
    </div>
  </div>
  );
};

export default InvitationCard;