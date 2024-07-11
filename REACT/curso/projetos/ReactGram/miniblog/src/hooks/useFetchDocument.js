import { useState, useEffect } from "react";
import { db } from '../firebase/config'
import { doc, getDoc } from "firebase/firestore";

export const useFetchDocument = (docCollection, id) => {
    const [ document, setDocument ] = useState(null)
    const [ error, setError ] = useState("")
    const [ loading, setLoading ] = useState("")
    const [cancelled, setCancelled] = useState(false);


    useEffect(() => {
        async function LoadDocument () {
            if(cancelled) return
            setLoading(true)

            try {
                const DocRef = await doc(db, docCollection, id);
                const DocSnap = await getDoc(DocRef);
                setDocument(DocSnap.data())

                setLoading(false)
            } catch (e) {
                setError(e);
                console.log(e)
                setLoading(false)
            }   
       }
       LoadDocument();
    }, [docCollection, id, cancelled]);
    
    useEffect(() => {
        return () => setCancelled(true);
    }, [])

    return { document, loading, error };
};