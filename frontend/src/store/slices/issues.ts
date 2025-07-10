import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { Issue } from "../../types/issue";
import axios from "axios";

const BACKEND = "http://localhost:3080/graphql";

export const fetchIssues = createAsyncThunk("issues/getAll", async () => {
  const response = await axios.post(BACKEND, {
    query: `
            query {
                issues {
                    title
                    description
                }
            }
        `,
    variables: {},
  });

  return response.data.data.issues;
});

export const addIssue = createAsyncThunk(
  "issues/addOne",
  async (arg: { title: string; description: string }) => {
    const response = await axios.post(BACKEND, {
      query: `
            mutation CreateIssue($title: String!, $description: String!) {
                createIssue(title: $title, description: $description) {
                    title
                    description
                }
            }
        `,
      variables: {
        title: arg.title,
        description: arg.description,
      },
    });
    return response.data.data.createIssue;
  }
);

const slice = createSlice({
  name: "issues",
  initialState: {
    items: [] as Issue[],
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(addIssue.fulfilled, (state, action) => {
      state.items.push(action.payload);
    });
    builder.addCase(fetchIssues.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

// export const { addIssue } = slice.actions;
export default slice.reducer;
