import React,{useEffect, useRef,useState} from 'react';
import ReactPrint from "react-to-print";


const Commercial = () => {
    const ref = useRef();
    const [formattedDate, setFormattedDate] = useState('1/jan/2023');
    const [comInvoice,setComInvoice] = useState("IGST/PA/70/23-24")
    const [company,setCompany] = useState('UNMANUFACTURED INDIAN DARK AIR CURED TOBACCO, crop 2023')
    const [port,setPort] = useState('CIF ALEXANDRIA OLD PORT, EGYPT')
    const [supplier,setSupplier] = useState('MESSRS')
    const [ad1,setAd1] = useState('TOBLEAF INTERNATIONAL')
    const [ad2,setAd2] = useState('6TH OCTOBER CITY, TOURIST AREA NR.6')
    const [ad3,setAd3] = useState('PLOT NR 76, APP.NO. 2')
    const [ad4,setAd4] = useState('GIZA - EGYPT')
    const [acid,setAcid] = useState('4730227452023120206')
    const [pt1,setPt1] = useState('90 days from arrival')
    const [pt2,setPt2] = useState('91 days from arrival')
    const [pt3,setPt3] = useState('92 days from arrival')
    const [pt4,setPt4] = useState('93 days from arrival')
    const [pt5,setPt5] = useState('')
    const [pt6,setPt6] = useState('')
    const [signature,setSignature] = useState('ranju')
    const [signPic,setSignPic] = useState('https://res.cloudinary.com/dfethvtz3/image/upload/v1716369804/temp/image_ywat4p.png')
    
    useEffect(()=>{

      if(signature=='ranju')
        {
           setSignPic('https://res.cloudinary.com/dfethvtz3/image/upload/v1716369804/temp/image_ywat4p.png')
        }
        else
        {
          setSignPic('https://res.cloudinary.com/dfethvtz3/image/upload/v1716369804/temp/image_ywat4p.png')
        }
    },[signature])


    const formatDate = (date) => {
      const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
      const dateObj = new Date(date);
      const day = dateObj.getDate();
      const month = months[dateObj.getMonth()];
      const year = dateObj.getFullYear();
      return `${day}/${month}/${year}`;
    };
  
    const handleDateChange = (event) => {
      const inputDate = event.target.value;
      if (inputDate) {
        setFormattedDate(formatDate(inputDate));
      } else {
        setFormattedDate('');
      }
    };
  return (
    <div className="container mx-auto p-4">
      {/* forms */}
      <div className="p-4 border-2">
        <h1 className='text-black text-center font-semibold underline'>Edit Data</h1>
        
      <div className="flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block">
            <span className="text-black font-semibold">COMMERCIAL INVOICE No</span>
            <input type="text" value={comInvoice} onChange={(e) => setComInvoice(e.target.value)} className="mt-1 block w-full border-2 rounded-md border-gray-300" placeholder="COMMERCIAL INVOICE No" />
          </label>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block">
            <span className="text-black font-semibold">Date</span>
            <input type="date" onChange={handleDateChange} className="mt-1 block w-full border-2 rounded-md border-gray-300" />
          </label>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block">
            <span className="text-black font-semibold">Supplier</span>
            <input type="text" value={supplier} onChange={(e) => setSupplier(e.target.value)} className="mt-1 block w-full border-2 rounded-md border-gray-300" placeholder="Supplier" />
          </label>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block">
            <span className="text-black font-semibold">Address Line 1</span>
            <input type="text" value={ad1} onChange={(e) => setAd1(e.target.value)} className="mt-1 block w-full border-2 rounded-md border-gray-300" placeholder="Address Line 1" />
          </label>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block">
            <span className="text-black font-semibold">Address Line 2</span>
            <input type="text" value={ad2} onChange={(e) => setAd2(e.target.value)} className="mt-1 block w-full border-2 rounded-md border-gray-300" placeholder="Address Line 2" />
          </label>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block">
            <span className="text-black font-semibold">Address Line 3</span>
            <input type="text" value={ad3} onChange={(e) => setAd3(e.target.value)} className="mt-1 block w-full border-2 rounded-md border-gray-300" placeholder="Address Line 3" />
          </label>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block">
            <span className="text-black font-semibold">Address Line 4</span>
            <input type="text" value={ad4} onChange={(e) => setAd4(e.target.value)} className="mt-1 block w-full border-2 rounded-md border-gray-300" placeholder="Address Line 4" />
          </label>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
    <label className="block">
      <span className="text-black font-semibold">Signature</span>
      <select onChange={(e) => setSignature(e.target.value)} className="mt-1 block w-full border-2 rounded-md border-gray-300">
        <option value="">Select Signature</option>
        <option value="signature1">Signature 1</option>
        <option value="signature2">Signature 2</option>
        <option value="signature3">Signature 3</option>
      </select>
    </label>
  </div>
      </div>
      <hr className='border  rounded-2xl' />
      <div className="flex flex-wrap -mx-2">
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block">
            <span className="text-black font-semibold">Company</span>
            <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} className="mt-1 block w-full border-2 rounded-md border-gray-300" placeholder="Company" />
          </label>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block">
            <span className="text-black font-semibold">Port</span>
            <input type="text" value={port} onChange={(e) => setPort(e.target.value)} className="mt-1 block w-full border-2 rounded-md border-gray-300" placeholder="Port" />
          </label>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block">
            <span className="text-black font-semibold">ACID</span>
            <input type="text" value={acid} onChange={(e) => setAcid(e.target.value)} className="mt-1 block w-full border-2 rounded-md border-gray-300" placeholder="ACID" />
          </label>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block">
            <span className="text-black font-semibold">Payment Term 1</span>
            <input type="text" value={pt1} onChange={(e) => setPt1(e.target.value)} className="mt-1 block w-full border-2 rounded-md border-gray-300" placeholder="Payment Term 1" />
          </label>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block">
            <span className="text-black font-semibold">Payment Term 2</span>
            <input type="text" value={pt2} onChange={(e) => setPt2(e.target.value)} className="mt-1 block w-full border-2 rounded-md border-gray-300" placeholder="Payment Term 2" />
          </label>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block">
            <span className="text-black font-semibold">Payment Term 3</span>
            <input type="text" value={pt3} onChange={(e) => setPt3(e.target.value)} className="mt-1 block w-full border-2 rounded-md border-gray-300" placeholder="Payment Term 3" />
          </label>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block">
            <span className="text-black font-semibold">Payment Term 4</span>
            <input type="text" value={pt4} onChange={(e) => setPt4(e.target.value)} className="mt-1 block w-full border-2 rounded-md border-gray-300" placeholder="Payment Term 4" />
          </label>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block">
            <span className="text-black font-semibold">Payment Term 5</span>
            <input type="text" value={pt5} onChange={(e) => setPt5(e.target.value)} className="mt-1 block w-full border-2 rounded-md border-gray-300" placeholder="Payment Term 5" />
          </label>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4">
          <label className="block">
            <span className="text-black font-semibold">Payment Term 6</span>
            <input type="text" value={pt6} onChange={(e) => setPt6(e.target.value)} className="mt-1 block w-full border-2 rounded-md border-gray-300" placeholder="Payment Term 6" />
          </label>
        </div>
      </div>
    </div>
      {/* end forms */}
      <div className="px-16" ref={ref}>
        <div className="flex justify-between items-center mb-4">
          <div>
            <img src={'https://res.cloudinary.com/dfethvtz3/image/upload/v1716370004/temp/Screenshot_2024-05-22_132613_t4op7t.png'} alt="Logo" className="h-28" />
          </div>
          <div className="text-right">
            <p className="text-md font-bold">DATE: {formattedDate && formattedDate}</p>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-md font-bold accent-color">{supplier}</p>
          <p className='font-semibold'>{ad1}</p>
          <p className='font-semibold'>{ad2}</p>
          <p className='font-semibold'>{ad3}</p>
          <p className='font-semibold'>{ad4}</p>
        </div>
        <div className="mb-2 text-center">
          <p className="text-md font-bold accent-color underline">COMMERCIAL INVOICE No. {comInvoice}</p>
          <p className="text-md">{company}</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full bg-white border-collapse border border-gray-400">
            <thead className="header-bg">
              <tr className='bg-[#fce8d9]'>
                <th className="border border-gray-300 text-sm px-1 py-1 underline underline-offset-2">ORIGIN</th>
                <th className="border border-gray-300 text-sm px-1 py-1 underline underline-offset-2">GRADE</th>
                <th className="border border-gray-300 text-sm px-1 py-1 underline underline-offset-2">NET KGs</th>
                <th className="border border-gray-300 text-sm px-1 py-1 underline underline-offset-2">GROSS WEIGHT</th>
                <th className="border border-gray-300 text-sm px-1 py-1 underline underline-offset-2">PRICE/ KG $</th>
                <th className="border border-gray-300 text-sm px-1 py-1 underline underline-offset-2">No. of Cartons</th>
                <th className="border border-gray-300 text-sm px-1 py-1 underline underline-offset-2">AMOUNT ($ USD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 text-sm px-1 py-1 text-center">INDIA</td>
                <td className="border border-gray-300 text-sm px-1 py-1 text-center">XDA</td>
                <td className="border border-gray-300 text-sm px-1 py-1 text-center">44,000</td>
                <td className="border border-gray-300 text-sm px-1 py-1 text-center">47,300</td>
                <td className="border border-gray-300 text-sm px-1 py-1 text-center">$1.99</td>
                <td className="border border-gray-300 text-sm px-1 py-1 text-center">220</td>
                <td className="border border-gray-300 text-sm px-1 py-1 text-center">$87,560.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="header-bg">
                <td  className="border bg-[#fce8d9] border-gray-300 px-2 py-1 font-bold text-left">TOTAL</td>
                <td colSpan="5" className="border border-gray-300 px-2 py-1 font-bold text-left"></td>
                <td className="border border-gray-300 px-2 py-1 font-bold text-center">$87,560.00</td>
              </tr>
              <tr className="header-bg">
                <td colSpan="7" className="border-4 border-gray-300 px-2 py-1 font-bold text-center">{port}</td>
              </tr>
              
            </tfoot>
          </table>
        </div>
      
        <div className="mt-2">
          <p className=" text-sm"><strong className='mr-[100px]'>PAYMENT TERMS:</strong> {pt1}</p>
          <p className=" text-sm ml-[223px]"> </p>
          <p className=" text-sm ml-[223px]"> {pt2}</p>
          <p className=" text-sm ml-[223px]"> {pt3}</p>
          <p className=" text-sm ml-[223px]"> {pt4}</p>
          <p className=" text-sm ml-[223px]"> {pt5}</p>
          <p className=" text-sm ml-[223px]"> {pt6}</p>
          
        </div>
        <div className="mt-4">
          <p className="text-sm"><strong  className='mr-32'>PAYMENT TO</strong> : TOBLEAF TRADING DMCC</p>
       
          <p><strong className='text-sm mr-[131px]'>BANK NAME</strong> : EMIRATES NBD</p>
          <p><strong className='text-sm mr-[158px]'>BRANCH</strong> : EMIRATES HEADQUARTERS BLDG</p>
          <p><strong className='text-sm mr-[154px]'>ADDRESS</strong> : BANIYAS ROAD, DEIRA, P.O. BOX 777, DUBAI - U.A.E</p>
          <p><strong className='text-sm mr-[123px]'>ACCOUNT NR.</strong> : 102 467 823 8004</p>
          <p><strong className='text-sm mr-[188px]'>IBAN</strong>: AE 85026 000 1024678238004</p>
          <p><strong className='text-sm mr-[176px]'>SWIFT</strong> : EBILAEAD</p>
        </div>
        <div className="mt-2">
          <p className="text-sm font-bold">ACID: <strong className='ml-[295px]'>{acid}</strong></p>
          <p className="text-sm">Egyptian Importer Tax ID: <strong className='ml-[178px]'>473022745</strong></p>
          <p className="text-sm">Foreign Exporter Registration Type: <strong className='ml-[117px]'>VAT NUMBER</strong></p>
          <p className="text-sm">Foreign Exporter ID: <strong className='ml-[210px]'>10038300900003</strong></p>
          <p className="text-sm">Foreign Exporter Country: <strong className='ml-[176px]'>United Arab Emirates</strong></p>
          <p className="text-sm">Foreign Exporter Country Code: <strong className='ml-[140px]'>AE</strong></p>
        </div>
        <div className="my-6">
             <span className='flex'>
             <img src={'https://res.cloudinary.com/dfethvtz3/image/upload/v1716369804/temp/image_ywat4p.png'} alt="Signature" className="h-12 " />
             <img src={'https://res.cloudinary.com/dfethvtz3/image/upload/v1716369857/temp/Screenshot_2024-05-22_132348_c0s6lj.png'} alt="Signature" className="h-20 ml-56" />

             </span>
            {/* <p>Authorized Signature</p> */}
          </div>
        <div className="mt-4 flex justify-center items-center">
          <div>
            <p><strong>TOBLEAF TRADING DMCC</strong></p>
            <hr />
            <p className='text-center text-sm'>Off. 2504, HDS Business Center, Cluster M, JLT, P.O. Box 128744, Dubai - United Arab Emirates</p>
            <p className='text-center text-sm'>Email: info@tobleafdxb.ae | Tel: +971 4 422 7206 | Fax: +971 4 422 6598</p>
          </div>
          {/* <div className="text-center">
            <img src={'https://res.cloudinary.com/dfethvtz3/image/upload/v1716369804/temp/image_ywat4p.png'} alt="Signature" className="h-12 mx-auto" />
            <p>Authorized Signature</p>
          </div> */}
        </div>
      </div>

      <ReactPrint
        trigger={() => <button className='my-3 px-5 py-1 border rounded-md bg-blue-500 hover:bg-blue-600 cursor-pointer text-white' id="btn">Download PDF</button>}
        content={() => ref.current}
        documentTitle={`FILE`}
      />
      
    </div>
  );
};

export default Commercial;
