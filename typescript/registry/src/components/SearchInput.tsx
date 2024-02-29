import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { Form } from 'react-router-dom'
import { VscSearch } from 'react-icons/vsc'

const SearchInput = () => {
  const [term, setTerm] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    //^ programmatic navigation
    // technique to navigate to a different route via show/hide components or redirect, commonly used in single-page applications
    navigate(`/search?term=${term}`)
  }

  return (
    // Shortcut Form subimssion navigation, same as below
    // <Form action='/search'>
    //   <input name='term' />
    // </Form>
    <form onSubmit={handleSubmit}>
      <div className='relative'>
        <div className='absolute inset-y-0 flex items-center pl-3'>
          <VscSearch className='h-5 w-5 text-gray-500'/>
        </div>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className='pl-10 py-2 w-full border-0 shadow-none'
          placeholder='Search packages'
        />
      </div>
    </form>
  )
}

export default SearchInput
