import { useState } from 'react';
import { RelatedMediaGallery } from "../../../geospatial/src/components/RelatedMediaGallery";

export default {
  title: "Components/Geospatial/RelatedMediaGallery",
  component: RelatedMediaGallery
};


const item = {
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
  "user_defined":{  }
}

export const Default = () => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={() => setOpen(true)}>Open  Gallery</button>
      </div>

      {open && (
        <RelatedMediaGallery
          defaultItem={item} 
          onClose={() => setOpen(false)} />
      )}
    </>
  )

}