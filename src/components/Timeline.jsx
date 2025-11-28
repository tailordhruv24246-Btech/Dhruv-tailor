


import React from 'react'

const Timeline = () => {
const data = [
  {
    year: "2010 – 2018",
    title: "School Journey",
    desc: "Completed schooling.",
    icon: "/icons/school.png"
  },
  {
    year: "2019 – 2021",
    title: "12th Class",
    desc: "Scored 92%.",
    icon: "/icons/grade.png"
  },
  {
    year: "2022 – Present",
    title: "BTech CSE",
    desc: "Studying at JEC Kukas.",
    icon: "/icons/graduation.png"
  }
];




  return ( 
    <div className='w-full h-full justify-center items-center  mt-20 '>
<h1 className='text-4xl font-bold  text-center'>My timeline</h1>
        <div className=' relative mt-20'>
            <div className='bg-[#c7b79c] left-1/2 absolute w-2 h-full -translate-x-1/2  ' ></div>
        
{data.map((item , index )=>(
    <div key={index} className='relative mt-20'>
        <div className=' absolute left-1/2 -translate-x-1/2  rounded-4xl   shadow-2xl'>
            <img src={item.icon} alt="" className='w-16 h-16 ' />

        </div>
        <div className={`flex  ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
<div className='flex-col border'>

            <h1>{item.title}</h1>
            <h2>{item.year}</h2>
            <p>{item.desc}</p>
</div>
        </div>
    </div>
))}

        </div>

    </div>
  )
}

export default Timeline


