var React = require('./lib/react.js');

var Picture = React.createClass({
    getInitialState: function () {
        return {
            selected: this.props.selected
        };
    },
    toggle: function () {
        this.setState({selected: !this.state.selected});
        if (typeof this.props.onToggle === 'function') {
            this.props.onToggle(this.props.id);
        }
    },
    render: function() {
        var that = this,
            pictureClass = 'pictures__item';

        if (this.state.selected) {
            pictureClass += ' pictures__item--selected';
        }
        return React.createElement(
            "div",
            { className: pictureClass },
            React.createElement(
                "a",
                {
                    className: "thumbnail",
                    onClick: function () {
                        that.toggle();
                    }
                },
                React.createElement("img", { src: this.props.url}),
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
