import "./App.css"
import { Routes, Route, Outlet, Link, useNavigate } from "react-router-dom"

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

function App() {

  return (
    <div className="m-5">

      <div className="m-8">
        <RouteArea />
      </div>
    </div>
  )
}

export default App
