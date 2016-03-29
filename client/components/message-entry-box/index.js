import React, {Component} from 'react';

import {TextField} from 'material-ui';

class MessageEntryBox extends Component {
    render() {
        return (
            <div
                className="message-entry-box"
                style={{
                    background: '#dedede',
                    padding: '10px'
                }}>
                <TextField
                    name="message"
                    value={this.props.value}
                    onChange={this.handleChange.bind(this)}
                    onKeyPress={this.handleKeyPress.bind(this)}
                    floatingLabelText="Type your message"
                    multiLine={true}
                    fullWidth={true}
                    rows={2}
                />
            </div>
        );
    }

    handleChange(event) {
        this.props.onChange(event.target.value);
    }

    handleKeyPress(event) {
        if (event.which === 13) {
            const trimmedMessage = this.props.value.trim();

            if (trimmedMessage) {
                this.props.onSubmit({
                    text: trimmedMessage,
                    userId: this.props.userId
                });
            }

            event.preventDefault();
        }
    }
}

export default MessageEntryBox;
