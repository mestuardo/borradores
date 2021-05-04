  
import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import Link from '@material-ui/core/Link';

import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


import Appbar from '../../src/appbar'


import Sign_in from '../../src/personnel-request/recruiting_head_sign_in'
import Recruiting_head_view from '../../src/views/recruiting_head_view'


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

const steps = ['Sign in'];



var formSchema ={
    user_no:'',
    user_password:''
}


export default function SignIn() {

  const [activeStep, setActiveStep] = React.useState(0);
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

  function getStepContent(step:Number) {
    switch (step) {
      case 0:
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
        <Recruiting_head_view/>
      ) :  getStepContent(activeStep)}

      <Box mt={3}>
        <Copyright />
      </Box>
    </Container>
    </React.Fragment>
  );
}