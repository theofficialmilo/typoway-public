import React, { Suspense, useEffect, useCallback, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Hidden, Typography } from '@material-ui/core';

import { Route, Switch, useHistory } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute'

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import Loading from './components/Loading'
import BreakpointWarn from './components/BreakpointWarn';

import { loginAction } from './state/user/userDucks'
import { clearAlertAction, setAlertAction } from './state/app/appDucks';


const Auth = lazy(() => import('./pages/Auth'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Home = lazy(() => import('./pages/Home'));


function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  const updateSigninStatus = useCallback((isSignedIn) => {
    if (isSignedIn) {
      dispatch(loginAction({ history: history }))
    }
    else {
      if (isSignedIn !== false) {
        dispatch(setAlertAction({ type: 'error', message: 'Something went wrong. Please relogin again.' }));
      }
    }
  }, [dispatch])

  const initClient = useCallback(() => {
    window.gapi.client.init({
      apiKey: 'AIzaSyC_YGIEP_sfw3fvgcVzkdmeYCM8Hffhbdk',
      clientId: '277440582792-gr130fr9ptgu2t7tafcq317dceaepe0p.apps.googleusercontent.com',
      scope: "https://mail.google.com/",
      discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest"]
    }).then(() => {
      window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
      updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
    }).catch((err) => {
      dispatch(setAlertAction({ type: 'error', message: 'Something went wrong. Please try again again.'  }))
    })
  }, [updateSigninStatus])

  useEffect(() => {
    (async () => {
      await window.gapi.load('client:auth2', initClient);
    })();
  }, [initClient]);

  let alert = useSelector((state) => state.app.alert)

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleClose = () => {
    dispatch(clearAlertAction());
  }

  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Hidden smDown implementation='css'>
          <Switch>
            <Route exact path='/auth' component={Auth} />
            <Route exact path='/privacy-policy' component={Privacy} />
            <ProtectedRoute path='/' component={Home} />
          </Switch>
          <Snackbar 
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} 
            open={alert.isOpen} 
            autoHideDuration={3000} 
            onClose={handleClose}>
              <Alert onClose={handleClose} severity={alert.type}>
                <Typography variant='body1'>{alert.message}</Typography>
              </Alert>
          </Snackbar>
        </Hidden>
        <Hidden mdUp implementation='css'>
          <BreakpointWarn />
        </Hidden>
      </Suspense>
    </div >
  );
}

export default App;
