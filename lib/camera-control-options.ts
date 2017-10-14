export enum Exposure {
  Auto = 'auto',
  Night = 'night',
  NightPreview = 'nightpreview',
  Backlight = 'backlight',
  Spotlight = 'spotlight',
  Sports = 'sports',
  Snow = 'snow',
  Beach = 'beach',
  VeryLong = 'verylong',
  FixedFPS = 'fixedfps',
  AntiShake = 'antishake',
  Fireworks = 'fireworks'
}

export enum AWBMode {
  Off = 'off',
  Auto = 'auto',
  Sun = 'sun',
  Cloud = 'cloud',
  Shade = 'shade',
  Tungsten = 'tungsten',
  Fluorescent = 'fluorescent',
  Incandescent = 'incandescent',
  Flash = 'flash',
  Horizon = 'horizon'
}

export enum ImageEffect {
  None = 'none',
  Negative = 'negative',
  Solarize = 'solarise',
  Posterize = 'posterise',
  Whiteboard = 'whiteboard',
  Blackboard = 'blackboard',
  Sketch = 'sketch',
  Denoise = 'denoise',
  Emboss = 'emboss',
  Oilpainting = 'oilpaint',
  Hatch = 'hatch',
  Graphite = 'gpen',
  Pastel = 'pastel',
  Watercolors = 'watercolour',
  Film = 'film',
  Blur = 'blur',
  Saturate = 'saturation'
}

export enum Metering {
  Average = 'average',
  Spot = 'spot',
  Backlit = 'backlit',
  Matrix = 'matrix'
}

export enum DynamicRangeCompression {
  Off = 'off',
  Low = 'low',
  Medium = 'med',
  High = 'high'
}

export class RaspicamControlOptions {
  readonly sharpness = 0; // -100 to 100
  readonly contrast = 0; // -100 to 100
  readonly brightness = 50; // 0 to 100
  readonly saturation = 0; // -100 to 100
  readonly ISO = 100; // 100 to 800

  readonly ev = 0; // -10 to 10
  readonly exposure: Exposure = Exposure.Auto;
  readonly awb: AWBMode = AWBMode.Auto;
  readonly imxfx: ImageEffect = ImageEffect.None;
  readonly metering: Metering = Metering.Average;
  readonly rotation = 0;
  readonly hflip = false;
  readonly vflip = false;
  readonly drc: DynamicRangeCompression = DynamicRangeCompression.Off;
  readonly stats = false;
}


export class RaspistillControlOptions {
  readonly height = 480;
  readonly width = 640;
  readonly quality = 85;
  readonly output = '-';
  readonly latest = false;
  readonly verbose = false;
  readonly timeout = 1;
}

export class RaspividControlOptions {
  readonly vstab = false;
}
