import React from 'react'

import FileBase64 from 'react-file-base64'

import placeholder from './Placeholder.png'

import styles from './img-preview.module.scss'

const ImgPrev = ({ img = null, setImage = (img) => { }, isDisabled = false }) => {

  const handleStoreImage = (img) => {
    if (img.type.includes('jpeg') || img.type.includes('jpg') || img.type.includes('png'))
      setImage(img.base64)
  }
  
  return (
    <div className={styles.content}>
      <img src={img === null ? placeholder : img} alt="profile" />
      { !isDisabled &&
        <FileBase64 onDone={(e) => handleStoreImage(e)} />
      }
    </div>
  )
}

export default ImgPrev