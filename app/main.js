var React = require('./lib/react.js');
var Pictures = require('./pictures.js');

(function(){
    window.cb = function (data){
        React.render(
            React.createElement(
                Pictures,
                {
                    title: data.title,
                    pictures: data.items,
                    time: data.modified
                }
            ),
            document.getElementById('app')
        );
    }

    var tags='london';
    var script=document.createElement('script');
    script.src='http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=cb&tags='+tags;
    document.head.appendChild(script);
})();
