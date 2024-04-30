import{j as t}from"./jsx-runtime-D9TvR9R2.js";import{m as s,f as u,g as d}from"./peripleo-maplibre.es26-D4QoMT78.js";import{r as l}from"./index-C0dDX-lL.js";import"./index-DOYXiIEK.js";import{_ as f}from"./index-default-C_maRo4o.js";import{M as c,a as i}from"./Map-D36ctN5W.js";const m=2,r=e=>{const n=s(),a=l.useMemo(()=>f.isEmpty(e.data)?null:e.data,[e.data]);return l.useEffect(()=>{if(n&&a&&e.fitBoundingBox){const o=c.getBoundingBox(a,e.buffer);o&&n.fitBounds(o,e.boundingBoxOptions,e.boundingBoxData)}},[n,e.buffer,e.data,e.boundingBoxData,e.boundingBoxOptions,e.fitBoundingBox]),a?t.jsxs(t.Fragment,{children:[e.animate&&t.jsx(u,{data:e.data,id:e.layerId}),t.jsx(d,{cluster:e.cluster,clusterMaxZoom:e.clusterMaxZoom,clusterMinPoints:e.clusterMinPoints,clusterProperties:e.clusterProperties,clusterRadius:e.clusterRadius,data:e.data,fillStyle:e.fillStyle,id:e.layerId,strokeStyle:e.strokeStyle,pointStyle:e.pointStyle})]}):null};r.defaultProps={buffer:m,fillStyle:i.fill,fitBoundingBox:!0,pointStyle:i.point,strokeStyle:i.stroke};const h=r;r.__docgenInfo={description:"This component renders a location marker to be used in a Peripleo context.",methods:[],displayName:"LocationMarkers",props:{animate:{required:!1,flowType:{name:"boolean"},description:"If `true`, the point marker will display with a pulsing animation."},boundingBoxData:{required:!1,flowType:{name:"any"},description:"(Optional) data to pass to the fitToBounds function."},boundingBoxOptions:{required:!1,flowType:{name:"any"},description:`(Optional) options to pass to the fitToBounds function.
See [spec](https://maplibre.org/maplibre-gl-js/docs/API/types/FitBoundsOptions/).`},buffer:{required:!1,flowType:{name:"number"},description:"The number of miles to buffer the GeoJSON data.",defaultValue:{value:"2",computed:!1}},cluster:{required:!1,flowType:{name:"boolean"},description:"If true, markers will be clustered before the specified zoom level."},clusterMaxZoom:{required:!1,flowType:{name:"number"},description:"Max zoom to cluster points on."},clusterMinPoints:{required:!1,flowType:{name:"number"},description:"Minimum number of points necessary to form a cluster."},clusterProperties:{required:!1,flowType:{name:"any"},description:"An object defining custom properties on the generated clusters."},clusterRadius:{required:!1,flowType:{name:"number"},description:"Radius of each cluster when clustering point."},data:{required:!0,flowType:{name:"signature",type:"object",raw:"{ [key: string]: any }",signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]}},description:"The GeoJSON data representing the location."},fillStyle:{required:!1,flowType:{name:"signature",type:"object",raw:"{ [key: string]: any }",signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]}},description:"GeoJSON layer fill style.",defaultValue:{value:`{
  type: 'fill',
  paint: {
    'fill-color': '#ff623b',
    'fill-opacity': 0.2
  }
}`,computed:!1}},fitBoundingBox:{required:!1,flowType:{name:"boolean"},description:"If `true`, the map will fit the bounding box around the passed data.",defaultValue:{value:"true",computed:!1}},layerId:{required:!1,flowType:{name:"string"},description:"An ID value to apply to the layer."},pointStyle:{required:!1,flowType:{name:"signature",type:"object",raw:"{ [key: string]: any }",signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]}},description:"GeoJSON layer point style.",defaultValue:{value:`{
  type: 'circle',
  paint: {
    'circle-radius': [
      'interpolate',
      ['linear'],
      ['number', ['get', 'point_count'], 1],
      0, 4,
      10, 14
    ],
    'circle-stroke-width': 1,
    'circle-color': [
      'case',
      ['boolean', ['feature-state', 'hover'], false],
      '#3b62ff',
      '#ff623b'
    ],
    'circle-stroke-color': '#8d260c'
  }
}`,computed:!1}},strokeStyle:{required:!1,flowType:{name:"signature",type:"object",raw:"{ [key: string]: any }",signature:{properties:[{key:{name:"string"},value:{name:"any",required:!0}}]}},description:"GeoJSON layer stroke style",defaultValue:{value:`{
  type: 'line',
  paint: {
    'line-color': '#ff623b',
    'line-opacity': 0.6
  }
}`,computed:!1}}}};export{h as L};
