import { CoreDataPlaceDetailsPanel } from "../../../geospatial/src/components/CoreDataPlaceDetailsPanel";

export default {
  title: "Components/Geospatial/CoreDataPlaceDetailsPanel",
  component: CoreDataPlaceDetailsPanel
};

const place = { 
  "@id": "https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/places/ad02a467-5852-4b64-a778-5fa57e1c354c", 
  "type": "Place", 
  "properties": { 
    "ccode": [], 
    "title": "Sapelo Island",
    "record_id": 4478, 
    "uuid": "ad02a467-5852-4b64-a778-5fa57e1c354c" 
  }, 
  "geometry": { 
    "type": "Point", 
    "coordinates": [-81.2417611, 31.4774455]
  }, 
  "names": [{ "toponym": "Sapelo Island" }],
  "user_defined": { 
    "c01171e1-cafd-4111-a47a-a93a0b1151d1": { "label": "Description", "value": "Sapelo Island is home to the Gullah/Geechee people, many of whom reside at Hog Hammock on the southern half of the island. The rest of Sapelo is state-owned and managed. Its ecosystem and long history of occupation make Sapelo a site of great ecological, archaeological, cultural, and historical significance." }, 
    "09027d53-6ccc-4110-a507-750e2062b994": { "label": "Type", "value": "Island" }, 
    "dfbd85e9-726b-448b-a77c-d4bafb8199e5": { "label": "Creator", "value": "Emory ECDS" }, 
    "8611d261-8826-4948-a8c8-85bf695de9cc": { "label": "Subject", "value": "Environmental Research" },
  } 
}

const related_places = {
  "@context":"http://www.w3.org/ns/anno.jsonld",
  "id":"https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/places/ad02a467-5852-4b64-a778-5fa57e1c354c/places?project_ids=10",
  "type":"AnnotationPage",
  "partOf":{
     "id":"https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/places/ad02a467-5852-4b64-a778-5fa57e1c354c/places?project_ids=10",
     "label":"Related Places: Sapelo Island",
     "total":1
  },
  "items":[
     {
        "type":"Annotation",
        "id":0,
        "created":"2024-01-31T10:00:31+00:00",
        "motivation":"linking",
        "target":{
           "id":"https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/places/ad02a467-5852-4b64-a778-5fa57e1c354c",
           "record_id":4478,
           "name":"Sapelo Island",
           "type":"Place",
           "uuid":"ad02a467-5852-4b64-a778-5fa57e1c354c"
        },
        "body":{
           "id":"https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/places/3aaf97a4-7052-4e2c-9056-4f4146ef0c87",
           "record_id":4639,
           "uuid":"3aaf97a4-7052-4e2c-9056-4f4146ef0c87",
           "title":"Hog Hammock Public Library (Sapelo Island School)",
           "type":"Place",
           "geometry":{
              "type":"Point",
              "coordinates":[
                 -81.2653727,
                 31.4252249
              ]
           },
           "user_defined":{
              "c01171e1-cafd-4111-a47a-a93a0b1151d1":{
                 "label":"Description",
                 "value":"This library was founded in 2022 by Sapelo Island Cultural and Revitalization Society Inc. (SICARS).  The library's location is Sapelo Island's former two-room schoolhouse in the Hog Hammock Community. It is one of the last intact island-based Gullah-Geechee communities in America."
              },
              "09027d53-6ccc-4110-a507-750e2062b994":{
                 "label":"Type",
                 "value":"Building"
              },
              "dfbd85e9-726b-448b-a77c-d4bafb8199e5":{
                 "label":"Creator",
                 "value":"Emory ECDS"
              },
              "8611d261-8826-4948-a8c8-85bf695de9cc":{
                 "label":"Subject",
                 "value":"Environmental Research"
              },
              "802b7c68-4f2f-46cf-b71f-1bbb5eca9d14":{
                 "label":"Item URI",
                 "value":"https://dvl.ecdsdev.org/items/show/11612"
              },
              "d09140c8-d876-4e8e-8615-0fc551f6ed63":{
                 "label":"Item ID",
                 "value":"11612"
              }
           }
        }
     }
  ]
}

