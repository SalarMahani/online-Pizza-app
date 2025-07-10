import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchOrder() {
  const [id, setId] = useState('')
  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault()
    if (!id) return
    navigate(`/order/${id}`)
    setId('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="search order"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className={`w-24 rounded-full  bg-yellow-100 px-2 py-1
        text-sm  text-stone-400 transition-all duration-300 
        focus:ring-2 focus:ring-yellow-500/40 focus:outline-none sm:w-64
        sm:focus:w-72
        `}
      />
    </form>
  )
}

export default SearchOrder
