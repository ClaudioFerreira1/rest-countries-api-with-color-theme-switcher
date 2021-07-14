import { useGlobalContext } from './context'

function NavBar() {

  const { isLightMode, toggleTheme } = useGlobalContext();

  return (
    < nav id="top-navbar" >
      <h2>Where in the world?</h2>
      <button onClick={() => toggleTheme()} className="button-change-dark-mode">
        <span className={isLightMode === "light-mode" ? "material-icons-outlined" : "material-icons"}>
          dark_mode
        </span>
        {isLightMode === "light-mode" ? "Light mode" : "Dark mode"}
      </button>
    </nav >
  )
}



export default NavBar