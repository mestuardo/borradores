  
import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import Link from '@material-ui/core/Link';

import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';

import Appbar from '../../src/appbar'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';

import Client_info from '../../src/request/1_client_info';
import Required_profile_info from '../../src/request/2_required_profile_info'

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

const steps = ['Información del cliente', 
'Informacion del perfil requerido', 
'Información de contratación del colaborador',
'Información de contratación del servicio',
'Información adicional'];




const useStyles = makeStyles((theme) => ({
  left_bar:{
    margin: theme.spacing(8,0.5),
    // marginRight: theme.spacing(50),
    height: theme.spacing(60),
  },
  right_bar:{
    margin: theme.spacing(8,12),
    padding: theme.spacing(4,1),
    height: theme.spacing(60),
    alignItems: 'center',
    textAlign:'center',
    '@media only screen and (max-width: 950px)': {
      margin: theme.spacing(6,1),

      height: theme.spacing(72),
      
    },
    '@media only screen and (max-width: 600px)': {
      padding: theme.spacing(0),

    },
  },
  form: {
    marginTop: theme.spacing(1),
    height: theme.spacing(40),
    '@media only screen and (max-width: 950px)': {
      height: theme.spacing(51),
    }
  }
  ,
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));



var formSchema ={
  request_date: new Date(),
  client:'',
  client_working_field:'',
  client_adress:'',
  process_responsible:'',
  required_working_charge:'',
  vacancies: '',
  yrs_of_experience_required: '',
  charge_functions: '',
  technical_requirements:'',
  special_working_conditions:'',
  academic_background: '',
  academic_background_state: '',
  languages:'',
  soft_skills:'',
  maximum_budget:'',
  contract_type:'',
  entry_date: '',
  job_type:'',
  working_time_schedule:'',
  work_adress:'',
  service_type:'',
  service_duration:'',
  hiring_continuity:'',
  requires_own_computer:'',
  requires_technical_test:'',
  requires_psy_interview:'',
  requires_references:''


}


export default function SignIn() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [login, setLogin] = React.useState(true);

  React.useEffect(()=> {
    if (activeStep === steps.length){
      setLogin(true)
    }

  },[activeStep])
  
  const form1_isMounted = React.useRef(false)
  const form2_isMounted = React.useRef(false)


  const form_1 = React.useRef(null)
  const form_2 = React.useRef(null)

 

  React.useEffect(() => {
    return () => {
      form_2.current = false
    }
}, []) 

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleSubmit = () => {
    if (form1_isMounted.current) {
      form_1.current.handleSubmit()
    }

  if (form2_isMounted.current) {
    form_2.current.handleSubmit()
  }
}


  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (<React.Fragment>
        <Client_info formRef={form_1} form1_isMounted={form1_isMounted} formSchema={formSchema} handleNext={handleNext}/>
          
          </React.Fragment>);
      case 1:
        return <Required_profile_info formRef={form_2} form2_isMounted={form2_isMounted} formSchema={formSchema} handleNext={handleNext}/>;
      case 2:
        return <div> ccc </div>;
      case 3:
          return <div> ddd </div>;
      case 4:
            return <div> eee </div>;
      case 5:
            return <div> fff </div>;
      default:
        throw new Error('Unknown step');
    }
  }


  return (
    <React.Fragment>
      <CssBaseline />

      <Appbar login={login}/>
    <Grid 
    container 
    spacing={0}>
      <Hidden xsDown>
    <Grid item xs={3}>
          <Paper className={classes.left_bar}>  <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper></Paper>
          </Grid>
    

    <Grid item xs={9}>
          <Paper className={classes.right_bar}>
          <Typography gutterBottom variant='h5'>Formulario solicitud</Typography>
          <div className={classes.form}>
              {activeStep==steps.length ? <div>Finalizado</div>: getStepContent(activeStep) }
              </div>
              <div className={classes.actionsContainer}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Atrás
                  </Button>
                  <Button
                    disabled={activeStep === steps.length-1}
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                  </Button>
                </div>
           



          </Paper>
        </Grid>
       
        </Hidden>

        <Hidden smUp>
        <Grid item >
        
          <Paper className={classes.right_bar}>
          <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel></StepLabel>
          </Step>
        ))}
          </Stepper>
          <Typography gutterBottom variant='h5'>Formulario solicitud</Typography>
          <div className={classes.form}>
              {activeStep==steps.length ? <div>Finalizado</div>: getStepContent(activeStep) }
              </div>
              <div className={classes.actionsContainer}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Atrás
                  </Button>
                  <Button
                    disabled={activeStep === steps.length-1}
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                  </Button>
                </div>
           



          </Paper>
        </Grid>

        </Hidden>
     

    </Grid>
    
    </React.Fragment>
  );
}