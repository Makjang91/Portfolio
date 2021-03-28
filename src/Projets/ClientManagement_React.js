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

import { SiCsswizardry, SiHtml5, SiJavascript, SiMariadb, SiReact } from "react-icons/si";
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

const fonctionnalites = [
    {
        'pri': "Ajout des clients par le biais d'un formulaire dans une pop-in (modal)",
        'sec': ""
    },
    {
        'pri': "Effaçage des clients de la base de données",
        'sec': ""
    },
]
const listTechs = [
    {
        'id': 1,
        'iconName': SiJavascript,
        'name': "Javascript",
    },
    {
        'id': 2,
        'iconName': SiReact,
        'name': "React"
    },
    {
        'id': 3,
        'iconName': SiHtml5,
        'name': "Html"
    },
    {
        'id': 4,
        'iconName': SiCsswizardry,
        'name': "Css"
    },
    {
        'id': 5,
        'iconName': SiMariadb,
        'name': "Mariadb",
    },
];

class Tech extends React.Component{
    render() {
        const Icon = this.props.iconName;
        return (
            <Grid item >
                <Icon size={32} style={{ fill: '#3c3c3b' }}/> <br/>{this.props.name}
            </Grid>
        )
    }
}

class ClientManagementSystme extends React.Component {
    render() {
        return (
            <div>
                <Grid container justify="center">
                    <Box mt={5}>
                        <ThemeProvider theme={titleFontTheme}>
                            <Typography  variant="h3" component="h3">
                                Client Management System
                            </Typography>
                        </ThemeProvider>
                    </Box>
                </Grid>
                <Box mt={10}>
                    <Grid container style={{textAlign:"center"}}>
                        <Grid item xs={6}>
                            <ThemeProvider theme={titleFontTheme}>
                                <Typography  variant="h4" component="h4">
                                    Description
                                </Typography>
                            </ThemeProvider>
                            <Box mt={3}>
                                <ThemeProvider theme={textFontTheme}>
                                    <Typography variant="body1">
                                        Projet personnel réalisé pour apprendre a utiliser le Framework React.<br/>
                                        Ce site est une application pour gérer des clients avec une base de données.<br/>
                                        Il permet d'ajouter et effacer des clients.<br/>
                                    </Typography>
                                </ThemeProvider>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <ThemeProvider theme={titleFontTheme}>
                                <Typography  variant="h4" component="h4">
                                    Fonctionnalités
                                </Typography>
                            </ThemeProvider>
                            <ThemeProvider theme={textFontTheme}>
                                <List >
                                        {fonctionnalites.map(f => {
                                            return (
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <FiberManualRecordIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={f.pri}
                                                        secondary={f.sec}
                                                    />
                                                </ListItem>
                                            )
                                        })}
                                </List>
                                </ThemeProvider>
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
                <Grid container justify="center">
                    <Box mt={5}>
                        <ThemeProvider theme={titleFontTheme}>
                            <Typography variant="h5">
                                <Button href="/js">Allez voir le site !</Button>
                            </Typography>
                        </ThemeProvider>
                    </Box>
                </Grid>
                
            </div>
        )
    }
}

export default ClientManagementSystme;