import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const instance = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

const SetAuthHeaders = (token) => {
  instance.defaults.headers.common["Authorization"] = `${token}`;
};

export const apiRegister = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const { data } = await instance.post("/users/signup", formData);
      SetAuthHeaders(data.token);
      return data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const apiLogin = createAsyncThunk(
  "auth/login",
  async (formData, thunkAPI) => {
    try {
      const { data } = await instance.post("/users/login", formData);
      SetAuthHeaders(data.token);
      return data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const apiLogout = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      await instance.post("/users/logout");
      return;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const apiRefreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      SetAuthHeaders(token);
      const { data } = await instance.get("/users/current");
      return data;
    } catch (error) {
      console.error(error);
      return thunkApi.rejectWithValue();
    }
  },
  
  {
    condition: (_, thunkApi) => {
      const state = thunkApi.getState();
      const token = state.auth.token;
      if (token) return true;
      return false;
    },
  }
);

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get("/contacts");
      return data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const { data } = await instance.post("/contacts", contact);
      return data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue();
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue();
    }
  }
);
