'use client'

import { useEffect } from 'react'

export default function SecurityPage() {

    useEffect(() => {
        console.log(">>> Fetching security data")
    }, [])

    return (
        <>
            <h2>Security page here</h2>
        </>
    )
}
