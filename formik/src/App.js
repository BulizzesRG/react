import { Formik, Form, Field, ErrorMessage } from 'formik';
import CheckBox from './components/CheckBox';
import Radio from './components/Radio';
import Select from './components/Select';
import TextInput from './components/TextInput';

const validate = (values) => {
  const errors = {};
  if(!values.name){
    errors.name = 'Campo requerido';
  } else if(values.name.length < 5){
    errors.name = 'El nombre es muy corto';
  }

  if(!values.lastname){
    errors.lastname = 'Campo requerido';
  } else if(values.lastname.length < 5){
    errors.lastname = 'El apellido es muy corto';
  }
  
  if(!values.radio){
    errors.radio = "Debes escoger un valor";
  }

  return errors;
};

const App = () => {
  return (
      <Formik
        initialValues={{name: '', lastname: '', email: '', list: '', accept: false, radio: ""}}
        validate={ validate }
        onSubmit={ values => console.log(values)}
      >
        <Form>
            <TextInput name="name" label="Nombre"/>
            {/* <label>Nombre</label>
            <Field name="name" type="text"/>
            <ErrorMessage name="name"/> */}
            <br/>
            <TextInput name="lastname" label="apellido"/>            
            <br/>
            <label>Correo</label>
            <Field name="email" type="email"/>
            <ErrorMessage name="email"/>
            <br/>
            <Select label="Selecciona de la lista" name="list">
              <option value="">-- Selecione --</option>
              <option value="1">uno</option>
              <option value="2">dos</option>
              <option value="3">tres</option>
            </Select>
            <CheckBox name="accept">
                Aceptar términos y condiciones
            </CheckBox>
            <Radio name="radio" value="uno" label="unos"/>
            <Radio name="radio" value="dos" label="dos"/>
            <Radio name="radio" value="tres" label="tres"/>
            <ErrorMessage name="radio"/>
            <br/>
            <button type="submit">Enviar</button>               
        </Form>          
    </Formik>    
  );
};

export default App;
