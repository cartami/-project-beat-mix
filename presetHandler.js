// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (requestType, arrayIndexOfPresetArray, newPresetArray) => {
    if (arrayIndexOfPresetArray > 5 || arrayIndexOfPresetArray < 0) {
        return [404, presets];
    }
    if (requestType === 'GET' || requestType === 'PUT') {
        if (requestType === 'GET') {
            return [200, presets[arrayIndexOfPresetArray]];
        }
        if (requestType === 'PUT') {
            presets[arrayIndexOfPresetArray] = newPresetArray;
            return [200, presets[arrayIndexOfPresetArray]];
        }
    }
    return [400, presets];
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
