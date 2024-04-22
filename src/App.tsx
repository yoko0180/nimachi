import { useState } from "react"
import "./App.css"
import pkg from "../package.json"
import { Now } from "./Now"
import Honsu from "./Honsu"


function App() {
  const [busu, setBusu] = useState(60)
  const [lock, setLock] = useState(false)

  return (
    <div className="m-5">
      <div className="text-right">
        <span>ver {pkg.version}</span>
      </div>
      {/* <h1 className="text-4xl m-8">nimachi</h1> */}

      <Now />
      <div>
        <p>部数</p>
      </div>
      <div className="flex w-full">
        <div
          onClick={() => !lock && setBusu(60)}
          className={
            (busu == 60 ? "text-5xl " : "") +
            (lock && busu == 60 ? "border-4 border-yellow-500 " : "") +
            "grid h-20 flex-grow card bg-base-300 rounded-box place-items-center select-none"
          }
        >
          60
          <p className="text-sm">３４～４０頁</p>
        </div>
        <div className="divider divider-horizontal">OR</div>
        <div
          onClick={() => !lock && setBusu(80)}
          className={
            (busu == 80 ? "text-5xl " : "") +
            (lock && busu == 80 ? "border-4 border-yellow-500 " : "") +
            "grid h-20 flex-grow card bg-base-300 rounded-box place-items-center select-none"
          }
        >
          80
          <p className="text-sm">２４～３２頁</p>
        </div>
      </div>

      <div className="divider"></div>

      <div>本数</div>
      <div className="flex flex-col justify-items-center space-y-2">
        <Honsu id="1" lock={lock} />
        <Honsu id="2" lock={lock} />
        <Honsu id="3" lock={lock} />
        <Honsu id="4" lock={lock} />
        <Honsu id="5" lock={lock} />
      </div>


      {/* ロックトグル */}
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">Lock edit</span>
          <input type="checkbox" className="toggle" checked={lock} onChange={() => setLock(!lock)} />
        </label>
      </div>
    </div>
  )
}

export default App
