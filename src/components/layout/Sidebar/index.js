import './sidebar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../../../assets/user.png';
import dashboardImg from '../../../assets/dashboard.png';
import billImg from '../../../assets/bill.png';
import moneyImg from '../../../assets/money.png';
import noteImg from '../../../assets/notebook.png';
import installmentImg from '../../../assets/installment.png';
import purchaseImg from '../../../assets/hand.png';
import analyticsImg from '../../../assets/report.png';
import reportImg from '../../../assets/reports.png';
import supportImg from '../../../assets/settings.png';

class Sidebar extends React.Component{

    render(){
        return(
            <div>
                
                <div className="sidebar">
                <div className="profile-img">
                    <img src={profileImg} width="80px" height="80px" alt="img" />
                    <h6 className="admin">Nasir Bakers</h6>
                </div>
                <Link className="active" to="#home">
                    <img src={dashboardImg} width="22" height="22" />
                    <span className="link-text">Dashboard</span>
                </Link>
                <Link to="#news">
                    <img src={billImg} width="22" height="22" style={{filter: 'invert(100%)'}} />
                    <span className="link-text">Point of Sale</span>
                </Link>
                <Link to="#contact">
                <img src={moneyImg} width="22" height="22" style={{filter: 'invert(100%)'}} />
                    <span className="link-text">Sell</span>
                </Link>
                <Link to="#about">
                <img src={noteImg} width="22" height="22" style={{filter: 'invert(100%)'}} />
                <span className="link-text">Qutation</span>
                </Link>
                <Link to="#about">
                <img src={installmentImg} width="22" height="22" style={{filter: 'invert(100%)'}} />
                <span className="link-text">Installment</span>
                </Link>
                <Link to="#about">
                <img src={purchaseImg} width="22" height="22" style={{filter: 'invert(100%)'}} />
                <span className="link-text">Purchase</span>
                </Link>
                <Link to="#about">
                <img src={analyticsImg} width="22" height="22" style={{filter: 'invert(100%)'}} />
                <span className="link-text">Analytic</span>
                </Link>
                <Link to="#about">
                <img src={reportImg} width="22" height="22" style={{filter: 'invert(100%)'}} />
                <span className="link-text">Report</span>
                </Link>
                <Link to="#about">
                <img src={supportImg} width="22" height="22" style={{filter: 'invert(100%)'}} />
                <span className="link-text">System</span>
                </Link>

                </div>

            </div>
        );
    }
}

export default Sidebar;