import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import { makeStyles } from '@material-ui/core/styles';
import { SiCplusplus,SiCsharp,SiJava,SiPhp,SiJavascript,SiMysql,SiPostgresql,SiHtml5,SiCsswizardry } from "react-icons/si";
import { render } from '@testing-library/react';


const listCompentencesStyles = makeStyles((theme) => ({
    Contenues: {
     padding: theme.spacing(0,10)
    },
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
        'name' : 'C#',
    },
    {
        'id' : 3, 
        'iconName' : SiJava,
        'name' : 'Java',
    },
    {
        'id' : 4,
        'iconName' : SiPhp,
        'name' : 'php',
    },
    {
        'id' : 5,
        'iconName' : SiJavascript,
        'name' : 'Javascript',
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
        var Icon = this.props.iconName;
        var Component = Icon;
        return <Component />;
    }
}

function test(props){
    const Icon = 'SiPhp';
    return <Icon/>;
}

export default function competences(){
    const classes = listCompentencesStyles();
    
    return (
        <div className={classes.Contenues}>
            {listCompetences.map(c => {
                let txt = c.iconName;
                let Compo = txt;
                return (
                    <div>
                        <Compo />
                        {React.createElement(c.iconName)}
                        <Competence key={c.key} iconName={c.iconName}/>
                    </div>
                )
            })
            }
        </div>
    );
}

