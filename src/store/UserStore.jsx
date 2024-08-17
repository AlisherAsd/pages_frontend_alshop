import {makeAutoObservable} from 'mobx'

export default class UserStore {
    
    constructor() {
        this._isAuth = false
        this._user = {}
        this._userName = ''
        this._role = 'user'
        this._user_id = null
        this._item_basket = []
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
       this._user = user
    }
    setUserName(name) {
        this._userName = name
    }
    setRole(role) {
        this._role = role
    }
    setUserId(id) {
        this._user_id = id
    }
    setItemBasket(item) {
        this._item_basket = item
    }
    
    get isAuth() {
        return this._isAuth
    }
    get User() {
        return this._user
    }
    get UserName() {
        return this._userName
    }
    get role() {
        return this._role
    }
    get UserId() {
        return this._user_id
    }
    get ItemBasket() {
        return this._item_basket
    }
} 