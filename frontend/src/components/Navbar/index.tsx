import { ReactComponent as GitHubIcon } from 'assets/img/github.svg';
import { ReactComponent as LinkedinIcon } from 'assets/img/linkedin.svg'
import './style.css'

function Navbar() {
    return (
        <header>
            <nav className='container'>
                <div className='dsmovie-nav-content'>
                    <h1><span>D</span>SMovie</h1>
                    <div className='dsmovie-contact-conteiner'>
                        <a target='_blank' href="https://github.com/tinholima">
                            <GitHubIcon />
                        </a>
                        <a target='_blank' href="https://www.linkedin.com/in/alison-coutinho-820328234/">
                            <LinkedinIcon />
                            <p className='dsmovie-contact-link'></p>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;