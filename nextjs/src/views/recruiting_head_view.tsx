import React from 'react';

import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';


import Application_card from '../cards/application_card'
import Posted_application_card from '../cards/posted_application_card'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import {new_requests,posted_requests} from '../views/sample_json'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import Request_form from '../personnel-request/request_form'



const useStyles = makeStyles((theme) => ({

           // Estilo del total del componente
    root: {
      margin: theme.spacing(6,0),
      marginBottom: theme.spacing(0),
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: theme.spacing(72),
      textAlign:'center',
      justifyContent:'center',
               // Estilo responsivo del total del componente
      '@media only screen and (max-width: 1279px)': {
        margin: theme.spacing(0),
  
      },
      '@media only screen and (max-width: 600px)': {
        height: theme.spacing(73),
  
      },

    },
        // Estilo tabs clickeables verticales
    verticalTabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
      width: theme.spacing(30)
    },


    // Estilo tabs clickeables horizontales
    horizontalTabs:{
      display:'flex',
      margin: theme.spacing(6,0),
      marginBottom:0,
      justifyContent:'center',
      padding:0,
      borderRadius:0
    },
    GridListTile:{
      display:'grid',
      justifyContent:'center'
    },

      // Estilo grid vertical (se ven en la tab 1)


    Ygrid: {
      maxWidth: 1100,
      maxHeight: theme.spacing(65),
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
        height: theme.spacing(60),
  
      },
      '@media only screen and (max-width: 400px)': {
        height: theme.spacing(50),
  
      },


    },

  



  }));


  
  // No estoy muy seguro para qué es esta función pero venía en la documentación de Material-UI
  // para el cambio de tabs
  interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
  }
  

  
  // Esta funcioón maneja el cambio de Tabs 
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}  >
          {children}
          </Box>
        )}
      </div>
    );
  }

  // No estoy muy seguro para qué es esta función pero venía en la documentación de Material-UI
  
  function a11yProps(index: any) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
    
  

  
  
  


 const ExternalClientView = (props)=> {
    const classes = useStyles();

    // El valor de la tab actual que se está viendo
    const [value, setValue] = React.useState(0);


    // Manejador de cambio de la tab que se está viendo  
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
      setValue(newValue);
    };
    
     //-----------------------------------------


        // Esta función se utiliza para determinar el ancho de la pantalla y hacer el número de componentes
    // mostrados por GridList sea acorde al tamaño de la pantalla

    function getCols(screenWidth:any) {
      if (isWidthUp('lg', screenWidth)) {
        return {cols: 4,title_font:'h6'};
      }

      if (isWidthUp('md', screenWidth)) {
        return {cols: 4,title_font:'h6'};
      }
      if (isWidthUp('sm', screenWidth)) {
        return {cols: 2,title_font:'body1'};
      }
      if (isWidthUp('xs', screenWidth)) {
        return {cols: 1,title_font:'body1'};
      }


      return {cols: 1,title_font:'body1'};
    }
    // Con esta constante definimos las columnas a mostrar según ancho de pantalla
    const cols = getCols(props.width).cols;



  
    return (
      <React.Fragment>
            

       {/* // Esta taba se ve solamente cuando la pantalla es de ancho mayor a 'lg' (Ver documentación Hidden) */}
      <Hidden lgUp>
      <Paper className={classes.horizontalTabs}>
      <Tabs
       orientation="horizontal"
       variant="scrollable"      
       scrollButtons="on"
       value={value}
       onChange={handleChange}
       aria-label="Horizontal tabs"
   
     >
       <Tab label="Crear solicitud" {...a11yProps(0)} />


     </Tabs>
     </Paper>

     </Hidden>

      <div className={classes.root}>
        
      {/* // Esta taba se ve solamente cuando la pantalla es de ancho menor a 'md' (Ver documentación Hidden) */}
      <Hidden mdDown> 
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs"
          className={classes.verticalTabs}
        >
          <Tab label="Crear solicitud" {...a11yProps(0)} />

        </Tabs>
        </Hidden>

{/* ----------------------------------------------------------------------------------------------------------- */}
        

         {/* // Aquí comienza el componente de la tab principal*/}
        <TabPanel value={value} index={0}>
    
      <Request_form/>

        </TabPanel>



  
{/* ----------------------------------------------------------------------------------------------------------- */}
        

      </div>

      </React.Fragment>
    );
  }


// Se exporta la funcion con withWidth para que funcione la funcion de reconocer el ancho de pantalla
  export default withWidth()(ExternalClientView)



