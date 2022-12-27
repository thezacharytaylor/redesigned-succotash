import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

const DashboardSidebarNavigation = () => {
  // const classes = useStyles();
  const { pathname } = useLocation();
  useEffect(() => {}, []);
  return (
    // <div className={classes.root}>
    /* { <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
        anchor="left"
      >
        <Toolbar
          style={{ width: '6rem', height: 'auto' }}
          className={classes.toolbar}
        >
          <Link to={`${pathname}`} className={classes.logoWithLink}>
            Logo
          </Link>
        </Toolbar>
      </Drawer> }*/
    // </div>
    <></>
  );
};

export default DashboardSidebarNavigation;

const drawerWidth = 240;
// const useStyles = makeStyles(theme =>
//   createStyles({
//     root: { display: 'flex' },
//     drawer: { width: drawerWidth, flexShrink: 0 },
//     drawerPaper: { width: drawerWidth },
//     drawerContainer: { overflow: 'auto' },
//     toolbar: theme.mixins.toolbar,
//     content: { flexGrow: 1, padding: theme.spacing(3) },
//     link: { textDecoration: 'none', color: 'inherit' },
//     logoWithLink: {
//       display: 'flex',
//       alignItems: 'center',
//       textDecoration: 'none',
//       color: 'inherit',
//     },
//   }),
// );
