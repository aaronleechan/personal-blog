import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart' 
import AddShoppingCartRounded from '@material-ui/icons/AddShoppingCartRounded'
import './Naythar.scss';

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
      'linear-gradient(to top,rgba(0,0,0,0.7) 100%, rgba(0,0,0,0) 100%)',
  },
  imageSize: {
    width: '100%',
    height: '100%',

  },
  icon:{
    margin: theme.spacing.unit * 2,
  },
  iconposition:{
    margin: 0,
    color: "white",
    fontSize: "25px",
    justifyContent: 'center'
  },
});

function SingleLineGridList(props) {
  const classes = props.classes;
  var data = props.data
  var tileData = [];
  if(data.loading){
    console.log("loading....");
  }else{
    console.log(data);
    tileData = data.brand.name
  }
    
  return (
    <div className={classes.root}>
      <div className="headerStyle">{props.header}</div>
      <GridList cellHeight={300} className={classes.gridList} cols={5}>
        {tileData.map(tile =>
          <GridListTile key={tile.imageurl}>
            <img className={classes.imageSize} src={tile.imageurl} alt={tile.name}/>
            <GridListTileBar
              title={tile.name}
              price={tile.price}
              classes={{
                root: classes.titleBar,
                title: classes.title
              }}
              actionIcon={
                <IconButton>
                  <span className={classes.iconposition}>
                    <AddShoppingCartRounded fontSize="small" />
                    &nbsp;{tile.price}$
                  </span>
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