import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-neutral-700 flex justify-between px-20 py-4 ">
        <Link to="/" className="text-white font-bold">
        <h1>React MySql</h1>
        </Link>
      <ul className="flex gap-x-1">
        <li className="">
          <a className="bg-slate-200 px-2 py-1" aria-current="page" href="/">
            Home
          </a>
        </li>
        <li className="">
          <Link className="bg-slate-200 px-2 py-1" to="/tasks">
            Task
          </Link>
        </li>
        <li className="">
          <Link className="bg-slate-200 px-2 py-1" to="/new">
            New Task
          </Link>
        </li>
        <li className="">
          <Link className="bg-slate-200 px-2 py-1" to="/about">
            About
          </Link>
        </li>
        <li className="">
          <Link className="bg-slate-200 px-2 py-1" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
