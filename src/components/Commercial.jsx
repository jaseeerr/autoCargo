import React,{useRef} from 'react';
import ReactPrint from "react-to-print";


const Commercial = () => {
    const ref = useRef();
  return (
    <div className="container mx-auto p-4">
      {/* forms */}
      <div className='flex'>
        <input type="text" name="" id="" className='border-2 rounded-md border-black' placeholder='COMMERCIAL INVOICE No' />
        <input type="date" name="" id="" className='border-2 rounded-md border-black' placeholder='COMMERCIAL INVOICE No' />
        <input type="text" name="" id="" className='border-2 rounded-md border-black' placeholder='COMMERCIAL INVOICE No' />

      </div>
      {/* end forms */}
      <div className="px-10" ref={ref}>
        <div className="flex justify-between items-center mb-4">
          <div>
            <img src={'https://res.cloudinary.com/dfethvtz3/image/upload/v1716370004/temp/Screenshot_2024-05-22_132613_t4op7t.png'} alt="Logo" className="h-28" />
          </div>
          <div className="text-right">
            <p className="text-lg font-bold">DATE: 4/JAN/2024</p>
          </div>
        </div>
        <div className="mb-4">
          <p className="text-lg font-bold accent-color">MESSRS</p>
          <p>TOBLEAF INTERNATIONAL</p>
          <p>6TH OCTOBER CITY, TOURIST AREA NR.6</p>
          <p>PLOT NR 76, APP.NO. 2</p>
          <p>GIZA - EGYPT</p>
        </div>
        <div className="mb-2 text-center">
          <p className="text-xl font-bold accent-color">COMMERCIAL INVOICE No. IGST/PA/70/23-24</p>
          <p className="text-lg">UNMANUFACTURED INDIAN DARK AIR CURED TOBACCO, crop 2023</p>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-collapse border border-gray-400">
            <thead className="header-bg">
              <tr className='bg-[#fce8d9]'>
                <th className="border border-gray-300 px-2 py-1">ORIGIN</th>
                <th className="border border-gray-300 px-2 py-1">GRADE</th>
                <th className="border border-gray-300 px-2 py-1">NET KGs</th>
                <th className="border border-gray-300 px-2 py-1">GROSS WEIGHT</th>
                <th className="border border-gray-300 px-2 py-1">PRICE/ KG $</th>
                <th className="border border-gray-300 px-2 py-1">No. of Cartons</th>
                <th className="border border-gray-300 px-2 py-1">AMOUNT ($ USD)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-2 py-1 text-center">INDIA</td>
                <td className="border border-gray-300 px-2 py-1 text-center">XDA</td>
                <td className="border border-gray-300 px-2 py-1 text-center">44,000</td>
                <td className="border border-gray-300 px-2 py-1 text-center">47,300</td>
                <td className="border border-gray-300 px-2 py-1 text-center">$1.99</td>
                <td className="border border-gray-300 px-2 py-1 text-center">220</td>
                <td className="border border-gray-300 px-2 py-1 text-center">$87,560.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="header-bg">
                <td  className="border bg-[#fce8d9] border-gray-300 px-2 py-1 font-bold text-left">TOTAL</td>
                <td colSpan="5" className="border border-gray-300 px-2 py-1 font-bold text-left"></td>
                <td className="border border-gray-300 px-2 py-1 font-bold text-center">$87,560.00</td>
              </tr>
              <tr className="header-bg">
                <td colSpan="7" className="border-4 border-gray-300 px-2 py-1 font-bold text-center">CIF ALEXANDRIA OLD PORT, EGYPT</td>
              </tr>
              
            </tfoot>
          </table>
        </div>
      
        <div className="mt-2">
          <p className=" text-sm"><strong className='mr-[100px]'>PAYMENT TERMS:</strong> 90 days from arrival</p>
          <p className=" text-sm ml-[223px]"> 90 days from arrival</p>
          <p className=" text-sm ml-[223px]"> 90 days from arrival</p>
          <p className=" text-sm ml-[223px]"> 90 days from arrival</p>
          
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
          <p className="text-sm font-bold">ACID: <strong className='ml-[295px]'>4730227452023120206</strong></p>
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
