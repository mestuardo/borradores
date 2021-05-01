import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { CardHeader } from '@material-ui/core';
import { red,green,yellow } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 230,
      margin: theme.spacing(0.5)
    },
    cardHeader:{
      marginBottom:0,
      paddingBottom:0

    },
    avatar: {
      width: theme.spacing(3),
      height: theme.spacing(3),
      margin:0
    },
    cardContent:{
      textAlign:'left'
    }
  }));

export default function posted_application_card({request_id:request_id,status:status, name:name,vacancies:vacancies,job_duration:job_duration,description_summary:description_summary,posted_date:posted_date,SLA:SLA}){
    const classes = useStyles();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    function statusColor(status:String){
      switch (status){
        case 'start':
          return red[500]
        case 'on-going':
          return  yellow[500]
        case 'ready':
          return  green[500]
        
      }
 
    }



    return (
    <Card className={classes.root}>
  <CardActionArea>
    <CardHeader
        className={classes.cardHeader}
        avatar={
          <Avatar aria-label="status" className={classes.avatar} style={{backgroundColor: statusColor(status) }}>
            {''}
          </Avatar>
        }
        

        title=
        {<Typography variant="body2">
        N° {request_id}
      </Typography>}
        subheader=
        {<Typography style={{height:55}} variant="h6" component="h2">
        {name}
      </Typography>}
      disableTypography

      />
  
    <CardContent className={classes.cardContent}>
    
      

    <Typography variant="caption" component="p"><Box fontWeight='fontWeightMedium' display='inline'>Resumen descripción:</Box> {description_summary}</Typography>
    <Typography variant="caption" component="p"><Box fontWeight='fontWeightMedium' display='inline'>Fecha publicación:</Box> {posted_date.toLocaleDateString("es-ES",options)}</Typography>
    <Typography variant="caption" component="p"><Box fontWeight='fontWeightMedium' display='inline'>SLA:</Box> {SLA.toLocaleDateString("es-ES",options)}</Typography>
      </CardContent>
    </CardActionArea>

  </Card>
  )


} 