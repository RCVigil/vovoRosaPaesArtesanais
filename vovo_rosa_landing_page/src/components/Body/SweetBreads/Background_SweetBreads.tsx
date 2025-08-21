import React from 'react'
import duetoChoco from "../../../assets/images/SweetBreads/paoChocoDLeite3.jpeg"
import "./_background_SweetBreads.scss"

const Background_SweetBreads = () => {
  return (
    <div id='__background_SweetBreads'>
      <img className='duetoChoco_image' src={duetoChoco} alt="Imagem do Pão Dueto de chocolate com doce de leite" />
    </div>
  )
}

export default Background_SweetBreads