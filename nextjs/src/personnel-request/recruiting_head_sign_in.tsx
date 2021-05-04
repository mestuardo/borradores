import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import FaceIcon from '@material-ui/icons/Face';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';

import { Formik,Form } from 'formik';
import * as Yup from 'yup';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      marginTop: theme.spacing(7),
    },
    paper: {
      margin: theme.spacing(4),
      height: '424px',
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
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  

  
  const SignupSchema = Yup.object().shape({
    user_no: Yup.string()
    .required('Ingrese su número de cliente')
    .min(5,'El número debe tener 5 dígitos ')
    .max(5,'El número debe tener 5 dígitos '),
    user_password: Yup.string()
    .required('Ingrese su contraseña')
  
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



  

export default function Sign_in ({formSchema: formSchema, handleNext:handleNext}){
    const classes = useStyles();
    return (  
    
      <Card className={classes.card} raised={true}>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <FaceIcon />
        </Avatar>
        <Typography gutterBottom component="h1" variant="h5">
          Bienvenido a SGT
        </Typography>
        <Typography component="h2" variant="body1">
          Ingrese su N° de usuario y contraseña
        </Typography>

        <Formik
       initialValues={formSchema}
       validationSchema={SignupSchema}
       onSubmit={(values, actions) => {
         
           
           formSchema['client_no'] = values['client_no']
           formSchema['client_password'] = values['client_password']
          //  alert(JSON.stringify(values, null, 2));
           handleNext()

       }}
     >
       {props => (
        <Form className={classes.form} >
          <TextField
            variant="outlined"
            margin="normal"
            
            fullWidth
            value= {props.values.client_no}
            onChange={props.handleChange}
            // onBlur={props.handleBlur}
            helperText={props.touched.user_no ? props.errors.user_no : ""}
            error={props.touched.user_no && Boolean(props.errors.user_no)}
            id="user_no"
            label="N° Usuario"
            name="user_no"
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
                    <TextField
            variant="outlined"
            margin="normal"
            
            fullWidth
            value= {props.values.client_password}
            onChange={props.handleChange}
            // onBlur={props.handleBlur}
            helperText={props.touched.user_password ? props.errors.user_password : ""}
            error={props.touched.user_password && Boolean(props.errors.user_password)}
            name="user_password"
            label="Contraseña"
            type="password"
            id="user_password"
            FormHelperTextProps ={{
              style: {
                fontSize:'x-small',
                margin: 0,
                padding:0,
                height:0
              },
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
            Ingresar
          </Button>

              <Link href="#" variant="body2">
                {"¿Olvidaste tu contraseña?"}
              </Link>

        </Form>
         )}
          </Formik>
          </div>
      </Card>

            
            )
}