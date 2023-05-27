// use local storage to manage cart data
const addToDb = id => {
    let favouriteList = getFavouriteList();
    // add quantity
    const quantity = favouriteList[id];
    if (!quantity) {
        favouriteList[id] = 1;
    }
    else {
        favouriteList[id] = quantity + 1;
    }
    localStorage.setItem('favourite-list', JSON.stringify(favouriteList));
}

const removeFromDb = id => {
    const favouriteList = getFavouriteList();
    if (id in favouriteList) {
        delete favouriteList[id];
        localStorage.setItem('favourite-list', JSON.stringify(favouriteList));
    }
}

const getFavouriteList = () => {
    let favouriteList = {};

    //get the shopping cart from local storage
    const storedList = localStorage.getItem('favourite-list');
    if (storedList) {
        favouriteList = JSON.parse(storedList);
    }
    return favouriteList;
}

const deleteFavouriteList = () => {
    localStorage.removeItem('favourite-list');
}

export {
    addToDb,
    removeFromDb,
    getFavouriteList,
    deleteFavouriteList
}