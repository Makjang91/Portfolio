import './App.css';

import Appbar from './Marterial-ui/appbar';
import AfficheCompetences from './Marterial-ui/competences';
import Red from './Projets/Red';
import ClientManagementSystme from './Projets/ClientManagement_React'
import Footer from './Marterial-ui/footer';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles,createMuiTheme, MuiThemeProvider  } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Parallax } from 'react-parallax';

import photo from './img/photo.jpg';
import fond_universe from './img/universe.jpg';
import fond_mountain from './img/mountain.jpg';

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
  section1: {
    height: "60rem",
    width: "100%"
  },
  section2: {
    height: "15rem",
    width: "100%"
  },
  inlineStyle1: {
    'padding-top': '20rem',
    textAlign: 'center',
  },
  inlineStyle2Title: {
    'padding-top': '10rem',
    textAlign: 'center',
  },
  inlineStyle2Text: {
    textAlign: 'center',
  }
  
}));


function App() {
  const classes = useStyles();

  const appbar = <Appbar />; // {appbar} into div
  const afficheCompetences = <AfficheCompetences />;
  const red = <Red />;
  const clientManagementSystme = <ClientManagementSystme />
  const footer = <Footer />

  return (
    <div>
      <Parallax bgImage={fond_universe}>
        <div className={classes.section1}>
          <Grid container justify="center" className={classes.inlineStyle1}>
              <Typography  variant="h3" component="h3">
                Bienvenu<br/>
                Portfolio de YUN Seunguk
                
              </Typography>
          </Grid>

        </div>
      </Parallax>
      <div className={classes.section1}>
        <Grid container className={classes.inlineStyle2Title}>
          <Grid item xs={12} >
            <Box mb={20} mt={5}>
              <Typography variant="h5">
                Bonjour, je m'appelle YUN Seunguk
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container justify="center" className={classes.inlineStyle2Text}>
          <Grid item id="presentation" xs={6} >
            <Box>
              <Typography variant="h4">
                Presentation
              </Typography>
            </Box>
            <Box mt={5}>
              <Typography variant="body1">
                Je suis étudiant de Licence Informatique à l'université Lyon 1 <br/>
                Je suis venu en France en 2015 pour découvrir la vie en France<br/>
                J'ai étudié le francais depuis, j'ai commencé à étudier la mécanique<br/>
                Pendant cette licence, j'avais un cours de programation, ça m'a tellement plu !<br/>
                Donc j'ai décidé de réorienter en informatique.<br/>
                <br/>
                Je cherche actuallement un stage pour la fin d'étude de licence
              </Typography>
            </Box>
          </Grid>
          <Grid item id="presentation" xs={6} >
            
            <Typography variant="h4" className={classes.inlineStyle2Text}>
              Compétences
            </Typography>
            <Box mt={5}>
              {afficheCompetences}
            </Box>
          </Grid>
        </Grid>
      </div>
      <Parallax bgImage={fond_mountain}>
        <div className={classes.section1}>
          {clientManagementSystme}
        </div>
      </Parallax>
      <div >
          {red}
      </div>
      <div className={classes.section2} style={{backgroundColor: 'rgba(0,0,0,0.15)'}}>
        {footer}
      </div>
    </div>
  );
}

export default App;
