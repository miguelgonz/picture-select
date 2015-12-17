var React = require('./lib/react.js');
var Picture = require('./picture.js');

var Pictures = React.createClass({
    getInitialState: function () {
        return {
            chosenPictures: []
        }
    },
    pictureToggle: function () {
        console.log(arguments);
    },
    render: function() {
        var that = this,
            pictures = this.props.pictures.map(function (picture) {
                console.log(picture);
                return React.createElement(
                    Picture,
                    {
                        id: picture.link,
                        title: picture.title,
                        url: picture.media.m,
                        onToggle: that.pictureToggle
                    }
                );
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
