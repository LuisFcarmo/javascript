import { useState, useEffect, useReducer } from "react";
import { db } from '../firebase/config';
import { updateDoc, doc } from "firebase/firestore";

// initial state for reducer
const initialState = {
    loading: null,
    error: null
};

// reducer
const updateReducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return { loading: true, error: null };
        case 'UPDATED_DOC':
            return { loading: false, error: null };
        case 'ERROR':
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

// exporting the hook to save new docs
export const useUpdateDocument = (docCollection) => {
    // dispatch is the function we want to execute in our reducer, which will be insertReducer
    const [response, dispatch] = useReducer(updateReducer, initialState);

    // dealing with memory leak
    const [cancelled, setCancelled] = useState(false);
    // before doing any action, check if it's cancelled
    const checkCancelBeforeDispatch = (action) => {
        // if it's not cancelled, execute the action
        if (!cancelled) {
            dispatch(action);
        }
    };

    // function to insert document
    const UpdateDocument = async (uid, data) => {
        checkCancelBeforeDispatch({
            type: 'LOADING'
        });

        try {
            const docRef = await doc(db, docCollection, uid);
            const updatedDocument = await updateDoc(docRef, data);

            checkCancelBeforeDispatch({
                type: 'INSERTED_DOC',
                payload: UpdateDocument
            });
        } catch (error) {
            checkCancelBeforeDispatch({
                type: 'ERROR',
                payload: error.message
            });
        }
    };

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return { UpdateDocument, response };
};