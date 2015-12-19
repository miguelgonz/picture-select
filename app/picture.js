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
        var pictureClass = 'pictures__item',
            imgClass = '';

        if (this.state.selected) {
            pictureClass += ' pictures__item--selected';
            imgClass = 'selected';
        }
        return (
            <div className={pictureClass}>
                <a className="thumbnail" onClick={this.toggle}>
                    <img className={imgClass} src={this.props.url}/>
                    <h5>{this.props.title}</h5>
                </a>
            </div>
        );
    }
});

module.exports = Picture;
