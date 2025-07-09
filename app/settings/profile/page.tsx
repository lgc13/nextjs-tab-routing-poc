'use client'

import { useEffect } from 'react'

export default function ProfilePage() {

    useEffect(() => {
        console.log(">>> Fetching profile data")
    }, [])

    return (
        <>
            <h2>Profile page here</h2>
        </>
    )
}
