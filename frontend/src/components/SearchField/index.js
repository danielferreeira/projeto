import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
}));

export default function InputSearch(props) {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>
            <InputBase
                autoFocus
                className={classes.input}
                placeholder="Digite para pesquisar um produto"
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={props.handleInputChange}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
}