// package: vf
// file: vf.row.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

export class Row extends jspb.Message { 

    getCellsMap(): jspb.Map<string, FieldValue>;
    clearCellsMap(): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Row.AsObject;
    static toObject(includeInstance: boolean, msg: Row): Row.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Row, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Row;
    static deserializeBinaryFromReader(message: Row, reader: jspb.BinaryReader): Row;
}

export namespace Row {
    export type AsObject = {

        cellsMap: Array<[string, FieldValue.AsObject]>,
    }
}

export class FieldValue extends jspb.Message { 

    hasInt32(): boolean;
    clearInt32(): void;
    getInt32(): number;
    setInt32(value: number): FieldValue;

    hasDouble(): boolean;
    clearDouble(): void;
    getDouble(): number;
    setDouble(value: number): FieldValue;

    hasFloat(): boolean;
    clearFloat(): void;
    getFloat(): number;
    setFloat(value: number): FieldValue;

    hasInt64(): boolean;
    clearInt64(): void;
    getInt64(): number;
    setInt64(value: number): FieldValue;

    hasDatetime(): boolean;
    clearDatetime(): void;
    getDatetime(): number;
    setDatetime(value: number): FieldValue;

    hasString(): boolean;
    clearString(): void;
    getString(): string;
    setString(value: string): FieldValue;

    hasBool(): boolean;
    clearBool(): void;
    getBool(): boolean;
    setBool(value: boolean): FieldValue;

    getValueCase(): FieldValue.ValueCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FieldValue.AsObject;
    static toObject(includeInstance: boolean, msg: FieldValue): FieldValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FieldValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FieldValue;
    static deserializeBinaryFromReader(message: FieldValue, reader: jspb.BinaryReader): FieldValue;
}

export namespace FieldValue {
    export type AsObject = {
        int32: number,
        pb_double: number,
        pb_float: number,
        int64: number,
        datetime: number,
        string: string,
        bool: boolean,
    }

    export enum ValueCase {
        VALUE_NOT_SET = 0,
        INT32 = 5,
        DOUBLE = 6,
        FLOAT = 7,
        INT64 = 8,
        DATETIME = 9,
        STRING = 10,
        BOOL = 11,
    }

}
