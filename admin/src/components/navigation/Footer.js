import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import { VIDEO_CREATE } from "../../helpers/constants";
import { useSelector, useDispatch } from "react-redux";
import {
  _HOME,
  HOME,
  SUBCRIPTIONS,
  TRENDING,
  LIBRARY,
} from "../../helpers/constants";
import {
  isHome,
  isLibrary,
  isSubscriptions,
  isTrending,
} from "../../actions/navigationAction";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    flexShrink: 0,
    [theme.breakpoints.only("xs")]: {
      display: "block",
    },
    display: "none",
  },
  textLink: {
    color: "inherit",
    textDecoration: " inherit",
  },
  leftButtonPadding: {
    paddingLeft: theme.spacing(3),
  },
  rightButtonPadding: {
    paddingLeft: theme.spacing(10),
  },
  endButtonPadding: {
    paddingLeft: theme.spacing(4),
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
  },
}));

export default function Footer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const navigation = useSelector((state) => state.navigation);
  const handleChange = (event, value) => {
    if (value === HOME) {
      dispatch(isHome());
    }
    if (value === TRENDING) {
      dispatch(isTrending());
    }
    if (value === LIBRARY) {
      dispatch(isLibrary());
    }
    if (value === SUBCRIPTIONS) {
      dispatch(isSubscriptions());
    }
  };

  return (
    <BottomNavigation
      value={navigation.selected}
      onChange={handleChange}
      className={classes.root}
      color="text"
      style={
        theme.isDark ? { background: "#181818" } : { background: "#f9f9f9" }
      }
    >
      <Link to={VIDEO_CREATE}>
        <Fab color="primary" className={classes.fabButton}>
          <AddIcon />
        </Fab>
      </Link>

      <BottomNavigationAction
        className={classes.leftButtonPadding}
        label={_HOME}
        value={HOME}
        component={Link}
        to={HOME}
        icon={<HomeIcon />}
      />

      <BottomNavigationAction
        label={TRENDING}
        className={classes.leftButtonPadding}
        value={TRENDING}
        component={Link}
        to={TRENDING}
        icon={<WhatshotIcon />}
      />

      <BottomNavigationAction
        label={SUBCRIPTIONS}
        value={SUBCRIPTIONS}
        className={classes.rightButtonPadding}
        icon={<SubscriptionsIcon />}
      />
      <BottomNavigationAction
        label={LIBRARY}
        value={LIBRARY}
        className={classes.endButtonPadding}
        icon={<VideoLibraryIcon />}
      />
    </BottomNavigation>
  );
}
