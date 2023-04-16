
export interface comonErrorAttributes{
    string?: string[]
    number?: number[]
}

export interface commonGeneralErrorRoleAttributes{
    role?: string
    setRole?: string
}

export interface  stringLengthErrorValueAttributes{
    string?: string[]
}

export interface stringLengthErrorShortLengthAttributes{
    shortMinLength?: number
    shortMaxLength?: number
}


export interface stringLengthErrorLongStringLengthAttributes{
    longMinLength?: number
    longMaxLength?: number
}

export interface stringLengthErrorLongStringAttributes{
    longString?: string[]
}