// package: vf
// file: vf.table.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

export class Table extends jspb.Message { 
    getName(): string;
    setName(value: string): Table;
    clearColumnsList(): void;
    getColumnsList(): Array<Column>;
    setColumnsList(value: Array<Column>): Table;
    addColumns(value?: Column, index?: number): Column;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Table.AsObject;
    static toObject(includeInstance: boolean, msg: Table): Table.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Table, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Table;
    static deserializeBinaryFromReader(message: Table, reader: jspb.BinaryReader): Table;
}

export namespace Table {
    export type AsObject = {
        name: string,
        columnsList: Array<Column.AsObject>,
    }
}

export class Column extends jspb.Message { 
    getName(): string;
    setName(value: string): Column;
    getCaption(): string;
    setCaption(value: string): Column;
    getOrdinal(): number;
    setOrdinal(value: number): Column;
    getStore(): Uint8Array | string;
    getStore_asU8(): Uint8Array;
    getStore_asB64(): string;
    setStore(value: Uint8Array | string): Column;
    clearNullsList(): void;
    getNullsList(): Array<number>;
    setNullsList(value: Array<number>): Column;
    addNulls(value: number, index?: number): number;

    hasAint32(): boolean;
    clearAint32(): void;
    getAint32(): Int32S | undefined;
    setAint32(value?: Int32S): Column;

    hasAint64(): boolean;
    clearAint64(): void;
    getAint64(): Int64S | undefined;
    setAint64(value?: Int64S): Column;

    hasAfloat(): boolean;
    clearAfloat(): void;
    getAfloat(): FloatS | undefined;
    setAfloat(value?: FloatS): Column;

    hasAdouble(): boolean;
    clearAdouble(): void;
    getAdouble(): DoubleS | undefined;
    setAdouble(value?: DoubleS): Column;

    hasAdecimal(): boolean;
    clearAdecimal(): void;
    getAdecimal(): DecimalS | undefined;
    setAdecimal(value?: DecimalS): Column;

    hasAdatetime(): boolean;
    clearAdatetime(): void;
    getAdatetime(): DateTimeS | undefined;
    setAdatetime(value?: DateTimeS): Column;

    hasAbool(): boolean;
    clearAbool(): void;
    getAbool(): BoolS | undefined;
    setAbool(value?: BoolS): Column;

    hasAstring(): boolean;
    clearAstring(): void;
    getAstring(): StringS | undefined;
    setAstring(value?: StringS): Column;

    hasAxml(): boolean;
    clearAxml(): void;
    getAxml(): XmlS | undefined;
    setAxml(value?: XmlS): Column;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Column.AsObject;
    static toObject(includeInstance: boolean, msg: Column): Column.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Column, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Column;
    static deserializeBinaryFromReader(message: Column, reader: jspb.BinaryReader): Column;
}

export namespace Column {
    export type AsObject = {
        name: string,
        caption: string,
        ordinal: number,
        store: Uint8Array | string,
        nullsList: Array<number>,
        aint32?: Int32S.AsObject,
        aint64?: Int64S.AsObject,
        afloat?: FloatS.AsObject,
        adouble?: DoubleS.AsObject,
        adecimal?: DecimalS.AsObject,
        adatetime?: DateTimeS.AsObject,
        abool?: BoolS.AsObject,
        astring?: StringS.AsObject,
        axml?: XmlS.AsObject,
    }
}

