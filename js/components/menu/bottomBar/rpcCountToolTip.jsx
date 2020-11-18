'use strict';

var React = require('react');

class RPCCountToolTip extends React.Component {
    render() {
        return (
            <div>
                The{' '}
                <a
                    target='_new'
                    href='http://community.lacunaexpanse.com/wiki/rpc-limit'
                >
                    RPC limit
                </a>{' '}
                is the number of requests you can send to the server in a 24
                hour period.
            </div>
        );
    }
}

module.exports = RPCCountToolTip;
