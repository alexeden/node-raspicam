"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Exposure;
(function (Exposure) {
    Exposure["Auto"] = "auto";
    Exposure["Night"] = "night";
    Exposure["NightPreview"] = "nightpreview";
    Exposure["Backlight"] = "backlight";
    Exposure["Spotlight"] = "spotlight";
    Exposure["Sports"] = "sports";
    Exposure["Snow"] = "snow";
    Exposure["Beach"] = "beach";
    Exposure["VeryLong"] = "verylong";
    Exposure["FixedFPS"] = "fixedfps";
    Exposure["AntiShake"] = "antishake";
    Exposure["Fireworks"] = "fireworks";
})(Exposure = exports.Exposure || (exports.Exposure = {}));
var AWBMode;
(function (AWBMode) {
    AWBMode["Off"] = "off";
    AWBMode["Auto"] = "auto";
    AWBMode["Sun"] = "sun";
    AWBMode["Cloud"] = "cloud";
    AWBMode["Shade"] = "shade";
    AWBMode["Tungsten"] = "tungsten";
    AWBMode["Fluorescent"] = "fluorescent";
    AWBMode["Incandescent"] = "incandescent";
    AWBMode["Flash"] = "flash";
    AWBMode["Horizon"] = "horizon";
})(AWBMode = exports.AWBMode || (exports.AWBMode = {}));
var ImageEffect;
(function (ImageEffect) {
    ImageEffect["None"] = "none";
    ImageEffect["Negative"] = "negative";
    ImageEffect["Solarize"] = "solarise";
    ImageEffect["Posterize"] = "posterise";
    ImageEffect["Whiteboard"] = "whiteboard";
    ImageEffect["Blackboard"] = "blackboard";
    ImageEffect["Sketch"] = "sketch";
    ImageEffect["Denoise"] = "denoise";
    ImageEffect["Emboss"] = "emboss";
    ImageEffect["Oilpainting"] = "oilpaint";
    ImageEffect["Hatch"] = "hatch";
    ImageEffect["Graphite"] = "gpen";
    ImageEffect["Pastel"] = "pastel";
    ImageEffect["Watercolors"] = "watercolour";
    ImageEffect["Film"] = "film";
    ImageEffect["Blur"] = "blur";
    ImageEffect["Saturate"] = "saturation";
})(ImageEffect = exports.ImageEffect || (exports.ImageEffect = {}));
var Metering;
(function (Metering) {
    Metering["Average"] = "average";
    Metering["Spot"] = "spot";
    Metering["Backlit"] = "backlit";
    Metering["Matrix"] = "matrix";
})(Metering = exports.Metering || (exports.Metering = {}));
var DynamicRangeCompression;
(function (DynamicRangeCompression) {
    DynamicRangeCompression["Off"] = "off";
    DynamicRangeCompression["Low"] = "low";
    DynamicRangeCompression["Medium"] = "med";
    DynamicRangeCompression["High"] = "high";
})(DynamicRangeCompression = exports.DynamicRangeCompression || (exports.DynamicRangeCompression = {}));
var RaspicamControlOptions = /** @class */ (function () {
    function RaspicamControlOptions() {
        this.sharpness = 0; // -100 to 100
        this.contrast = 0; // -100 to 100
        this.brightness = 50; // 0 to 100
        this.saturation = 0; // -100 to 100
        this.ISO = 100; // 100 to 800
        this.ev = 0; // -10 to 10
        this.exposure = Exposure.Auto;
        this.awb = AWBMode.Auto;
        this.imxfx = ImageEffect.None;
        this.metering = Metering.Average;
        this.rotation = 0;
        this.hflip = false;
        this.vflip = false;
        this.drc = DynamicRangeCompression.Off;
        this.stats = false;
    }
    return RaspicamControlOptions;
}());
exports.RaspicamControlOptions = RaspicamControlOptions;
var RaspistillControlOptions = /** @class */ (function () {
    function RaspistillControlOptions() {
        this.height = 480;
        this.width = 640;
        this.quality = 85;
        this.output = '-';
        this.latest = false;
        this.verbose = false;
        this.timeout = 1;
    }
    return RaspistillControlOptions;
}());
exports.RaspistillControlOptions = RaspistillControlOptions;
var RaspividControlOptions = /** @class */ (function () {
    function RaspividControlOptions() {
        this.vstab = false;
    }
    return RaspividControlOptions;
}());
exports.RaspividControlOptions = RaspividControlOptions;
