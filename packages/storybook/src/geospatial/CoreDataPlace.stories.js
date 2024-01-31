import { CoreDataPlace } from '../../../geospatial/src/components/CoreDataPlace';

import './CoreDataPlace.css';

export default {
  title: 'Components/Geospatial/CoreDataPlace',
  component: CoreDataPlace
};

const style = {
  "version": 8,
	"sources": {
    "osm": {
			"type": "raster",
			"tiles": ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
			"tileSize": 256,
      "attribution": "&copy; OpenStreetMap Contributors",
      "maxzoom": 19
    }
  },
  "layers": [
    {
      "id": "osm",
      "type": "raster",
      "source": "osm"
    }
  ]
};

export const Default = () => (
  <div style={{ width: '100%', height: '300px' }}>
    <CoreDataPlace 
      mapStyle={style}  
      placeURI="https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/places/3aaf97a4-7052-4e2c-9056-4f4146ef0c87?project_ids=10" />
  </div>
)