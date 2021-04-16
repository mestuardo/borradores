import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme  } from '@material-ui/core/styles';

import { Formik,Form } from 'formik';
import * as Yup from 'yup';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    new_password: Yup.string()
    .required('Ingrese su contraseña')
    .min(8,'La contraseña debe tener al menos 8 caracteres')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&."/-_])[A-Za-z\d@$!%*#?&."/-_]{8,}$/,
      "Su contraseña no cumple con los requerimientos"
    ),
    validate_new_password: Yup.string()
    .required('Confirme su contraseña')
    .oneOf([Yup.ref('new_password'), null], 'Las contraseñas no coinciden'),
   
  
  });
  


export default function Set_password ({formSchema: formSchema, handleNext:handleNext}){
    const classes = useStyles();
    return (  
    
        <React.Fragment>
        <Avatar className={classes.avatar}>
          <VpnKeyIcon />
        </Avatar>
        <Typography gutterBottom component="h1" variant="h5">
          Crear contraseña
        </Typography>
        <Typography component="h2" variant="body2">
          Debe tener al menos 8 dígitos, una mayúscula y un caracter especial
        </Typography>
       
        <Formik
       initialValues={formSchema}
       validationSchema={SignupSchema}
       onSubmit={(values, actions) => {
           
           formSchema['new_password'] = values['new_password']
           formSchema['validate_new_password'] = values['validate_new_password']
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
            value={props.values.new_password}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            helperText={props.touched.new_password ? props.errors.new_password : ""}
            error={props.touched.new_password && Boolean(props.errors.new_password)}
            name="new_password"
            label="Nueva contraseña"
            type='password'
            id="new_password"
            FormHelperTextProps ={{
              style: {
                fontSize:'x-small',
                margin: 0,
                padding:0,
                height:0
              },
            }}
   
          />
                    <TextField
            variant="outlined"
            margin="normal"
            value={props.values.validate_new_password}
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            helperText={props.touched.validate_new_password ? props.errors.validate_new_password : ""}
            error={props.touched.validate_new_password && Boolean(props.errors.validate_new_password)}
            fullWidth
            type='password'
            name="validate_new_password"
            label="Confirmar nueva contraseña"
            id="validate_new_password"
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
            Crear contraseña
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