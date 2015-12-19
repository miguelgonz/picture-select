const LS_KEY = 'pictures_toggle';

function initStorage() {
    localStorage.setItem(LS_KEY, '{"data": []}');
    return [];
}

function getStorage() {
    var data;
    try {
        var data = JSON.parse(localStorage.getItem(LS_KEY));
    } catch (e) {
        return initStorage();
    }
    if (!data) {
        return initStorage();
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
    return data && data.indexOf(id) !== -1;
};
