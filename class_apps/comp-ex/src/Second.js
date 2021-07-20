import React, { Fragment } from 'react';
import Button from '@material-ui/core/Button';
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
            <ButtonGroup>
                <Button color="primary">primary</Button>
                <Button color="secondary">secondary</Button>
                <Button color="danger">danger</Button>
            </ButtonGroup>
        </Fragment>

    )
}

export default Second;