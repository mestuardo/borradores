import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Formik,Form } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import esLocale from "date-fns/locale/es";

const SignupSchema = Yup.object().shape({
    client: Yup.string()
    .required('Ingrese al cliente'),
    client_working_field: Yup.string()
    .required('Ingrese el rubro'),
    process_responsible: Yup.string()
    .required('Ingrese al responsable'),
    client_adress: Yup.string()
    .required('Ingrese la dirección del cliente')
  
  
  
  
  });

  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      width: 150,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    labelText:{
      fontSize:'small',
    },
    inputText:{
      fontSize:'small',
      height: theme.spacing(2.5)
    },
    helperText: {
      fontSize:'x-small',
      margin: 0,
      padding:0,
      height:0
    }
  }),
);

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


export default function client_info({formRef:formRef,form1_isMounted:form1_isMounted,formSchema: formSchema, handleNext:handleNext}) {
    const classes = useStyles();
    

    React.useEffect(() => {
      form1_isMounted.current = true;
      return () => { form1_isMounted.current = false }
    }, []);

    return(<React.Fragment>   
        <Typography>Información del cliente</Typography>
          <Formik
          innerRef={formRef}
       initialValues={formSchema}
       validationSchema={SignupSchema}
       initialTouched={{ 
        field: false,
      }}

       onSubmit={(values, actions) => {
           
           formSchema['request_date'] = values['request_date']
           formSchema['client'] = values['client']
           formSchema['client_working_field'] = values['client_working_field']
           formSchema['client_adress'] = values['client_adress']
           formSchema['process_responsible'] = values['process_responsible']
           //  alert(JSON.stringify(values, null, 2));
           handleNext()

       }}
     >
       {props => (
        <Form >
           <FormControl className={classes.formControl} error={props.touched.request_date && Boolean(props.errors.request_date)}>
           <InputLabel shrink={true} className={classes.labelText} id="request_date-label">Fecha</InputLabel>
          <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
          <KeyboardDatePicker
          margin="normal"
          id="request_date"
          cancelLabel={'Cancelar'}
          // disabled

          format="dd/MM/yyyy"
          value={props.values.request_date}
          onChange={props.handleChange}
          KeyboardButtonProps={{
            'aria-label': 'cambiar fecha',
          }}
        />
                
        
                </MuiPickersUtilsProvider>
        </FormControl>

        
        <FormControl className={classes.formControl} error={props.touched.client && Boolean(props.errors.client)}>
        <InputLabel className={classes.labelText} id="client-label">Cliente</InputLabel>
        <Select
          labelId="client-label"
          id="client"
          name="client"
    
          value ={props.values.client}
          onChange = {props.handleChange}
          onBlur = {props.handleBlur}
          inputProps={{className:classes.inputText}}
        >
          <MenuItem value={'cliente_1'}>Cliente 1</MenuItem>
          <MenuItem value={'cliente_2'}>Cliente 2</MenuItem>
          <MenuItem value={'cliente_3'}>Cliente 3</MenuItem>
        </Select>
        <FormHelperText className={classes.helperText}>{props.touched.client ? props.errors.client : ""}</FormHelperText>
        
        </FormControl>

        <FormControl className={classes.formControl} error={props.touched.client_working_field && Boolean(props.errors.client_working_field)}>
        <InputLabel className={classes.labelText} id="client_working_field-label">Rubro</InputLabel>
        <Select
          labelId="client_working_field-label"
          id="client_working_field"
          name="client_working_field"
    
          value ={props.values.client_working_field}
          onChange = {props.handleChange}
          onBlur = {props.handleBlur}
          inputProps={{className:classes.inputText}}
        >
          <MenuItem value={'rubro_1'}>Rubro 1</MenuItem>
          <MenuItem value={'rubro_2'}>Rubro 2</MenuItem>
          <MenuItem value={'rubro_3'}>Rubro 3</MenuItem>
          <MenuItem value={'rubro_4'}>Rubro 2</MenuItem>
          <MenuItem value={'rubro_5'}>Rubro 3</MenuItem>
        </Select>
        <FormHelperText className={classes.helperText}>{props.touched.client_working_field ? props.errors.client_working_field : ""}</FormHelperText>
        </FormControl>
        
        <FormControl className={classes.formControl} error={props.touched.client_adress && Boolean(props.errors.client_adress)} >
        <InputLabel className={classes.labelText} shrink={props.values.client_adress?true:false} id="client_adress-label">Dirección cliente</InputLabel>
          <TextField
            margin="normal"

            value ={props.values.client_adress}
            onChange = {props.handleChange}
            onBlur = {props.handleBlur}
            // fullWidth

            id="client_adress"
            name="client_adress"
            // autoFocus
            error={props.touched.client_adress && Boolean(props.errors.client_adress)}
            helperText={props.touched.client_adress ? props.errors.client_adress : ""}
            FormHelperTextProps={{className:classes.helperText}}
            inputProps={{className:classes.inputText}}

          />
          
          </FormControl>
          <FormControl className={classes.formControl} error={props.touched.process_responsible && Boolean(props.errors.process_responsible)}>
        <InputLabel className={classes.labelText} id="responsible-label">Responsable</InputLabel>
        <Select
          labelId="responsible-label"
          id="process_responsible"
          name="process_responsible"
    
          value ={props.values.process_responsible}
          onChange = {props.handleChange}
          onBlur = {props.handleBlur}
          inputProps={{className:classes.inputText}}
        >
          <MenuItem value={'responsable_1'}>Responsable 1</MenuItem>
          <MenuItem value={'responsable_2'}>Responsable 2</MenuItem>
          <MenuItem value={'responsable_3'}>Responsable 3</MenuItem>
          <MenuItem value={'responsable_4'}>Responsable 2</MenuItem>
          <MenuItem value={'responsable_5'}>Responsable 3</MenuItem>
        </Select>
        <FormHelperText className={classes.helperText}>{props.touched.process_responsible ? props.errors.process_responsible : ""}</FormHelperText>
        </FormControl>

          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Recordarme"
          /> */}
          {/* <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            // className={classes.submit}
          >
            Ingresar N° de cliente
          </Button>*/}

 
             </Form>
             )}
              </Formik>
        </React.Fragment>

    )
}