import { SearchResultsList } from '../../../geospatial/src/components/SearchResultsList';
import { hits } from './SearchResultsList.hits';

export default {
  title: 'Components/Geospatial/SearchResultsList',
  component: SearchResultsList
};

export const Default = () => (
  <div style={{ position: 'relative', width: '360px', height: '200px'}}>
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}>
      <SearchResultsList
        hits={hits}
        onHoverChange={hover => console.log(hover)}
        onClick={result => console.log(result)} />
    </div>
  </div>
)