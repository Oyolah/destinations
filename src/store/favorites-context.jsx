import { createContext, useState} from 'react'

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorites: (favoriteMeetup) => {},
    removeFavorites: (meetupId) => {},
    itemIsFavorites: meetupId => {}
});


export function FavoritesContextProvider (props) {

    const [userFavorites, setUserFavorites] = useState([])

    function addFavoritesHandler(favoriteMeetup) {
        setUserFavorites(prevUserFavorites =>{
            return prevUserFavorites.concat(favoriteMeetup)
        })
    }

    function removeFavoritesHandler(meetupId) {
        setUserFavorites(prevUserFavorites =>{
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId)
        })
    }

    function itemIdFavoriteHandler(meetupId) {
        return userFavorites.some(meetup =>meetup.id === meetupId)
    }


    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoritesHandler,
        removeFavorite: removeFavoritesHandler,
        itemIsFavorite: itemIdFavoriteHandler
    }
    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}
export default FavoritesContext;