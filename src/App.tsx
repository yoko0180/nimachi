import { useState } from "react"
import "./App.css"
import pkg from "../package.json"
import { Routes, Route, Outlet, Link, useNavigate } from "react-router-dom"
import { Now } from "./Now"

function Layout() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Layout</h1>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul className="list-decimal p-3 m-3">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/dashboard">
              <button
                type="button"
                className="p-1 m-1 border rounded bg-red-600"
              >
                Click Me!
              </button>
            </Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>
      <hr />

      <Outlet />
    </div>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function About() {
  let navigate = useNavigate()

  return (
    <div>
      <h2>About</h2>
      <button
        type="button"
        onClick={() => navigate("/")}
        className="border rounded p-1"
      >
        Click navigate!
      </button>
    </div>
  )
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}

function RouteArea() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}

function Sample() {
  const [count, setCount] = useState(0)

  return (
    <div className="m-5">
      <div className="card border rounded p-3 m-3">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="border rounded p-1 m-1"
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}
function App() {
  const [inputValue, setInputValue] = useState("147")
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
      {/* <div className="m-8">
        <RouteArea />
      </div> */}
    </div>
  )
}

export default App
