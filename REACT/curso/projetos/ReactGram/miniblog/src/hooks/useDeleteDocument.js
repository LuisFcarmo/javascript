import { useState, useEffect, useReducer } from "react";
import { db } from '../firebase/config';
import { doc, deleteDoc } from "firebase/firestore";

// initial state for reducer
const initialState = {
    loading: null,
    error: null
};

// reducer
const DeleteReducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return { loading: true, error: null };
        case 'DELETED_DOC':
            return { loading: false, error: null };
        case 'ERROR':
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

// exporting the hook to save new docs
export const useDeleteDocument = (docCollection, id) => {
    // dispatch is the function we want to execute in our reducer, which will be insertReducer
    const [response, dispatch] = useReducer(DeleteReducer, initialState);

    // dealing with memory leak
    const [cancelled, setCancelled] = useState(false);
    // before doing any action, check if it's cancelled
    const checkCancelBeforeDispatch = (action) => {
        // if it's not cancelled, execute the action
        if (!cancelled) {
            dispatch(action);
        }
    };

    const DeleteDocument = async (id) => {
        checkCancelBeforeDispatch({
            type: 'LOADING'
        });

        try {
           const DeletedDocument = await deleteDoc(doc(db, docCollection, id));
            checkCancelBeforeDispatch({
                type: 'DELETED_DOC',
                payload: DeleteDocument,
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

    return { DeleteDocument, response };
};