import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Formik,Form } from 'formik';
import * as Yup from 'yup';
import TextField from '@material-ui/core/TextField';
// import Link from '@material-ui/core/Link';
// import Button from '@material-ui/core/Button';
// import NumberFormat from 'react-number-format';
// import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

const SignupSchema = Yup.object().shape({
    service_type: Yup.string()
    .required('Ingrese tipo de servicio'),
    service_duration: Yup.string()
    .required('Ingrese duración de servicio'),
    hiring_continuity: Yup.string()
    .required('Ingrese su posible continuidad'),
    requires_own_computer: Yup.string()
    .required('Ingrese si requiere computador')  
  
  
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

export default function hiring_info({formRef:formRef,form4_isMounted:form4_isMounted,formSchema: formSchema, handleNext:handleNext}) {
    const classes = useStyles();

    React.useEffect(() => {
        form4_isMounted.current = true;
        return () => { form4_isMounted.current = false }
    }, []);

    return(<React.Fragment>
        <Typography>Información de contratación del servicio</Typography>
        <Formik
        innerRef={formRef}
        initialValues={formSchema}
        validationSchema={SignupSchema}
        initialTouched={{field: false, }}
        onSubmit={(values, actions) =>{

            formSchema['service_type'] = values['service_type']
            formSchema['service_duration'] = values['service_duration']
            formSchema['hiring_continuity'] = values['hiring_continuity']
            formSchema['requires_own_computer'] = values['requires_own_computer']
            handleNext()
        }}>
            {props => (
                <Form >
                    <FormControl className={classes.formControl} error={props.touched.service_type && Boolean(props.errors.service_type)}>
                        <InputLabel className={classes.labelText} id="service_type-label">Tipo de servicio</InputLabel>
                        <Select
                        labelId="service_type-label"
                        id="service_type"
                        name="service_type"
                        value={props.values.service_type}
                        onBlur={props.handleBlur}
                        onChange={props.handleChange}
                        inputProps={{className:classes.inputText}}
                        >
                            <MenuItem value={'interno'}>Interno</MenuItem>
                            <MenuItem value={'outsourcing'}>Outsourcing</MenuItem>
                        </Select>
                        <FormHelperText className={classes.helperText}>{props.touched.service_type ? props.errors.service_type : ""}</FormHelperText>

                    </FormControl>
                    
                    <FormControl className={classes.formControl} error={props.touched.service_duration && Boolean(props.errors.service_duration)} >
                        <InputLabel className={classes.labelText} shrink={props.values.service_duration?true:false} id="service_duration-label">Duración de servicio</InputLabel>
                        <TextField
                        margin="normal"
                        value={props.values.service_duration}
                        id="service_duration"
                        name="service_duration"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        error={props.touched.service_duration && Boolean(props.errors.service_duration)}
                        helperText={props.touched.service_duration ? props.errors.service_duration : ""}
                        FormHelperTextProps={{className:classes.helperText}}
                        inputProps={{className:classes.inputText}}
                        />
                    </FormControl>

                    <FormControl className={classes.formControl} error={props.touched.hiring_continuity && Boolean(props.errors.hiring_continuity)} >
                        <InputLabel className={classes.labelText} shrink={props.values.hiring_continuity?true:false} id="hiring_continuity-label">Posible continuidad</InputLabel>
                        <TextField
                        margin="normal"
                        value={props.values.hiring_continuity}
                        id="hiring_continuity"
                        name="hiring_continuity"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        error={props.touched.hiring_continuity && Boolean(props.errors.hiring_continuity)}
                        helperText={props.touched.hiring_continuity ? props.errors.hiring_continuity : ""}
                        FormHelperTextProps={{className:classes.helperText}}
                        inputProps={{className:classes.inputText}}
                        />
                    </FormControl>

                    <FormControl className={classes.formControl} error={props.touched.requires_own_computer && Boolean(props.errors.requires_own_computer)}>
                        <InputLabel className={classes.labelText} id="requires_own_computer-label">Requiere computador</InputLabel>
                        <Select
                        labelId="requires_own_computer-label"
                        id="requires_own_computer"
                        name="requires_own_computer"
                        value={props.values.requires_own_computer}
                        onBlur={props.handleBlur}
                        onChange={props.handleChange}
                        inputProps={{className:classes.inputText}}
                        >
                            <MenuItem value={'si'}>Sí</MenuItem>
                            <MenuItem value={'no'}>No</MenuItem>
                        </Select>
                        <FormHelperText className={classes.helperText}>{props.touched.requires_own_computer ? props.errors.requires_own_computer : ""}</FormHelperText>

                    </FormControl>

                </Form>

            )}
            </Formik>
    </React.Fragment>)

}