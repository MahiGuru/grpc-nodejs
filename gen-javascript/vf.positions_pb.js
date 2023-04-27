// source: vf.positions.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var vf_pb = require('./vf_pb.js');
goog.object.extend(proto, vf_pb);
goog.exportSymbol('proto.vf.positions.PositionsRequest', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.vf.positions.PositionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vf.positions.PositionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vf.positions.PositionsRequest.displayName = 'proto.vf.positions.PositionsRequest';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.vf.positions.PositionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.vf.positions.PositionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vf.positions.PositionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vf.positions.PositionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    asofdate: (f = msg.getAsofdate()) && vf_pb.dateTime.toObject(includeInstance, f),
    vertinvcode: jspb.Message.getFieldWithDefault(msg, 2, ""),
    podcode: jspb.Message.getFieldWithDefault(msg, 3, ""),
    fundcode: jspb.Message.getFieldWithDefault(msg, 4, ""),
    strategycode: jspb.Message.getFieldWithDefault(msg, 5, ""),
    counterpartycode: jspb.Message.getFieldWithDefault(msg, 6, ""),
    longshort: jspb.Message.getFieldWithDefault(msg, 7, ""),
    account: jspb.Message.getFieldWithDefault(msg, 8, ""),
    subaccount: jspb.Message.getFieldWithDefault(msg, 9, ""),
    isactive: jspb.Message.getBooleanFieldWithDefault(msg, 10, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.vf.positions.PositionsRequest}
 */
proto.vf.positions.PositionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vf.positions.PositionsRequest;
  return proto.vf.positions.PositionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vf.positions.PositionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vf.positions.PositionsRequest}
 */
proto.vf.positions.PositionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new vf_pb.dateTime;
      reader.readMessage(value,vf_pb.dateTime.deserializeBinaryFromReader);
      msg.setAsofdate(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVertinvcode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPodcode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setFundcode(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setStrategycode(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCounterpartycode(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setLongshort(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubaccount(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsactive(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.vf.positions.PositionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vf.positions.PositionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vf.positions.PositionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vf.positions.PositionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAsofdate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      vf_pb.dateTime.serializeBinaryToWriter
    );
  }
  f = message.getVertinvcode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPodcode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFundcode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStrategycode();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCounterpartycode();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getLongshort();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSubaccount();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getIsactive();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
};


/**
 * optional vf.dateTime asOfDate = 1;
 * @return {?proto.vf.dateTime}
 */
proto.vf.positions.PositionsRequest.prototype.getAsofdate = function() {
  return /** @type{?proto.vf.dateTime} */ (
    jspb.Message.getWrapperField(this, vf_pb.dateTime, 1));
};


/**
 * @param {?proto.vf.dateTime|undefined} value
 * @return {!proto.vf.positions.PositionsRequest} returns this
*/
proto.vf.positions.PositionsRequest.prototype.setAsofdate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.vf.positions.PositionsRequest} returns this
 */
proto.vf.positions.PositionsRequest.prototype.clearAsofdate = function() {
  return this.setAsofdate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.vf.positions.PositionsRequest.prototype.hasAsofdate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string vertInvCode = 2;
 * @return {string}
 */
proto.vf.positions.PositionsRequest.prototype.getVertinvcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vf.positions.PositionsRequest} returns this
 */
proto.vf.positions.PositionsRequest.prototype.setVertinvcode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string podCode = 3;
 * @return {string}
 */
proto.vf.positions.PositionsRequest.prototype.getPodcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.vf.positions.PositionsRequest} returns this
 */
proto.vf.positions.PositionsRequest.prototype.setPodcode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string fundCode = 4;
 * @return {string}
 */
proto.vf.positions.PositionsRequest.prototype.getFundcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.vf.positions.PositionsRequest} returns this
 */
proto.vf.positions.PositionsRequest.prototype.setFundcode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string strategyCode = 5;
 * @return {string}
 */
proto.vf.positions.PositionsRequest.prototype.getStrategycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.vf.positions.PositionsRequest} returns this
 */
proto.vf.positions.PositionsRequest.prototype.setStrategycode = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string counterPartyCode = 6;
 * @return {string}
 */
proto.vf.positions.PositionsRequest.prototype.getCounterpartycode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vf.positions.PositionsRequest} returns this
 */
proto.vf.positions.PositionsRequest.prototype.setCounterpartycode = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string longShort = 7;
 * @return {string}
 */
proto.vf.positions.PositionsRequest.prototype.getLongshort = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.vf.positions.PositionsRequest} returns this
 */
proto.vf.positions.PositionsRequest.prototype.setLongshort = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string account = 8;
 * @return {string}
 */
proto.vf.positions.PositionsRequest.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.vf.positions.PositionsRequest} returns this
 */
proto.vf.positions.PositionsRequest.prototype.setAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string subAccount = 9;
 * @return {string}
 */
proto.vf.positions.PositionsRequest.prototype.getSubaccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.vf.positions.PositionsRequest} returns this
 */
proto.vf.positions.PositionsRequest.prototype.setSubaccount = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional bool isActive = 10;
 * @return {boolean}
 */
proto.vf.positions.PositionsRequest.prototype.getIsactive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vf.positions.PositionsRequest} returns this
 */
proto.vf.positions.PositionsRequest.prototype.setIsactive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


goog.object.extend(exports, proto.vf.positions);
