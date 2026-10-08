import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const Doctors = () => {

  const { speciality } = useParams()
  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div>
      <p className='text-gray-600 sm:text-xl font-semibold '>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button onClick={() => setShowFilter(!showFilter)} className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} 
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer 
            ${speciality === 'General physician' ? 'bg-[#E2E5FF] text-black' : 'hover:bg-blue-200 hover:text-black'}`}>
            General physician
          </p>
          <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} 
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer 
            ${speciality === 'Gynecologist' ? 'bg-[#E2E5FF] text-black' : 'hover:bg-blue-200 hover:text-black'}`}>
            Gynecologist
          </p>
          <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} 
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer 
            ${speciality === 'Dermatologist' ? 'bg-[#E2E5FF] text-black' : 'hover:bg-blue-200 hover:text-black'}`}>
            Dermatologist
          </p>
          <p onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} 
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer 
            ${speciality === 'Pediatricians' ? 'bg-[#E2E5FF] text-black' : 'hover:bg-blue-200 hover:text-black'}`}>
            Pediatricians
          </p>
          <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} 
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer 
            ${speciality === 'Neurologist' ? 'bg-[#E2E5FF] text-black' : 'hover:bg-blue-200 hover:text-black'}`}>
            Neurologist
          </p>
          <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} 
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer 
            ${speciality === 'Gastroenterologist' ? 'bg-[#E2E5FF] text-black' : 'hover:bg-blue-200 hover:text-black'}`}>
            Gastroenterologist
          </p>
        </div>


        {/* Doctors Grid */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
          {filterDoc.map((item, index) => (
            <div 
              onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} 
              className='border border-[#C9D8FF] rounded-xl flex flex-col items-center gap-4 p-4 cursor-pointer hover:translate-y-[-10px] transition-all duration-500' 
              key={index}
            >
              {/* Circular Image Container */}
              <div className='w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center rounded-full bg-[#EAEFFF] shadow-xl'>
                <img className='w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover' src={item.image} alt={item.name} />
              </div>

              {/* Doctor Info */}
              <div className='text-center'>
                <div className={`flex items-center justify-center gap-2 text-sm ${item.available ? 'text-green-500' : "text-gray-500"}`}>
                  <p className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : "bg-gray-500"}`}></p>
                  <p>{item.available ? 'Available' : "Not Available"}</p>
                </div>
                <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
                <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Doctors;
