import React from 'react'

const TitleSection = ({title , subTitle}) => {
  const parentStyle = {
    marginBottom: '70px',
  }
  const myStyle = {
    color: '#FFCE6D',
    textAlign: 'center',
    fontSize: '36px',
    fontFamily: 'Dancing Script',
    fontWeight: '700',
    lineHeight: '117.3%',
    letterSpacing: '3.6px',
}
const myStyle2 = {
    color: '#FFFFFC',
    textAlign: 'center',
    fontSize: '30px',
    fontFamily: 'Roboto',
    fontWeight: '700',
    lineHeight: '117.3%',
    textTransform: 'capitalize',
    marginTop: '15px',
}
  return (
    <div className='title-section' style={parentStyle}>
      <h2 style={myStyle}>{title}</h2>
      <p style={myStyle2}>{subTitle}</p>
    </div>
  )
}

export default TitleSection;