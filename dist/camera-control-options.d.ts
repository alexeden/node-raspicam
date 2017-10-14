export declare enum Exposure {
    Auto = "auto",
    Night = "night",
    NightPreview = "nightpreview",
    Backlight = "backlight",
    Spotlight = "spotlight",
    Sports = "sports",
    Snow = "snow",
    Beach = "beach",
    VeryLong = "verylong",
    FixedFPS = "fixedfps",
    AntiShake = "antishake",
    Fireworks = "fireworks",
}
export declare enum AWBMode {
    Off = "off",
    Auto = "auto",
    Sun = "sun",
    Cloud = "cloud",
    Shade = "shade",
    Tungsten = "tungsten",
    Fluorescent = "fluorescent",
    Incandescent = "incandescent",
    Flash = "flash",
    Horizon = "horizon",
}
export declare enum ImageEffect {
    None = "none",
    Negative = "negative",
    Solarize = "solarise",
    Posterize = "posterise",
    Whiteboard = "whiteboard",
    Blackboard = "blackboard",
    Sketch = "sketch",
    Denoise = "denoise",
    Emboss = "emboss",
    Oilpainting = "oilpaint",
    Hatch = "hatch",
    Graphite = "gpen",
    Pastel = "pastel",
    Watercolors = "watercolour",
    Film = "film",
    Blur = "blur",
    Saturate = "saturation",
}
export declare enum Metering {
    Average = "average",
    Spot = "spot",
    Backlit = "backlit",
    Matrix = "matrix",
}
export declare enum DynamicRangeCompression {
    Off = "off",
    Low = "low",
    Medium = "med",
    High = "high",
}
export declare class RaspicamControlOptions {
    readonly sharpness: number;
    readonly contrast: number;
    readonly brightness: number;
    readonly saturation: number;
    readonly ISO: number;
    readonly ev: number;
    readonly exposure: Exposure;
    readonly awb: AWBMode;
    readonly imxfx: ImageEffect;
    readonly metering: Metering;
    readonly rotation: number;
    readonly hflip: boolean;
    readonly vflip: boolean;
    readonly drc: DynamicRangeCompression;
    readonly stats: boolean;
}
export declare class RaspistillControlOptions {
    readonly height: number;
    readonly width: number;
    readonly quality: number;
    readonly output: string;
    readonly latest: boolean;
    readonly verbose: boolean;
    readonly timeout: number;
}
export declare class RaspividControlOptions {
    readonly vstab: boolean;
}
