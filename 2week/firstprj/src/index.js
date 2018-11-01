import React from 'react'
import ReactDOM from 'react-dom'
/*
import logo from './logo.svg'
import {performPlus, displaySymbol} from './compo_test'
import perform from './compo_test'
import {user, printFullName} from './compo_test'
import App from './App'


//React 임포트한걸로 JSX를 실행
const displayResult = <h1>Hello React 개발환경 !!!</h1>
const displayImage = <img src={logo} alt='some value'></img>
const displayText = <h3>우리는 index.js를 수정하고 있어요.</h3>
const displayLink = <a href="www.naver.com">네이버 이동</a>
const displayPlus = <h2>1 plus 10 ===> {performPlus(1, 10)}</h2>
const displaySym = <h3>1 {displaySymbol} 10 ===> {performPlus(1, 10)}</h3>
const displayMinus = <h3> 1 minus 1 === {perform(1,1)} </h3>
const printFull = <h1> {printFullName(user)} </h1>

//디스플레이컨텐츠를 virtualDOM에 렌더링
ReactDOM.render(displayImage, document.getElementById('image'))
ReactDOM.render(displayResult, document.getElementById('root'))
ReactDOM.render(displayText, document.getElementById('text'))
ReactDOM.render(displayLink, document.getElementById('link'))
ReactDOM.render(displayPlus, document.getElementById('plus'))
ReactDOM.render(displaySym, document.getElementById('symbol'))
ReactDOM.render(displayMinus, document.getElementById('minus'))
ReactDOM.render(printFull, document.getElementById('fullname'))
ReactDOM.render(<App />, document.getElementById('app'))
*/




