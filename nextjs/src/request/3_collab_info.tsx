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
    contract_type: Yup.string()
    .required('Ingrese tipo de contrato'),
    job_type: Yup.string()
    .required('Ingrese la jornada laboral'),
    working_time_schedule: Yup.string()
    .required('Ingrese horario laboral'),
    work_adress: Yup.string()
    .required('Ingrese la dirección laboral')
  
  
  
  
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


export default function collab_info({formRef:formRef,form3_isMounted:form3_isMounted,formSchema: formSchema, handleNext:handleNext}) {
    const classes = useStyles();
    

    React.useEffect(() => {
      form3_isMounted.current = true;
      return () => { form3_isMounted.current = false }
    }, []);

    return(<React.Fragment>   
        <Typography>Información del colaborador</Typography>
          <Formik
          innerRef={formRef}
       initialValues={formSchema}
       validationSchema={SignupSchema}
       initialTouched={{ 
        field: false,
      }}

       onSubmit={(values, actions) => {
           
           formSchema['contract_type'] = values['contract_type']
           formSchema['entry_date'] = values['entry_date']
           formSchema['job_type'] = values['job_type']
           formSchema['working_time_schedule'] = values['working_time_schedule']
           formSchema['work_adress'] = values['work_adress']
           handleNext()
       }}
     >
       {props => (
        <Form >
          <FormControl className={classes.formControl} error={props.touched.contract_type && Boolean(props.errors.contract_type)}>
            <InputLabel className={classes.labelText} id="contract_type-label">Tipo de contrato</InputLabel>
            <Select
            labelId="contract_type-label"
            id="contract_type"
            name="contract_type"
    
            value ={props.values.contract_type}
            onChange = {props.handleChange}
            onBlur = {props.handleBlur}
            inputProps={{className:classes.inputText}}
            >
                <MenuItem value={'contrato_1'}>Contrato 1</MenuItem>
                <MenuItem value={'contrato_2'}>Contrato 2</MenuItem>
                <MenuItem value={'contrato_3'}>Contrato 3</MenuItem>
            </Select>
            <FormHelperText className={classes.helperText}>{props.touched.contract_type ? props.errors.contract_type : ""}</FormHelperText>
          
          </FormControl>

          <FormControl className={classes.formControl} error={props.touched.entry_date && Boolean(props.errors.entry_date)}>
            <InputLabel shrink={true} className={classes.labelText} id="entry_date-label">Fecha estimada de ingreso</InputLabel>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={esLocale}>
                <KeyboardDatePicker
                margin="normal"
                id="entry_date"
                cancelLabel={'Cancelar'}

                format="dd/MM/yyyy"
                value={props.values.entry_date}
                onChange={(value) => props.setFieldValue("entry_date",value)}
                KeyboardButtonProps={{
                    'aria-label': 'cambiar fecha',
                }}
                />
            </MuiPickersUtilsProvider>
          </FormControl>

          <FormControl className={classes.formControl} error={props.touched.job_type && Boolean(props.errors.job_type)}>
            <InputLabel className={classes.labelText} id="job_type-label">Jornada laboral</InputLabel>
            <Select
            labelId="job_type-label"
            id="job_type"
            name="job_type"
        
            value ={props.values.job_type}
            onChange = {props.handleChange}
            onBlur = {props.handleBlur}
            inputProps={{className:classes.inputText}}
            >
                <MenuItem value={'completa'}>Completa</MenuItem>
                <MenuItem value={'media'}>Media</MenuItem>
                <MenuItem value={'freelancer'}>Freelancer</MenuItem>
            </Select>
            <FormHelperText className={classes.helperText}>{props.touched.job_type ? props.errors.job_type : ""}</FormHelperText>
          </FormControl>

          <FormControl className={classes.formControl} error={props.touched.working_time_schedule && Boolean(props.errors.working_time_schedule)}>
            <InputLabel className={classes.labelText} id="working_time_schedule-label">Horario laboral</InputLabel>
            <Select
            labelId="working_time_schedule-label"
            id="working_time_schedule"
            name="working_time_schedule"
        
            value ={props.values.working_time_schedule}
            onChange = {props.handleChange}
            onBlur = {props.handleBlur}
            inputProps={{className:classes.inputText}}
            >
                <MenuItem value={'horario_1'}>Horario 1</MenuItem>
                <MenuItem value={'horario_2'}>Horario 2</MenuItem>
                <MenuItem value={'horario_3'}>Horario 3</MenuItem>
            </Select>
            <FormHelperText className={classes.helperText}>{props.touched.working_time_schedule ? props.errors.working_time_schedule : ""}</FormHelperText>
          </FormControl>

          <FormControl className={classes.formControl} error={props.touched.work_adress && Boolean(props.errors.work_adress)} >
            <InputLabel className={classes.labelText} shrink={props.values.work_adress?true:false} id="work_adress-label">Dirección laboral</InputLabel>
            <TextField
            margin="normal"

            value ={props.values.work_adress}
            onChange = {props.handleChange}
            onBlur = {props.handleBlur}

            id="work_adress"
            name="work_adress"
            error={props.touched.work_adress && Boolean(props.errors.work_adress)}
            helperText={props.touched.work_adress ? props.errors.work_adress : ""}
            FormHelperTextProps={{className:classes.helperText}}
            inputProps={{className:classes.inputText}}
            />
            </FormControl>
        </Form>
        )}
          </Formik>
      </React.Fragment>
    
    )

}
