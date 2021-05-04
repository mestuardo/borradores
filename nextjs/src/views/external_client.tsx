  
import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import Link from '@material-ui/core/Link';

import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';


import Application_card from '../cards/application_card'
import Posted_application_card from '../cards/posted_application_card'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Toolbar from '@material-ui/core/Toolbar';

import {new_requests,posted_requests} from '../views/sample_json'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import { positions } from '@material-ui/system';


const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(6,0),
      marginBottom: theme.spacing(0),
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: 660,
      textAlign:'center',
      justifyContent:'center',
      '@media only screen and (max-width: 1279px)': {
        margin: theme.spacing(0),
  
      },
      '@media only screen and (max-width: 600px)': {
        height: theme.spacing(73),
  
      },

    },
    verticalTabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
      width: theme.spacing(20)
    },
    horizontalTabs: {
      margin: theme.spacing(6,0),
      marginBottom:0,
      padding: theme.spacing(0)
    },



    right_bar:{
        margin: theme.spacing(6,1),
        marginBottom: theme.spacing(0),
      padding: theme.spacing(1,1),
 
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


    XgridList: {
      flexWrap: 'nowrap',
      maxWidth: 1100,
      
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',

      // Aquí se estiliza la scrollbar
      "&::-webkit-scrollbar": {
        
        height: 10,
 
            },
      "&::-webkit-scrollbar-track": {
        borderRadius: '8px',
        boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
      },
      "&::-webkit-scrollbar-thumb": {
        borderRadius: '8px',
        backgroundColor: "darkgrey",
    
      },

 

    },
    YgridList: {
      maxWidth: 1100,
      // maxHeight: 600,
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
      '@media only screen and (max-width: 600px)': {
        height: theme.spacing(60),
  
      },
      '@media only screen and (max-width: 400px)': {
        height: theme.spacing(50),
  
      },


    }



  }));


  
  interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
  }
  
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
          <Box p={3} style={{textAlign:'-webkit-center'}}>
          {children}
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: any) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
    
  

  
  
  


 const ExternalClientView = (props)=> {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
      setValue(newValue);
    };

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

    // Se utiliza .slice para no cambiar el array original y así utilizar filtros
    const sorted_new_requests =   new_requests.slice().sort((a:any,b:any)=> b.created_date-a.created_date)
    const SLA_sorted_posted_requests = posted_requests.slice().sort((a:any,b:any)=> a.SLA-b.SLA)


    const status_orderLH = ["start","on-going","ready"]
    // const status_orderHL = ["ready","on-going","start"]
    const Status_sorted_posted_requests = posted_requests.slice().sort((a:any, b:any) => status_orderLH.indexOf(a.status)-status_orderLH.indexOf(b.status))


    const [shown_posted_requests,setShown_posted_requests] = React.useState(SLA_sorted_posted_requests)

    const cols = getCols(props.width).cols;
    const title_font = getCols(props.width).title_font;


    // Funciones de los botones de filtro

    const [filter, setFilter] = React.useState<string | null>('SLA');

    const handleFilter = (event: React.MouseEvent<HTMLElement>, newFilter: string | null) => {
      setFilter(newFilter);
    };

    function filterSLA (){
      setShown_posted_requests(SLA_sorted_posted_requests)

    }

    function filterStatus(){
      setShown_posted_requests(Status_sorted_posted_requests)

    }

    // Ordenamos los posted_requests según fecha. Esto lo haría el backend


  
    return (
      <React.Fragment>
            
      <Hidden lgUp>
      <Paper>
      <Tabs
       orientation="horizontal"
       variant="scrollable"      
       value={value}
       onChange={handleChange}
       aria-label="Horizontal tabs"
       centered
       className={classes.horizontalTabs}
     >
       <Tab label="Inicio" {...a11yProps(0)} />
       <Tab label="Solicitudes pendientes" {...a11yProps(1)} />
       <Tab label="Solicitudes publicadas" {...a11yProps(2)} />

     </Tabs>
     </Paper>

     </Hidden>

      <div className={classes.root}>
        
      <Hidden mdDown> 
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs"
          className={classes.verticalTabs}
        >
          <Tab label="Inicio" {...a11yProps(0)} />
          <Tab label="Solicitudes pendientes" {...a11yProps(1)} />
          <Tab label="Solicitudes publicadas" {...a11yProps(2)} />

        </Tabs>
        </Hidden>
        <TabPanel value={value} index={0}>
       <Typography  variant={title_font}>Solicitudes pendientes recientes</Typography>
        <GridList className={classes.XgridList} cols={cols} cellHeight={'auto'}>
                
      {/* Es necesario usar GridList y GrisListTile para que exista un overflow horizontal de los componentes */}

          {sorted_new_requests.slice(0,5).map((new_request) => (
                    <GridListTile style={{display:'grid'}} key={new_request.id}>
                
              {/* Se presenta cada tarjeta de solicitud nueva. Se utiliza slice para no mostrar 
              todos los datos en la vista principal. La idea es que aquí se muestren aquellas 
              solicitudes desde hace X días, por lo que desde el backend se requeriría que los entregaran
              en un endpoint ordenado */}
                  <Application_card 
                  key={new_request.id} 
                  request_id={new_request.id} 
                  name={new_request.name}
                  vacancies= {new_request.vacancies}
                  job_duration= {new_request.job_duration}
                  description_summary= {new_request.description_summary}
                  created_date= {new_request.created_date}
                    />

                        

                    </GridListTile>
                  ))} 
                       
                     
        
                    </GridList>

              <Typography  variant={title_font}>Solicitudes con menor SLA</Typography>

              <GridList className={classes.XgridList} cols={cols} cellHeight={'auto'} spacing={0}>
        {/* Es necesario usar GridList y GrisListTile para que exista un overflow de los componentes */}

      {SLA_sorted_posted_requests.slice(0,5).map((posted_request) => (
                <GridListTile style={{display:'grid'}} key={posted_request.id} >
          
          {/* Se presenta cada tarjeta de solicitudes que están por "vencer". Se utiliza slice para NO mostrar 
          todos los datos en la vista principal. La idea es que aquí se muestren aquellas 
          solicitudes desde hace X días, por lo que desde el backend se requeriría que los entregaran
          en un endpoint ordenado */}

              <Posted_application_card 
              key={posted_request.id} 
              request_id={posted_request.id} 
              status={posted_request.status}
              name={posted_request.name}
              vacancies= {posted_request.vacancies}
              job_duration= {posted_request.job_duration}
              description_summary= {posted_request.description_summary}
              posted_date= {posted_request.created_date}
              SLA= {posted_request.SLA}
                />

                    

                </GridListTile>
              ))} 



               
             

            </GridList>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <Typography variant='h6'>Solicitudes pendientes</Typography>
        <GridList cellHeight={'auto'} cols={cols} className={classes.YgridList}>
        {sorted_new_requests.map((new_request) => (
                    <GridListTile key={new_request.id}>
                
              {/* Se presenta cada tarjeta de solicitud nueva. Se utiliza slice para no mostrar 
              todos los datos en la vista principal. La idea es que aquí se muestren aquellas 
              solicitudes desde hace X días, por lo que desde el backend se requeriría que los entregaran
              en un endpoint ordenado */}
                  <Application_card 
                  key={new_request.id} 
                  request_id={new_request.id} 
                  name={new_request.name}
                  vacancies= {new_request.vacancies}
                  job_duration= {new_request.job_duration}
                  description_summary= {new_request.description_summary}
                  created_date= {new_request.created_date}
                    />

                        

                    </GridListTile>
                  ))} 
          
          </GridList>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <Typography variant='h6'>Solicitudes publicadas</Typography>

        <ToggleButtonGroup
              value={filter}
              exclusive
              size="small"
              onChange={handleFilter}
              aria-label="cards filter"
            >
              <ToggleButton onClick={filterSLA} value="SLA" aria-label="SLA filtered">
              Ordenar por SLA
              </ToggleButton>
              <ToggleButton onClick={filterStatus} value="STATUS" aria-label="Status filtered">
              Ordenar por estado
              </ToggleButton>

            </ToggleButtonGroup>

        <GridList cellHeight={'auto'} cols={cols} className={classes.YgridList}>
        {shown_posted_requests.map((posted_request) => (
                <GridListTile key={posted_request.id}>
          
          {/* Se presenta cada tarjeta de solicitudes que están por "vencer". Se utiliza slice para NO mostrar 
          todos los datos en la vista principal. La idea es que aquí se muestren aquellas 
          solicitudes desde hace X días, por lo que desde el backend se requeriría que los entregaran
          en un endpoint ordenado */}

              <Posted_application_card 
              key={posted_request.id} 
              request_id={posted_request.id} 
              status={posted_request.status}
              name={posted_request.name}
              vacancies= {posted_request.vacancies}
              job_duration= {posted_request.job_duration}
              description_summary= {posted_request.description_summary}
              posted_date= {posted_request.created_date}
              SLA= {posted_request.SLA}
                />

                    

                </GridListTile>
              ))} 

          
          </GridList>
        </TabPanel>

      </div>

      </React.Fragment>
    );
  }



  export default withWidth()(ExternalClientView)



