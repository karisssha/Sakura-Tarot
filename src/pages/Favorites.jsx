function Favorites() {
  const [historial, setHistorial] = useState([]);

    useEffect(() => {
      const data = JSON.parse(localStorage.getItem("historialTiradas")) || [];
      setHistorial(data);
    }, []);

    return (
      <div>
        <h2>Historial de Tiradas</h2>
        {historial.length > 0 ? (
            historial.map((tirada) => (
                <div key={tirada.id}>
                    <p>Fecha: {tirada.fecha}</p>
                    <p>Cartas: {tirada.cartas.map(carta => carta.nombre).join(", ")}</p>
                </div>
            ))
        ) : (
            <p>No hay tiradas guardadas.</p>
        )}
    </div>
    )
  }
  
  export default Favorites 