"use client"
import React, { useState } from 'react'
import { TableData } from '../_data/TableData'
import { Check, X } from 'lucide-react';
import AddModal from './AddModal';
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';
import { FaFacebook } from "react-icons/fa6";


interface XnY {
    x: number; y: number
}

interface tData{
    id: number,
    name: string,
    status: string,
    color: string,
    details: string,
    path: string,
    size: string,
}




export default function DemoSVG() {
    const [hoveredTable, setHoveredTable] = useState<tData | null>(null);
    const [selectedTable, setSelectedTable] = useState<tData | null>(null);
    const [mousePosition, setMousePosition] = useState<XnY>({ x: 0, y: 0 });
    const [isModal, setIsModal] = useState(false)

     const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      };
    
      const handleTableHover = (table: tData) => {
        setHoveredTable(table);
      };
    
      const handleTableLeave = () => {
        setHoveredTable(null);
      };
    
      const handleTableClick = (table: tData) => {
        setSelectedTable(table);
      };
    

  return (
    <>
    <div className='mx-auto w-[94%] mt-[3rem]'>
        <h1 className='font-light text-[3rem] text-center'>Welcome to the Restuarant Booking System</h1>
    </div>
    <div className='w-[94%] mt-[2rem] mb-[5rem] mx-auto min-h-screen p-6 grid lg:grid-cols-4 grid-cols-1 rounded-2xl border border-gray-300'>
        
        <section className='w-[100%] h-screen overflow-auto relative lg:col-span-3 col-span-1 p-8 flex items-center justify-center lg:border-r border-gray-300'>

        <svg 
            x="50%" y="0" 
            viewBox="0 0 151 353.9" 
            width="100%" height="100%"
            onMouseMove={handleMouseMove}>
            {TableData.map((i, key) => (
                <path key={key} 
                    {...{ title: key.toString() }}
                    className={`${i.color} cursor-pointer transition-all duration-200 ${
                        hoveredTable?.id === i.id 
                        ? 'opacity-100 drop-shadow-md stroke-1' 
                        : 'opacity-80'
                        }`}
                    d={i.path}  
                    onClick={() => handleTableClick(i)}
                    onMouseEnter={() => handleTableHover(i)}
                    onMouseLeave={handleTableLeave} />
            ))}
                
            <path {...{ title: "reception-sofa" }}
            className="fill__area opacity-80" d="M88.8,281H71.2c-1.1,0-1.9-0.9-1.9-1.9v-8.2c0-1.1,0.9-1.9,1.9-1.9h17.6c1.1,0,1.9,0.9,1.9,1.9v8.2
            C90.7,280.1,89.8,281,88.8,281z M71.2,270.1c-0.4,0-0.7,0.3-0.7,0.7v8.2c0,0.4,0.3,0.7,0.7,0.7h17.6c0.4,0,0.7-0.3,0.7-0.7v-8.2
            c0-0.4-0.3-0.7-0.7-0.7H71.2z"/>

            <circle {...{ title: "reception-round" }}
                className="fill__area opacity-80" cx="96.5" cy="274.7" r="3.7"/>

            <path className="fill__area opacity-80" d="M103.4,144.6c0.7,0,1.2-0.5,1.2-1.2v-31.4c0-0.7-0.5-1.2-1.2-1.2H103l0-33.5h-5.8l0,46.1
                c0,3.9-1.5,7.4-4.1,10.1c-2.9,3.1-7.2,5.1-11.9,5.1c-8.8,0-16-6.8-16-15.1v-23.1h-5.8v23.1c0,11.4,9.8,20.7,21.8,20.7
                c4.7,0,9.1-1.4,12.7-3.9c0.6,0.4,1.5,1,2.4,1.7c1.3,1.1,2.3,2.5,2.6,2.7C100,144.6,103.4,144.6,103.4,144.6z"/>

            <path className="fill__area opacity-80" d="M62.2,266.1c-3,0-5.4-2.4-5.4-5.4v-0.2h6.4c0.9,0,1.7-0.7,1.7-1.7v-21.1c0-0.9-0.7-1.7-1.7-1.7h-6.4v-0.2
                c0-1.5,0.6-2.8,1.6-3.8c1-1,2.3-1.6,3.8-1.6c3,0,5.4,2.4,5.4,5.4v24.9c0,1.5-0.6,2.8-1.6,3.8S63.7,266.1,62.2,266.1z"/>
        

            <path className="fill__area opacity-80" d="M59.1,11.8v62.6h-8.6V20.9H36.9c-2.2-4.5-6.9-7.6-12.2-7.6c-5.4,0-10,3.1-12.2,7.6h-1.1v-9.1H59.1z"/>
            <path className="fill__area opacity-80" d="M51.3,226.5c0-9.9,8-17.9,17.9-17.9s17.9,8,17.9,17.9c0,9.9-8,17.9-17.9,17.9C59.3,244.5,51.3,236.4,51.3,226.5
                z M84.8,226.5c0-8.6-7-15.6-15.6-15.6s-15.6,7-15.6,15.6s7,15.6,15.6,15.6S84.8,235.1,84.8,226.5z"/>
            <path className="fill__area opacity-80" d="M143.2,280.1v65.1h-2.7c-2.4,0-4.3-1.9-4.3-4.3v-56.5c0-2.4,1.9-4.3,4.3-4.3H143.2L143.2,280.1z"/>
            <path className="fill__area opacity-80" d="M19.9,293.4v40.9c0,2.4-1.9,4.3-4.3,4.3h-4.3v-49.5h4.3C17.9,289.1,19.9,291,19.9,293.4z"/>
            <path className="fill__area opacity-80" d="M19.9,125.5v56.5c0,2.4-1.9,4.3-4.3,4.3h-4.3v-65.1h4.3C17.9,121.2,19.9,123.2,19.9,125.5z"/>
            <rect className="fill__wall opacity-80" x="8.2" y="349.2"  width="3" height="0"/>
            <rect className="fill__wall opacity-80" x="143.2" y="349.2" width="3" height="0"/>
            <polygon className="fill__wall opacity-80" points="103,76.8 103,79.8 61.3,79.8 61.3,79.8 59,79.8 59,52.5 62,52.5 62,76.8 "/>
            <polygon className="fill__wall opacity-80" points="145.9,216.7 142.9,216.7 142.9,79.8 116.2,79.8 116.2,76.8 145.9,76.8 "/>
            <path className="fill__wall opacity-80" d="M122.8,256.1c0.4-0.1,9.7-1.1,16.3,5.2c6.5,6.2,7,15.6,7,16l-3.2,0l1.6-0.1l-1.6,0.1c0-0.1-0.4-8.4-6-13.7
                c-5.5-5.2-14-4.4-14-4.4L122.8,256.1z"/>
            <path className="fill__wall opacity-80" d="M122.5,240.2l0.1-3.1c0.1,0,8.5,0.9,14.1-4.4c5.6-5.3,6-13.6,6-13.7l3.2-0.1c0,0.4-0.4,9.8-7,16
                C132.1,241.2,122.8,240.2,122.5,240.2z"/>
            <polygon className="fill__wall opacity-80" points="146.2,279.5 146.2,349.2 8.2,349.2 8.2,9.2 11.3,9.2 11.3,9.3 62,9.3 62,12.4 62,12.4 62,30.7 
                59.1,30.7 59.1,11.8 11.3,11.8 11.3,187.8 43.5,187.8 43.5,190.9 11.3,190.9 11.3,279 44.7,279 44.7,219.9 47.7,219.9 47.7,279 
                101.7,279 101.7,282 11.3,282 11.3,346.2 143.2,346.2 143.2,279.5 "/>
            
            
        </svg>

        {/* Hover Details Popup */}
        {/* {hoveredTable && (
            <div 
            className="absolute z-10 bg-white border border-gray-300 rounded-lg shadow-lg p-4 max-w-xs pointer-events-none"
            style={{
                left: mousePosition.x + 10,
                top: mousePosition.y - 10,
                transform: mousePosition.x > 200 ? 'translateX(-100%)' : 'translateX(0)'
            }}
            >
            <div className="flex items-center gap-2 mb-2">
                <h3 className="font-semibold text-gray-800">{hoveredTable.name}</h3>
                <div 
                className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium"
                style={{ 
                    backgroundColor: getStatusColor(hoveredTable.status) + '20',
                    color: getStatusColor(hoveredTable.status)
                }}
                >
                {getStatusIcon(hoveredTable.status)}
                <span className="capitalize">{hoveredTable.status}</span>
                </div>
            </div>
            
            <div className="space-y-1 text-sm text-gray-600">
                <p><span className="font-medium">Size:</span> {hoveredTable.size}</p>
                <p><span className="font-medium">Details:</span> {hoveredTable.details}</p>
                <p><span className="font-medium">ID:</span> {hoveredTable.id}</p>
            </div>
            </div>
        )} */}

        {/* Selected Table Info */}
        {selectedTable && (
            <div className="absolute top-4 lg:top-[40%] right-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4 max-w-sm">
            <h3 className="font-semibold text-gray-800 mb-2">Selected: {selectedTable.name}</h3>
            <div className="space-y-1 text-sm text-gray-700">
                <p><span className="font-medium">Status:</span> {selectedTable.status}</p>
                <p><span className="font-medium">Size:</span> {selectedTable.size}</p>
                <p><span className="font-medium">Details:</span> {selectedTable.details}</p>
            </div>
            <button 
                onClick={() => setSelectedTable(null)}
                className="mt-2 px-3 py-1 cursor-pointer bg-blue-500 text-white rounded text-xs hover:bg-blue-600"
            >
                Close
            </button>

             <button 
                onClick={() => setIsModal(true)}
                className="mt-2 ml-2 px-3 py-1 cursor-pointer bg-gradient-to-br from-green-600 to-green-900 text-white rounded text-xs hover:bg-gradient-to-bl hover:from-green-600 hover:to-green-900"
            >
                Book Now
            </button>
            </div>
        )}


        {/* Color Key Legend */}
        <div className="absolute top-[40%] left-4 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
            <h3 className="font-semibold text-gray-800 mb-3 text-sm">Table Status</h3>
            <div className="space-y-2">
            <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#367F33] rounded"></div>
                <span className="text-sm text-gray-700">Available</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-[#e42822] rounded"></div>
                <span className="text-sm text-gray-700">Occupied</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-500 rounded"></div>
                <span className="text-sm text-gray-700">Partially Occupied</span>
            </div>
            </div>
        </div>


     


        </section>
        <section className='col-span-1'>
            <div className='w-[100%] h-screen overflow-auto'>

                {TableData.map((i, key) => (
                    <div key={key} className='p-4 border-b border-gray-300'>
                        <div className='flex justify-between items-center mb-2'>
                            <p className='font-bold text-xl'>{i.name}</p>
                            <p className={`
                            ${i.status == "Available" && 'text-green-700'} 
                            ${i.status == "Occupied" && 'text-red-600'} 
                            ${i.status == "Partial" && 'text-amber-600'} 
                            font-bold text-xl`}>{i.status}</p>
                        </div>
                        <p className='text-primary text-sm'>Booking Times:</p>
                        <div className='flex justify-between items-center mb-2'>
                            <p>From: 10.00am</p>
                            <p>To: 04.00pm</p>
                        </div>
                        <div>
                            <button 
                                onClick={() => setIsModal(true)} 
                                className='cursor-pointer rounded-lg w-[100%] text-white py-2 transition-all ease-in-out duration-200 bg-gradient-to-br from-green-600 hover:drop-shadow-lg hover:to-green-900 hover:bg-gradient-to-bl hover:from-green-600 to-green-900'>
                                Book Now
                            </button>
                        </div>
                    </div>
                ))}

            </div>


        </section>

    </div>


    <div className='fixed z-100 bottom-[2rem] p-2 left-[2rem] bg-white rounded-full drop-shadow-lg flex items-center justify-end gap-2'>
        <Link href="#"><FaWhatsapp className='hover:scale-110 ease-in-out transition-all duration-200 text-[2.2rem] text-green-600' /></Link>
        <Link href="#"><FaFacebook className='hover:scale-110 ease-in-out transition-all duration-200 text-[2.2rem] text-blue-600' /></Link>
    </div>


    <AddModal isModal={isModal} setIsModal={setIsModal} />
    
    </>
  )
}
