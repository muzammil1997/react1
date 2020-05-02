import React from 'react';
import Sidebar from '../layout/Sidebar';
import Navbar from '../layout/Navbar';


class EventPage extends React.Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-2">
                    <Sidebar/>
                    </div>
                    <div className="col-md-10">
                        <Navbar/>
                    </div>
                </div>
            </div>

        );
    }
}

export default EventPage; 