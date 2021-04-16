import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Link from '@material-ui/core/Link';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

import { Formik,Form } from 'formik';
import * as Yup from 'yup';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      margin: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign:'center'
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(4),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));


  const SignupSchema = Yup.object().shape({
    new_client_no: Yup.string()
    .required('Ingrese su número de cliente')
    .min(5,'El número debe tener 5 dígitos ')
    .max(5,'El número debe tener 5 dígitos ')
  
  
  });


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




  


export default function Client_number ({formSchema: formSchema, handleNext:handleNext}){
    const classes = useStyles();
    return (  
    
      <React.Fragment>   
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography gutterBottom component="h1" variant="h5">
          Bienvenido a SGT
        </Typography>
        <Typography component="h2" variant="body1">
          Ingrese su N° de cliente y contraseña
        </Typography>

        <Formik
       initialValues={formSchema}
       validationSchema={SignupSchema}
       onSubmit={(values, actions) => {
           
           formSchema['new_client_no'] = values['new_client_no']

          //  alert(JSON.stringify(values, null, 2));
           handleNext()

       }}
     >
       {props => (
        <Form className={classes.form} >
          <TextField
            variant="outlined"
            margin="normal"
            value ={props.values.new_client_no}
            onChange = {props.handleChange}
            onBlur = {props.handleBlur}
            fullWidth
            helperText={props.touched.new_client_no ? props.errors.new_client_no : ""}
            error={props.touched.new_client_no && Boolean(props.errors.new_client_no)}
            id="new_client_no"
            label="N° Cliente"
            name="new_client_no"
            autoFocus
            FormHelperTextProps ={{
              style: {
                fontSize:'x-small',
                margin: 0,
                padding:0,
                height:0
              },
            }}
            InputProps={{
              inputComponent: NumberFormatCustom
                }}
          />

          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recordarme"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Ingresar N° de cliente
          </Button>

              <Link href="#" variant="body2">
                {"¿Necesitas ayuda?"}
              </Link>

 
             </Form>
             )}
              </Formik>
      </React.Fragment>
            
            )
}