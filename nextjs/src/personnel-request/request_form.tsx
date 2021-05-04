  
import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import Link from '@material-ui/core/Link';

import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';

import Appbar from '../appbar'
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';

import Client_info from './1_client_info';
import Required_profile_info from './2_required_profile_info';
import Collab_info from './3_collab_info';
import Hiring_info from './4_hiring_info';
import Additional_info from './5_additional_info';

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



// Labels títulos y largo de pasos
const steps = ['Información del cliente', 
'Informacion del perfil requerido', 
'Información de contratación del colaborador',
'Información de contratación del servicio',
'Información adicional'];




const useStyles = makeStyles((theme) => ({

  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },

  Ygrid: {
    maxWidth: 1100,
    


  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    height: theme.spacing(45),

    
  },
  YgridList: {  
    maxHeight: theme.spacing(42),
    justifyContent:'center',
          // Aquí se estiliza la scrollbar
    "&::-webkit-scrollbar": {
      width: 10
          },
    "&::-webkit-scrollbar-track": {
      borderRadius: '8px',
      boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: '8px',
      backgroundColor: "darkgrey",
  
    },

            // Estilo responsivo de YgridList
    '@media only screen and (max-width: 600px)': {
      // height: theme.spacing(60),

    },
    '@media only screen and (max-width: 400px)': {
      // height: theme.spacing(50),

    },


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
  entry_date: new Date(),
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
  const form3_isMounted = React.useRef(false)
  const form4_isMounted = React.useRef(false)
  const form5_isMounted = React.useRef(false)


  const form_1 = React.useRef(null)
  const form_2 = React.useRef(null)
  const form_3 = React.useRef(null)
  const form_4 = React.useRef(null)
  const form_5 = React.useRef(null)
 


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

    if (form3_isMounted.current) {
      form_3.current.handleSubmit()
    }

    if (form4_isMounted.current) {
      form_4.current.handleSubmit()
    }

    if (form5_isMounted.current) {
      form_5.current.handleSubmit()
    }
  }


  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
      return <Client_info formRef={form_1} form1_isMounted={form1_isMounted} formSchema={formSchema} handleNext={handleNext}/>;
      case 1:
        return <Required_profile_info formRef={form_2} form2_isMounted={form2_isMounted} formSchema={formSchema} handleNext={handleNext}/>;
      case 2:
        return <Collab_info formRef={form_3} form3_isMounted={form3_isMounted} formSchema={formSchema} handleNext={handleNext}/>;
      case 3:
          return <Hiring_info formRef={form_4} form4_isMounted={form4_isMounted} formSchema={formSchema} handleNext={handleNext}/>;
      case 4:
            return <Additional_info formRef={form_5} form5_isMounted={form5_isMounted} formSchema={formSchema} handleNext={handleNext}/>;
      case 5:
            return <div> fff??? </div>;
      default:
        throw new Error('Unknown step');
    }
  }


  return (
    <React.Fragment>
      <CssBaseline />

    <Grid 
    className={classes.Ygrid}
    container 
    direction="column"
    justify="center"
    alignItems="center"
    spacing={0}>
    


    
    <Typography variant='h5'>Formulario solicitud</Typography>
      
          <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel><Hidden smDown>{label}</Hidden></StepLabel>
          </Step>
        ))}
          </Stepper>
          <Hidden mdUp><Typography>{steps[activeStep]}</Typography></Hidden>
          
          <div className={classes.form}>
            <GridList 
            cellHeight={'auto'} 
            className={classes.YgridList}>
              <GridListTile style={{width:'80%'}}>
              {activeStep==steps.length ? <div>Finalizado</div>: getStepContent(activeStep) }
              </GridListTile>
              </GridList>
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
           



    

    </Grid>
    
    </React.Fragment>
  );
}