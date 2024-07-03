import React, { useRef, useState } from "react";
import ReactPrint from "react-to-print";

function Dma() {
  
  const ref = useRef();
  const [invoiceDate1,setInvoiceDate1] = useState('Invoice No. & Date')
  const [invoiceDate2,setInvoiceDate2] = useState('DMA/42/23-24')
  const [invoiceDate3,setInvoiceDate3] = useState('Dtd 19.03.2024')
  const [invoiceDate4,setInvoiceDate4] = useState('Ship. REF. : MAL24-0224')

  const [consignee1,setConsignee1] = useState('EL -WARDA FOR TOBACOO COMPANY')
  const [consignee2,setConsignee2] = useState('AHMED FATHI AHMED EL - TALAWI AND PARTNERS')
  const [consignee3,setConsignee3] = useState('AWEL TAREEK SHEBIN EL -KOEM')
  const [consignee4,setConsignee4] = useState('QUESINA - MENOFYA , P.O BOX 95')
  const [consignee5,setConsignee5] = useState('SHEBIN EL KOEM')
  const [consignee6,setConsignee6] = useState('EGYPT')

  const [coo,setCoo] = useState('Malawi')
  const [cofd,setCofd] = useState('Egypt')

  return (
    <>
    <div className="p-10 mt-10 border-2 border-black">
      <h2 className="text-center font-bold mb-4 underline">Invoice Date column</h2>
 <span className="flex justify-center ">
 <input type="text" value={invoiceDate1} onChange={(e)=>setInvoiceDate1(e.target.value.trim())} className="border border-black p-1 rounded-md ml-3" placeholder="line 1"/>
       <input type="text" value={invoiceDate2} onChange={(e)=>setInvoiceDate2(e.target.value.trim())} className="border border-black p-1 rounded-md ml-3" placeholder="line 2"/>
       <input type="text" value={invoiceDate3} onChange={(e)=>setInvoiceDate3(e.target.value.trim())} className="border border-black p-1 rounded-md ml-3" placeholder="line 3"/>
       <input type="text" value={invoiceDate4} onChange={(e)=>setInvoiceDate4(e.target.value.trim())} className="border border-black p-1 rounded-md ml-3" placeholder="line 4"/>
 </span>
 <h2 className="text-center font-bold mb-4 underline">Country of origin & final destination</h2>
 <span className="flex justify-center ">
       <input type="text" value={coo} onChange={(e)=>setCoo(e.target.value.trim())} className="border border-black p-1 rounded-md ml-3" placeholder="line 2"/>
       <input type="text" value={cofd} onChange={(e)=>setCofd(e.target.value.trim())} className="border border-black p-1 rounded-md ml-3" placeholder="line 3"/>
 </span>
    
      
    </div>

    <div className="p-10 mt-10 border-2 border-black">
      <h2 className="text-center font-bold mb-4 underline">CONSIGNEE column</h2>
 <span className="flex justify-center ">
       <input type="text" value={consignee1} onChange={(e)=>setConsignee1(e.target.value.trim())} className="border border-black p-1 rounded-md ml-3" placeholder="line 2"/>
       <input type="text" value={consignee2} onChange={(e)=>setConsignee2(e.target.value.trim())} className="border border-black p-1 rounded-md ml-3" placeholder="line 3"/>
       <input type="text" value={consignee3} onChange={(e)=>setConsignee3(e.target.value.trim())} className="border border-black p-1 rounded-md ml-3" placeholder="line 4"/>
       <input type="text" value={consignee4} onChange={(e)=>setConsignee4(e.target.value.trim())} className="border border-black p-1 rounded-md ml-3" placeholder="line 2"/>
       <input type="text" value={consignee5} onChange={(e)=>setConsignee5(e.target.value.trim())} className="border border-black p-1 rounded-md ml-3" placeholder="line 3"/>
       <input type="text" value={consignee6} onChange={(e)=>setConsignee6(e.target.value.trim())} className="border border-black p-1 rounded-md ml-3" placeholder="line 4"/>
 </span>

 <h2 className="text-center font-bold mb-4 underline mt-5">DATA TABLE</h2>

 <table className="mx-auto mt-5">
  <thead>
    <tr>
      <th  className="p-1 border border-black">
      Marks & Nos.
      </th>
      <th  className="p-1 border border-black">
      No. & Kind of Pkgs
      </th>
      <th  className="p-1 border border-black">
      Description of Goods
      </th>
      <th  className="p-1 border border-black">
      Quantity
      </th>
      <th  className="p-1 border border-black">
      PRICE/KG
      </th>
      <th  className="p-1 border border-black">
      TOTAL USD($)
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="p-1 border border-black">
        <input type="text" />
      </td>
      <td className="p-1 border border-black">
        <input type="text" />
      </td>
      <td className="p-1 border border-black">
        <input type="text" />
      </td>
      <td className="p-1 border border-black">
        <input type="text" />
      </td>
      <td className="p-1 border border-black">
        <input type="text" />
      </td>
      <td className="p-1 border border-black">
        <input type="text" />
      </td>
    </tr>
  </tbody>
 </table>
      
    </div>
      <div className="mb-5 mt-5 p-2" ref={ref}>
        <div className="flex w-full justify-between items-start">
          <span className="mr-5">
            <img
            width={350}
              src="https://res.cloudinary.com/dfethvtz3/image/upload/v1717529312/autoCargo/DMALOGO1_acyd0q.png"
              alt="Logo"
            />
          </span>
          <span>
            <p>DMA TOBACCO TRADING LLC</p>
            <p>Office. 120 | 2020 Building | Al Quoz-3|</p>
            <p>PB.128744</p>
            <p>Dubai United Arab Emirates | Tel.+971 4572 0340</p>
            <p>Logistics@dmadubai.com</p>
            <p>www.dmadubai.com</p>
          </span>
        </div>

        <div className="flex justify-center mt-5 w-full">
          <span className="border-2 border-black w-full">
            <p className="text-center font-bold">PROFORMA INVOICE</p>
          </span>
        </div>

        <div className="flex justify-between mt-5 w-full">
          <div className="border-4 border-black w-full">
            <span className="border-b-2 border-r-2 border-black px-2">
              <strong>SELLER</strong>
            </span>
            <p className="ml-3 font-semibold">DMA TOBACCO TRADING LLC</p>
            <p className="ml-3 font-semibold">
              Office. 120 | 2020 Building | Al Quoz-3|
            </p>
            <p className="ml-3 font-semibold">PB.128744</p>
            <p className="ml-3 font-semibold">
              Dubai United Arab Emirates | Tel.+971 4 572 0340
            </p>
          </div>
          <div className="border-t-4 border-l-2 border-r-4 border-black w-96">
            <p className="text-center font-semibold">{invoiceDate1}</p>
            <p className="text-center font-semibold">{invoiceDate2}</p>
            <p className="text-center font-semibold">{invoiceDate3}</p>
            <p className="text-center font-semibold">{invoiceDate4}</p>
           
          </div>
        </div>

        <div className="flex justify-between w-full">
          <div className="border-2 border-l-4 border-r-4 border-b-4 border-black w-full">
            <span className="border-b-2 border-r-2 border-black px-2">
              <strong>CONSIGNEE</strong>
            </span>
            <p className="ml-3 font-semibold">
              {consignee1}
            </p>
            <p className="ml-3 font-semibold">
              {consignee2}
            </p>
            <p className="ml-3 font-semibold">
              {consignee3}
              </p>
            <p className="ml-3 font-semibold">
              {consignee4}
            </p>
            <p className="ml-3 font-semibold">
              {consignee5}
            </p>
            <p className="ml-3 font-semibold">
              {consignee6}
            </p>
          </div>
          <div className="flex border-b-2 border-l-2 border-r-4 border-black w-96">
            <div className="border-2 border-t-2 border-black mt-10 w-1/2">
              <hr className="border-2 border-black" />
              <p className="text-center mt-3 font-semibold">Country of Origin</p>
              <p className="text-center font-semibold">Malawi</p>
            </div>
            <div className="border-2 border-black mt-10 w-1/2">
              <hr className="border-2 border-black" />
              <p className="text-center text-sm mt-3 font-semibold">
                Country of final destination
              </p>
              <p className="text-center font-semibold">Egypt</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between w-full">
          <div className="border-2 border-t-0 border-r-0 border-l-4 border-black w-full">
            <span className="flex justify-center">
              <p className="my-5">
              UNMANUFACTURED MALAWI DARK FIRD TOBACCO- CROP 2023
              </p>
            </span>
          </div>
          <div className="flex justify-end border-b-2 border-r-4 border-black w-96">
            <div className="border-2 border-l-4 border-b-4 my-1 border-black w-full">
              <p className="border-2 text-center border-black border-b-4 p-1 px-1 font-semibold text-sm">
                Term Of Delivery & Payment
              </p>
              <p className="p-1 px-1 font-semibold text-sm text-center">
                CIF Alexandria Old Port , Egypt
              </p>
              <p className="p-1 px-1 font-semibold text-sm text-center">
                100 % By TT (CAD)
              </p>
              <p className="p-1 px-1 font-semibold text-sm text-center">
                Cash Against Documents
              </p>
            </div>
          </div>
        </div>

        <center>
          <table className="w-full bg-white border-2 border-black">
            <thead>
              <tr>
                <th className=" border-2 border-l-4 border-black"><p className="text-sm">Marks & Nos.</p></th>
                <th className=" border-2 border-black">
                 <p className="text-sm"> No. & Kind of Pkgs</p>
                </th>
                <th className=" border-2 border-black">
                <p className="text-sm">  Description of Goods</p>
                </th>
                <th className=" border-2 border-black"><p className="text-sm">Quantity</p></th>
                <th className=" border-2 border-black"><p className="text-sm">PRICE/KG</p></th>
                <th className=" border-2 border-black border-r-4">
                  <p className="text-sm">TOTAL USD($)</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-2 border-l-4 border-black">
                  Net WT : 44111.80 Kgs
                  <br />
                  Gross WT : 47167.00 Kgs
                </td>
                <td className="px-4 py-2 border-2 border-black">228 Cartons</td>
                <td className="px-4 py-2 border-2 border-black">
                  DFCMW/4
                  <br />
                  DFCMW/5
                </td>
                <td className="px-4 py-2 border-2 border-black">
                  22205.2
                  <br />
                  21906.6
                </td>
                <td className="px-4 py-2 border-2 border-black">2.40</td>
                <td className="px-4 py-2 border-2 border-r-4 border-black">
                  53,292.48
                  <br />
                  52,575.84
                </td>
              </tr>
              <tr className="border-l-4 border-black border-b-4 border-r-4">
             <td colSpan={6}>
             <div className="border-0 border-black w-full">
              <span className="px-9 flex justify-between">
                <p>Amount chergeable ( In Words) </p>
                <p>Total USD($) 105,868.32</p>
              </span>
              <p className="text-start ml-2">
                ( US Dollars one Hundred five Thousand,Eight Hundred Sixty Eight
                & 32/100 only).
              </p>
              <div className="flex justify-between">
                <span>
                  <p className="text-start ml-1 underline font-semibold">
                    Bank Details
                  </p>
                  <p className="text-start ml-1">
                    <strong className="mr-[85px]">
                      Name of the Beneficiary :
                    </strong>{" "}
                    DMA TOBACCO TRADING LLC
                  </p>
                  <p className="text-start ml-1">
                    <strong className="mr-[125px]">Bank Account with :</strong>{" "}
                    CBI BANK <small>(COMMERCIAL BANK INTERNATIONAL)</small>
                  </p>
                  <p className="text-start ml-1">
                    <strong className="mr-[215px]">Branch : </strong>JUMEIRAH
                    BRAANCH{" "}
                  </p>
                  <p className="text-start ml-1">
                    <strong className="mr-[180px]">Account no :</strong>{" "}
                    100090172505
                  </p>
                </span>

                <span className="mr-5">
                  <img
                  width={150}
                    src="https://res.cloudinary.com/dfethvtz3/image/upload/v1717530100/autoCargo/0c020972-51f3-4eb8-8b3e-13409fc9cec1.png"
                    alt="Seal"
                  />
                </span>
              </div>

              <div className="flex justify-between">
                <p>Swift Code </p>
                <p>CLIBIAEAD</p>
                <p>IBAN</p>
                <p className="mr-16">AE330220000100090172505</p>
              </div>
            </div>
             </td>
              </tr>
            </tbody>
          </table>
      
          {/* <div className="border-2 w-full">
            <div className="border-4 border-black w-full">
              <span className="px-9 flex justify-between">
                <p>Amount chergeable ( In Words) </p>
                <p>Total USD($) 105,868.32</p>
              </span>
              <p className="text-start ml-2">
                ( US Dollars one Hundred five Thousand,Eight Hundred Sixty Eight
                & 32/100 only).
              </p>
              <div className="flex justify-between">
                <span>
                  <p className="text-start ml-1 underline font-semibold">
                    Bank Details
                  </p>
                  <p className="text-start ml-1">
                    <strong className="mr-[85px]">
                      Name of the Beneficiary :
                    </strong>{" "}
                    DMA TOBACCO TRADING LLC
                  </p>
                  <p className="text-start ml-1">
                    <strong className="mr-[125px]">Bank Account with :</strong>{" "}
                    CBI BANK <small>(COMMERCIAL BANK INTERNATIONAL)</small>
                  </p>
                  <p className="text-start ml-1">
                    <strong className="mr-[215px]">Branch : </strong>JUMEIRAH
                    BRAANCH{" "}
                  </p>
                  <p className="text-start ml-1">
                    <strong className="mr-[180px]">Account no :</strong>{" "}
                    100090172505
                  </p>
                </span>

                <span className="mr-5">
                  <img
                  width={150}
                    src="https://res.cloudinary.com/dfethvtz3/image/upload/v1717530100/autoCargo/0c020972-51f3-4eb8-8b3e-13409fc9cec1.png"
                    alt="Seal"
                  />
                </span>
              </div>

              <div className="flex justify-between">
                <p>Swift Code </p>
                <p>CLIBIAEAD</p>
                <p>IBAN</p>
                <p className="mr-16">AE330220000100090172505</p>
              </div>
            </div>
          </div> */}
        </center>
      </div>

      <ReactPrint
        trigger={() => (
          <button
            className="my-3 px-5 py-1 border rounded-md bg-green-500 hover:bg-green-600 cursor-pointer text-white"
            id="btn"
          >
            Download PDF
          </button>
        )}
        content={() => ref.current}
        documentTitle={`FILE`}
      />
    </>
  );
}

export default Dma;