/* -- 무비카드 연습 --

//React 임포트한걸로 JSX를 실행   이미지보이게
const displayResult = 
<div>
 <h1>Movie List.. </h1>
 <MovieCard movieTitle="FirstMan" mainActor="Ryan Gosling" imgUrl = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAKAAbwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAGAgMEBQcBAAj/xAA8EAACAQIEAwUFBgQGAwAAAAABAgMEEQAFEiEGMUETIlFhcRQygZGhFSNCUrHBB9Hh8BYkM2KColNj8f/EABkBAAMBAQEAAAAAAAAAAAAAAAIDBAEABf/EACMRAAICAgEEAgMAAAAAAAAAAAABAhEDIRIEMTJBE5EUInH/2gAMAwEAAhEDEQA/AMZAx36YeVBysB9cJKW5YbQNjlPR1FQVWCFpC+rSB+LSLm3pfDqZVXuEIpnIeXsU5bve2n1uMJgqaqmKmCokiZL6SjWO9rj02G3LDq11eAoFVKQsolAvcB7lrgcuZPzxtGDcmWVsKTNLTsggt2mqw03AI6+BGECnlDvGUOqMEsvK1uuJjVdbL2/az6u3/wBS6L3rC3O22wHLCoI5JZHkeQgyA6ieoPj5bY2jrOR5NmBnEK0rmTs+109dHjzw4mV1cqRusEhjlOmNre83gPrgjgoOInYT0dPXzOIwglETN3L3texwxPkvElPBAi5ZmfZwnVGuhz2ZAttt6jG6B2C1XBNCWWSMoFOg3HI7G3rhyLJ8wkljSOldnkQuqqQbiwJP1Hzw9XpVpUGOuWSOR21qJVKknlffyx37Qr7U7ipmEkCdnEymxVbDu7eg535YygiHSUVRVu609O0pRbuF5gXthmqoqqCngqZ4SkU6lom2s4HMj5jD0VTUU0jvDM8bMCG0t7wPQjrhuqq6qpghgnmZ4adbRJtZAbcvlgWaiFhJHlhZXpj1r8t/PAmloYdr3+tv1x7sj4H1xMEVvwnzwowXJAt8r4dQBCEG9jfw8LYWItDEuBpAuemJoiGqzDyxq/AnAcWXwRZtnkAasaz09LILiDwZgfx8jb8PryFtI1KwW4X/AId1mYxLWZs8lBSMO4pUdtICOYHJefX5Yt8wzfhrg1jT5NlqVNemzSMdRU+bm+/ko+WLPj7iWSkV6GiktOw++lB3jv8AhHgf0xj1dMLkD9cdFctsXknWkXub/wAQuIa1yRWCmX8tOg/Vrn64qv8AGHECm4zir+L3/XFFM++I5a+Mk0jYxfsL6f8AiBnaIYax6XMYD70VZArAj4W/fE2BOH+KCYsvP2Lmj+7TzPqp52/Krc1PSx28BgCucdBwNjKLnMaKqy6slo8wp3gqYzvHJzG3PbYjzxAdNW4Frf3/AH6YLMszYcTUcOS5+4FWBpyzM5TYhv8AxSN+JDyv0JGKCop5IJZKeeNkniZ0eNgbow2IPyt8MF3OIOhNJY+8OmE6QPG3jiSVUBgbXPnhs330/rjKNCQxWB5i3S98JcfjJsviemJgGo2AJHhh2GkSaQRsNQtfSOuHCkzUuCuEqfLMnp6qqysVWYTWmMzlfu+RUIGOwG29rk+Vsd44zqty2ljShdoaqRr/AHjI1lHOwJN98eXiusjyOF6ZEeemRRKrLfUoFtQ+QJ8sM8WrT5hltHm1ZQwVPa0qNsWRhcXIDA7bk4lk6dyGpclSMezPNaiSZ/bFPaMSWO4J8zfFRNaS5VrnwItgvloskzOTsaOtakqDsKXMiAjE9FmG1/Ii/nh+p4JFJwtmc8heOpjeN2p5B3rANuD1G99tj54N5oxQuOBtmczIyk3BwxiUJ2TuvZ1HRv5492cU+8Z0v+Vv73x3cK67kXHb4VJGYz3sJHPGBEmmdpCKZn7knIHkG6W/T44Jczm+2Msoc6NzUn/KVzDn2qAaH9XTmfFDgURirhhzU3GCTh+RZIs8oD3UlpzUptyaFtY/6GQfHGowgaDbSAd+ZwiWHTYEd7nbwxKZbkhr3H1wkpvsLH16YOjrL9GVTvzscT8vksbr15f38cVBN8T8vYhl8O9+2GCQhpK145hoaxUCx87YK82rKaLIqAzRsaf2cBYo1uS3UfXAPQRmasEYaxc8/hixzlnpuHa6GSoZFQfdaWt3yRsPIi+3lifPG42PwSSlQL8TZZUzu9VRUbtT8jos9vW3LDnDHELxZfJlGeySnLHKpHJq79Id+8p/KLDu8vTE/gnIWzbKcxZJCtWjB4Wtaxtz1c+nLxtiRn+UkcOK9cqmsR1BmAs0i2Ni3iee+JeVaKuF7ATjDJJMmzEoyqEY8090nndfIggj4jpgf88G1RUHOeEKqnl71XlWlkdju0N/2uwHrgKtf/7ihOyZijI7rZtwOpwledzsMOaRoUJvcE+pv/TDXO30wQJ0YIuFNLcS0ETC6VMfYOD1DxMh/XA7GLtbxwQ8Lb8YZOhbdZ4lNzyI5i/ljkczoBMYv1AxzSAMSZKeSmd4Jl0yRHS48CMJ7PDkJciaANQuLjqPHFpRVpGYx1Ps8V7gabbXsN7f8cQNO2HIboT8x8MEDYQ5a2mdIioOpwdV9xtbHeMK37LmoowiTEAzPG4vtyH6H54RSyd+KVbc8XPE/DcudVEOZUlVHEssSLMtQCUFhYWt6cj4HCs/jod0/nsp/wCE1eplq6Dkx+81E722FrfDFlx3WpNl8sMagGORBcf88VnBeUS5TxkrVkaxdmjxyNGTpcEbMAb/AK4lcW0uiGrYHUplSx8u9jz5eR6K7ALl+Y+z5fnFE8MQSSjkdpbd65soB+LLgeqq4VFDSUvs8MfsxfvoN5NWn3vPu8/PE3MrQwsnKSoIJ/2xg3+pH/Xz3q5oTGwjIPaHmttx5evliqK0RyeyRmuYfaFTHKsXZBYwgXVf44VR5j7NRVVN2aN262V9I1L472vbl1wqjy0vPHDJbtJGC6fy+JPpzwzmOiKqlhpmbsVYgX62wdaAvZGgcxTpJpB0MDpPXyxZDNWbOTXxU0QdgAsb7qp0hbi1vDFU2OKxB2xhpt2Y1OXVtHDT06QS5tHE7RAm/agWZ0B53sxt6WxnykFQQb36+OB6iramGsp56d2WWBgYiDy3v+v64IYotKgeGHYyfLottHljqqbgjniTovhYjFthhtCOQ/lTC7QnbTuv7Y0KsEuWcKy10p7tNSyPKjD8RHdHz29TjP8AKmjgzOlnqQxgjlVpAo3K3F/pjZ8yaKWgAVEEdRY/fMFV1I+NxvyxPmTqirA09mTZjnVRGuVZnGtLeohGqEuW0gdzvWHM2v8AHDmbyQHIZ3Yl9JjPZXsRfVsfAc/O2JFVwUMmq5Xy4GQ1R1CS99Hgq+AHQ7nz6Y9PQLlGS5iqmOqrtcTGK2oRN3rFvE89vn4YjlFF0Zt6M1r1OXf5upAfMJ7NDHpFoweTkfLSvoeVrwoIfY4zLMddW9ySTcr/AF8Ti0qaWWOd6msZpKqRi3e3IJ6+ZxwZUoT2rNZPZ6bmB+OTyAxQmhDiyJQE0lJPmko71jHAPzMef0wPyHckm5JuTiwzrNDXThYlEdPENMUY5IP5nxxV9cEBRw48Mdx1RfGGk3Kh/nIyFDG/I9PPBMOWK3ITlsaaKh5EqXJCyggoBtYEc/j88W0sLxaSw7ri6ON1YeIOHY3SJsu2XiphxUPhh1IyemJMMBJ3GHWTDdJRtVTLCtlLXuT0AFyfgAdsGuZcT5dPDTQPmFLRezusM6VwssmpQY2Gm4FwL7na++BqnSSCVJYSVdDdWHQ4jwcJLmCztl06UFRGRMzKGvIL97rzGx9cJypvY/A0tMNs2oaTJqOKGoz+OKtqGCRFrBmv0jW/1+oxJXheny3KZl1kmQqXci5BF9/PngSg4AyQZHK71s9Xnc0iymRt5VKkXCDqOdz59Oh1TVVZ9hSNXxNqRVGkgb/BST06nEckejBsz/PafK6Fn+y6eapqbbySRX0n47DGV5/M807tLIZHuR71wvlf9hgw4wz2WeaSMalT8shAA/4jb5k4Aql3mckXcnqen8sdBMPI9UQTAQgdzYHlfr6YZtc7DFtDlrshkqGaNOZ8T/L+9sQpyrtaNBHEPdH5vPDiYjhcLQWx0IfDDscTEE22HM+GNMs9ECWAFwOtsFWX1kIpFp61nMQN1QNuuByMaOXvYkwc7sTg0Kls1eOm8sToKa/TEiCmvbbFlT0nljXMWsRAWl25YcggeKTWngQR+YHmMXEVGW2Aw8KBvAYHmH8T9FDw3klPQVof2Va+omazyVp7Rm6e8QbfAYPLaaJ6daKGPu27JHsu9+oXb5YoxUQZM3tlUrFV7o0C+52/ni6Wp9rpZmWN420274G/PzwmUkVQjKrZkGb8K0cuY1HtNQ8bKbhXQhT8j9cDWcZZDl2hqRYmW9uQ2Pl640DiquplR0mYF12DDmuMyqagV88kTyq0MIPaMh2I8B6/phakUuOinrZmnW17U/Pb8f8ATEKmpmqGaVvcHlizggauqrz92EnvW6C2wH0xPnnyynjENKjuQ1gDvyPPz69RhyZJJFLFRCWVVI3I2T9/TEuWGKK0aKLg7nxxYP8AZ9BTPK8khnlsTrtcb7j5YriYiDLG5IIv3jvjbBohVC6TcbYbWXSOVzj0kySMQHUnoL4aONTM4n0bSxaiLDFhTqrHQHGu19J+H88VaSdkjaGufG/IYrzxPGudRU00PZrG1lYoWYMdrWBtufHEWXK1Kj0cPT8o2GAASFX1xkGxsDvywtJlB3OKhqSUZb7ZTwNHM8pZoxOrhrjmpvyxIoZ6JFjWv7RpdVn0v3U573GFLP7lo34VWtjPFkaz5MB/7lO3xxd0kSx5VJ2AG3u6Qd7euET5fTVemnp3LaXDOCb28P2xc9mqQFOYtvhuP97aehc5xUFFGN51HJBxDTSQ6lbt1tbfYmx+hIxEziqklyueHMaqoSBs1kjLJArtpABVbXXa/ng24shRXgmpmSCSzGNgxEhYA8rb288ZbneaVU1MySZrUVUTmzI0zslwb8mwGKfooyQ5xUkIzqKlk4jzr2uqlgijq5CyQQmSWS7nuoPdB82IAv1xHnehzYe0imbK6mlh0RwaHkimjQWQarXEgUAEkWawN1uRisOeZgk09RHmVZDNUSGSZoKgxdox6kLYc74W/E2atGyrnOYkFQLNWyEHx68jvitEEkE3DeaQ0mVVayTCKoepRkLMyakCsD3hDJ1I2sPXFPx5mD5jQ06x1CyojNdFlZ9yNjvBFbqOZ59MUsfENfTQmGizSup4BukcFY6Km++wIGGqvPswqoJIKrNswnibSeznrHdDY9QTvvywQDDyrzqEV0oqc4ojl03sTUdKYmjaO00DFyWjA06VkN9RFjgb/iNUUtTnlNLQsjQmiSxSQOP9STqMV0PFObLTwwJUUrxwRrFH2lDTyFUUWA1NGSbDxOIFfWT19QaiqMZkIA+7hSIWH+1AB8bY1GGscQcSrTsy5fLdU2KrtfAHXZvPUtJyLsb6jzB/sYp5Klw3dk7QeIv++PGYsATMnK/Xby5YjcLdnq4c0YqkaZw1xaKfLko5JpZGEgKJyWx5r9T9MW9Jm5qO2iqp4MvpY2bstYuzncBb+FrfTnvjHDVFdRE/evayg3OHnq3ZbtW308lOq9hiWfSW+5X+ThrS2b7lOYRRUntlNmKkSsptUHTpAC6rX3I38MLreL1gaJJVFpxdJInD7eYHI+WMAFZMzWFeqi/UtpHnyx1apgpQ5kQAb7at/T54FdJKOoyoTywSlykr+g8/iFxk9XSR0dLJEyMv3ujc7k7b+H64A8rzybLZ5JYUVhJGUZSxU2JBuCNwdtj0O/TDE8FOyLI+aIxZb2KNcYYejp1IAzBCT/tO2LMONQjRPnnbqKpf0J2/iBWSVNPO1BShoY2jspIDBrb8tiLbc8K/x1XdqtRHSZcsnYdk2tWYHl3rXFjty3wMJQwEEnMYhbbcWxzRHESI6tD5jFKaIZRfcJpON62S18tydezdZVHYsLOo0ryflp7unkQTfnhin41zCB5XWkoryVAqD3GsDvcC5903O3T4DA83eAXtVIwkrYe+PnggKLTiLPpc+lpZJqaGA08PZDsvx73ucVOO6R+cfPHSiAd6RRjbMP/Z" >
    On the heels of their six-time Academy Award®-winning smash, La La Land, Oscar®-winning director Damien Chazelle and star Ryan Gosling reteam for Universal Pictures’ First Man, the riveting story behind the first manned mission to the moon, focusing on Neil Armstrong and the decade leading to the historic Apollo 11 flight.
 </MovieCard>
</div>

//디스를레이컨텐츠를 virtualDOM에 렌더링
ReactDOM.render(displayResult, document.getElementById('root') )

//무비카드 컴포넌트 정의
function MovieCard(props) {
   const movieCardStyle = {
       border : "1px solid black",
       margin: 10,
       width: 300,
       height: 300,
       float: "left"
   }
   return <div>
   <div style= {movieCardStyle}><img src={props.imgUrl} width="300" height="300" alt="value" /></div>
   <div style = {movieCardStyle}>
       <h3>{props.movieTitle}</h3>
       <hr/>
       <span>{props.mainActor}</span>
       <p>{props.children}</p>
   </div>
   </div>
} 
*/


