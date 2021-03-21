import './App.css';

import Appbar from './Marterial-ui/appbar'
import AfficheCompetences from './Marterial-ui/competences'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles,createMuiTheme, MuiThemeProvider  } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import photo from './img/photo.jpg';

const theme = createMuiTheme({
  palette: {
    background: {
      default: '#9adcfb',
    },
  }
});

const useStyles = makeStyles((theme) => ({
  Contenues: {
   padding: theme.spacing(0,10)
  },
  title: {
    margin: theme.spacing(4, 0, 4),
  },
}));

const section1 = {
  height: "60rem",
  width: "100%",
  paddingTop: 5,
  backgroundColor: "#90dcfb"
};

const section2 = {
  height: "100rem",
  width: "100%",
  paddingTop: 5,
  backgroundColor: "#00FFFF"
};

function App() {
  const classes = useStyles();

  const appbar = <Appbar /> // {appbar} into div
  const afficheCompetences = <AfficheCompetences />


  return (
    <div className="App">

        <div style={section1}>
          <Grid container justify="center" bgcolor="black">
            <Box mt={40} >
              <div>
                <Typography  variant="h2" component="h2">
                  Bienvenu<br/>
                  Portfolio de YUN Seunguk
                  
                </Typography>
              </div>
            </Box>
          </Grid>
        </div>
        <div style={section2}>
          <Grid container justify="center" spacing={0}>
            <Grid item xs={12} justify="center" alignItems="center" >
              <Box border={0} mt={10} m="auto" borderRadius="50%" color="black" overflow="hidden" width="25%" maxWidth="20em">
                <img src={photo} alt="ProfilePhoto" width="100%" height="100%"/>
              </Box>
            </Grid>
            <Grid item xs={12} >
              <Box mb={20} mt={5}>
                <Typography variant="h5">
                  Bonjour, je m'appelle YUN Seunguk
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item id="presentation" xs={6} >
              <Box>
                <Typography variant="h4" className={classes.title}>
                  Presentation
                </Typography>
              </Box>
              <Box mt={5}>
                <Typography variant="body1">
                  sqdfqsdfqsf <br/>
                  sdfqsdfa <br/>
                  sqdfqsdfqsdf <br/>
                  sqdfqsdfqsdf <br/>
                  sqdfqsdfqsdf <br/>
                  sqdfqsdfqsdf <br/>
                  sqdfqsdfqsdf <br/>
                  sqdfqsdfqsdf <br/>
                  sqdfqsdfqsdf <br/>
                </Typography>
              </Box>
            </Grid>
            <Grid item id="presentation" xs={6} >
              <Typography variant="h4" className={classes.title}>
                Compétences
              </Typography>
              {afficheCompetences}
            </Grid>
          </Grid>
        </div>
    </div>
  );
}

export default App;
