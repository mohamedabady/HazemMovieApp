import { useState, useEffect } from 'react';

//Import Utils
import ErrorHandler from '../../../Utils/ErrorHandler';

export const useHttp = (apiPromise , dependencies)=>{
    const [isLoading, setLoading] = useState(false);
    const [fetchedData, setFetchedData] = useState(null);

    useEffect(()=>{
        setLoading(true);
        apiPromise()
        .then((response)=>{
            setLoading(false);
            setFetchedData(response.data);
        })
        .catch((error)=>{
            setLoading(false);
            ErrorHandler(error);
        })
    }, dependencies);
    return [isLoading, fetchedData];
}