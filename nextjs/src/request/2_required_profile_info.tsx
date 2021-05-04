import React from 'react'
import 'date-fns';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Formik,Form } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';



const SignupSchema = Yup.object().shape({
  required_working_charge: Yup.string()
    .required('Ingrese el cargo requerido'),
    vacancies: Yup.string()
    .required('Ingrese el N° de vacantes'),
    yrs_of_experience_required: Yup.string()
    .required('Ingrese los años de experiencia requeridos'),
    charge_functions: Yup.string()
    .required('Ingrese las funciones del cargo'),
    technical_requirements: Yup.string()
    .required('Ingrese los requisitos técnicos'),
    academic_background: Yup.string()
    .required('Ingrese la formación académica'),
    academic_background_state: Yup.string()
    .required('Ingrese el estado de formación'),
    languages: Yup.string()
    .required('Ingrese el estado de formación'),
    soft_skills: Yup.string()
    .required('Ingrese el estado de formación'),
    maximum_budget: Yup.string()
    .required('Ingrese la renta máxima para contratación'),
  
  
  });

  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      width: 150,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    labelText:{
      fontSize:'small',
    },
    inputText:{
      fontSize:'small',
      height: theme.spacing(2.5)
    },
    textAreaText:{
      fontSize:'small',
  
    },
    helperText: {
      fontSize:'x-small',
      margin: 0,
      padding:0,
      height:0
    }
  }),
);

  function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={inputRef}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator='.'
        decimalSeparator=','
        isNumericString
        prefix=""
      />
    );
  }
  
  NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };


