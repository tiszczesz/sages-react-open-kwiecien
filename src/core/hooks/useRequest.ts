import { useState, useEffect } from "react"

export const useRequest = function <T>(input: RequestInfo, init?: RequestInit | undefined) {
    const [results, setResults] = useState<T | null>(null)
    const [message, setMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [lastRequest, setLastRequest] = useState<null | number>(null)
    const [request, setRequest] = useState(input)
    const [config, setConfig] = useState(init)

    const execute = (newInput: RequestInfo = input, init?: RequestInit | undefined) => {
        setLastRequest(Date.now())
        setRequest(newInput)
        setConfig(init)
    }

    useEffect(() => {
        const handle = new AbortController()

        setIsLoading(true)
        setMessage('')
        setResults(null)
        fetch(request, { ...config, signal: handle.signal })
            .then(resp => resp.json())
            .then(data => setResults(data))
            .catch((e) => handle.signal.aborted || setMessage(e?.message))
            .finally(() => handle.signal.aborted || setIsLoading(false))

        return () => { handle.abort() }
    }, [lastRequest])

    return {
        results,
        message,
        isLoading,
        execute
    }
}