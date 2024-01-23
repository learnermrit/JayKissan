import React from 'react'

function Logo({width = '100px', size= '18px'}) {
  return (
    <div className='logo ' style={{ fontSize: size, color: 'black' }}>Jay Kissan</div>
  )
}

export default Logo