import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllRemindersAPI,
  addReminderAPI,
  editReminderAPI,
  getReminderByIdAPI,
} from "../../services/allApi";
import { deleteReminderAPI } from "../../services/allApi";


export const fetchAllReminders = createAsyncThunk(
  "reminders/fetchAllReminders",
  async () => {
    const response = await getAllRemindersAPI();
    return response.data;
  }
);


export const deleteReminder = createAsyncThunk("reminders/deleteReminder", async (id) => {
  await deleteReminderAPI(id);
  return id;
});


export const addReminder = createAsyncThunk("reminders/addReminder", async (reminderData) => {
  const response = await addReminderAPI(reminderData);
  return response.data;
});

export const getReminderById = createAsyncThunk("reminders/getReminderById", async (id) => {
  const response = await getReminderByIdAPI(id);
  return response.data;
});


export const editReminder = createAsyncThunk("reminders/editReminder", async ({ id, data }) => {
  const response = await editReminderAPI(id, data);
  return response.data;
});


const reminderSlice = createSlice({
  name: "reminders",
  initialState: {
    allReminders: [],
    selectedReminder:[],
    dummyReminders: [],
    loading: false,
    error: "",
  },
  reducers: {
    searchReminders:(state,action)=>{

    state.allReminders=state.dummyReminders.filter(rem=>rem.title.toLowerCase().includes(action.payload))
},



filterByCategory: (state, action) => {
   
  if (action.payload.toLowerCase() === "all") 

  {
    state.allReminders = state.dummyReminders;
  } 
  else {
    state.allReminders = state.dummyReminders.filter(
      (rem) => rem.category.toLowerCase() === action.payload.toLowerCase()
    );
  }
}
  },
  extraReducers: (builder) => {
    builder
      
      .addCase(fetchAllReminders.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchAllReminders.fulfilled, (state, action) => {
        state.loading = false;
        state.allReminders = action.payload;
        state.dummyReminders = action.payload;

      })
      .addCase(fetchAllReminders.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch reminders.";
      })

     
      .addCase(addReminder.fulfilled, (state, action) => {
        state.allReminders.push(action.payload);
      })

     
      .addCase(deleteReminder.fulfilled, (state, action) => {
        state.allReminders = state.allReminders.filter(
          (item) => item.id !== action.payload
        );
      })




      
      .addCase(getReminderById.fulfilled, (state, action) => {
        state.selectedReminder = action.payload;
      })


     builder.addCase(editReminder.fulfilled,(state,action)=>{
      state.selectedReminder=action.payload
     })
















   

  

  },
});
export const { searchReminders } = reminderSlice.actions;
export const { filterByCategory} = reminderSlice.actions;
export default reminderSlice.reducer;
