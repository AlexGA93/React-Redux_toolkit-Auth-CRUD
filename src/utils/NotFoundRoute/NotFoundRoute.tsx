import React from 'react'
import { Route, Routes } from 'react-router-dom';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const NotFoundRoute = ({children}: Props) => {

  // If there isn't any of the child routes, we want to render a not found component
  return (
    <Routes>
      { children }
      <Route path='*' element={<h1>NOT FOUND COMPONENT</h1>} />
    </Routes>

  )
}

export default NotFoundRoute
