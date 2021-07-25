import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectedRoute = ({ component: RouteComponent, ...rest }) => {
  let isAuth = useSelector((state) => state.user.isAuth)

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isAuth ?
          (<RouteComponent {...routeProps} />) :
          (<Redirect to={'/auth'} />)
      }
    />
  );
}

export default ProtectedRoute
