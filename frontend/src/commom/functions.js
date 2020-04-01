export function getBytesFromFile(file) {
    let reader = new FileReader();
    let stringBytes = null;

    reader.readAsArrayBuffer(file);

    reader.onload = () => {
        var arrayBuffer = reader.result;
        var bytes = new Uint8Array(arrayBuffer);

        stringBytes = bytes.toString();
    };
    return stringBytes + '';
}

export const mountDataImage = (mimetype, bytes) => {
    return `data:${mimetype};base64,${btoa(String.fromCharCode(...new Uint8Array(bytes)))}`;
};