import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typegraphy from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
})


class NavAppBar extends Component {
render() {
  const { classes } = this.props;
  
  return (
    <div className={classes.appBar}>
      <AppBar position="static">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
        <MenuIcon />
        </IconButton>
        <Typegraphy variant="h6" color="inherit">
        News
        </Typegraphy>
        <Button color="inherit">Login</Button>
      </Toolbar>
      </AppBar>
    </div>
  )
}
}

NavAppBar.PropTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NavAppBar);