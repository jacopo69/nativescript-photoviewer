import { PhotoViewerOptions, PhotoViewer as PhotoViewerBase  } from ".";
export * from './photoviewer.common';

export class PhotoViewer implements PhotoViewerBase {

    constructor() { }

    public showGallery(imagesArray: Array<string>, options?: PhotoViewerOptions) {
        // empty implementation to avoid "Module not found error" caused by webpack compilation in destination project
        return Promise.resolve();
    }

}

