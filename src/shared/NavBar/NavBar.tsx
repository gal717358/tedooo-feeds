import useStyles from './useStyles';
import { ReactComponent as TedoooLogo } from '../../assets/icons/tedooLogo.svg';

const NavBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.navBarContainer}>
        <TedoooLogo />
      </div>
    </div>
  );
};

export default NavBar;
