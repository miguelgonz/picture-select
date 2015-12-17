var React = require('./lib/react.js');

var Picture = React.createClass({
    render: function() {
        return React.createElement(
            "div",
            { className: "pictures__item" },
            React.createElement(
                "div",
                { className: "thumbnail" },
                React.createElement("img", { src: this.props.link }),
                React.createElement(
                    "div",
                    { className: "caption" },
                    this.props.title
                )
            )
        );
    }
});

module.exports = Picture;