/* --배열 선언 연습--

// 배열 선언
const movieArray = []

// 배열에 무비카드를 세번 입력
for (let index = 0; index < 3; index++) {
    movieArray.push(
        <MovieCard movieTitle="FirstMan" mainActor="Ryan Gosling" imgUrl = "data:image/jpeg;base64,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" >
        On the heels of their six-time Academy Award®-winning smash, La La Land, Oscar®-winning director Damien Chazelle and star Ryan Gosling reteam for Universal Pictures’ First Man, the riveting story behind the first manned mission to the moon, focusing on Neil Armstrong and the decade leading to the historic Apollo 11 flight.
        </MovieCard>
    )
}

const displayResult = <div>{movieArray}</div>

ReactDOM.render(displayResult, document.getElementById('root'))

// 무비카드 컴포넌트 정의

function MovieCard(props){
    const movieCardStyle = {
        border : "1px solid black",
        margin: 10
    }

    return <div>
        <div style = {movieCardStyle}>
            <h3>{props.movieTitle}</h3>
            <hr/>
            <p><img src={props.imgUrl} width="300" height="300" alt="value" /></p>
            <span>{props.mainActor}</span>
            <p>{props.children}</p>
        </div>
    </div>
}

*/


// 삼항 연산자 연습
const movieArray = []

//배열에 무비카드를 세번 입력    삼항연산자 연습
for (let index = 0; index < 3; index++) {
   index === 0
   ? ( movieArray.push(
        <MovieCard movieTitle="FirstMan" mainActor="Ryan Gosling " >
          First Man, the riveting story behind the first manned mission to the moon, focusing on Neil Armstrong and the decade leading to the historic Apollo 11 flight.
        </MovieCard>
                      )
     )
   : ( movieArray.push(
        <MovieCard movieTitle="LALA Land" mainActor="Ryan Gosling " >
          LALA Land, the riveting story behind the first manned mission to the moon.
        </MovieCard>
                      )
     )
}

//React 임포트한걸로 JSX를 실행
const displayResult = <div>{movieArray}</div>

//디스를레이컨텐츠를 virtualDOM에 렌더링
ReactDOM.render(displayResult, document.getElementById('root') )

//무비카드 컴포넌트 정의
function MovieCard(props) {
   const movieCardStyle = {
       border : "1px solid black",
             margin: 10
   }

   return <div>
   <div style = {movieCardStyle}>
       <h3>{props.movieTitle}</h3>
       <hr/>
       <span>{props.mainActor}</span>
       <p>{props.children}</p>
   </div>
   </div>
}