import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import NavAppBar from './components/NavAppBar/NavAppBar'
import HeroUnit from './components/Hero/HeroUnit'

const styles = theme => ({
  root: {
    display: 'flex',
  }
})
class App extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className="App">
        <NavAppBar />
        <HeroUnit />
      </div>
    );
  }
}

App.PropTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(App);
