import React from 'react'
import './styles.css'

interface GenderCardProps {
    text: string
    cardSelected?: boolean
}

export default function GenderCard(props: GenderCardProps) {
    return (
        <div className={`${props.cardSelected ? "gender-card-active" : "gender-card"}`}>{props.text}</div>
    )
}
