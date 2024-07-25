

function App1() {
  return (
    <div>
        <p style={{color:"red"}}>Menu</p>
        <Pizza name="Nekha" Age={27} a="yellow"/>
        <Pizza name="Sibi" Age={18} a="blue"/>


    </div>
  )
}

function Pizza(props) {
  return (
    <div style={{color:`${props.a}`}} >
      {props.name} {props.Age}
    </div>
  )
}

export default App1



