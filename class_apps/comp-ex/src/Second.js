import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function Second(){
    return(
        <Fragment>
            <Button>Fisrt</Button>
            <Button color="primary">primary</Button>
            <Button color="secondary">secondary</Button>
            <Button color="danger">danger</Button>
            <Button disabled>disabled</Button>
            <Button href="#text-buttons" color="primary">
            Link
            </Button>
            <br /><br />

            <Button variant="contained">Fisrt</Button>
            <Button color="primary" variant="contained">primary</Button>
            <Button color="secondary" variant="contained">secondary</Button>
            <Button color="danger" variant="contained">danger</Button>
            <Button disabled variant="contained">disabled</Button>
            <br /><br />

            <Button variant="outlined">Fisrt</Button>
            <Button color="primary" variant="outlined">primary</Button>
            <Button color="secondary" variant="outlined">secondary</Button>
            <Button color="danger" variant="outlined">danger</Button>
            <Button disabled variant="outlined">disabled</Button>
            <Button variant="outlined" color="primary" href="#outlined-buttons">
            Link
            </Button>
            
            <br /><br />
            <ButtonGroup>
                <Button color="primary">primary</Button>
                <Button color="secondary">secondary</Button>
                <Button color="danger">danger</Button>
            </ButtonGroup>
            <br></br>
            <Button>Fisrt</Button>
            <Button color="primary" size="small" variant="outlined">primary</Button>
            <Button color="secondary" size="medium" variant="contained">secondary</Button>
            <Button color="danger" size="large" variant="">danger</Button>
            <br /><br />
            <IconButton color="primary" size="large" variant="outlined">
           {/*  import AccountCircleIcon from '@material-ui/icons/AccountCircle'; */}
            <AccountCircleIcon />
            </IconButton>
            <br></br><br></br>
            <Button variant="contained"
                    color="primary"
                    size="medium"
                    startIcon={<AccountCircleIcon />}>
                Account
            </Button>
            <Button variant="contained"
                    color="secondary"
                    size="medium"
                    endIcon={<HomeIcon />}>
                Home
            </Button>
        </Fragment>

    )
}

export default Second;