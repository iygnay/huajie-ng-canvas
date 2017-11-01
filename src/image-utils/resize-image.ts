/**
 * 将图片的指定部分, 裁减到指定大小的画布中.
 * 
 * @export
 * @param {(HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap)} image 
 * @param {number} srcX 
 * @param {number} srcY 
 * @param {number} srcW 
 * @param {number} srcH 
 * @param {number} dstW 
 * @param {number} dstH 
 * @returns 
 */
export function resizeImage(image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap, srcX: number, srcY: number, srcW: number, srcH: number, dstW: number, dstH: number) {

    const canvas = document.createElement('canvas');
    canvas.width = dstW;
    canvas.height = dstH;

    const context = canvas.getContext('2d');
    context.drawImage(image, srcX, srcY, srcW, srcH, 0, 0, dstW, dstH);
    return canvas;
}