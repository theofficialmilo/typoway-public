import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';

import { Card, CardHeader, CardContent, CardActions, Fab, makeStyles } from '@material-ui/core'

import { Add as AddIcon } from '@material-ui/icons'

import TemplateList from '../../container/Library/TemplateList'
import DialogConfirm from '../../components/DialogConfirmation'

import { getListAction } from '../../state/template/templateDucks'
import { setAlertAction } from '../../state/app/appDucks';

import { deleteTemplate } from '../../service/templateServices';

import { dialogDeleteData } from '../../utils/data';

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        bottom: theme.spacing(5),
        right: theme.spacing(5),
        textTransform: 'initial'
    },
    fabIcon: {
        marginRight: theme.spacing(1)
    },
    card: {
        height: '100%',
        maxWidth: 'calc(100% - 84px)',
        padding: theme.spacing(1),
        flex: '1 0 auto'
    },
    cardActions: {
        textAlign: 'right'
    },
    cardName: {
        overflowY: 'auto'
    },
    tabsContainer: {
        borderBottom: `1px solid ${theme.palette.secondary.light}`
    },
    tab: {
        minWidth: 'auto',
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3)
    }
}))

const Library = ({ history }) => {
    const classes = useStyles();
    const dispatch = useDispatch()

    const [isOpen, setIsOpen] = useState(false)
    const [selectedId, setSelectedId] = useState('');

    let userEmail = useSelector(state => state.user.user.email)
    let template = useSelector((state) => state.template)

    useEffect(() => {
        dispatch(getListAction(userEmail))
    }, [dispatch, userEmail])

    const handleOnDelete = (id) => {
        setSelectedId(id);
        setIsOpen(true)
    }

    const handleOnClick = () => {
        deleteTemplate(selectedId)
            .then(data => {
                dispatch(setAlertAction({ type: 'success', message: data }))
                setIsOpen(false)
                dispatch(getListAction(userEmail))
            })
    }

    const dialogConfirmationData = dialogDeleteData();

    return (
        <>
            <Card className={classes.card}>
                <CardHeader title={'Template List'} />
                <CardContent className={classes.cardName}>
                    <TemplateList history={history} onDelete={handleOnDelete} load={template.isLoading} templates={template.list} />
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <Fab
                        variant="extended"
                        component={RouterLink}
                        to={'/library/editor'}
                        color="primary"
                        aria-label="add"
                        className={classes.fab}>
                        <AddIcon className={classes.fabIcon} />
                        Create Template
                    </Fab>
                </CardActions>
            </Card>
            <DialogConfirm isOpen={isOpen} data={dialogConfirmationData} handleCancel={() => setIsOpen(false)} handleClick={handleOnClick} />
        </>
    )
}

export default Library