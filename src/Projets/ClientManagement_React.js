import React from 'react';

import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import { SiCsswizardry, SiHtml5, SiJavascript, SiMariadb, SiReact } from "react-icons/si";

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
                <Icon/> {this.props.name}
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
                        <Typography  variant="h1" component="h1">
                            Client Management System
                        </Typography>
                    </Box>
                </Grid>
                <Box mt={10}>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography  variant="h5" component="h5">
                                Description
                            </Typography>
                            <Box mt={3}>
                                <Typography variant="body1">
                                    Projet personnel réalisé pour apprendre le Framework React<br/>
                                    Ce site web permet de manipuler ajout, efface et modification.
                                </Typography>

                            </Box>
                            <Box mt={10}>
                                <Typography  variant="h5" component="h5">
                                    Fonctionnalités
                                </Typography>
                                <List>
                                    
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
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                
            </div>
        )
    }
}

export default ClientManagementSystme;