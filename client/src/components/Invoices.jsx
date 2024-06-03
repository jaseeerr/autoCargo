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

    


    const getData = async()=>{
        const res = await axios.get(`${SERVER_URL}/getInvoices`)
        if(res.data.success)
            {
                toast.success("Invoice Fetched")
                setData(res.data.data)
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.acidNumber}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.commercialInvoice}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button className='bg-blue-500 hover:bg-blue-600 p-2 rounded-md text-white'>View Invoice</button>
                    </td>

                </tr>
            ))}
        </tbody>
    </table>
</div>
  )
}

export default Invoices