export class Int32S extends jspb.Message { 
    clearStoreList(): void;
    getStoreList(): Array<number>;
    setStoreList(value: Array<number>): Int32S;
    addStore(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Int32S.AsObject;
    static toObject(includeInstance: boolean, msg: Int32S): Int32S.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Int32S, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Int32S;
    static deserializeBinaryFromReader(message: Int32S, reader: jspb.BinaryReader): Int32S;
}

export namespace Int32S {
    export type AsObject = {
        storeList: Array<number>,
    }
}

export class Int64S extends jspb.Message { 
    clearStoreList(): void;
    getStoreList(): Array<number>;
    setStoreList(value: Array<number>): Int64S;
    addStore(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Int64S.AsObject;
    static toObject(includeInstance: boolean, msg: Int64S): Int64S.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Int64S, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Int64S;
    static deserializeBinaryFromReader(message: Int64S, reader: jspb.BinaryReader): Int64S;
}

export namespace Int64S {
    export type AsObject = {
        storeList: Array<number>,
    }
}

export class FloatS extends jspb.Message { 
    clearStoreList(): void;
    getStoreList(): Array<number>;
    setStoreList(value: Array<number>): FloatS;
    addStore(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FloatS.AsObject;
    static toObject(includeInstance: boolean, msg: FloatS): FloatS.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FloatS, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FloatS;
    static deserializeBinaryFromReader(message: FloatS, reader: jspb.BinaryReader): FloatS;
}

export namespace FloatS {
    export type AsObject = {
        storeList: Array<number>,
    }
}

export class DoubleS extends jspb.Message { 
    clearStoreList(): void;
    getStoreList(): Array<number>;
    setStoreList(value: Array<number>): DoubleS;
    addStore(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DoubleS.AsObject;
    static toObject(includeInstance: boolean, msg: DoubleS): DoubleS.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DoubleS, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DoubleS;
    static deserializeBinaryFromReader(message: DoubleS, reader: jspb.BinaryReader): DoubleS;
}

export namespace DoubleS {
    export type AsObject = {
        storeList: Array<number>,
    }
}

export class DecimalS extends jspb.Message { 
    clearStoreList(): void;
    getStoreList(): Array<string>;
    setStoreList(value: Array<string>): DecimalS;
    addStore(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DecimalS.AsObject;
    static toObject(includeInstance: boolean, msg: DecimalS): DecimalS.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DecimalS, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DecimalS;
    static deserializeBinaryFromReader(message: DecimalS, reader: jspb.BinaryReader): DecimalS;
}

export namespace DecimalS {
    export type AsObject = {
        storeList: Array<string>,
    }
}

export class DateTimeS extends jspb.Message { 
    clearStoreList(): void;
    getStoreList(): Array<number>;
    setStoreList(value: Array<number>): DateTimeS;
    addStore(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DateTimeS.AsObject;
    static toObject(includeInstance: boolean, msg: DateTimeS): DateTimeS.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DateTimeS, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DateTimeS;
    static deserializeBinaryFromReader(message: DateTimeS, reader: jspb.BinaryReader): DateTimeS;
}

export namespace DateTimeS {
    export type AsObject = {
        storeList: Array<number>,
    }
}

export class BoolS extends jspb.Message { 
    clearStoreList(): void;
    getStoreList(): Array<boolean>;
    setStoreList(value: Array<boolean>): BoolS;
    addStore(value: boolean, index?: number): boolean;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BoolS.AsObject;
    static toObject(includeInstance: boolean, msg: BoolS): BoolS.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BoolS, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BoolS;
    static deserializeBinaryFromReader(message: BoolS, reader: jspb.BinaryReader): BoolS;
}

export namespace BoolS {
    export type AsObject = {
        storeList: Array<boolean>,
    }
}

export class StringS extends jspb.Message { 
    clearStoreList(): void;
    getStoreList(): Array<string>;
    setStoreList(value: Array<string>): StringS;
    addStore(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StringS.AsObject;
    static toObject(includeInstance: boolean, msg: StringS): StringS.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StringS, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StringS;
    static deserializeBinaryFromReader(message: StringS, reader: jspb.BinaryReader): StringS;
}

export namespace StringS {
    export type AsObject = {
        storeList: Array<string>,
    }
}

export class XmlS extends jspb.Message { 
    clearStoreList(): void;
    getStoreList(): Array<string>;
    setStoreList(value: Array<string>): XmlS;
    addStore(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): XmlS.AsObject;
    static toObject(includeInstance: boolean, msg: XmlS): XmlS.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: XmlS, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): XmlS;
    static deserializeBinaryFromReader(message: XmlS, reader: jspb.BinaryReader): XmlS;
}

export namespace XmlS {
    export type AsObject = {
        storeList: Array<string>,
    }
}
