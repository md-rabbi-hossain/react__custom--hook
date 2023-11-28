
import React, { useEffect, useState } from 'react';
export default function useFetchdata(url) {
    const [fetchAllData, setFetchAllData] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setFetchAllData(data))

    }, []);
    return fetchAllData
}
