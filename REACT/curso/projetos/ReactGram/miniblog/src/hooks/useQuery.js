import { useLocation } from "react-router-dom";
import { useMemo } from 'react';

export function useQuery () {
    //useLocation pega os parametros da url
    const { search } = useLocation();
    //URLSearchParams serve para buscar todos os parametros presente na URL
    return useMemo(() => new URLSearchParams(search), [search]);
}