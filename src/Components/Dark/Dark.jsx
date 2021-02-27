import React, { Fragment} from "react";
// import "./Book.css";
import { useEffect, useState } from "react";
import "./Dark.scss"
const Dark = () => {
    let btndark=document.getElementById('btn-toggle');
    let grid=document.getElementById('grid-book');
    let cards=document.getElementsByClassName('card-book');
    console.log(grid)
    const [theme, settheme] = useState(localStorage.getItem("theme")==="dark"?"true":false);

    const toggleTheme=()=>{
        if (theme === false) {
            localStorage.setItem("theme", "dark");
            settheme(true);
          } else {
            localStorage.setItem("theme", "light");
            settheme(false);
          }
        // grid.classList.toggle('darkmode-grid');
        // for (let i = 0; i < cards.length; i++) {
        //     console.log(cards[i])
        //     // cards[i].classList.toggle('darkmode-card');
        // }
        // store(grid.classList.contains('darkmode-grid'));
    }

    useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("class", localStorage.getItem("theme"));
      document.getElementsByTagName("div")[1]
      .setAttribute("class", localStorage.getItem("theme"));
    //   btndark.setAttribute("class", localStorage.getItem("theme"));
    }, [theme])

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
        <div className="icon-toggle" id="btn-toggle" onClick={()=>toggleTheme()}>
            {/* <button className="icon-toggle" id="btn-toggle" onClick={()=>toggleTheme()}> */}
            <i className="fas fa-adjust" id="icon"></i>
            {/* </button> */}
        </div>
    </div>
);
};
 
export default Dark;