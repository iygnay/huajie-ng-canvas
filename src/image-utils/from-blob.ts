
/**
 * 将`Blob`转化为`HTMLImageElement`对象.
 * 
 * @param {string} dataUrl 
 */
export function fromBlob(blob: Blob) {
    return new Promise<HTMLImageElement>((resolveFn, rejectFn) => {
        let image = document.createElement('img');
        let url = URL.createObjectURL(blob);

        image.onload = () => {
            resolveFn(image);
            URL.revokeObjectURL(url);
        } 
        
        image.onerror = (event) => {
            rejectFn(event);
            URL.revokeObjectURL(url);
        }

        image.src = url;
    });
}