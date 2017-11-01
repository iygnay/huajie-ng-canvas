
/**
 * 将`dataURL`转化为`HTMLImageElement`对象.
 * 
 * @param {string} dataUrl 
 */
export function fromDataURL(dataUrl: string) {
    return new Promise<HTMLImageElement>((resolveFn, rejectFn) => {
        let image = document.createElement('img');

        image.onload = () => resolveFn(image);
        image.onerror = (event) => rejectFn(event);
        image.src = dataUrl;
    });
}