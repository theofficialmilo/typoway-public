import { StaticContext } from 'react-router';
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {RootState} from '../state/store'
import React from 'react'

interface PropTypes extends RouteProps {
  component: React.ComponentType<any> | React.ComponentType<RouteComponentProps<any, StaticContext, unknown>> | undefined
}

const ProtectedRoute = ({ component: RouteComponent, ...rest }:PropTypes) => {
  let isAuth = useSelector((state: RootState) => state.user.isAuth)
  if (!RouteComponent) return null;
  return (
    <Route {...rest}
      render={(routeProps) =>
        isAuth ?
          (<RouteComponent {...routeProps} />) :
          <Redirect to={'/auth'} />
      }
    />
  );
}

export default ProtectedRoute
