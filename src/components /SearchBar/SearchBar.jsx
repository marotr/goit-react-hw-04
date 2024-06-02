import css from './SearchBar.module.css'
import { useId } from 'react'
import { Field, Formik, Form} from 'formik'

const SearchBar = ({submit}) => {
    const searchBarId = useId()
    const handleSubmit = (values, actions) => {
        submit(values.query)
        actions.resetForm()
    }
 
  return (
    
      <header><Formik   initialValues={{ query: '' }} onSubmit={handleSubmit}>
          <Form className={ css.queryForm} >
              <Field className={ css.query } name='query'
                    id={searchBarId}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
    />
    <button className={css.searchBtn} type="submit">Search</button>
 </Form>
      </Formik>
          </header>


  )
}

export default SearchBar