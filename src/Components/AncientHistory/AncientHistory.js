import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Sources } from './AncientChapters/Sources'
import { StoneAge } from './AncientChapters/StoneAge'

export const AncientHistory = () => {
  return (
    <div>
        {/* <Sources />
        <StoneAge /> */}
        <Link to="/ancient-history/sources">Sources</Link>
        <Link to="/ancient-history/stone-age">Stone Age</Link>
        <Outlet />
    </div>
  )
}
