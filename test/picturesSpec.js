var expect = require('chai').expect;
var React = require('react');
var TestUtils = require('react-addons-test-utils');
var Pictures = require('../app/pictures');


describe('Pictures', function () {
    var shallowRenderer, mockData;

    beforeEach(function () {
        shallowRenderer = TestUtils.createRenderer();
        mockData = {
            title: 'some title',
            pictures: [],
            time: ''
        };
    });

    it('renders a container', function () {
        var component;
        const pictures = React.createElement(Pictures, mockData);

        shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render(pictures);

        component = shallowRenderer.getRenderOutput();

        expect(component.props.className).to.equal('pictures');
    });

    it('renders each picture', function () {
        mockData.pictures = [
            {media: {}}, {media: {}}, {media: {}},
        ];
        const pictures = React.createElement(Pictures, mockData);

        shallowRenderer = TestUtils.createRenderer();
        shallowRenderer.render(pictures);

        const component = shallowRenderer.getRenderOutput();
        expect(component.props.children[1].length).to.equal(3);
    });

    it('toggles a picture', function () {
    });
})
