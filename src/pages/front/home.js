import logo from '../../logo.svg';
import '../../App.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Welcome to GM Pay
                </p>
                <Link
                    // className="App-link"
                    to="/proceesAs"
                    style={{ color:"#78d1ef"}}
                    // target="_blank"
                    // rel="noopener noreferrer"
                >
                    Get Started
                </Link>
            </header>
        </div>
    );
}

export default Home;
