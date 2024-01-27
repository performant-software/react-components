import { CoreDataPlace } from '../../../geospatial/src/components/CoreDataPlace';

export default {
  title: 'Components/Geospatial/CoreDataPlace',
  component: CoreDataPlace
};


export const CoreDataPlace = () => (
  <CoreDataPlace 
    mapStyle={`https://api.maptiler.com/maps/basic-v2/style.json?key=${process.env.REACT_APP_MAP_TILER_KEY}`}  
    placeURI="https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/places/3aaf97a4-7052-4e2c-9056-4f4146ef0c87?project_ids=10" />
)