import './navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import dashboardImg from '../../../assets/dashboard.png';
import billImg from '../../../assets/bill.png';
import moneyImg from '../../../assets/money.png';
import noteImg from '../../../assets/notebook.png';
import installmentImg from '../../../assets/installment.png';
import purchaseImg from '../../../assets/hand.png';
import analyticsImg from '../../../assets/report.png';
import reportImg from '../../../assets/reports.png';
import supportImg from '../../../assets/settings.png';
import logoutImg from '../../../assets/logout.png';

class Navbar extends React.Component{

    render(){
        return(
            <div>
                <Link>
                <div className="img-tag">
                    <img src={dashboardImg} />
                </div>
                </Link>
                <Link>
                <div className="img-tag">
                    <img src={billImg} />
                </div>
                </Link>
                <Link>
                <div className="img-tag">
                    <img src={moneyImg} />
                </div>
                </Link>
                <Link>
                <div className="img-tag">
                    <img src={noteImg} />
                </div>
                </Link>
                <Link>
                <div className="img-tag">
                    <img src={installmentImg} />
                </div>
                </Link>
                <Link>
                <div className="img-tag">
                    <img src={purchaseImg} />
                </div>
                </Link>
                <Link>
                <div className="img-tag">
                    <img src={analyticsImg} />
                </div>
                </Link>
                <Link>
                <div className="img-tag">
                    <img src={reportImg} />
                </div>
                </Link>
                <Link>
                <div className="img-tag">
                    <img src={supportImg} />
                </div>
                </Link>
                <Link>
                <div className="img-tag">
                    <img src={logoutImg} />
                </div>
                </Link>
            </div>
        );
    }
}

export default Navbar;