// Generated by CoffeeScript 1.7.1
(function() {
  var log, pad, pad3, _Logger, _debug,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  pad = function(value) {
    if (String(value).length === 1) {
      return "0" + value;
    } else {
      return value;
    }
  };

  pad3 = function(value) {
    switch (String(value).length) {
      case 1:
        return "00" + value;
      case 2:
        return "0" + value;
      default:
        return value;
    }
  };

  log = function(prefix, source, message, e) {
    var dateStr, n;
    n = new Date();
    dateStr = "" + (n.getFullYear()) + "-" + (pad(n.getMonth() + 1)) + "-" + (pad(n.getDate())) + " " + (pad(n.getHours())) + ":" + (pad(n.getMinutes())) + ":" + (pad(n.getSeconds())) + "." + (pad3(n.getMilliseconds()));
    if (typeof console !== "undefined" && console !== null) {
      console.log("" + dateStr + " :: " + (prefix.toUpperCase()) + " :: " + source + " :: " + message);
    }
    if (e) {
      return typeof console !== "undefined" && console !== null ? console.log(e.toString(), e.stack) : void 0;
    }
  };

  exports.getLogger = function(source, pack) {
    if (pack == null) {
      pack = null;
    }
    source = source.indexOf("/" > 0) ? source.split("/").pop() : source;
    return new _Logger(source, pack);
  };

  _debug = false;

  _Logger = (function() {
    function _Logger(source, pack) {
      this.source = source;
      this.pack = pack;
      this._prefix = __bind(this._prefix, this);
      this.errorCB = __bind(this.errorCB, this);
      this.debug = __bind(this.debug, this);
      this.notice = __bind(this.notice, this);
      this.info = __bind(this.info, this);
      this.error = __bind(this.error, this);
    }

    _Logger.prototype.error = function(message, e) {
      return log("ERR", this._prefix(), message, e);
    };

    _Logger.prototype.info = function(message) {
      return log("INF", this._prefix(), message, null);
    };

    _Logger.prototype.notice = function(message) {
      return log("NTC", this._prefix(), message, null);
    };

    _Logger.prototype.debug = function(message) {
      if (_debug) {
        return log("DBG", this._prefix(), message, null);
      }
    };

    _Logger.prototype.errorCB = function(message, callback) {
      this.error(message);
      return callback(message);
    };

    _Logger.prototype._prefix = function() {
      if (this.pack) {
        return "" + this.pack + "@" + this.source;
      } else {
        return this.source;
      }
    };

    return _Logger;

  })();

  exports.toggleDebug = function(isOverride) {
    if (isOverride != null) {
      return _debug = isOverride;
    } else if (_debug) {
      return _debug = false;
    } else {
      return _debug = true;
    }
  };

}).call(this);
