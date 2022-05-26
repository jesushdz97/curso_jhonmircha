import React, { useRef } from 'react'

const References = () => {
  let refMenu = useRef()
  let refMenuBtn = useRef()

  const handleToggleMenu = (e) => {
    /* >> FORMA ANTIGUA <<
    const $menuHTML = document.getElementById('menu')

    if (e.target.textContent === 'Menú') {
      e.target.textContent = 'Cerrar'
      $menuHTML.style.display = 'block'
    } else {
      e.target.textContent = 'Menú'
      $menuHTML.style.display = 'none'
    } >> FORMA ANTIGUA <<
    */

    let $menuBtn = refMenuBtn.current
    let $menu = refMenu.current

    if ($menuBtn.textContent === 'Menú') {
      $menuBtn.textContent = 'Cerrar'
      $menu.style.display = 'block'
    } else {
      $menuBtn.textContent = 'Menú'
      $menu.style.display = 'none'
    }
  }

  return (
    <>
      <h2>Referencias</h2>
      <button id='menu-btn' ref={refMenuBtn} onClick={handleToggleMenu}>
        Menú
      </button>
      <br />
      <nav id='menu' ref={refMenu} style={{ display: 'none' }}>
        <a href='https://www.google.com.co'>section 1</a> <br />
        <a href='https://www.google.com.mx'>section 2</a> <br />
        <a href='https://www.google.com'>section 3</a> <br />
        <a href='https://www.google.com.ar'>section 4</a> <br />
        <a href='https://www.google.com.ge'>section 5</a> <br />
      </nav>
      <hr />
    </>
  )
}

export default References
