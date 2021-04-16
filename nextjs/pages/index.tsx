import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import Link from '@material-ui/core/Link';

import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';

import Appbar from '../src/appbar'

import Client_number from '../src/sign_in/1_client_number'
import Set_password from '../src/sign_in/2_set_password'
import Sign_in from '../src/sign_in/3_sign_in'

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



const useStyles = makeStyles((theme) => ({
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
}));



var formSchema ={
  new_client_no:'',
  new_password:'',
  validate_new_password:'',
  client_no:'',
  client_password:''
}


export default function SignIn() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [login, setLogin] = React.useState(false);

  React.useEffect(()=> {
    if (activeStep === steps.length){
      setLogin(true)
    }

  },[activeStep])

  const handleLogin = () => {
    setLogin(true)
    return <div>Inicio sesión</div>
  }

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
    <Container component="main" maxWidth="xs">
      
      <CssBaseline />
      
      <Card className={classes.card} raised={true}>
      <div className={classes.paper}>
      {activeStep === steps.length ? (
        <div> incio sesión </div>
      ) :  getStepContent(activeStep)}
      </div>
      </Card>
      <Box mt={3}>
        <Copyright />
      </Box>
    </Container>
    </React.Fragment>
  );
}