import React from 'react'
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Formik,Form, validateYupSchema } from 'formik';
import * as Yup from 'yup';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

const SignupSchema = Yup.object().shape({
    requires_technical_test: Yup.string()
    .required('Ingrese si requiere aplicación de prueba técnica'),
    requires_psy_interview: Yup.string()
    .required('Ingrese si requiere entrevista psicolaboral'),
    requires_references: Yup.string()
    .required('Ingrese si requiere verificación de referencias')
  });

  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      width: 150,
    },
    selectEmpty: {
      marginTop: theme.spacing(3),
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

export default function additional_info({formRef:formRef, form5_isMounted:form5_isMounted,formSchema: formSchema, handleNext:handleNext}) {
    const classes = useStyles();

    React.useEffect(() => {
        form5_isMounted.current = true;
        return () => { form5_isMounted.current = false }
    }, []);

    return(<React.Fragment>
        <Typography>Información adicional</Typography>
        <Formik
        innerRef={formRef}
        initialValues={formSchema}
        validationSchema={SignupSchema}
        initialTouched={{field: false}}
        onSubmit={(values, actions) => {

            formSchema['requires_tecnical_test'] = values['requires_tecnical_test']
            formSchema['requires_psy_interview'] = values['requires_psy_interview']
            formSchema['requires_references'] = values['requires_references']
            handleNext()
        }}>
            {props => (
                <Form>
                    <FormControl className={classes.formControl} error={props.touched.requires_tecnical_test && Boolean(props.errors.requires_tecnical_test)}>
                        <InputLabel className={classes.labelText} id="requires_tecnical_test-label">¿Requiere aplicación de prueba técnica?</InputLabel>
                        <Select
                        labelId="requires_tecnical_test-label"
                        id="requires_tecnical_test"
                        name="requires_tecnical_test"
                        value={props.values.requires_tecnical_test}
                        onBlur={props.handleBlur}
                        onChange={props.handleChange}
                        inputProps={{className:classes.inputText}}
                        >
                            <MenuItem value={'si'}>Sí</MenuItem>
                            <MenuItem value={'no'}>No</MenuItem>
                        </Select>
                        <FormHelperText className={classes.helperText}>{props.touched.requires_tecnical_test ? props.errors.requires_tecnical_test : ""}</FormHelperText>

                    </FormControl>

                    <FormControl className={classes.formControl} error={props.touched.requires_psy_interview && Boolean(props.errors.requires_psy_interview)}>
                        <InputLabel className={classes.labelText} id="requires_psy_interview-label">¿Requiere entrevista psicolaboral?</InputLabel>
                        <Select
                        labelId="requires_psy_interview-label"
                        id="requires_psy_interview"
                        name="requires_psy_interview"
                        value={props.values.requires_psy_interview}
                        onBlur={props.handleBlur}
                        onChange={props.handleChange}
                        inputProps={{className:classes.inputText}}
                        >
                            <MenuItem value={'si'}>Sí</MenuItem>
                            <MenuItem value={'no'}>No</MenuItem>
                        </Select>
                        <FormHelperText className={classes.helperText}>{props.touched.requires_psy_interview ? props.errors.requires_psy_interview : ""}</FormHelperText>

                    </FormControl>

                    <FormControl className={classes.formControl} error={props.touched.requires_references && Boolean(props.errors.requires_references)}>
                        <InputLabel className={classes.labelText} id="requires_references-label">¿Requiere verificación de referencias?</InputLabel>
                        <Select
                        labelId="requires_references-label"
                        id="requires_references"
                        name="requires_references"
                        value={props.values.requires_references}
                        onBlur={props.handleBlur}
                        onChange={props.handleChange}
                        inputProps={{className:classes.inputText}}
                        >
                            <MenuItem value={'si'}>Sí</MenuItem>
                            <MenuItem value={'no'}>No</MenuItem>
                        </Select>
                        <FormHelperText className={classes.helperText}>{props.touched.requires_references ? props.errors.requires_references : ""}</FormHelperText>

                    </FormControl>
                </Form>
            )}
        </Formik>

    </React.Fragment>
    )
}