import { useState } from "react"
import "./App.css"
import pkg from "../package.json"
import { Now } from "./Now"


function App() {
  const [inputValue, setInputValue] = useState("")
  const [busu, setBusu] = useState(60)
  const [lock, setLock] = useState(false)

  return (
    <div className="m-5">
      <div>
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
        </div>
      </div>

      <div className="divider"></div>

      <div>本数</div>
      <div
        className={"hero min-h-24 bg-base-200" + (lock ? " border-4 border-yellow-500" : "")}
        onClick={() => !lock &&
          (
            document.getElementById("my_modal_1") as HTMLDialogElement
          )?.showModal()
        }
      >
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-7xl font-bold select-none">{inputValue}</h1>
          </div>
        </div>
      </div>


      {/* 本数編集ダイアログ */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">本数</h3>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

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
