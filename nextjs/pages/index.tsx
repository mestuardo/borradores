  
import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import Link from '@material-ui/core/Link';

import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


import Appbar from '../src/appbar'

import Client_number from '../src/sign_in/1_client_number'
import Set_password from '../src/sign_in/2_set_password'
import Sign_in from '../src/sign_in/3_sign_in'
import Recruiter_view from '../src/views/recruiter_view'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Todos los derechos reservados © '}
      <Link color="inherit" href="#">
        SGT
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Client Number', 'Set new password', 'Sign in'];



var formSchema ={
  new_client_no:'',
  new_password:'',
  validate_new_password:'',
  client_no:'',
  client_password:''
}


export default function SignIn() {

  const [activeStep, setActiveStep] = React.useState(2);
  const [login, setLogin] = React.useState(false);

  // Si el paso es el último, hacer login
  React.useEffect(()=> {
    if (activeStep === steps.length){
      setLogin(true)
    }

  },[activeStep])

//  Manejador de pasos del form
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Client_number formSchema={formSchema} handleNext={handleNext}/>;
      case 1:
        return <Set_password formSchema={formSchema} handleNext={handleNext}/>;
      case 2:
        return <Sign_in formSchema={formSchema} handleNext={handleNext} />;
      default:
        throw new Error('Unknown step');
    }
  }


  return (
    <React.Fragment>
    <Appbar login={login}/>
    <Container component="main" maxWidth={activeStep==steps.length ? 'lg' :"xs"}>
      
      <CssBaseline />
      

      {activeStep === steps.length ? (
        <Recruiter_view/>
      ) :  getStepContent(activeStep)}

      <Box mt={3}>
        <Copyright />
      </Box>
    </Container>
    </React.Fragment>
  );
}