'use client'

import { useEffect } from 'react'

export default function DisplayPage() {

    useEffect(() => {
        console.log(">>> Fetching display data")
    }, [])

    return (
        <>
            <h2>Display page here</h2>
        </>
    )
}
