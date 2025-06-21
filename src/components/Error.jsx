function Error({ message }) {
  return (
    <div className="error">
      <h2>¡Algo salió mal!</h2>
      <p>{message}</p>
      <p>La Fuerza no está con nosotros en este momento.</p>
    </div>
  )
}

export default Error