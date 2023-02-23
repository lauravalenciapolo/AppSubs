export interface Sub {
    "nick": string, 
    "months": number,
    "avatar": string,
    "description"?:string
}

export type SubsResponseApi = {
    "nick": string, 
    "months": number,
    "profileUrl": string,
    "description"?:string
}