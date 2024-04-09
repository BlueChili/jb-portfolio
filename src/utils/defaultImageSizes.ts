import type { ImageMetadata } from 'astro';

export default function defaultImageSizes(image: ImageMetadata) {
        return {
                width: image.width,
                height: image.height,
                widths: [410, 640, 896, image.width],
                sizes: `(max-width: 425px) 410px, (max-width: 768px) 640px, (max-width: 1024px) 896px, ${image.width}px`,
        };
}
