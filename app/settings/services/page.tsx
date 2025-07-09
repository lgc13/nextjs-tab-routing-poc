'use client'

import { useEffect } from 'react'

export default function ServicesPage() {

    useEffect(() => {
        console.log(">>> Fetching services data")
    }, [])

    return (
        <>
            <h2>ServicesPage here</h2>
        </>
    )
}
