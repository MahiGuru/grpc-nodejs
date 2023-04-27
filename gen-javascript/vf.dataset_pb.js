// source: vf.dataset.proto
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

var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js');
goog.object.extend(proto, google_protobuf_descriptor_pb);
var vf_pb = require('./vf_pb.js');
goog.object.extend(proto, vf_pb);
goog.exportSymbol('proto.vf.DataSet', null, global);
goog.exportSymbol('proto.vf.DataSetMetadata', null, global);
goog.exportSymbol('proto.vf.DataSetRequest', null, global);
goog.exportSymbol('proto.vf.DataSetRequest.ActionType', null, global);
goog.exportSymbol('proto.vf.DataSetResponse', null, global);
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
proto.vf.DataSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vf.DataSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vf.DataSet.displayName = 'proto.vf.DataSet';
}
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
proto.vf.DataSetMetadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vf.DataSetMetadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vf.DataSetMetadata.displayName = 'proto.vf.DataSetMetadata';
}
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
proto.vf.DataSetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.vf.DataSetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vf.DataSetRequest.displayName = 'proto.vf.DataSetRequest';
}
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
proto.vf.DataSetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.vf.DataSetResponse.repeatedFields_, null);
};
goog.inherits(proto.vf.DataSetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.vf.DataSetResponse.displayName = 'proto.vf.DataSetResponse';
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
proto.vf.DataSet.prototype.toObject = function(opt_includeInstance) {
  return proto.vf.DataSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vf.DataSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vf.DataSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 10, ""),
    name: jspb.Message.getFieldWithDefault(msg, 20, ""),
    desc: jspb.Message.getFieldWithDefault(msg, 30, ""),
    content: jspb.Message.getFieldWithDefault(msg, 40, ""),
    isentitled: jspb.Message.getBooleanFieldWithDefault(msg, 50, false),
    isactive: jspb.Message.getBooleanFieldWithDefault(msg, 60, false)
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
 * @return {!proto.vf.DataSet}
 */
proto.vf.DataSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vf.DataSet;
  return proto.vf.DataSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vf.DataSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vf.DataSet}
 */
proto.vf.DataSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readString());
      msg.setDesc(value);
      break;
    case 40:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 50:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsentitled(value);
      break;
    case 60:
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
proto.vf.DataSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vf.DataSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vf.DataSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vf.DataSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getDesc();
  if (f.length > 0) {
    writer.writeString(
      30,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      40,
      f
    );
  }
  f = message.getIsentitled();
  if (f) {
    writer.writeBool(
      50,
      f
    );
  }
  f = message.getIsactive();
  if (f) {
    writer.writeBool(
      60,
      f
    );
  }
};


/**
 * optional string Code = 10;
 * @return {string}
 */
proto.vf.DataSet.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.vf.DataSet} returns this
 */
proto.vf.DataSet.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string Name = 20;
 * @return {string}
 */
proto.vf.DataSet.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.vf.DataSet} returns this
 */
proto.vf.DataSet.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string Desc = 30;
 * @return {string}
 */
proto.vf.DataSet.prototype.getDesc = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/**
 * @param {string} value
 * @return {!proto.vf.DataSet} returns this
 */
proto.vf.DataSet.prototype.setDesc = function(value) {
  return jspb.Message.setProto3StringField(this, 30, value);
};


/**
 * optional string Content = 40;
 * @return {string}
 */
proto.vf.DataSet.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 40, ""));
};


/**
 * @param {string} value
 * @return {!proto.vf.DataSet} returns this
 */
proto.vf.DataSet.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 40, value);
};


/**
 * optional bool IsEntitled = 50;
 * @return {boolean}
 */
proto.vf.DataSet.prototype.getIsentitled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 50, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vf.DataSet} returns this
 */
proto.vf.DataSet.prototype.setIsentitled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 50, value);
};


/**
 * optional bool IsActive = 60;
 * @return {boolean}
 */
proto.vf.DataSet.prototype.getIsactive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 60, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vf.DataSet} returns this
 */
proto.vf.DataSet.prototype.setIsactive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 60, value);
};





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
proto.vf.DataSetMetadata.prototype.toObject = function(opt_includeInstance) {
  return proto.vf.DataSetMetadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vf.DataSetMetadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vf.DataSetMetadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    ordinal: jspb.Message.getFieldWithDefault(msg, 5, 0),
    parent: jspb.Message.getFieldWithDefault(msg, 6, ""),
    group: jspb.Message.getFieldWithDefault(msg, 10, ""),
    owner: jspb.Message.getFieldWithDefault(msg, 15, ""),
    name: jspb.Message.getFieldWithDefault(msg, 20, ""),
    type: jspb.Message.getFieldWithDefault(msg, 25, ""),
    display: jspb.Message.getFieldWithDefault(msg, 30, ""),
    description: jspb.Message.getFieldWithDefault(msg, 35, ""),
    format: jspb.Message.getFieldWithDefault(msg, 36, ""),
    aggregate: jspb.Message.getFieldWithDefault(msg, 40, ""),
    content: jspb.Message.getFieldWithDefault(msg, 41, ""),
    length: jspb.Message.getFieldWithDefault(msg, 42, 0),
    precision: jspb.Message.getFieldWithDefault(msg, 43, 0),
    isrequired: jspb.Message.getBooleanFieldWithDefault(msg, 44, false),
    isactive: jspb.Message.getBooleanFieldWithDefault(msg, 45, false)
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
 * @return {!proto.vf.DataSetMetadata}
 */
proto.vf.DataSetMetadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vf.DataSetMetadata;
  return proto.vf.DataSetMetadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vf.DataSetMetadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vf.DataSetMetadata}
 */
