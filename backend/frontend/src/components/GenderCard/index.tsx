import React from 'react'
import './styles.css'

interface GenderCardProps {
    text: string
    cardSelected?: string
    onClick: (text: string) => void
}

export default function GenderCard(props: GenderCardProps) {
    return (
        <div
            className={`${props.cardSelected === props.text ? "gender-card-active" : "gender-card"}`}
            onClick={() => props.onClick(props.text)}
        >
            {props.text}
        </div>
    )
}
