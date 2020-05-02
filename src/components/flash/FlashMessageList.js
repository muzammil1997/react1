import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlashMessage from './FlashMessage';
import { deleteFlashMessage } from '../../redux/actions';

class FlashMessageList extends React.Component{

    render(){
        const messages = this.props.messages.map(message => 
            <FlashMessage key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage} />
            );
        return(
            <div>
             {messages}
            </div>
        );
    }
}

FlashMessageList.propTypes = {
    deleteFlashMessage: PropTypes.func.isRequired,
    messages: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        messages: state.flashMessages
    }
};

export default connect(mapStateToProps,{deleteFlashMessage})(FlashMessageList);