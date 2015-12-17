var React = require('./lib/react.js');
var Picture = require('./picture.js');

var Pictures = React.createClass({
    getInitialState: function () {
        return {
            chosenPictures: []
        }
    },
    pictureClick: function () {
    },
    render: function() {
        var pictures = this.props.pictures.map(function (picture) {
            return React.createElement(Picture, picture)
        });

        return React.createElement(
            'div',
            {className: 'pictures'},
            React.createElement('h2', {}, this.props.title),
            pictures
        );
    }
});

module.exports = Pictures;
