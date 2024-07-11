import { useState, useEffect } from "react";
import { db } from '../firebase/config'
import { collection, query, orderBy, onSnapshot, wherem, QuerySnapshot } from "firebase/firestore";

export const useFetchDocuments = (docCollection, search = null, uid = null) => {
    const [ documents, setDocuments ] = useState(null)
    const [ error, setError ] = useState("")
    const [ loading, setLoading ] = useState("")
    const [cancelled, setCancelled] = useState(false);


    useEffect(() => {
        async function LoadData () {
            if(cancelled) return

            setLoading(true)
            //buscando a referência da coleção no meu banco de dados
            const collectionRef = await collection(db, docCollection)

            try {
                let querry;
                //busca
                //dashboard
                querry = await query(collectionRef, orderBy("createdAt", "desc"))
                await onSnapshot(querry, (QuerySnapshot) => {
                    setDocuments (
                        QuerySnapshot.docs.map((doc) => ({
                                id: doc.id,
                                ...doc.data(),
                            }
                        ))
                    )
                })
                setLoading(false)
            } catch (error) {
                console.log(error)
                setError(error)
                setLoading(false)
            }
       }
       LoadData();
    }, [docCollection, search, uid, cancelled]);
    
    useEffect(() => {
        return () => setCancelled(true);
    }, [])

    return { documents, loading, error };
};