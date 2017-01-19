const CARD_SIZES = {
  'pixelRatio-1': {
    'portrait': 308,
    'landscape': 308
  },
  'pixelRatio-2': {
    'portrait': 308,
    'landscape': 308
  },
  'pixelRatio-3': {
    'portrait': 308,
    'landscape': 169
  }
}

const Utils = {

  pixelRatio: function() {
    let ratio = 1;
    if (window.screen.systemXDPI !== undefined &&
        window.screen.logicalXDPI !== undefined &&
        window.screen.systemXDPI > window.screen.logicalXDPI) {
      ratio = window.screen.systemXDPI / window.screen.logicalXDPI;
    }
    else if (window.devicePixelRatio !== undefined) {
      ratio = window.devicePixelRatio;
    }

    return Math.ceil(ratio);
  },

  deviceOrientation: function() {
    if (!window.DeviceOrientationEvent) {
      return 0;
    }

    return window.screen.orientation.angle;
  },

  isPortrait: function() {
    return this.deviceOrientation() == 0;
  },

  isLandscape: function() {
    return this.deviceOrientation() == 90;
  },

  cardSize: function() {
    const orientation = this.isPortrait() ? 'portrait' : 'landscape';
    console.log(this.pixelRatio())

    return CARD_SIZES['pixelRatio-' + this.pixelRatio()][orientation];
  }
}

export default Utils;
