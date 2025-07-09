import React from 'react';



export default function Floor01() {
  return (
   <>
   <section className='w-full h-screen p-6'>
    <svg x="200" y="200" width="100%" height="100%" viewBox="0 0 100% 100%" className="border border-gray-800">
      
      

      <line 
        x1="100%" 
        y1="100%" 
        x2="0" 
        y2="0" 
        style={{stroke:'#ff0000', strokeWidth:'10'}} />

      <line x1="200" y1="0" x2="0" y2="200" style={{strokeOpacity: "0.5", strokeWidth: "10", stroke: "#0000ff"}} />
      
      <circle cx="50%" cy="50%" r="10%" style={{stroke:'none', fill: '#0000ff', fillOpacity: "0.6"}} />

      <rect x="10" y="10" rx="10" ry="10" width="50" height="50" style={{stroke: "#ff00ee", strokeWidth: "10", fillOpacity: "0.5", fill: "#00ff00"}}/>

      <ellipse cx="210" cy="150" rx="200" ry="100" style={{ fill: "#66eeff"}} />

      <polyline 
        points="400,100 300,200 150,150 100,100" 
        style={{
          stroke: "#ff00ef", 
          strokeWidth: "5", 
          fill: "none"}} />

      <polygon 
        points="300,300 400,300, 400,400 300,400" 
        style={{stroke: "#ff00ee", strokeWidth: 5, fill: "none"}} />

    </svg>
   </section>
   </>
  );
};

