import { useFormik } from 'formik';

const validate = (values) => {
  const errors = {};
  if(!values.name){
    errors.name = 'Campor requerido';
  } else if(values.name.length < 5){
    errors.name = 'El nombre es muy corto';
  }

  if(!values.lastname){
    errors.lastname = 'Campor requerido';
  } else if(values.lastname.length < 5){
    errors.lastname = 'El apellido es muy corto';
  }  

  return errors;
};

const App = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      lastname: '',
      email: ''
    },
    validate,
    onSubmit: values => console.log(values)
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre</label>
      {/* Este input se refactorizo, con una desestructuracion */}
      {/* Sirve para que podamos ver que podemos hacer más con menos  */}
      <input type='text' {...formik.getFieldProps('name')}/>
      {formik.touched.name && formik.errors.name ? 
        <div> {formik.errors.name} </div> : null }
      <br/>
      <label>Apellido</label>
      <input
        name='lastname'
        type='text'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.lastname}
      />
      {formik.touched.lastname && formik.errors.lastname ? 
        <div> {formik.errors.lastname} </div> : null }
      <br/>      
      <label>Email</label>
      <input
        name='email'
        type='email'
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <button type='submit'>Enviar</button>               
    </form>
  );
};

export default App;
