import React from 'react';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { SiLinkedin, SiGithub } from "react-icons/si";
import { RiCopyrightLine } from "react-icons/ri";

class footer extends React.Component{

    render() {
        return (
            <Box pt={10}>
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
                <Box mt={3} style={{ textAlign: 'center'}}>
                    <Typography variant="BUTTON TEXT">
                        YUN SEUNGUK <RiCopyrightLine size={12}/>2021
                    </Typography>
                </Box>
            </Box>
        )
    }
}


export default footer;