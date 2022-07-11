import type { ParsedUrlQuery } from 'querystring'

export type HTTPMethod =
    | 'ACL'
    | 'BIND'
    | 'CHECKOUT'
    | 'CONNECT'
    | 'COPY'
    | 'DELETE'
    | 'GET'
    | 'HEAD'
    | 'LINK'
    | 'LOCK'
    | 'M-SEARCH'
    | 'MERGE'
    | 'MKACTIVITY'
    | 'MKCALENDAR'
    | 'MKCOL'
    | 'MOVE'
    | 'NOTIFY'
    | 'OPTIONS'
    | 'PATCH'
    | 'POST'
    | 'PROPFIND'
    | 'PROPPATCH'
    | 'PURGE'
    | 'PUT'
    | 'REBIND'
    | 'REPORT'
    | 'SEARCH'
    | 'SOURCE'
    | 'SUBSCRIBE'
    | 'TRACE'
    | 'UNBIND'
    | 'UNLINK'
    | 'UNLOCK'
    | 'UNSUBSCRIBE'

export interface Route<T = any> {
    method: HTTPMethod
    path: string
    handler: T
}

export type ShortHandRoute<T = any> = (
    path: string,
    handler: T,
) => void

export interface FindResult<T = any> {
    handler: T
    params: { [k: string]: string | undefined }
    query: ParsedUrlQuery
}

export interface LookupResult<T = any> extends FindResult<T> {
    found: boolean
    method: HTTPMethod,
}