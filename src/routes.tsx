import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/main'
import { NotFound } from './pages/not-found'

export const AppRoutes: React.FunctionComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
