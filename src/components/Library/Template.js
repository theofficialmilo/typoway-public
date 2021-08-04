import React from 'react'

import { Card, CardMedia, CardContent, CardActions, Typography, Button, Grid, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import Skeleton from '@material-ui/lab/Skeleton'

import Empty from '../../assets/drawing.png'

const useStyles = makeStyles((theme) => ({
    iconButton: {
        marginLeft: 'auto'
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        paddingBottom: 0
    },
    card: {
        boxShadow: 'none'

    },
    emptyText: {
        width: '100%',
        textAlign: 'center',
        marginTop: '10rem'
    },
    emptyImg: {
        paddingBottom: theme.spacing(3),
        width: '160px',
        margin: 'auto'
    }
}));

export const OneTemplate = ({ id, name, templateType, history, onMore }) => {
    const classes = useStyles();

    const handleOnUse = (e) => {
        e.preventDefault();
        let templateId = e.currentTarget.value
        history.push({
            pathname: '/message/new',
            state: templateId
        });
    }

    const handleOnEdit = (e) => {
        e.preventDefault();
        let templateId = e.currentTarget.value
        history.push({
            pathname: '/library/editor',
            state: templateId
        });
    }

    const handleOnMore = (e) => {
        e.preventDefault();
        onMore(e)
    }

    return (
        <Grid item md={3}>
            <Card className={classes.card} variant='outlined' id={id}>
                <CardContent className={classes.cardContent}>
                    <Typography variant='h6'>
                        {name}
                    </Typography>
                    <Typography variant='body2' color='secondary'>
                        {templateType}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Button size="small" color="primary" onClick={e => handleOnUse(e)} value={id}>
                        Use
                    </Button>
                    <Button size="small" color="secondary" onClick={e => handleOnEdit(e)} value={id}>
                        Edit
                    </Button>
                    <IconButton aria-controls="simple-menu" aria-haspopup="true" className={classes.iconButton} onClick={(e) => handleOnMore(e)} value={id}>
                        <MoreVertIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    )
}

export const LoadingTemplate = () => {
    const classes = useStyles();

    return (
        <Grid item md={3}>
            <Card className={classes.card} variant='outlined' >
                <CardContent className={classes.cardContent}>
                    <Typography variant='h6'>
                        <Skeleton width={150} />
                    </Typography>
                    <Typography variant='body2' color='secondary'>
                        <Skeleton width={50} />
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <Button size="small" color="primary" disabled>
                        <Skeleton width={50} />
                    </Button>
                    <Button size="small" color="secondary" disabled>
                        <Skeleton width={50} />
                    </Button>
                    <IconButton className={classes.iconButton} disabled>
                        <MoreVertIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    )
}

export const EmptyList = () => {
    const classes = useStyles();

    return (
        <Grid item md={12} className={classes.emptyText}>
            <CardMedia
                component="img"
                image={Empty}
                title="Template !"
                className={classes.emptyImg}
            />
            <Typography variant='h5'>
                Oops... Looks like you don't have a saved template here
            </Typography>
            <Typography variant='h6'>
                Click on 'Create Template' to start!
            </Typography>
        </Grid>
    )
}