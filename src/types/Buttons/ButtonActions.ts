interface ButtonActionProps {
    label: string
    loading?: boolean
    primary?: boolean
    destructive?: boolean
    secondary?: boolean
    disabled: boolean
    onClick: () => void

}

export type { ButtonActionProps }
