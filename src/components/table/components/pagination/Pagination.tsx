import { IconButton } from '@material-ui/core';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';
import React from 'react'
import Select from 'react-select';
import defaultClasses from './table.module.css';
import { disableNextPage } from '../../../../utils/table/pagination/pagination';
import { rowsPerPages } from '../../../../utils/constants/pagination/pagination';


type PaginationProps = {
    page: number,
    rowsPerPage: number,
    onPageChange: (page: number) => void,
    onRowsPerPageChange: (rowsPerPage: number) => void,
    totalPages: number,
    loading: boolean,
    totalPerPage: number,
}

type TextPaginationProps = {
    children?: React.ReactNode,
}

type IconButtonPaginationProps = {
    onPageChange: (page: number) => void,
    ariaLabel: string,
    disabled: boolean,
    Icon: React.ReactNode
}

function TextPagination(children: TextPaginationProps): React.ReactElement {
    return (
        <span className={defaultClasses.textPagination}>
            {children}
        </span>
    )
}

function IconButtonPagination(props: IconButtonPaginationProps): React.ReactElement {
    return (
        <IconButton
            style={{ paddingRight: 15 }}
            onClick={props.onPageChange}
            disabled={props.disabled}
            aria-label={props.ariaLabel}
        >
            {props.Icon}
        </IconButton>
    )
}

function Pagination({ page, rowsPerPage, onPageChange, onRowsPerPageChange, loading, totalPerPage }: PaginationProps): React.ReactElement {

    return (
        <div
            className={defaultClasses.pagination}
            style={{ display: 'flex', justifyContent: 'space-between' }}
        >
            <div />

            <div className={defaultClasses.rootPagination}>
                <TextPagination children={"Linhas por página"} />

                <Select
                    className={defaultClasses.textPagination}
                    value={rowsPerPage}
                    clearValueText={false}
                    style={{ maxWidth: 50, marginTop: -10, height: 10, marginRight: 10 }}
                    options={rowsPerPages}
                    clearable={false}
                    searchable={false}
                    onChange={onRowsPerPageChange}
                    menuContainerStyle={{ top: 'auto', bottom: '100%' }}
                />
                <TextPagination children={`Página ${page}`} />

                <div style={{ marginRight: 10 }} />

                <IconButtonPagination
                    Icon={<KeyboardArrowLeft />}
                    ariaLabel='Previous Page'
                    disabled={page <= 1 || loading}
                    onPageChange={() => onPageChange(page - 1)}
                />

                <IconButtonPagination
                    Icon={<KeyboardArrowRight />}
                    ariaLabel='Next Page'
                    disabled={disableNextPage({ rowsPerPage, totalPerPage }) || loading}
                    onPageChange={() => onPageChange(page + 1)}
                />

            </div>
        </div>
    )
}

export default Pagination