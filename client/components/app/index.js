import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {} from './style.scss';

import MessageList from 'components/message-list';
import MessageEntryBox from 'components/message-entry-box';
import * as messageActionCreators from 'actions/message-actions';

import {AppBar, Card} from 'material-ui';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';

class App extends Component {
    render() {
        return (
            <div>
                <Card>
                    <AppBar title="Awesome Chat Window" />
                    <MessageList userId={this.props.userId} messages={this.props.message} />
                    <MessageEntryBox
                    value={this.props.currentMessage}
                    userId={this.props.userId}
                    onChange={this.props.updateMessage}
                    onSubmit={this.props.addMessage} />
                </Card>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        userId: state.userId,
        message: state.messages,
        currentMessage: state.currentMessage
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(messageActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default MuiThemeProvider(getMuiTheme(null, { userAgent: 'all' }))();
