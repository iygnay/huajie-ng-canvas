import { fromDataURL } from './from-data-url';

/**
 * 将`src`转换为`HTMLImageElement`对象.
 * 
 * @export
 * @param {string} src 
 * @returns 
 */
export function fromSrc(src: string) {
    return fromDataURL(src);
}