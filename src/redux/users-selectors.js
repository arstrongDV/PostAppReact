import { createSelector } from 'reselect'

export let getUsers = (state) => {
    return state.usersPage.users;
}
export let getUsersSuper = createSelector( getUsers, (users) => {
    return users.filter(u => true);
})
export let getPageSize = (state) => {
    return state.usersPage.pageSize;
}
export let getToutalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}
export let getSelectedPage = (state) => {
    return state.usersPage.selectedPage
}
export let getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}
export let getIsFatching = (state) => {
    return state.usersPage.isFatching;
}
export let getFollowingProgres = (state) => {
    return state.usersPage.followingInProgres;
}
export let getPortionSize = (state) => {
    return state.usersPage.portionSize;
}