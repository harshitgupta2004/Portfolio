import React from 'react'

const About = () => {
  return (
    <div name="about" className='px-5 md:px-10 pt-16 pb-16'>


      <div className="mx-10 md:mx-32 mb-8">
        <p className="text-2xl md:text-4xl  text-center font-bold text-black border-black dark:border-gray-500 ">
          About
        </p>
      </div>


      <div className='border-2 shadow-lg shadow-cyan-200  border-gray-700 bg-slate-100 hover:bg-slate-200 hover:scale-105 hover:shadow-2xl duration-300 hover:shadow-cyan-400'>



        <div className=' p-5 md:p-10'>
          <p>
            Currently pursuing B.Tech in Computer Science with Specialization in Artificial Intelligence and Machine Leraning from VIT Bhopal University, I am well-equipped to take on complex coding challenges and deliver robust solutions.
            <br/><br/>
            In addition to my development skills, I am also deeply interested in data science and have completed several online courses in this field. I am adept at working with tools like Python and SQL, and enjoy using data to uncover insights and drive informed business decisions.
            <br/><br/>
            As I continue to grow in my career, I am seeking opportunities to further develop my skills and make a meaningful impact. I am open to new challenges and look forward to connecting with like-minded professionals in the tech industry.
          </p>
        </div>
      </div>

    </div>
  )
}

export default About