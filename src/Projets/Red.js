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
        'pri': "Mouvement",
        'sec': "Toggle marcher/courir, Viser avec le souris et Arme:Poing/Pistol" 
    },
    {
        'pri': "interaction avec les ennemis",
        'sec': "patrouille, Détection, Suivre, Attaque, Alerter ses collègues",
    },
    {
        'pri': "Interaction avec les objets",
        'sec': "S'appoujipir, Se cacher et Ouvrir une porte"
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
            <Grid item >
                <Icon/> {this.props.name}
            </Grid>
        )
    }
}


class Red extends React.Component{
    
    render() {
        const { classes } = this.props;

        return (
                <div className={classes.section_img}>
                    <Grid container justify="center">
                        <Box mt={5}>
                            <Typography  variant="h1" component="h1">
                                Red
                            </Typography>
                        </Box>
                    </Grid>
                    <Box mt={10}>
                        <Grid container spacing={0}>
                            <Grid item xs={6}>
                                <Typography  variant="h5" component="h5">
                                    Description
                                </Typography>
                                <Box mt={3}>
                                    <Typography variant="body1">
                                        Red est un jeu vidéo réalisé comme un projet de groupe pour la fin d'étude.<br/>
                                        Il est un jeu de platform. Il est fait par Unity <br/>
                                        Red entre dans un immeuble et se bat avec ses mains et une pistolet. <br/>
                                    </Typography>
                                </Box>
                                <Box mt={10}>
                                    <Typography  variant="h5" component="h5">
                                        Fonctionnalités
                                    </Typography>
                                    <List>
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
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography  variant="h5" component="h5">
                                    Tecniques
                                </Typography>
                                <Box mt={3}>
                                    <Grid 
                                        container
                                        direction="row"
                                        justify="center"
                                        alignItems="flex-start"
                                        spacing={2}
                                    >
                                        {listTechs.map(t => {
                                            return (
                                                <Tech key={t.key} iconName={t.iconName} name={t.name}/>
                                            )
                                        })}
                                    </Grid>
                                    <ReactPlayer
                                        style={{'padding-top': '3rem'}}
                                        width={"38rem"}    
                                        url="https://www.youtube.com/watch?v=SPTtDNhM-Ko"
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
        )
    }
}

export default withStyles(redStyles)(Red);