proto.vf.DataSetMetadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOrdinal(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setParent(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setGroup(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 25:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplay(value);
      break;
    case 35:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 36:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormat(value);
      break;
    case 40:
      var value = /** @type {string} */ (reader.readString());
      msg.setAggregate(value);
      break;
    case 41:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 42:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLength(value);
      break;
    case 43:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrecision(value);
      break;
    case 44:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsrequired(value);
      break;
    case 45:
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
proto.vf.DataSetMetadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vf.DataSetMetadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vf.DataSetMetadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vf.DataSetMetadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getOrdinal();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getParent();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getGroup();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      25,
      f
    );
  }
  f = message.getDisplay();
  if (f.length > 0) {
    writer.writeString(
      30,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      35,
      f
    );
  }
  f = message.getFormat();
  if (f.length > 0) {
    writer.writeString(
      36,
      f
    );
  }
  f = message.getAggregate();
  if (f.length > 0) {
    writer.writeString(
      40,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      41,
      f
    );
  }
  f = message.getLength();
  if (f !== 0) {
    writer.writeInt32(
      42,
      f
    );
  }
  f = message.getPrecision();
  if (f !== 0) {
    writer.writeInt32(
      43,
      f
    );
  }
  f = message.getIsrequired();
  if (f) {
    writer.writeBool(
      44,
      f
    );
  }
  f = message.getIsactive();
  if (f) {
    writer.writeBool(
      45,
      f
    );
  }
};


/**
 * optional int32 Id = 1;
 * @return {number}
 */
proto.vf.DataSetMetadata.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.vf.DataSetMetadata} returns this
 */
proto.vf.DataSetMetadata.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 Ordinal = 5;
 * @return {number}
 */
proto.vf.DataSetMetadata.prototype.getOrdinal = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.vf.DataSetMetadata} returns this
 */
proto.vf.DataSetMetadata.prototype.setOrdinal = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string Parent = 6;
 * @return {string}
 */
proto.vf.DataSetMetadata.prototype.getParent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.vf.DataSetMetadata} returns this
 */
proto.vf.DataSetMetadata.prototype.setParent = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string Group = 10;
 * @return {string}
 */
proto.vf.DataSetMetadata.prototype.getGroup = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.vf.DataSetMetadata} returns this
 */
proto.vf.DataSetMetadata.prototype.setGroup = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string Owner = 15;
 * @return {string}
 */
proto.vf.DataSetMetadata.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.vf.DataSetMetadata} returns this
 */
proto.vf.DataSetMetadata.prototype.setOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string Name = 20;
 * @return {string}
 */
proto.vf.DataSetMetadata.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.vf.DataSetMetadata} returns this
 */
proto.vf.DataSetMetadata.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string Type = 25;
 * @return {string}
 */
proto.vf.DataSetMetadata.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 25, ""));
};


/**
 * @param {string} value
 * @return {!proto.vf.DataSetMetadata} returns this
 */
proto.vf.DataSetMetadata.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 25, value);
};


/**
 * optional string Display = 30;
 * @return {string}
 */
proto.vf.DataSetMetadata.prototype.getDisplay = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/**
 * @param {string} value
 * @return {!proto.vf.DataSetMetadata} returns this
 */
proto.vf.DataSetMetadata.prototype.setDisplay = function(value) {
  return jspb.Message.setProto3StringField(this, 30, value);
};


/**
 * optional string Description = 35;
 * @return {string}
 */
proto.vf.DataSetMetadata.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 35, ""));
};


/**
 * @param {string} value
 * @return {!proto.vf.DataSetMetadata} returns this
 */
proto.vf.DataSetMetadata.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 35, value);
};


/**
 * optional string Format = 36;
 * @return {string}
 */
proto.vf.DataSetMetadata.prototype.getFormat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 36, ""));
};


/**
 * @param {string} value
 * @return {!proto.vf.DataSetMetadata} returns this
 */
proto.vf.DataSetMetadata.prototype.setFormat = function(value) {
  return jspb.Message.setProto3StringField(this, 36, value);
};


/**
 * optional string Aggregate = 40;
 * @return {string}
 */
