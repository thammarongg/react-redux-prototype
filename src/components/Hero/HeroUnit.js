import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { connect } from 'react-redux'



const styles = theme => ({
    heroUnit: {
        backgroundColor: theme.palette.background.paper,
    },
    heroContent:{
        maxWidth: 600,
        margin: '0 auto',
        padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    },
    heroButtons: {
        marginTop: theme.spacing.unit * 4,
    }
})
const { classes } = this.props
const HeroUnit = ({message, counter}) => (
    <div className={classes.heroUnit}>
                <div className={classes.heroContent}>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Album layout
                    </Typography>
                </div>
            </div>
    )

// class HeroUnit extends Component {
//     render() {
//         const { classes } = this.props
//         return (
//             <div className={classes.heroUnit}>
//                 <div className={classes.heroContent}>
//                     <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
//                         Album layout
//                     </Typography>
//                 </div>
//             </div>
//         )
//     }
// }

const mapStateToProps = function(state) {
    return {
      message: 'This is message from mapStateToProps',
      counter: state.counters || 0
    }
  }

HeroUnit.PropTypes = {
    classes: PropTypes.object.isRequired,
}
const AppWithConnect = connect(mapStateToProps)(HeroUnit)
export default withStyles(styles)(AppWithConnect)