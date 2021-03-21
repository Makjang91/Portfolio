import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

class competence extends React.Component {
    render() {
        
        return (
            <List>
                <ListItem>
                    <ListItemIcon>
                        {this.props.iconName}
                    </ListItemIcon>
                    <ListItemText
                    primary={this.props.name}
                    secondary={null}
                    />
                </ListItem>
            </List>
        )
    }
}