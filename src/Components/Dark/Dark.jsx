import React, { Fragment,useEffect } from "react";
// import "./Book.css";
import "./Dark.scss"
const Dark = () => {
    let btndark=document.getElementById('btn-toggle');
    let grid=document.getElementById('grid-book');
    let cards=document.getElementsByClassName('card-book');
    btndark.addEventListener('click',()=>{
        grid.classList.toggle('darkmode-grid')
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.toggle('darkmode-card');
        }
        store(grid.classList.contains('darkmode-grid'));
    })
    const store=(value)=>{
        localStorage.setItem('darkmode-grid',value);
    }
    const load=()=>{
        let darkmode=localStorage.getItem('darkmode-grid');
        if(!darkmode){
            store('false');
        }else if(darkmode=='true'){
            grid.classList.add('darkmode-grid');
        }
    }
    load();
    return (
    <div className="btn-search" id="container__button">
        <div className="icon-toggle" id="btn-toggle" >
            <i className="fas fa-adjust" id="icon"></i>
        </div>
    </div>
);
};
 
export default Dark;