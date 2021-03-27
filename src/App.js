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
import { makeStyles,createMuiTheme, ThemeProvider  } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Parallax } from 'react-parallax';

import photo from './img/photo.jpg';
import fond_intro from './img/pexels-bich-tran-669996.jpg';
import fond_first from './img/pexels-jess-bailey-designs-743986.jpg';
import {Helmet} from "react-helmet";

const titleFontTheme = createMuiTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      'sans-serif',
    ].join(','),
  },
});
const textFontTheme = createMuiTheme({
  typography: {
    fontFamily: [
      'Open Sans',
      'sans-serif',
    ].join(','),
  },
});



const useStyles = makeStyles((theme) => ({
  Contenues: {
   padding: theme.spacing(0,10)
  },
  title: {
    margin: theme.spacing(4, 0, 4),
  },
  frontpage: {
    height: "60rem",
    background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
    top: '50%',
    transform: 'translate(0%, 500%)',
  },
  inlineStyle2Title: {
    'padding-top': '4rem',
    textAlign: 'center',
  },
  inlineStyle2Text: {
    textAlign: 'center',
  },
  texts: {
    color: '#3c3c3b',
  },
  titleText: {
    color: 'white',
  }
  
}));


function App() {
  const classes = useStyles();

  const title = "YUN's portfolio";
  const appbar = <Appbar />; // {appbar} into div
  const afficheCompetences = <AfficheCompetences />;
  const red = <Red />;
  const clientManagementSystme = <ClientManagementSystme />
  const footer = <Footer />

  return (
    <div className={classes.texts}>
      <Helmet>
        <title>{ title }</title>
      </Helmet>
      <div className={classes.frontpage}>
        <Grid container justify='center' className={classes.inlineStyle1}>
          <ThemeProvider theme={titleFontTheme}>
            <Typography  variant="h2" component="h2" className={classes.titleText}>
              Portfolio de YUN Seunguk
            </Typography>
          </ThemeProvider>
        </Grid>

      </div>
      <div className={classes.section1}>
        <Grid container className={classes.inlineStyle2Title}>
          <Grid item xs={12} >
            <Box mb={20} mt={5}>
              <ThemeProvider theme={titleFontTheme}>
                <Typography variant="h5">
                  Bonjour, je m'appelle Seunguk YUN
                </Typography>
              </ThemeProvider>
            </Box>
          </Grid>
        </Grid>
        <Grid container justify="center" className={classes.inlineStyle2Text}>
          <Grid item id="presentation" xs={6} >
            <Box>
              <ThemeProvider theme={titleFontTheme}>
                <Typography variant="h4">
                  Qui suis-je ?
                </Typography>
              </ThemeProvider>
            </Box>
            <Box mt={5}>
              <ThemeProvider theme={textFontTheme}>
                <Typography variant="body1">
                  Je suis étudiant de Licence Informatique à l'université Lyon 1.<br/>
                  Je suis arrivé en France en 2015 pour découvrir la vie en France.<br/>
                  J'ai étudié le francais puis j'ai commencé par étudier la Mécanique en licence.<br/>
                  Pendant cette licence, j'ai eu un cours de programmation qui m'a particulièrement plu.<br/>
                  J'ai donc décidé de me réorienter en licence d'Informatique.<br/>
                  <br/>
                  Je cherche actuellement un stage de fin de licence.
                </Typography>
              </ThemeProvider>
            </Box>
          </Grid>
          <Grid item id="presentation" xs={6} >
            <ThemeProvider theme={titleFontTheme}>
              <Typography variant="h4" className={classes.inlineStyle2Text}>
                Mes Compétences informatiques
              </Typography>
            </ThemeProvider>
            <Box mt={5}>
              <ThemeProvider theme={textFontTheme}>
               {afficheCompetences}
              </ThemeProvider>
            </Box>
          </Grid>
        </Grid>
      </div>
      <Parallax bgImage={fond_first}>
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
