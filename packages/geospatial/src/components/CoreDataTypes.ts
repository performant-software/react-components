// @flow

import { Annotation, AnnotationPage, FeatureGeometry, Place, PlaceFeatureProperties } from '@peripleo/peripleo';

export interface CoreDataProperties extends PlaceFeatureProperties {

  record_id: string;

  uuid: string;

}

export interface CoreDataPlace extends Place<CoreDataProperties> {

  user_defined?: { [key: string]: UserDefinedField }

}


export type RelatedItemsData = {

  endpoint: string;

  ui_label: string;

  default_open?: boolean;

  data?: AnnotationPage<CoreDataAnnotation>;

  error?: Error;

}

export interface CoreDataAnnotation {

  id: string;

  record_id: string;

  uuid: string;

  title: string;

  user_defined: {

    [key: string]: UserDefinedField;

  }

}

export interface UserDefinedField {

  label: string;

  value: string;

}

export interface CoreDataRelatedMedia extends CoreDataAnnotation {

  type: 'MediaContent';

  content_download_url: string;

  content_iiif_url: string;

  content_preview_url: string;

  content_thumbnail_url: string;

  content_url: string;

  manifest_url: string;

}

export interface MediaAnnotation extends Annotation<CoreDataRelatedMedia> { } 

export interface CoreDataRelatedOrganization extends CoreDataAnnotation {

  type: 'Organization';

  biography: string;

}

export interface OrganizationAnnotation extends Annotation<CoreDataRelatedOrganization> { } 

export interface CoreDataRelatedPerson extends CoreDataAnnotation {

  id: string;

  type: 'Person';

  record_id: string;

  title: string;

  biography: string;

}

export interface PersonAnnotation extends Annotation<CoreDataRelatedPerson> { } 

export interface CoreDataRelatedPlace extends CoreDataAnnotation {

  type: 'Place';

  geometry: FeatureGeometry;

}

export interface PlaceAnnotation extends Annotation<CoreDataRelatedPlace> { } 

export interface CoreDataRelatedTaxonomy extends CoreDataAnnotation {

  type: 'Taxonomy';

}

export interface TaxonomyAnnotation extends Annotation<CoreDataRelatedTaxonomy> { } 


