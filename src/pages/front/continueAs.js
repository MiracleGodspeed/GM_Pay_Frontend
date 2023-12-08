import logo from '../../logo.svg';
import '../../App.css';
import { Link } from 'react-router-dom';

function ProceedAs() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p style={{fontSize:"16px"}}>
                   Continue As
                </p>
                <Link
                    to="/merchantIndex"
                    style={{ color: "#78d1ef" }}
                >
                    Merchant
                </Link>
                <Link
                    to="/customerIndex"
                    style={{ color: "#78d1ef", marginTop:"10px" }}
                >
                    Customer
                </Link>
            </header>
        </div>
    );
}

export default ProceedAs;
