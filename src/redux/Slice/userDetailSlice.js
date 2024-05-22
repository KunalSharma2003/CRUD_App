import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Create
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://6641fb283d66a67b3435b071.mockapi.io/crud",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
//Show(Read)
export const showUser = createAsyncThunk(
  "showUser",
  async (rejectWithValue) => {
    const response = await fetch(
      "https://6641fb283d66a67b3435b071.mockapi.io/crud"
    );
    try {
      const result = await response.json();
      // console.log(result);
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
//Delete
export const DeleteUser = createAsyncThunk(
  "DeleteUser",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://6641fb283d66a67b3435b071.mockapi.io/crud/${id}`,
      {
        method: "DELETE",
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
//Update
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `https://6641fb283d66a67b3435b071.mockapi.io/crud/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
    searchData: [],
  },
  reducers: {
    searchUser: (state, action) => {
      state.searchData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    //read
    builder.addCase(showUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(showUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(showUser.rejected, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    //Delete
    builder.addCase(DeleteUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(DeleteUser.fulfilled, (state, action) => {
      state.loading = false;
      const { id } = action.payload;
      if (id) {
        // state.users = state.users.filter((user) => user.id !== id);
        state.users = state.users.filter((ele) => ele.id !== id);
      }
    });
    builder.addCase(DeleteUser.rejected, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    //Update
    builder.addCase(updateUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.users = state.users.map((user) =>
        user.id === action.payload.id ? action.payload : user
      );
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
  },
});
export default userDetail.reducer;
export const { searchUser } = userDetail.actions;
