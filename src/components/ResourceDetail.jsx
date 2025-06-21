import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import Loading from './Loading'
import Error from './Error'

function ResourceDetail() {
  const { resource, id } = useParams()
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://www.swapi.tech/api/${resource}/${id}`)
        setItem(response.data.result.properties)
        setLoading(false)
      } catch (err) {
        setError(err.message)
        setLoading(false)
      }
    }

    fetchData()
  }, [resource, id])

  if (loading) return <Loading />
  if (error) return <Error message={error} />

  return (
    <div className="resource-detail">
      <h2>{item.name || item.title}</h2>
      <Link to={`/${resource}`} className="back-link">← Volver a la lista</Link>

      <div className="details">
        {Object.entries(item).map(([key, value]) => (
          <div key={key} className="detail-item">
            <strong>{key.replace(/_/g, ' ')}:</strong> 
            <span>{Array.isArray(value) ? value.join(', ') : value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ResourceDetail