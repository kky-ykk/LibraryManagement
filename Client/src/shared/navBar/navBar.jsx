
import { Link, useNavigate } from 'react-router-dom';
import './navBar.css';
import { useEffect } from 'react';
const NavBar = () => {

    const navigate=useNavigate();
    let token=null;

    function checLocalStorage(){
        const session=localStorage.getItem("session");

        if(session){
            token=JSON.parse(session).token;
        }

        
    }
    console.log("here:",token);

    checLocalStorage();

    return (

        <>
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3  border-bottom bg-dark
">
                <div className="col-md-3  ">
                    <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                        <h3 className='mx-3 text-warning'>
                            Bookiz
                        </h3>
                    </a>
                </div>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 text-light">
                    <li><Link to="/" className="nav-link px-2  text-light menu">Home</Link></li>
                    <li><Link to="/bookavailable" className="nav-link px-2 text-light menu">Books</Link></li>
                    <li><Link href="#" className="nav-link px-2 text-light menu">About</Link></li>
                    <li><Link href="#" className="nav-link px-2 text-light menu">Contacts</Link></li>
                </ul>

                {
                    (token)?
                        <button type="button" className="btn btn-outline-primary mx-2" onClick={()=>{localStorage.clear(); navigate("/")}} >Log Out</button>
                    :(<div className="col-md-3 text-end">
                        <button type="button" className="btn btn-outline-primary mx-2" onClick={()=>navigate("/login")}>Login</button>

                        <button type="button" className="btn btn-primary" onClick={()=>navigate("/signup")}>Sign-up</button>
                    </div>)
                }
            </header>

        </>

    )

}


export default NavBar;