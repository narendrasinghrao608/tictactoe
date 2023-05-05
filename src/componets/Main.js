import React, { useEffect } from 'react'
import ld from '../img/loading.gif'
function Main() {
    console.log("hare krishna")
    let music=new Audio("music.mp3");
    let turn=new Audio("music.mp3");
    let gameover=false;
    let turn1="X";
    //Function to chnage to turn
    const changeturn=()=>{
        return turn1==="X"?"0":"X"
    }
    //Function to check for a win
    const checkwin=()=>{
        let boxtext=document.getElementsByClassName('boxtext');

        let wins=[
            [0,1,2,5,5,0],
            [3,4,5,5,15,0],
            [6,7,8,5,25,0],
            [0,3,6,-5,15,90],
            [1,4,7,5,15,90],
            [2,5,8,15,15,90],
            [0,4,8,5,15,45],
            [2,4,6,5,15,135],
        ];
        wins.forEach(e=>{
            console.log(boxtext[e[0]])
            if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[1]].innerText===boxtext[e[2]].innerText) && (boxtext[e[0]].innerText!==""))
            {
                document.querySelector('.info').innerText=boxtext[e[0]].innerText+" won";
                gameover=true;
                document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width='100px'
                document.querySelector(".line").style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
                document.querySelector(".line").style.width='20vw'            
            }
        })
    }
    //Game logic
    useEffect(()=>{

        let boxes=document.getElementsByClassName("box");
        Array.from(boxes).forEach(Element=>{
            let boxtext=Element.querySelector(".boxtext")
            console.log(boxtext)
            Element.addEventListener('click',()=>{
                if(boxtext.innerText===''){
                    boxtext.innerText=turn1;
                    turn1=changeturn();
                    // turn();
                    checkwin();
                    if(!gameover){
                        document.getElementsByClassName("info")[0].innerText="turn for "+turn1;
                    }
                }
            })
        })
        let s=document.querySelector(".reset");
        s.addEventListener('click',()=>{
            let boxtext=document.querySelectorAll('.boxtext');
            Array.from(boxtext).forEach(e=>{
                e.innerText="";
            })
            turn1="X";
            document.querySelector('.info').innerText="Turn for X"
            gameover=false;
            document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width='0'
            document.querySelector(".line").style.width='0'            
        })
    },[])
    //add onclick listner to reset button
  return (
    <div className='gamecontainer'>
      <div className="container">
        <div className="line"></div>
        <div className="box bt-0 bl-0"><span className="boxtext"></span></div>
        <div className="box bt-0"><span className="boxtext"></span></div>
        <div className="box bt-0 br-0"><span className="boxtext"></span></div>
        <div className="box bl-0"><span className="boxtext"></span></div>
        <div className="box"><span className="boxtext"></span></div>
        <div className="box br-0"><span className="boxtext"></span></div>
        <div className="box bb-0 bl-0"><span className="boxtext"></span></div>
        <div className="box bb-0"><span className="boxtext"></span></div>
        <div className="box br-0 bb-0"><span className="boxtext"></span></div>
      </div>
      <div className="gameinfo">
        <h1>Hare krishna Tic tac tictactoe</h1>
        <div >
            <span className="info"></span>
            <button className="reset">Reset</button>  
        </div>
        <div className="imgbox">
            <img src={ld} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Main
