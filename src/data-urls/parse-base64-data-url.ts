import { Base64DataURL } from './base64-data-url';

/**
 * 解析base64的dataURL
 * 
 * @export
 * @param {string} dataURL 
 * @returns {Base64DataURL} 
 */
export function parseBase64DataURL(dataURL: string): Base64DataURL {

    if (!dataURL) {
        throw new Error('!dataURL');
    }

    if (!dataURL.startsWith('data:')) {
        throw new Error('!dataURL startsWith data:');
    }

    let regex = /^data:([^;]+);base64,(.+)$/;
    let match = regex.exec(dataURL);

    if (match == null) {
        throw new Error('invalid dataURL format');
    }

    return {
        mimeType: match[1],
        data: match[2],
    };
}