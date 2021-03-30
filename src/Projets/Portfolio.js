import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Button from '@material-ui/core/Button';

import { SiCss3, SiHtml5, SiJavascript, SiReact } from "react-icons/si";

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

const listTechs = [
    {
        'id': 1,
        'iconName': SiJavascript,
        'name': "Javascript",
    },
    {
        'id': 2,
        'iconName': SiReact,
        'name': "React",
    },
    {
        'id': 3,
        'iconName': SiReact,
        'name': "React"
    },
    {
        'id': 4,
        'iconName': SiHtml5,
        'name': "HTML",
    },
    {
        'id': 5,
        'iconName': SiCss3,
        'name': "Css",
    },
];

class Tech extends React.Component{
    render() {
        const Icon = this.props.iconName;
        return (
            <Grid item style={{paddingLeft:"1rem", paddingRight:"1rem"}}>
                <Icon size={32} style={{ fill: '#3c3c3b' }}/> <br/> {this.props.name}
            </Grid>
        )
    }
}

class Portfolio extends React.Component {
    render() {
        return (
            <div>
                <Grid container justify="center">
                    <Box mt={5}>
                        <ThemeProvider theme={titleFontTheme}>
                            <Typography  variant="h2" component="h2">
                                Portfolio
                            </Typography>
                        </ThemeProvider>
                    </Box>
                </Grid>
                <Box mt={10} mb={10}>
                    <Grid container style={{textAlign:"center"}}>
                        <Grid item xs={3}/>
                        <Grid item xs={6}>
                            <ThemeProvider theme={titleFontTheme}>
                                <Typography  variant="h4" component="h4">
                                    Description
                                </Typography>
                            </ThemeProvider>
                            <Box mt={3}>
                                <ThemeProvider theme={textFontTheme}>
                                    <Typography variant="body1">
                                        Ce portfolio est réalisé par moi-même avec React et marterial-ui<br/>
                                    </Typography>
                                </ThemeProvider>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Grid container style={{textAlign:"center"}}>
                    <Grid item xs={12}>
                        <Box mb={5} mt={5}>
                            <ThemeProvider theme={titleFontTheme}>
                                <Typography  variant="h4" component="h4">
                                    Compétences techniques utilisées
                                </Typography>
                            </ThemeProvider>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <ThemeProvider theme={textFontTheme}>
                            <Grid 
                                container
                                direction="row"
                                justify="center"
                                alignItems="center"
                                spacing={10}
                            >
                            {listTechs.map(t => {
                                    return (
                                        <Tech key={t.key} iconName={t.iconName} name={t.name}/>
                                    )
                                })}
                            </Grid>
                        </ThemeProvider>
                    </Grid>
                </Grid>
                
            </div>
        )
    }
}

export default Portfolio;