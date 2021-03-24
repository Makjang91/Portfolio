import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import { SiCsswizardry, SiHtml5, SiJavascript, SiMariadb, SiReact } from "react-icons/si";

const fonctionnalites = [
    {
        'pri': "Ajout des clients avec un modal",
        'sec': ""
    },
    {
        'pri': "Efface des clients",
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
                <Icon size={32}/> <br/>{this.props.name}
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
                        <Typography  variant="h3" component="h3">
                            Client Management System
                        </Typography>
                    </Box>
                </Grid>
                <Box mt={10}>
                    <Grid container style={{textAlign:"center"}}>
                        <Grid item xs={6}>
                            <Typography  variant="h5" component="h5">
                                Description
                            </Typography>
                            <Box mt={3}>
                                <Typography variant="body1">
                                    Projet personnel réalisé pour apprendre le Framework React<br/>
                                    Ce site est une application de gérer des clients avec l'interaction de base de données.<br/>
                                    Il permet de manipuler l'ajout et l'efface des clients.<br/>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography  variant="h5" component="h5">
                                Fonctionnalités
                            </Typography>
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
                        </Grid>
                    </Grid>
                </Box>
                <Grid container style={{textAlign:"center"}}>
                    <Grid item xs={12}>
                        <Box mb={5} mt={5}>
                            <Typography  variant="h5" component="h5">
                                Tecniques
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
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
                    </Grid>
                </Grid>
                
            </div>
        )
    }
}

export default ClientManagementSystme;