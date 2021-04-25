import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import tileData from '../assests/gallery.js';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: 'linear - gradient(to right, rgba(193, 131, 84, 0.7), rgba(152, 100, 80, 0.7), rgba(146, 83, 56, 0.7), rgba(84, 56, 34, 0.7))',
        margin: "30px",

        justifyContent: "left",
        alignContent: "left",





    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',



    },
    titleAbout: {


        fontWeight: "300",
        fontFamily: "Roboto",



    },
    titleBox: {
        textAlign: 'left',
        marginLeft: "10px",
        marginBottom: "10px"
    }




}));


function SingleLineGridList() {
    const classes = useStyles();

    return (
        <div className={classes.root}>


            <Box className={classes.titleBox}><Typography className={classes.titleAbout} variant={'h4'}>Current Work</Typography></Box>



            <GridList xs={12} className={classes.gridList} cols={2.5}>
                {tileData.map((tile, i) => (
                    <GridListTile className={classes.gridTile} key={i} cols={tile.cols || 1}>
                        <img className={classes.imageC} src={tile.imageUrl} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>{tile.description}</span>}
                            classes={{
                                root: classes.titleBar,
                                title: classes.title,
                            }}

                        />
                    </GridListTile>
                ))}
            </GridList>

        </div>
    );
}

export default SingleLineGridList