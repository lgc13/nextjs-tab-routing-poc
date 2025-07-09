'use client'

import Link from 'next/link'
import {useSelectedLayoutSegment} from 'next/navigation'

const TABS = [
    'profile',
    'security',
    'display',
    'preferences',
    'services',
    'notifications',
] as const

export default function SettingsLayout({
                                           children,
                                       }: {
    children: React.ReactNode
}) {
    const segment = useSelectedLayoutSegment() || 'profile'

    return (
        <div style={{padding: 24, fontFamily: 'sans-serif'}}>
            <h1>Lucas Costa • My Job Title</h1>
            <nav style={{display: 'flex', gap: 12, margin: '1rem 0'}}>
                {TABS.map((tab) => (
                    <Link
                        key={tab}
                        href={`/settings/${tab}`}
                        style={{
                            padding: '6px 12px',
                            borderBottom: segment === tab
                                ? '3px solid #0070f3'
                                : '2px solid transparent',
                            color: segment === tab
                                ? '#0070f3'
                                : '#555',
                            fontWeight: segment === tab
                                ? '600'
                                : '400',
                            transition: 'color 0.2s, border-bottom 0.2s',
                            textDecoration: 'none',
                        }}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </Link>
                ))}
            </nav>
            <div
                style={{
                    padding: 16,
                    border: '1px solid #ddd',
                    borderRadius: 4,
                    minHeight: 120,
                }}
            >
                {children}
            </div>
        </div>
    )
}
