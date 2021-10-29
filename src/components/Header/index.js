import './Header.css'
import logo from './../../images/logo.jpg'

function Header() {
    return(
        <header>
         <div id="top-header">
             <img id="logo" src={logo} />
            <div id="search">
                    <input></input>
                    <button>جستجو</button>
                </div>

                <a href="">ورود/ثبت نام</a>
           </div>
           <div id="bottom-header">
               <nav>
                   <ul>
                       <li><a href="">مد و پوشاک</a></li>
                       <li><a href="">آرایشی بهداشتی</a></li>
                   </ul>
               </nav>
           </div>  
         
        </header>
    )
}

export default Header


