import { useState } from "react"

function Honsu({id, lock}: {id: string, lock: boolean}) {
  const [inputValue, setInputValue] = useState("")

  return (
    <div className="">
      <div
        className={"hero min-h-20 bg-base-300" + (lock ? " border-4 border-yellow-500" : "")}
        onClick={() => !lock &&
          (
            document.getElementById("my_modal_" + id) as HTMLDialogElement
          )?.showModal()
        }
      >
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold select-none">{inputValue}</h1>
          </div>
        </div>
      </div>


      {/* 本数編集ダイアログ */}
      <dialog id={"my_modal_" + id} className="modal">
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
            <button className="btn" onClick={() => setInputValue("")}>Clear</button>

            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">OK</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default Honsu
