// ExaStateType

export interface Template {
    val: number
    stage: `idle` | `busy` | `failed`
    failureMsg: null | string
}
