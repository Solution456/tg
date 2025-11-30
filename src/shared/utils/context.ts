import { getCurrentInstance, inject, type InjectionKey, provide } from 'vue'

export function injectWithSelf<T>(
  symbol: InjectionKey<T>,
  def: T | undefined = undefined
): T | undefined {
  const vm = getCurrentInstance() as any

  return vm?.provides[symbol as any] || inject(symbol, def)
}

export function createContext<ContextValue>(providerName: string) {
  const symbolDescription = `${providerName}Context`

  const injectionKey: InjectionKey<ContextValue> = Symbol(symbolDescription)

  const injectContext = <
    T extends ContextValue | null | undefined = ContextValue
  >(
    fallback?: T | (() => T)
  ): T extends null ? ContextValue | null : ContextValue => {
    // @ts-expect-error FIXME: research the problem
    const context = injectWithSelf(injectionKey, fallback)

    if (context) return context

    if (context === null) return context as any

    throw new Error(
      `Injection \`${injectionKey.toString()}\` not found. Must be used within ${
        providerName
      }Provider.`
    )
  }

  const provideContext = (context: ContextValue) => {
    provide(injectionKey, context)
    return context
  }

  return [injectContext, provideContext] as const
}
