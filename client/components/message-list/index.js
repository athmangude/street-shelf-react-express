import React, {Component} from 'react';
import {} from './style.scss';

class MessageList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ol
                className="message-list"
                style={{
                    height: '240px',
                    listStyle: 'none',
                    margin: 0,
                    overflow: 'auto',
                    padding: '10px'
                }}>
                {this.props.messages.map((message, index) => {
                    const messageClass = message.userId !== this.props.userId ? 'is-response' : '';
                    return (
                        <li key={`message-${index}`} className="message-item">
                            <p className={`message ${messageClass}`}>
                                {message.text}
                            </p>
                        </li>
                    );
                })}
            </ol>
        );
    }
}

export default MessageList;
