import React from "react";
import './styles.css';

interface SecaoCatalogoProps {
    children: React.ReactNode
}

export default function SecaoCatalogo(props: SecaoCatalogoProps) {
    return (
        <div className="secao-catalogo">
            {props.children}
        </div>
    )
}
