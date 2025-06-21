import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Loading from './Loading'
import Error from './Error'

function ResourceList({ resourceType }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://www.swapi.tech/api/${resourceType}`)
        setData(response.data.results)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchData()
  }, [resourceType])

  if (loading) return <Loading />
  if (error) return <Error message={error} />

  return (
    <div className="resource-list">
      <h2>{resourceType.charAt(0).toUpperCase() + resourceType.slice(1)}</h2>
      <ul>
        {data.map(item => (
          <li key={item.uid}>
            <Link to={`/${resourceType}/${item.uid}`}>
              {item.name || item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ResourceList