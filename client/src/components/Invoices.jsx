import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SERVER_URL } from '../../urls/urls'
import toast from 'react-hot-toast'

function Invoices() {

    const [data,setData] = useState([
        {
            acid:"asdasdasdasd",
            commercialInvoice:"asdasdasdasda",
            date:"33/55/66"
        },
        {
            acid:"1111",
            commercialInvoice:"22222",
            date:"11/22/33"
        }
    ])

    
    const convertDateFormat = (isoDateString) => {
        const months = [
          "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
          "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
        ];
      
        // Create a Date object from the ISO date string
        const dateObj = new Date(isoDateString);
      
        // Extract the day, month, and year from the Date object
        const day = dateObj.getDate();
        const month = months[dateObj.getMonth()];
        const year = dateObj.getFullYear();
      
        // Format the date string in the desired format
        return `${day}/${month}/${year}`;
      };
    
    const getData = async()=>{
        const res = await axios.get(`${SERVER_URL}/getInvoices`)
        if(res.data.success)
            {
                toast.success("Invoice Fetched")
                let data = res.data.data
                for(let i=0;i<data.length;i++)
                    {
                        const newDate = convertDateFormat(data[i].date)
                        data[i].date = newDate
                    }
                setData(res.data.data)
                console.log(res.data)
            }
            else
            {
                toast.error("Error")
            }
    }

    useEffect(()=>{
       getData()
    },[])
  return (
    <div className="overflow-x-auto p-10">
        
    <table className="min-w-full divide-y border divide-gray-200">
        <thead className="bg-gray-50">
            <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Acid Number
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Commercial Invoice
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                </th>
            </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
                <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item?.acid}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item?.commercialInvoice}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item?.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <a href={`/invoice/${item._id}`} className='bg-blue-500 hover:bg-blue-600 p-2 rounded-md text-white'>View Invoice</a>
                    </td>

                </tr>
            ))}
        </tbody>
    </table>
</div>
  )
}

export default Invoices