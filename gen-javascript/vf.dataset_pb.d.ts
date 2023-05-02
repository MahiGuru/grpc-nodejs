// package: vf
// file: vf.dataset.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";
import * as vf_pb from "./vf_pb";

export class DataSet extends jspb.Message { 
    getCode(): string;
    setCode(value: string): DataSet;
    getName(): string;
    setName(value: string): DataSet;
    getDesc(): string;
    setDesc(value: string): DataSet;
    getContent(): string;
    setContent(value: string): DataSet;
    getIsentitled(): boolean;
    setIsentitled(value: boolean): DataSet;
    getIsactive(): boolean;
    setIsactive(value: boolean): DataSet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataSet.AsObject;
    static toObject(includeInstance: boolean, msg: DataSet): DataSet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataSet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataSet;
    static deserializeBinaryFromReader(message: DataSet, reader: jspb.BinaryReader): DataSet;
}

export namespace DataSet {
    export type AsObject = {
        code: string,
        name: string,
        desc: string,
        content: string,
        isentitled: boolean,
        isactive: boolean,
    }
}

export class DataSetMetadata extends jspb.Message { 
    getId(): number;
    setId(value: number): DataSetMetadata;
    getOrdinal(): number;
    setOrdinal(value: number): DataSetMetadata;
    getParent(): string;
    setParent(value: string): DataSetMetadata;
    getGroup(): string;
    setGroup(value: string): DataSetMetadata;
    getOwner(): string;
    setOwner(value: string): DataSetMetadata;
    getName(): string;
    setName(value: string): DataSetMetadata;
    getType(): string;
    setType(value: string): DataSetMetadata;
    getDisplay(): string;
    setDisplay(value: string): DataSetMetadata;
    getDescription(): string;
    setDescription(value: string): DataSetMetadata;
    getFormat(): string;
    setFormat(value: string): DataSetMetadata;
    getAggregate(): string;
    setAggregate(value: string): DataSetMetadata;
    getContent(): string;
    setContent(value: string): DataSetMetadata;
    getLength(): number;
    setLength(value: number): DataSetMetadata;
    getPrecision(): number;
    setPrecision(value: number): DataSetMetadata;
    getIsrequired(): boolean;
    setIsrequired(value: boolean): DataSetMetadata;
    getIsactive(): boolean;
    setIsactive(value: boolean): DataSetMetadata;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataSetMetadata.AsObject;
    static toObject(includeInstance: boolean, msg: DataSetMetadata): DataSetMetadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataSetMetadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataSetMetadata;
    static deserializeBinaryFromReader(message: DataSetMetadata, reader: jspb.BinaryReader): DataSetMetadata;
}

export namespace DataSetMetadata {
    export type AsObject = {
        id: number,
        ordinal: number,
        parent: string,
        group: string,
        owner: string,
        name: string,
        type: string,
        display: string,
        description: string,
        format: string,
        aggregate: string,
        content: string,
        length: number,
        precision: number,
        isrequired: boolean,
        isactive: boolean,
    }
}

export class DataSetRequest extends jspb.Message { 
    getAction(): DataSetRequest.ActionType;
    setAction(value: DataSetRequest.ActionType): DataSetRequest;
    getCode(): string;
    setCode(value: string): DataSetRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataSetRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DataSetRequest): DataSetRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataSetRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataSetRequest;
    static deserializeBinaryFromReader(message: DataSetRequest, reader: jspb.BinaryReader): DataSetRequest;
}

export namespace DataSetRequest {
    export type AsObject = {
        action: DataSetRequest.ActionType,
        code: string,
    }

    export enum ActionType {
    GET = 0,
    ADD = 1,
    UPDATE = 2,
    }

}

export class DataSetResponse extends jspb.Message { 
    clearResultList(): void;
    getResultList(): Array<DataSet>;
    setResultList(value: Array<DataSet>): DataSetResponse;
    addResult(value?: DataSet, index?: number): DataSet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataSetResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DataSetResponse): DataSetResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataSetResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataSetResponse;
    static deserializeBinaryFromReader(message: DataSetResponse, reader: jspb.BinaryReader): DataSetResponse;
}

export namespace DataSetResponse {
    export type AsObject = {
        resultList: Array<DataSet.AsObject>,
    }
}
