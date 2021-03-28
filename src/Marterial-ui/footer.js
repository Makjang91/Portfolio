import React from 'react';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { SiLinkedin, SiGithub } from "react-icons/si";
import { RiCopyrightLine } from "react-icons/ri";
import { createMuiTheme, ThemeProvider  } from '@material-ui/core/styles';

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

class footer extends React.Component{

    render() {
        return (
            <Box>
                <Box mt={3} mb={3} style={{ textAlign: 'center'}}>
                    <ThemeProvider theme={textFontTheme}>
                        <Typography variant="h5" style={{color: 'white'}}>
                            Contactez moi 
                        </Typography>
                    </ThemeProvider>
                </Box>
                <Grid container justify="center" >
                    <Grid item style={{paddingLeft:"1rem", paddingRight:"1rem"}}>
                        <Button variant="contained" href="https://www.linkedin.com/in/seunguk-yun-6641421b8/">
                            <SiLinkedin size={40} style={{ fill: '#3c3c3b' }}/>
                        </Button>
                    </Grid>
                    <Grid item style={{paddingLeft:"1rem", paddingRight:"1rem"}}>
                        <Button variant="contained" href="https://github.com/Makjang91">
                            <SiGithub size={40} style={{ fill: '#3c3c3b' }}/>
                        </Button>
                    </Grid>
                </Grid>
                <Box mt={6} style={{ textAlign: 'center'}}>
                    <ThemeProvider theme={textFontTheme}>
                        <Typography variant="BUTTON TEXT" style={{color: 'white'}}>
                            YUN SEUNGUK <RiCopyrightLine size={12}/>2021
                        </Typography>
                    </ThemeProvider>
                </Box>
            </Box>
        )
    }
}


export default footer;