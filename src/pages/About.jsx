import { useState, useEffect } from 'react'

const About = () => {
  const [users, setUsers] = useState([])
  const [count, setcCount] = useState(0)



  useEffect(() => {

    const url = "https://jsonplaceholder.typicode.com/users"
    fetch(url)
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(`${err.name}: ${err.message}`))
  }, [])

  return (
    <div className='m-2'>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, modi! Suscipit quaerat deserunt consectetur quo doloremque, odit nam reiciendis, possimus, molestias quidem non itaque maiores temporibus optio aliquid excepturi quia?</p>
      <p>{ count }</p>
      <button className='border mb-1 p-1' onClick={() => setcCount(count => count + 1)}>click</button>
      {
        (count > 10) ? 
          <table className='text-left mx-auto border border-gray-600 w-[100%]'>
            <thead>
              <tr>
                <th className='border border-gray-400 p-3'>Id</th>
                <th className='border border-gray-400 p-3'>Name</th>
                <th className='border border-gray-400 p-3'>Username</th>
                <th className='border border-gray-400 p-3'>Email</th>
                <th className='border border-gray-400 p-3'>City</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td className='border border-gray-400 p-3'>{ user.id }</td>
                      <td className='border border-gray-400 p-3'>{ user.name }</td>
                      <td className='border border-gray-400 p-3'>{ user.username }</td>
                      <td className='border border-gray-400 p-3'>{ user.email }</td>
                      <td className='border border-gray-400 p-3'>{ user.address.city }</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table> : "The table is not available"
      }
    </div>
  )
}

export default About