'use client'

import { useEffect } from 'react'

export default function PreferencesPage() {

    useEffect(() => {
        console.log(">>> Fetching preferences data")
    }, [])

    return (
        <>
            <h2>PreferencesPage page here</h2>
        </>
    )
}
