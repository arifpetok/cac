import { useState } from 'react'
import './App.css'

function App() {
  const [budget, setBudget] = useState(0)
  const [botol, setBotol] = useState(0)
  const [pesan, setPesan] = useState('')

  let calcCac = (event) =>{
    event.preventDefault()
    if (budget === 0 || botol === 0){
      alert('masukan nilai')
    }else{
      let cac =((budget*1.11)/(botol*138000)*100).toFixed(1)
      setPesan(cac)
    }
  }

  let reload = ()=>{
    window.location.reload()
  }
  return (
    <>
      <div className="app">
        <div className="container">
          <h2 className="judul">Hitung CAC</h2>
          <form onSubmit={calcCac}>
            <div>
              <label>budget</label>
              <input value={budget} onChange={(event)=>setBudget(event.target.value)}/>
            </div>
            <div>
              <label>botol</label>
              <input value={botol} onChange={(event)=>setBotol(event.target.value)} />
            </div>
            <div>
              <button className='btn' type='submit'>submit</button>
              <button className='btn' onClick={reload} type='submit'>reload</button>
            </div>
          </form>
          <h2>hasil CAC : {pesan}%</h2>
        </div>
      </div>
    </>
  )
}

export default App
