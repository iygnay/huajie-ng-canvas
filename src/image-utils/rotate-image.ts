/**
 * 旋转指定的图片.
 * 
 * 1) 旋转方向为顺时针.
 * 2) 返回一个新的图片对象.
 * 
 * @param {(HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap)} image 图片
 * @param {number} angle 弧度
 */

export function rotateImage(image: HTMLImageElement | HTMLCanvasElement | HTMLVideoElement | ImageBitmap, angle: number) {

    const canvas = document.createElement('canvas');
    canvas.width = image.height;
    canvas.height = image.width;
    const context = canvas.getContext('2d');

    // 将画布按照中心点, 旋转指定的弧度.
    context.translate(canvas.width / 2, canvas.height / 2);
    context.rotate(angle);

    // 填充画布.
    context.drawImage(image, -canvas.height / 2, -canvas.width / 2, canvas.height, canvas.width);
    return canvas;
}