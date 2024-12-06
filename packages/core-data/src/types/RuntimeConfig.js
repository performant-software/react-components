// @flow

export type Layer = {
  name: string,
  layer_type: 'raster' | 'vector' | 'geojson',
  overlay?: boolean,
  url: string,
  description?: string,
  tilesize?: number,
  attribution?: string,
  minzoom?: number,
  maxzoom?: number
};

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
  layers: Array<Layer>,
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
    },
    default_sort?: string
  },
  core_data: {
    project_ids: number[],
    url: string
  }
};
