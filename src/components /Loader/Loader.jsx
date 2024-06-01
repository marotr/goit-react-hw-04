import css from './Loader.module.css'
import BarLoader from "react-spinners/BarLoader";

const Loader = () => {
  return (
    <div className={css.loaderContainer}><BarLoader color="#36d7b7" /></div>
  )
}

export default Loader