import React, { useState } from 'react'
import styles from './UploadSuccess.module.css'

const UploadSuccess = ({ imageUrl }) => {

  const handleCopyLink = () => {
    navigator.clipboard.writeText(imageUrl);
  }

  return (
    <div className={styles.container}>
      <EpSuccessFilled />
      <p className={styles.title}>Uploaded Successfully!</p>
      <div className={styles.image} style={{backgroundImage: `url(${imageUrl})`}} />
      <div className={styles.linkContainer}>
        <p className={styles.linkText} >{imageUrl}</p>
        <button onClick={handleCopyLink} className={styles.linkButton}>
          Copy Link
        </button>
      </div>
    </div>
  )
}

export default UploadSuccess


function EpSuccessFilled(props) {
  return (
    <svg width="35px" height="35px" viewBox="0 0 1024 1024" {...props}><path fill="#219653" d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896zm-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"></path></svg>
  )
}