import React from "react";
import './styles.css';
import { RxTriangleLeft } from "react-icons/rx";
// <RxTriangleLeft />
import { RxTriangleRight } from "react-icons/rx";
//<RxTriangleRight />

interface SetasCardProps {
    children: React.ReactNode
}

export default function SetasCardProps(props: SetasCardProps) {
    return (
        <div className="flex-title">
            <RxTriangleLeft color="#F7C22F" className="triangle-left-small" />
            <RxTriangleLeft color="#F7C22F" className="triangle-left-big" />
            {props.children}
            <RxTriangleRight color="#F7C22F" className="triangle-right-big" />
            <RxTriangleRight color="#F7C22F" className="triangle-right-small" />
        </div>
    )
}
