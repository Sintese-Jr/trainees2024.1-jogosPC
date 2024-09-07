import React from "react";
import './styles.css';
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

interface NavegacaoPaginasProps {
    paginaAtual: number;
    totalPaginas: number;
    setPagina: (event: React.ChangeEvent<HTMLInputElement> | number) => void;
}

export default function NavegacaoPaginas(props: NavegacaoPaginasProps) {
    return (
        <div className="secao-navegacao">
            {/* condicional ternario */}
            <MdKeyboardDoubleArrowLeft
                className={`${props.paginaAtual > 1 ? "double-arrow-left-able" : "double-arrow-left-unable"}`}
                color={`${props.paginaAtual > 1 ? "#3F1E55" : "#682E93"}`}
                onClick={() => props.setPagina(1)}
            />
            <MdKeyboardArrowLeft
                className={`${props.paginaAtual > 1 ? "arrow-left-able" : "arrow-left-unable"}`}
                color={`${props.paginaAtual > 1 ? "#3F1E55" : "#682E93"}`}
                onClick={() => props.setPagina((props.paginaAtual) - 1)}
            />
            <input
                type="number"
                value={props.paginaAtual}
                className="input-pagina"
                max={props.totalPaginas}
                onChange={props.setPagina}
            />
            <MdKeyboardArrowRight
                className={`${props.paginaAtual < props.totalPaginas ? "arrow-right-able" : "arrow-right-unable"}`}
                color={`${props.paginaAtual < props.totalPaginas ? "#3F1E55" : "#682E93"}`}
                onClick={() => props.paginaAtual < props.totalPaginas ? props.setPagina((props.paginaAtual) + 1) : () => { }}
            />
            <MdKeyboardDoubleArrowRight
                className={`${props.paginaAtual < props.totalPaginas ? "double-arrow-right-able" : "double-arrow-right-unable"}`}
                color={`${props.paginaAtual < props.totalPaginas ? "#3F1E55" : "#682E93"}`}
                onClick={() => props.setPagina(props.totalPaginas)}
            />
        </div>
    )
}