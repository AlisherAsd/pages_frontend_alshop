import { brands, items, types } from "../db";
import { $AuthHost, $host } from "./index";

export const createType = async (type) => {
    const {data} = await $AuthHost.post('api/type', type)
    return data
}

export const getTypes = async () => {
    const data = types
    return data
}

export const createBrand = async (type) => {
    const {data} = await $AuthHost.post('api/brand', type)
    return data
}

export const getBrands = async () => {
    const data = brands
    return data
}

export const createItem = async (item) => {
    const {data} = await $host.post('api/item', item)
    return data
}

export const getItems = async (typeId, brandId, page, limit = 6) => {
    const data = items
    return data
}

export const getItem = async (id) => {
    const data = items.find(item => item.id === id)
    return data
}

export const deleteItem = async (id) => {
    const data = items.find(item => item.id !== id)
    return data
}
