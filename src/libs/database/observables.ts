import { Model } from '@nozbe/watermelondb'
import { database } from './index'
import { withObservables } from '@nozbe/watermelondb/react'

type ObservablesProps<T> = {
  listing: T[]
}

type ComponentObservables<T> = (props: ObservablesProps<T>) => React.JSX.Element

function observables<T extends Model>(
  tableName: string,
  component: ComponentObservables<T>,
) {
  const Listing = database.collections.get<T>(tableName).query()
  const _withObservables = withObservables([], () => ({
    listing: Listing.observe(),
  }))

  return _withObservables(component)
}

export { observables, type ObservablesProps }
