const Utils = {

  windowSize: function() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  },

  cardSize: function() {
    if (window.innerWidth >= 720) {
      return 170;
    } else {
      return 116;
    }
  }
}

export default Utils;
