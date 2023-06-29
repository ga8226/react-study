import hd from '../scss/hd.module.css'

export default  function Hd(props) {
  let dbnavi = {
    topad : {
        adtitle : "지금가입하면 주스0원&정기배송 15%할인",
        adlink : "https://www.11st.co.kr/"
             } ,
    navi : [
        {
            nm : ['이용방법','use.html'] ,
            cls : 'navi use'
        },
        {
            nm : ['메뉴','menu.html'] ,
            cls : 'navi menu'
        },
        {
            nm : ['내 몸의소리','test.html'] ,
            cls : 'navi test'
        }
        ,
        {
            nm : ['창업안내','contact.html'] ,
            cls : 'navi contact'
        }
        
    ]    
,
sns :[
  {
    nm : "git" ,
    nmlink : "https://github.com/"
  }
  ,
  {
    nm : "notion" ,
    nmlink : "https://www.notion.so/"
  }
 ] 
  }  

    return (
      <>
      <header className="fixed-top bg-dark">
        <div className={`ad text-center py-2 ${hd.bg}`}>
          <a href={dbnavi.topad.adlink} className="text-white">{dbnavi.topad.adtitle}</a>
        </div>
        <div className='container d-flex justify-content-between align-items-center'>
          <h1 className='text-white'>로고</h1>
          <ul id="gnb" className="d-flex">
          {
           dbnavi.navi.map((val ,idx)=>{
              return (
              <li className={val.cls + " mx-3"}>
                <a href={val.nm[1]}>{val.nm[0]}</a>
              </li>)
            })
            }
          </ul>
        </div>
      
      </header>
      </>
    )
  }