export default function client_info({formRef:formRef,form2_isMounted:form2_isMounted ,formSchema: formSchema, handleNext:handleNext}) {
    const classes = useStyles();

    React.useEffect(() => {
      form2_isMounted.current = true;
      return () => { form2_isMounted.current = false }
    }, []);

    return(<React.Fragment>   
        <Typography>Información del perfil requerido</Typography>
          <Formik
      innerRef={formRef}
       initialValues={formSchema}
       validationSchema={SignupSchema}

       onSubmit={(values, actions) => {
           
           formSchema['required_working_charge'] = values['required_working_charge']
           formSchema['vacancies'] = values['vacancies']
           formSchema['yrs_of_experience_required'] = values['yrs_of_experience_required']
           formSchema['charge_functions'] = values['charge_functions']
           formSchema['technical_requirements'] = values['technical_requirements']
           formSchema['academic_background'] = values['academic_background']
           formSchema['academic_background_state'] = values['academic_background_state']
           formSchema['languages'] = values['languages']
           formSchema['soft_skills'] = values['soft_skills']
           formSchema['maximum_budget'] = values['maximum_budget']
           handleNext()

       }}
     >
       {props => (
        <Form>
        <FormControl className={classes.formControl} error={props.touched.required_working_charge && Boolean(props.errors.required_working_charge)}>
        <InputLabel className={classes.labelText} id="required_working_charge-label">Cargo requerido</InputLabel>
        <Select
          labelId="required_working_charge-label"
          id="required_working_charge"
          name="required_working_charge"
    
          value ={props.values.required_working_charge}
          onChange = {props.handleChange}
          onBlur = {props.handleBlur}
          inputProps={{className:classes.inputText}}
        >
          <MenuItem value={'cargo_1'}>Cargo 1</MenuItem>
          <MenuItem value={'cargo_2'}>Cargo 2</MenuItem>
          <MenuItem value={'cargo_3'}>Cargo 3</MenuItem>
          <MenuItem value={'cargo_4'}>Cargo 4</MenuItem>
          <MenuItem value={'cargo_5'}>Cargo 5</MenuItem>
          <MenuItem value={'cargo_6'}>Cargo 6</MenuItem>
        </Select>
        <FormHelperText className={classes.helperText}>{props.touched.required_working_charge ? props.errors.required_working_charge : ""}</FormHelperText>
        
        </FormControl>

        <FormControl className={classes.formControl} error={props.touched.vacancies && Boolean(props.errors.vacancies)}>
        <InputLabel className={classes.labelText} id="vacancies-label">Vacantes</InputLabel>
        <Select
          labelId="vacancies-label"
          id="vacancies"
          name="vacancies"
    
          value ={props.values.vacancies}
          onChange = {props.handleChange}
          onBlur = {props.handleBlur}
          inputProps={{className:classes.inputText}}
        >
          <MenuItem value={'1'}>1</MenuItem>
          <MenuItem value={'2'}>2</MenuItem>
          <MenuItem value={'3'}>3</MenuItem>
          <MenuItem value={'4'}>4</MenuItem>
          <MenuItem value={'5+'}>5+</MenuItem>
        </Select>
        <FormHelperText className={classes.helperText}>{props.touched.vacancies ? props.errors.vacancies : ""}</FormHelperText>
        </FormControl>

        <FormControl className={classes.formControl} error={props.touched.yrs_of_experience_required && Boolean(props.errors.yrs_of_experience_required)}>
        <InputLabel className={classes.labelText} id="yrs_of_experience_required-label">Experiencia (Años)</InputLabel>
        <Select
          labelId="yrs_of_experience_required-label"
          id="yrs_of_experience_required"
          name="yrs_of_experience_required"
    
          value ={props.values.yrs_of_experience_required}
          onChange = {props.handleChange}
          onBlur = {props.handleBlur}
          inputProps={{className:classes.inputText}}
     
        >
          <MenuItem value={'1'}>1</MenuItem>
          <MenuItem value={'2'}>2</MenuItem>
          <MenuItem value={'3'}>3</MenuItem>
          <MenuItem value={'4'}>4</MenuItem>
          <MenuItem value={'5+'}>5+</MenuItem>
        </Select>
        <FormHelperText className={classes.helperText}>{props.touched.yrs_of_experience_required ? props.errors.yrs_of_experience_required : ""}</FormHelperText>
        </FormControl>


        <FormControl className={classes.formControl} error={props.touched.charge_functions && Boolean(props.errors.charge_functions)} >
        <InputLabel className={classes.labelText} shrink={props.values.charge_functions?true :false} id="charge_functions-label">Funciones del cargo</InputLabel>
          <TextField
            margin="normal"

            value ={props.values.charge_functions}
            onChange = {props.handleChange}
            onBlur = {props.handleBlur}
            // fullWidth
            multiline
            rows={2}
            id="charge_functions"
            name="charge_functions"
            // autoFocus
            error={props.touched.charge_functions && Boolean(props.errors.charge_functions)}
            helperText={props.touched.charge_functions ? props.errors.charge_functions : ""}
            FormHelperTextProps={{className:classes.helperText}}
            inputProps={{className:classes.textAreaText}}

          />
          </FormControl>

          <FormControl className={classes.formControl} error={props.touched.technical_requirements && Boolean(props.errors.technical_requirements)} >
        <InputLabel className={classes.labelText} shrink={props.values.technical_requirements?true :false} id="technical_requirements-label">Requisitos técnicos</InputLabel>
          <TextField
            margin="normal"
            multiline
            rows={2}
            value ={props.values.technical_requirements}
            onChange = {props.handleChange}
            onBlur = {props.handleBlur}
            // fullWidth
       

            id="technical_requirements"
            name="technical_requirements"
            // autoFocus
            error={props.touched.technical_requirements && Boolean(props.errors.technical_requirements)}
            helperText={props.touched.technical_requirements ? props.errors.technical_requirements : ""}
            FormHelperTextProps={{className:classes.helperText}}
            inputProps={{className:classes.textAreaText}}

          />
          </FormControl>



        <FormControl className={classes.formControl} error={props.touched.academic_background && Boolean(props.errors.academic_background)} >
        <InputLabel className={classes.labelText} shrink={props.values.academic_background?true :false} id="academic_background-label">Formación académica</InputLabel>
          <TextField
            margin="normal"

            value ={props.values.academic_background}
            onChange = {props.handleChange}
            onBlur = {props.handleBlur}
            // fullWidth
            multiline
            rows={2}

            id="academic_background"
            name="academic_background"
            // autoFocus
            error={props.touched.academic_background && Boolean(props.errors.academic_background)}
            helperText={props.touched.academic_background ? props.errors.academic_background : ""}
            FormHelperTextProps={{className:classes.helperText}}
            inputProps={{className:classes.textAreaText}}

          />
          </FormControl>

          <FormControl className={classes.formControl} error={props.touched.academic_background_state && Boolean(props.errors.academic_background_state)}>
        <InputLabel className={classes.labelText} id="academic_background_state-label">Estado formación</InputLabel>
        <Select
          labelId="academic_background_state-label"
          id="academic_background_state"
          name="academic_background_state"
    
          value ={props.values.academic_background_state}
          onChange = {props.handleChange}
          onBlur = {props.handleBlur}
          inputProps={{className:classes.inputText}}
        >
          <MenuItem value={'estudiante'}>Estudiante</MenuItem>
          <MenuItem value={'egresado'}>Egresado</MenuItem>
          <MenuItem value={'titulado'}>Titulado</MenuItem>
      
        </Select>
        <FormHelperText className={classes.helperText}>{props.touched.academic_background_state ? props.errors.academic_background_state : ""}</FormHelperText>
        </FormControl>


          
          <FormControl className={classes.formControl} error={props.touched.languages && Boolean(props.errors.languages)} >
        <InputLabel className={classes.labelText} shrink={props.values.languages?true :false} id="languages-label">Idiomas</InputLabel>
          <TextField
            margin="normal"
            value ={props.values.languages}
            onChange = {props.handleChange}
            onBlur = {props.handleBlur}
            // fullWidth

            id="languages"
            name="languages"
            // autoFocus
            error={props.touched.languages && Boolean(props.errors.languages)}
            helperText={props.touched.languages ? props.errors.languages : ""}
            FormHelperTextProps={{className:classes.helperText}}
            inputProps={{className:classes.inputText}}

          />
          </FormControl>

          <FormControl className={classes.formControl} error={props.touched.soft_skills && Boolean(props.errors.soft_skills)} >
        <InputLabel className={classes.labelText} shrink={props.values.soft_skills?true :false} id="soft_skills-label">Habilidades blandas</InputLabel>
          <TextField
            margin="normal"

            value ={props.values.soft_skills}
            onChange = {props.handleChange}
            onBlur = {props.handleBlur}
            // fullWidth

            id="soft_skills"
            name="soft_skills"
            // autoFocus
            error={props.touched.soft_skills && Boolean(props.errors.soft_skills)}
            helperText={props.touched.soft_skills ? props.errors.soft_skills : ""}
            FormHelperTextProps={{className:classes.helperText}}
            inputProps={{className:classes.inputText}}

          />
          </FormControl>

          <FormControl className={classes.formControl} error={props.touched.maximum_budget && Boolean(props.errors.maximum_budget)} >
        <InputLabel className={classes.labelText} shrink={true}  id="maximum_budget-label">Renta máx. contratación</InputLabel>
          <TextField
            margin="normal"

            value ={props.values.maximum_budget}
            onChange = {props.handleChange}
            onBlur = {props.handleBlur}
            // fullWidth

            id="maximum_budget"
            name="maximum_budget"
            // autoFocus
            error={props.touched.maximum_budget && Boolean(props.errors.maximum_budget)}
            helperText={props.touched.maximum_budget ? props.errors.maximum_budget : ""}
            FormHelperTextProps={{className:classes.helperText}}
            inputProps={{className:classes.inputText}}
       
            InputProps={{
              inputComponent: NumberFormatCustom,
              startAdornment: (
                <Typography variant='body2'>CLP$ </Typography>
              ),
            }}
  

          />
          </FormControl>
 
             </Form>
             )}
              </Formik>
        </React.Fragment>






    
    )


}