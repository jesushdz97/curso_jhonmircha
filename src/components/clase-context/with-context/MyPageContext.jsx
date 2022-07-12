import React, { useState } from 'react'
import HeaderContext from './HeaderContext'
import MainContext from './MainContext'
import FooterContext from './FooterContext'
import { ThemeProvider } from '../../../context/ThemeContext'
import { LanguageProvider } from '../../../context/LanguageContext'
import { AuthProvider } from '../../../context/AuthContext'

const MyPage = () => {
  return (
    <div className='border p-3'>
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <HeaderContext />
            <hr />
            <MainContext /> <hr />
            <FooterContext />
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  )
}

export default MyPage
