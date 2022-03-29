import camelCase from 'camelcase'
import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {apiActions} from '../modules/api/actions'
import {selectApiState} from '../modules/api/selectors'

const useFetch = endpoint => {
    const dispatch = useDispatch()
    const apiState = useSelector(selectApiState)
    // console.log(endpoint)

    const performFetch = useCallback(data => dispatch(apiActions.fetch(endpoint, data)), [endpoint, dispatch]) 
    const response = useMemo(() => apiState[camelCase(endpoint)], [apiState, endpoint])
    return {response, performFetch}
}

export default useFetch