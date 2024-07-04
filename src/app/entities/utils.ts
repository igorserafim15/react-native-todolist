export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

export type EntityUpdate<Entity> = Partial<Entity> & { id: string }