const related_media = {
  "@context":"http://www.w3.org/ns/anno.jsonld",
  "id":"https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/places/3aaf97a4-7052-4e2c-9056-4f4146ef0c87/media_contents?project_ids=10",
  "type":"AnnotationPage",
  "partOf":{
     "id":"https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/places/3aaf97a4-7052-4e2c-9056-4f4146ef0c87/media_contents?project_ids=10",
     "label":"Related MediaContents: Hog Hammock Public Library (Sapelo Island School)",
     "total":2
  },
  "items":[
     {
        "type":"Annotation",
        "id":0,
        "created":"2024-01-31T10:03:51+00:00",
        "motivation":"linking",
        "target":{
           "id":"https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/places/3aaf97a4-7052-4e2c-9056-4f4146ef0c87",
           "record_id":4639,
           "name":"Hog Hammock Public Library (Sapelo Island School)",
           "type":"Place",
           "uuid":"3aaf97a4-7052-4e2c-9056-4f4146ef0c87"
        },
        "body":{
           "id":"https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/media_contents/49123f66-6a4d-47b8-a781-0f31ab63adae",
           "record_id":13,
           "title":"hog-hammock-library.jpeg",
           "type":"MediaContent",
           "uuid":"49123f66-6a4d-47b8-a781-0f31ab63adae",
           "content_url":"https://iiif-cloud-staging.herokuapp.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdkk0IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--bd01492de07883dc8caa9edc4e516beefb1a59d2/hog-hammock-library.jpeg",
           "content_download_url":"https://iiif-cloud-staging.s3.amazonaws.com/gpn67804v10zdcytuosh6hl0clfb?response-content-disposition=attachment%3B%20filename%3D%22hog-hammock-library.jpeg%22%3B%20filename%2A%3DUTF-8%27%27hog-hammock-library.jpeg\u0026response-content-type=image%2Fjpeg\u0026X-Amz-Algorithm=AWS4-HMAC-SHA256\u0026X-Amz-Credential=AKIAQ57J2PHIZCZD7C7E%2F20240131%2Fus-east-1%2Fs3%2Faws4_request\u0026X-Amz-Date=20240131T100351Z\u0026X-Amz-Expires=300\u0026X-Amz-SignedHeaders=host\u0026X-Amz-Signature=55683dc7027c32e3419f63430a112736c5397a56721ed4f266403183af318192",
           "content_iiif_url":"https://iiif-staging.archivengine.com/iiif/3/gpn67804v10zdcytuosh6hl0clfb;1/full/max/0/default.jpg",
           "content_preview_url":"https://iiif-staging.archivengine.com/iiif/3/gpn67804v10zdcytuosh6hl0clfb/full/^500,/0/default.jpg",
           "content_thumbnail_url":"https://iiif-staging.archivengine.com/iiif/3/gpn67804v10zdcytuosh6hl0clfb/square/^250,250/0/default.jpg",
           "manifest_url":"https://iiif-cloud-staging.herokuapp.com/public/resources/013125a9-ad22-43d6-910b-ccc6662c0708/manifest",
           "user_defined":{
              
           }
        }
     },
     {
        "type":"Annotation",
        "id":1,
        "created":"2024-01-31T10:03:51+00:00",
        "motivation":"linking",
        "target":{
           "id":"https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/places/3aaf97a4-7052-4e2c-9056-4f4146ef0c87",
           "record_id":4639,
           "name":"Hog Hammock Public Library (Sapelo Island School)",
           "type":"Place",
           "uuid":"3aaf97a4-7052-4e2c-9056-4f4146ef0c87"
        },
        "body":{
           "id":"https://core-data-cloud-staging-2c51db0617a5.herokuapp.com/core_data/public/media_contents/5f3c2a5e-385e-47d6-a56b-c964d72737e3",
           "record_id":14,
           "title":"hag-hammock-exterior-3.jpg",
           "type":"MediaContent",
           "uuid":"5f3c2a5e-385e-47d6-a56b-c964d72737e3",
           "content_url":"https://iiif-cloud-staging.herokuapp.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdk00IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--e79020ac264d56894057ad48bceb0c833a460b94/hag-hammock-exterior-3.jpg",
           "content_download_url":"https://iiif-cloud-staging.s3.amazonaws.com/u4i76xcg9aj014mx1a6p7wsc1at2?response-content-disposition=attachment%3B%20filename%3D%22hag-hammock-exterior-3.jpg%22%3B%20filename%2A%3DUTF-8%27%27hag-hammock-exterior-3.jpg\u0026response-content-type=image%2Fjpeg\u0026X-Amz-Algorithm=AWS4-HMAC-SHA256\u0026X-Amz-Credential=AKIAQ57J2PHIZCZD7C7E%2F20240131%2Fus-east-1%2Fs3%2Faws4_request\u0026X-Amz-Date=20240131T100351Z\u0026X-Amz-Expires=300\u0026X-Amz-SignedHeaders=host\u0026X-Amz-Signature=47a9af8f3cc6d618240ac95423607f3a9c3e4f87205a44338914e00321f56e93",
           "content_iiif_url":"https://iiif-staging.archivengine.com/iiif/3/u4i76xcg9aj014mx1a6p7wsc1at2;1/full/max/0/default.jpg",
           "content_preview_url":"https://iiif-staging.archivengine.com/iiif/3/u4i76xcg9aj014mx1a6p7wsc1at2/full/^500,/0/default.jpg",
           "content_thumbnail_url":"https://iiif-staging.archivengine.com/iiif/3/u4i76xcg9aj014mx1a6p7wsc1at2/square/^250,250/0/default.jpg",
           "manifest_url":"https://iiif-cloud-staging.herokuapp.com/public/resources/42d19a21-a684-4a79-b1f8-33f623a379f8/manifest",
           "user_defined":{
              
           }
        }
     }
  ]
}

export const Default = () => (
  <CoreDataPlaceDetailsPanel
    place={place}
    related={[{
      endpoint: 'media_contents',
      ui_label: 'Related Media',    
      data: related_media
    },{
      endpoint: 'places',
      ui_label: 'Related Places',    
      data: related_places
    }]} />
)