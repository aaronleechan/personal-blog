import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder' 
import tileData from './titleData';

const styles = theme => ({
  root: {
    display: '1 100%',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: "white"
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%, rgba(0,0,0,0) 100%)',
  },
  imageSize: {
    width: '100%',
    height: '100%'
  }
});

function SingleLineGridList(props) {
  const classes = props.classes;
  var data = props.data
  var tileData = [];
  if(data.loading){
    console.log("loading....");
  }else{
    tileData = data.brand.name
  }
    
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={5}>
        {tileData.map(tile =>
          <GridListTile key={tile.imageurl}>
            <img className={classes.imageSize} src={tile.imageurl} alt={tile.name} />
            <GridListTileBar
              title={tile.name}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton>
                  <span className={classes.title}>{tile.price} $</span>
                </IconButton>
              }
            />
          </GridListTile>,
        )}
      </GridList>
    </div>
  );
}

SingleLineGridList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SingleLineGridList);