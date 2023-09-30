const links = [
    { id: 1, url: "/", text: "home" },
    { id: 2, url: "about", text: "about" },
    { id: 3, url: "project", text: "project" },
    { id: 4, url: "contact", text: "contact" },
    // { id: 5, url: "checkout", text: "checkout" },
    // { id: 6, url: "orders", text: "orders" },
  ];
  
  import { NavLink } from "react-router-dom";
  
  
  function Navlinks() {
    return (
      <>
          {links.map((link) => {
              const {id, url, text} = link
              return(
                  <li key={id}>
                      <NavLink to={url} className="capitalize">{text}</NavLink>
                  </li>
              )
          })}
      </>
    )
  }
  
  export default Navlinks