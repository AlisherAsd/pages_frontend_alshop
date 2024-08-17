import {makeAutoObservable} from 'mobx'
import { brands, items, types } from '../db'

export default class ItemStore {

    constructor () {
        this._types = types
        this._brands = brands
        this._items = items
        this._selectedItems = []
        this._selectedType = {}
        this._selectedBrand = {}
        this._page = 1
        this._total_Count = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    } 
    setBrands(brands) {
        this._brands = brands
    }
    setItems(items) {
        this._items = items
    }
    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedBrand(brand) {
        this._selectedBrand = brand
    }
    setSelectedItems(items) {
        this._selectedItems = items
    }

    setPage(page) {
        this._page = page
    }
    setTotalCount(total_count) {
        this._total_Count = total_count
    }
    setLimit(limit) {
        this._limit = limit
    }

    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }
    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get items() {
        return this._items
    }

    get limit() {
        return this._limit
    }
    get page() {
        return this._page
    }
    get total_Count() {
        return this._total_Count
    }
    get SelectedItems() {
        return this._selectedItems
        
    }
}