proto.vf.DataSetMetadata.prototype.getAggregate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 40, ""));
};


/**
 * @param {string} value
 * @return {!proto.vf.DataSetMetadata} returns this
 */
proto.vf.DataSetMetadata.prototype.setAggregate = function(value) {
  return jspb.Message.setProto3StringField(this, 40, value);
};


/**
 * optional string Content = 41;
 * @return {string}
 */
proto.vf.DataSetMetadata.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 41, ""));
};


/**
 * @param {string} value
 * @return {!proto.vf.DataSetMetadata} returns this
 */
proto.vf.DataSetMetadata.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 41, value);
};


/**
 * optional int32 Length = 42;
 * @return {number}
 */
proto.vf.DataSetMetadata.prototype.getLength = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 42, 0));
};


/**
 * @param {number} value
 * @return {!proto.vf.DataSetMetadata} returns this
 */
proto.vf.DataSetMetadata.prototype.setLength = function(value) {
  return jspb.Message.setProto3IntField(this, 42, value);
};


/**
 * optional int32 Precision = 43;
 * @return {number}
 */
proto.vf.DataSetMetadata.prototype.getPrecision = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 43, 0));
};


/**
 * @param {number} value
 * @return {!proto.vf.DataSetMetadata} returns this
 */
proto.vf.DataSetMetadata.prototype.setPrecision = function(value) {
  return jspb.Message.setProto3IntField(this, 43, value);
};


/**
 * optional bool IsRequired = 44;
 * @return {boolean}
 */
proto.vf.DataSetMetadata.prototype.getIsrequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 44, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vf.DataSetMetadata} returns this
 */
proto.vf.DataSetMetadata.prototype.setIsrequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 44, value);
};


/**
 * optional bool IsActive = 45;
 * @return {boolean}
 */
proto.vf.DataSetMetadata.prototype.getIsactive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 45, false));
};


/**
 * @param {boolean} value
 * @return {!proto.vf.DataSetMetadata} returns this
 */
proto.vf.DataSetMetadata.prototype.setIsactive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 45, value);
};





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
proto.vf.DataSetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.vf.DataSetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vf.DataSetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vf.DataSetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    action: jspb.Message.getFieldWithDefault(msg, 1, 0),
    code: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.vf.DataSetRequest}
 */
proto.vf.DataSetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vf.DataSetRequest;
  return proto.vf.DataSetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vf.DataSetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vf.DataSetRequest}
 */
proto.vf.DataSetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.vf.DataSetRequest.ActionType} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
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
proto.vf.DataSetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vf.DataSetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vf.DataSetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vf.DataSetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.vf.DataSetRequest.ActionType = {
  GET: 0,
  ADD: 1,
  UPDATE: 2
};

/**
 * optional ActionType Action = 1;
 * @return {!proto.vf.DataSetRequest.ActionType}
 */
proto.vf.DataSetRequest.prototype.getAction = function() {
  return /** @type {!proto.vf.DataSetRequest.ActionType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.vf.DataSetRequest.ActionType} value
 * @return {!proto.vf.DataSetRequest} returns this
 */
proto.vf.DataSetRequest.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string Code = 2;
 * @return {string}
 */
proto.vf.DataSetRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.vf.DataSetRequest} returns this
 */
proto.vf.DataSetRequest.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.vf.DataSetResponse.repeatedFields_ = [1];



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
proto.vf.DataSetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.vf.DataSetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.vf.DataSetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vf.DataSetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    resultList: jspb.Message.toObjectList(msg.getResultList(),
    proto.vf.DataSet.toObject, includeInstance)
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
 * @return {!proto.vf.DataSetResponse}
 */
proto.vf.DataSetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.vf.DataSetResponse;
  return proto.vf.DataSetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.vf.DataSetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.vf.DataSetResponse}
 */
proto.vf.DataSetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.vf.DataSet;
      reader.readMessage(value,proto.vf.DataSet.deserializeBinaryFromReader);
      msg.addResult(value);
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
proto.vf.DataSetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.vf.DataSetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.vf.DataSetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.vf.DataSetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResultList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.vf.DataSet.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DataSet Result = 1;
 * @return {!Array<!proto.vf.DataSet>}
 */
proto.vf.DataSetResponse.prototype.getResultList = function() {
  return /** @type{!Array<!proto.vf.DataSet>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.vf.DataSet, 1));
};


/**
 * @param {!Array<!proto.vf.DataSet>} value
 * @return {!proto.vf.DataSetResponse} returns this
*/
proto.vf.DataSetResponse.prototype.setResultList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.vf.DataSet=} opt_value
 * @param {number=} opt_index
 * @return {!proto.vf.DataSet}
 */
proto.vf.DataSetResponse.prototype.addResult = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.vf.DataSet, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.vf.DataSetResponse} returns this
 */
proto.vf.DataSetResponse.prototype.clearResultList = function() {
  return this.setResultList([]);
};


goog.object.extend(exports, proto.vf);