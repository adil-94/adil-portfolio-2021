import React, { useEffect } from 'react'
import './App.css';
import MainContainer from './conatiner-components/main-container';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { BiChevronUp } from 'react-icons/bi'

function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}
const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));



function App(props) {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  const { children, win } = props;
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: win ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const onScrollTop = (event) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 500)

    window.addEventListener('resize', debouncedHandleResize)

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)

    }
  })
  return (
    <div className="App">
      <MainContainer />
      <Zoom in={trigger}>
        <div onClick={onScrollTop} role="presentation" className={classes.root}>
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <BiChevronUp size={30} />
          </Fab>
        </div>
      </Zoom>
    </div>
  );
}

export default App;
