// @flow

export type RuntimeConfig = {
  branding: {
    title?: string,
    map_style: string,
    related?: Array<{
      endpoint: string,
      ui_label: string,
      default_open?: boolean
    }>
  },
  layers: Array<{
    name: string,
    layer_type: 'raster' | 'vector' | 'geojson',
    overlay?: boolean,
    url: string,
    description?: string,
    tilesize?: number,
    attribution?: string,
    minzoom?: number,
    maxzoom?: number
  }>,
  typesense: {
    host: string,
    port?: number,
    protocol?: 'http' | 'https',
    api_key: string,
    index_name: string,
    query_by: string,
    limit?: number,
    facets?: {
      include?: string[],
      exclude?: string[]
    }
  },
  core_data: {
    project_ids: number[],
    url: string
  }
};
