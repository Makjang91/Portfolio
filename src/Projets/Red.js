import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import { SiCsharp, SiUnity } from "react-icons/si";
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ReactPlayer from "react-player"

import RedBackGround from '../img/Red_image.png'
import { withStyles  } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
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
        'iconName': SiCsharp,
        'name': "C#",
    },
    {
        'id': 2,
        'iconName': SiUnity,
        'name': "Unity"
    },
];

const fonctionnalites = [
    {
        'pri': "Mouvement du personnage dirigé par le clavier et la souris du joueur",
        'sec': "Toggle marcher/courir avec le clavier, viser avec la souris et zction de l'arme (Poing/Pistolet) avec le clavier" 
    },
    {
        'pri': "Interaction avec les ennemis",
        'sec': "Les annemis patrouillent sur un chemin défini, détectent, quivent, attaquent le joueur et alertent leurs collègues",
    },
    {
        'pri': "Interaction avec les objets",
        'sec': "Le personnage peut se cacher derrière des boîtes ou dans un placard et ouvrir une porte."
    },
];

const redStyles = theme => ({
    section_img: {
        background:  `linear-gradient(rgba(255,255,255,0.8),rgba(255,255,255,0.8)),url(${RedBackGround})`,
        width: '100%',
    },
    
  });



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


class Red extends React.Component{
    
    render() {
        const { classes } = this.props;

        return (
                <div>
                    <Grid container justify="center">
                        <Box>
                            <ThemeProvider theme={titleFontTheme}>
                                <Typography  variant="h2" component="h2">
                                    Red
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
                                            Red est un jeu vidéo réalisé pour un projet de fin d'étude.<br/>
                                            C'est un jeu de plateforme. Il est réalisé via Unity. <br/>
                                            Red (le personnage principal) entre dans un immeuble et <br/>
                                            se bat avec ses mains et un pistolet contre des ennemis programmés. <br/>
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
                                <List >
                                    {fonctionnalites.map(f => {
                                        return (
                                            <ThemeProvider theme={textFontTheme}>
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <FiberManualRecordIcon />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={f.pri}
                                                        secondary={f.sec}
                                                    />
                                                </ListItem>
                                            </ThemeProvider>
                                        )
                                    })}
                                </List>
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
                            <Box mt={3}>
                                <ThemeProvider theme={textFontTheme}>
                                    <Grid 
                                        container
                                        direction="row"
                                        justify="center"
                                        alignItems="flex-start"
                                    >
                                        {listTechs.map(t => {
                                            return (
                                                <Tech key={t.key} iconName={t.iconName} name={t.name}/>
                                            )
                                        })}
                                    </Grid>
                                </ThemeProvider>
                                <Grid container justify="center">
                                    <Box mb={5}>
                                        <ReactPlayer
                                            style={{'padding-top': '3rem'}}
                                            width={"38rem"}    
                                            url="https://www.youtube.com/watch?v=SPTtDNhM-Ko"
                                        />
                                    </Box>
                                </Grid>
                            </Box>
                        </Grid>
                            
                    </Grid>
                    
                </div>
        )
    }
}

export default withStyles(redStyles)(Red);