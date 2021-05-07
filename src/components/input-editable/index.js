import React, { useRef } from 'react'

import ContentEditable from 'react-contenteditable'

const InputEditable = ({ text = '', setValue = (text) => { }, className = '', isDisabled = true }) => {

  const textRef = useRef('');

  textRef.current = text

  const trimSpaces = (string) => {
    return string
      .replace(/&nbsp;/g, '')
      .replace(/&amp;/g, '&')
      .replace(/&gt;/g, '>')
      .replace(/&lt;/g, '<')
  }

  const handleBlur = () => {
    setValue(textRef.current)
  };

  const handleChange = (evt) => {
    textRef.current = trimSpaces(evt.target.value)
    console.log(textRef.current)
  };

  const handleOnKeyDown = (evt) => {   
    //prevent multiline
    var keyCode = evt.which || evt.keyCode
    keyCode === 13 && evt.preventDefault()
    //prevent more than 20 characters
    textRef.current.length >= 20 && keyCode !== 8 && keyCode !== 46 && evt.preventDefault()
  }

  return (
    <ContentEditable
      className={className}
      html={textRef.current}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleOnKeyDown}
      disabled={isDisabled}
    />
  )
}

export default InputEditable