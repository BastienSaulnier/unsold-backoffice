// React imports
import React from "react";

// Redux hooks and actions
import { useDispatch } from "react-redux";
import { resetTabIndex } from "../../actions/navigation.actions";

// Router imports
import { NavLink, withRouter } from "react-router-dom";
import { compose } from "recompose";

//Materiel-UI imports
import PropTypes from "prop-types";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";

/* -------------------- COMPONENT START -------------------- */

const styles = theme => ({
  categoryHeader: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white
  },
  item: {
    paddingTop: 1,
    paddingBottom: 1,
    color: "rgba(255, 255, 255, 0.7)",
    "&:hover,&:focus": {
      backgroundColor: "rgba(255, 255, 255, 0.08)"
    }
  },
  itemCategory: {
    backgroundColor: "#232f3e",
    boxShadow: "0 -1px 0 #404854 inset",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  firebase: {
    fontSize: 24,
    color: theme.palette.common.white
  },
  itemActiveItem: {
    color: "#4fc3f7"
  },
  itemPrimary: {
    fontSize: "inherit"
  },
  itemIcon: {
    minWidth: "auto",
    marginRight: theme.spacing(2)
  },
  divider: {
    marginTop: theme.spacing(2)
  }
});

function Navigator(props) {
  const { staticContext, categories, classes, location, ...other } = props;
  const dispatch = useDispatch();

  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        {/* Aside Menu Headers */}
        <ListItem
          className={clsx(classes.firebase, classes.item, classes.itemCategory)}
        >
          UNSOLD Dashboard
        </ListItem>
        <ListItem
          className={clsx(classes.item, classes.itemCategory)}
          component={NavLink}
          to="/"
        >
          <ListItemIcon className={classes.itemIcon}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.itemPrimary
            }}
          >
            Retour à l'accueil
          </ListItemText>
        </ListItem>

        {/* Aside Menu Mapped Categories and Sub Sategories */}
        {categories.map(({ id, children }) => (
          <React.Fragment key={id}>
            <ListItem className={classes.categoryHeader}>
              <ListItemText
                classes={{
                  primary: classes.categoryHeaderPrimary
                }}
              >
                {id}
              </ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon }) => {
              const to = `/${childId.replace(/\s/g, "_").toLowerCase()}`;

              return (
                <ListItem
                  key={childId}
                  button
                  className={clsx(
                    classes.item,
                    location.pathname.includes(to)
                      ? classes.itemActiveItem
                      : null
                  )}
                  component={NavLink}
                  to={to}
                  onClick={() => dispatch(resetTabIndex())}
                >
                  <ListItemIcon className={classes.itemIcon}>
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.itemPrimary
                    }}
                  >
                    {childId}
                  </ListItemText>
                </ListItem>
              );
            })}

            <Divider className={classes.divider} />
          </React.Fragment>
        ))}
      </List>
    </Drawer>
  );
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(withRouter, withStyles(styles))(Navigator);
