var React = require('./lib/react.js');
var Picture = require('./picture.js');
var store = require('./selectedStore.js');

var Pictures = React.createClass({
    pictureToggle: function (id) {
        store.toggleStateOfItem(id);
    },
    _mapPictureDataToElement: function (picture) {
        return <Picture
                id={picture.link}
                url={picture.media.m}
                title={picture.title}
                onToggle={this.pictureToggle}
                selected={store.isItemSelected(picture.link)}
            />
    },
    render: function() {
        var that = this,
            pictures = this.props.pictures.map(this._mapPictureDataToElement);

        return (
            <div className="pictures">
                <h2>{this.props.title}</h2>
                {pictures}
            </div>
        );
    }
});

module.exports = Pictures;
