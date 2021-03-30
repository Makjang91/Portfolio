import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { makeStyles } from '@material-ui/core/styles';
import { SiCplusplus,SiCsharp,SiJava,SiPhp,SiJavascript,SiMysql,SiPostgresql,SiHtml5,SiCsswizardry } from "react-icons/si";
import { render } from '@testing-library/react';
import Grid from '@material-ui/core/Grid';


const divCompetenceStyle = makeStyles((theme) => ({
    contenues: {
        padding: theme.spacing(0,10)
    },
    listCompetence: {
        padding: theme.spacing(0,0),
    }
  }));

const listCompetences = [
    {
        'id' : 1,
        'iconName' : SiCplusplus,
        'name' : 'C++',
    },
    {
        'id' : 2,
        'iconName' : SiCsharp,
        'name' : 'C# (Unity)',
    },
    {
        'id' : 3, 
        'iconName' : SiJava,
        'name' : 'Java',
    },
    {
        'id' : 4,
        'iconName' : SiPhp,
        'name' : 'php (Symfony)',
    },
    {
        'id' : 5,
        'iconName' : SiJavascript,
        'name' : 'Javascript (React)',
    },
    {
        'id' : 6,
        'iconName' : SiMysql,
        'name' : 'mySQL',
    },
    {
        'id' : 7,
        'iconName' : SiPostgresql,
        'name' : 'postgreSQL',
    },
    {
        'id' : 8,
        'iconName' : SiHtml5,
        'name' : 'HTML',
    },
    {
        'id' : 9,
        'iconName' : SiCsswizardry,
        'name' : 'CSS',
    },
]


class Competence extends React.Component{
    
    render() {
        const Icon = this.props.iconName;

        return <List className={this.props.mt}>
                    <ListItem>
                        <ListItemIcon>
                            <Icon size={32} style={{ fill: '#3c3c3b' }}/>
                        </ListItemIcon>
                        <ListItemText
                            primary={this.props.name}
                            secondary={null}
                        />
                    </ListItem>
                </List>
    }
}


export default function competences(){
    const classes = divCompetenceStyle();
    const smt = classes.listCompetence;
    let left = [];
    let right = [];
    const lc = listCompetences.map(c => { 
        if(c.id%2 == 1){
            left.push(<Competence iconName={c.iconName} name={c.name} mt={smt}/>);
        } else{
            right.push(<Competence iconName={c.iconName} name={c.name} mt={smt}/>);
        }
    })

    return (
        <div className={classes.contenues}>
            <Grid container>
                <Grid item mx={3}>
                    {left}
                </Grid>
                <Grid item mx={3}>
                    {right}
                </Grid>
            </Grid>
        </div>
    );
}

