import React ,{ useEffect, useState } from "react";
import axios from 'axios';

const API_HOST = 'https://corona.lmao.ninja/v2';

const ENDPOINTS = [
    {
        id: 'all',
        path: '/all',
        isDefault: true
    },
    {
        id: 'countries',
        path: '/countries'
    }
]

const defaultState = {
    data: null,
    state: 'ready'
}

const useTracker = ({ api = 'all' }) => {

    const [tracker = {}, setTracker] = useState(defaultState)

    const fetchTracker = React.useCallback(async () => {
        let route = ENDPOINTS.find(({ id } = {}) => id === api);

        if (!route) {
            route = ENDPOINTS.find(({ isDefault } = {}) => !!isDefault);
        }

        let response;

        try {
            setTracker((prev) => {
                return {
                    ...prev,
                    state: 'loading'
                }
            });
            response = await axios.get(`${API_HOST}${route.path}`);
        } catch (e) {
            setTracker((prev) => {
                return {
                    ...prev,
                    state: 'error',
                    error: e
                }
            });
            return
        }

        const { data } = response;

        setTracker((prev) => {
            return {
                ...prev,
                state: 'ready',
                data
            }
        });

    },[api]);

    useEffect(() => {
        fetchTracker()
    }, [api, fetchTracker])

    return {
        fetchTracker,
        ...tracker
    }
};

export default useTracker;