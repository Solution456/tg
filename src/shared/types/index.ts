import type { ComponentPublicInstance, MaybeRef, MaybeRefOrGetter } from 'vue'

export type AnyFn = (...args: any[]) => any

export type MaybeNullable<T> = T | null

export type ComponentProps<T> = T extends new () => { $props: infer P }
  ? NonNullable<P>
  : T extends (props: infer P, ...args: any) => any
    ? P
    : {}

export type VueInstance = ComponentPublicInstance
export type MaybeElement =
  | HTMLElement
  | SVGElement
  | VueInstance
  | undefined
  | null
export type MaybeComputedElementRef<T extends MaybeElement = MaybeElement> =
  MaybeRefOrGetter<T>
export type MaybeElementRef<T extends MaybeElement = MaybeElement> = MaybeRef<T>

export type ValueOf<T> = T[keyof T]
