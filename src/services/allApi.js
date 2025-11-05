import commonAPI from '../services/commonAPI.js'
import { BASEURL } from '../services/severalURL.js'







export const getAllRemindersAPI=async()=>{
    return await commonAPI("GET",`${BASEURL}/reminders`,{})
}


export const deleteReminderAPI=async(id)=>{
    return await commonAPI("DELETE",`${BASEURL}/reminders/${id}`)

}




export const addReminderAPI=async(data)=>{
    return await commonAPI("POST",`${BASEURL}/reminders`,data)
}




export const getReminderByIdAPI = async (id) => {
  return await commonAPI("GET", `${BASEURL}/reminders/${id}`);
};


export const editReminderAPI = async (id, data) => {
  return await commonAPI("PUT", `${BASEURL}/reminders/${id}`, data);
};





