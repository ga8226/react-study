import React from 'react'
import banner from '../scss/banner.module.css'

export default function Banner(props) {
  return (
    <>
    <div className={banner.container}>
      스와이퍼로 돌릴거란다
    </div>
    <div className={"d-flex "+banner.container + ' ' + banner.row}>
      클래스명이 2개 이상일때 공백이 필요하고 그 공백은 문자라서 공백과 문자를 결합해야한다
      {/* 이건 그냥 자바 그대로 내뱉을때 인데 상수랑 변수랑 분리 시켜줘야 공백나 */}
    </div>
    <div className={`d-flex ${banner.container}  ${banner.row}`}>
    클래스명이 2개 이상일때 공백이 필요하고 그 공백은 문자라서 공백과 문자를 결합해야한다
    {/* 에크마 빽팁안에서는 띄어쓰기로 문자 공백 표현가능하고 */}
    </div>
    
    </>

  )
}


 
