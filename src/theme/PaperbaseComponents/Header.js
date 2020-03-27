// Reat imports
import React from "react";

// Redux hooks and actions
import { useDispatch, useSelector } from "react-redux";
import { setTabIndex } from "../../actions/navigation.actions";

// Router imports
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

//Materiel-UI imports
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import HelpIcon from "@material-ui/icons/Help";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

/* -------------------- COMPONENT START -------------------- */

const lightColor = "rgba(255, 255, 255, 0.7)";

const styles = theme => ({
  secondaryBar: {
    zIndex: 0,
    height: 50
  },
  menuButton: {
    marginLeft: -theme.spacing(1)
  },
  iconButtonAvatar: {
    padding: 4
  },
  link: {
    textDecoration: "none",
    color: lightColor,
    "&:hover": {
      color: theme.palette.common.white
    }
  },
  button: {
    borderColor: lightColor
  }
});

function Header(props) {
  const { classes, categories, location, onDrawerToggle } = props;
  const tabIndex = useSelector(state => state.navigation.tabIndex);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      {/* AppBar Toolbar > account stuffs  */}
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Hidden smUp>
              <Grid item>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={onDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
            </Hidden>
            <Grid item xs />
            <Grid item>
              <Link className={classes.link} href="#" variant="body2">
                Go to docs
              </Link>
            </Grid>
            <Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <IconButton color="inherit" className={classes.iconButtonAvatar}>
                <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      {/* AppBar Toolbar > page category name and stuffs  */}
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              {location.pathname === "/" ? (
                <Typography color="inherit" variant="h5" component="h1">
                  Accueil
                </Typography>
              ) : (
                categories.map(({ id, children }) => (
                  <React.Fragment key={id}>
                    {children.map(({ id: childId }) => {
                      const parsedChild = childId
                        .replace(/\s/g, "_")
                        .toLowerCase();

                      return location.pathname.includes(parsedChild) ? (
                        <Typography
                          key={childId}
                          color="inherit"
                          variant="h5"
                          component="h1"
                        >
                          {childId}
                        </Typography>
                      ) : null;
                    })}
                  </React.Fragment>
                ))
              )}
            </Grid>
            <Grid item>
              <Button
                className={classes.button}
                variant="outlined"
                color="inherit"
                size="small"
              >
                Web setup
              </Button>
            </Grid>
            <Grid item>
              <Tooltip title="Help">
                <IconButton color="inherit">
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      {/* AppBar Toolbar > page category tabs  */}
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        {categories.map(({ children }) => {
          return children.map(({ id: childId, subCategories: subsTabs }) => {
            const parsedChild = childId.replace(/\s/g, "_").toLowerCase();

            return location.pathname.includes(parsedChild) ? (
              subsTabs !== undefined ? (
                <Tabs
                  key={childId}
                  value={tabIndex}
                  textColor="inherit"
                  className={classes.secondaryBar}
                >
                  {subsTabs.map((sub, index) => {
                    return (
                      <Tab
                        key={index}
                        textColor="inherit"
                        label={sub.tabLabel}
                        tabIndex={index}
                        onClick={() => dispatch(setTabIndex(index))}
                      />
                    );
                  })}
                </Tabs>
              ) : null
            ) : null;
          });
        })}
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  onDrawerToggle: PropTypes.func.isRequired
};

export default compose(withRouter, withStyles(styles))(Header);
