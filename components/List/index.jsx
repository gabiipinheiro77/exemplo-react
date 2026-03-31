import './style.css'

function Section() {
  return (
    <section>
      <h2 id="exemplo-h2">Seleção de Listas</h2>

      <h3>Lista não ordenada</h3>
      <ul id="ul">
        <li>oléo</li>
        <li>banana</li>
        <li>energético</li>
      </ul>

      <h3>Lista ordenada</h3>
      <ol>
        <li>Rottweiller</li>
        <li>Pitbull</li>
        <li>Chihuahua</li>
      </ol>

    </section>
  )
}
export default Section