const LS_KEY = 'pictures_toggle';

function getStorage() {
    var data = JSON.parse(localStorage.getItem(LS_KEY));
    if (!data) {
        localStorage.setItem(LS_KEY, '{"data": []}');
        return [];
    }
    return data.data;
}

function saveStorage(data) {
    localStorage.setItem(LS_KEY, JSON.stringify({data: data}));
}

module.exports.toggleStateOfItem = function (id) {
    var data = getStorage(),
        index = data.indexOf(id);
    if (index !== -1) {
        data.splice(index, 1);
    } else {
        data.push(id);
    }
    saveStorage(data);
};

module.exports.isItemSelected = function (id) {
    var data = getStorage();
    return data.indexOf(id) !== -1;
};
