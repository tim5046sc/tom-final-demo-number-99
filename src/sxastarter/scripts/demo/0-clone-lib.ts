import API from '@sitecore-feaas/api'
import options from './_options';

export default async function Example() {
  const api = new API(options)

  var sourceId = options.libraryId
  function ID(id: string) {
    return id + options.suffix
  }

  const source = await api.libraries.get({ id: sourceId })
  const target = await api.libraries.save({ ...source, id: ID(sourceId), name: ID(source.name), apiKey: api.apiKey })
  const collections = await source.collections.fetch()
  console.log(`> Discovered ${collections.length} collections`)

  for (const sourceCollection of collections) {
    console.log(`-> Collection ${sourceCollection.id} has ${sourceCollection.components.length} components`)
    const collection = await target.collections.save({
      ...sourceCollection,
      id: ID(sourceCollection.id)
    })

    for (const sourceComponent of sourceCollection.components) {
      const component = await collection.components.save({
        ...sourceComponent,
        id: ID(sourceComponent.id)
      })
      await component.variants.fetch()
      await sourceComponent.variants.fetch()

      console.log(`--> Component ${sourceComponent.id} has ${sourceComponent.variants.length} varinats`)
      for (const sourceVariant of sourceComponent.variants) {
        if (
          options.skipDeleted &&
          sourceComponent.getVariants().find((v) => v.refId == sourceVariant.refId)?.deletedAt
        ) {
          continue
        }
        component.establishVariant({
          ...sourceVariant,
          id: ID(sourceVariant.id),
          refId: ID(sourceVariant.refId),
          // patch datasource reference
          view: sourceVariant.view.replace(/(data-path[a-z-]*=")([a-z0-9-_]+)([^"]*")/gi, (_m, before, id, after) => {
            return before + ID(id) + after
          })
        })
      }
      await component.saveVariants()
    }
  }

  const datasources = await source.datasources.fetch()
  console.log(`> Discovered ${datasources.length} datasources`)
  for (const sourceDatasource of datasources) {
    await target.datasources.save({
      ...sourceDatasource,
      id: ID(sourceDatasource.id)
    })
  }

  const sourceStylesheet = await source.stylesheet.get()
  await target.stylesheet.save({
    source: sourceStylesheet.source,
    css: sourceStylesheet.css
  })
}

Example()
