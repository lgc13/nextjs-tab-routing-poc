'use client'

import { useEffect } from 'react'

export default function NotificationsPage() {

    useEffect(() => {
        console.log(">>> Fetching notification data")
    }, [])

    return (
        <>
            <h2>NotificationsPage here</h2>
        </>
    )
}
