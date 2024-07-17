import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import FotoService from "../services/FotoService";

const initialState = {
    foto: {},
    error: false,
    success: false,
    loading: false,
    message: null,
};

export const register = createAsyncThunk(
    "foto/create",
    async (foto, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token;

        const data = await FotoService.register(foto, token);

        if (data.errors) {
            return thunkAPI.rejectWithValue(data.errors[0]);
        }

        return data;
    }
);

export const GetAllPost = createAsyncThunk(
    "fotos/GetAllPost",
    async (data, thunkAPI) => {
        const token = thunkAPI.getState().auth.user.token;

        const Posts = await FotoService.GetAllPost(data, token);

        if (Posts.errors) {
            return thunkAPI.rejectWithValue(Posts.errors[0]);
        }

        return Posts;
    }
);

export const GetFotoById = createAsyncThunk(
    "fotos/GetFotoById",
    async (id) => {
        const Post = await FotoService.GetFotoById(id);

     
        return Post;
    }
);

export const fotoSlice = createSlice({
    name: "foto",
    initialState, // correção: deve ser em minúsculas
    reducers: {
        resetMessage: (state) => {
            state.message = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true; // correção: success com dois "c"
                state.error = null;
                state.foto = action.payload;
                state.message = "Foto postada com sucesso";
            })
            .addCase(register.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.foto = {};
                state.success = false; // correção: success com dois "c"
            })
            .addCase(GetAllPost.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(GetAllPost.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true; // correção: success com dois "c"
                state.error = null;
                state.foto = action.payload;
                state.message = "Fotos buscadas com sucesso";
            })
            .addCase(GetAllPost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.foto = {};
                state.success = false; // correção: success com dois "c"
            })
            .addCase(GetFotoById.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(GetFotoById.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true; // correção: success com dois "c"
                state.error = null;
                state.foto = action.payload;
                state.message = "Foto buscada com sucesso";
            })
            .addCase(GetFotoById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
                state.foto = {};
                state.success = false; // correção: success com dois "c"
            });
    },
});

export const { resetMessage } = fotoSlice.actions;
export default fotoSlice.reducer;
