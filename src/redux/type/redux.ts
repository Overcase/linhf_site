export type baseAction = {
  type: string
  payload: any
}

export type baseOptions = {
  payload: any
}

export type baseObj = {
  [file in string]: any
}

export type actionOptions = baseObj & baseOptions

export type reduxAction = baseObj & baseAction
