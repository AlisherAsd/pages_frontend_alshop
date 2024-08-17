import { $host } from "./index";


export const AddItemBasket = async (user_id, item_id) => {
    const {data} = await $host.post('api/basket/', {"user_id": user_id, "item_id": item_id})
    return data
}

export const getItemBasket = async (id) => {
    const {data} = await $host.get('api/basket/' + id)
    return data
}

export const deleteItemBasket = async (user_id, item_id) => {
    console.log(user_id, item_id);
    
    const {data} = await $host.delete('api/basket/', 
        {data: {
         user_id,
         item_id}})
    return data
}
