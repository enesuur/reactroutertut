import { NavLink, Outlet } from "react-router-dom"

export default function HelpLayout() {
  return (
    <div className="help-layout">

      <h2>Website Help</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quas debitis quibusdam deserunt repellat hic molestias ipsum commodi aut odit!</p>

      <nav>
        {/* Provides active class when it is rendered to an anchor tag. */}
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>
      {/* Outputs the elements that matches given route */}
      <Outlet />

    </div>
  )
}