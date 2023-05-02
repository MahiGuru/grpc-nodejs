// package: vf.upload
// file: vf.upload.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";
import * as vf_pb from "./vf_pb";
import * as vf_row_pb from "./vf.row_pb";
import * as vf_table_pb from "./vf.table_pb";

export class UploadRequest extends jspb.Message { 
    getDatasetname(): string;
    setDatasetname(value: string): UploadRequest;

    getFieldsMap(): jspb.Map<string, vf_row_pb.FieldValue>;
    clearFieldsMap(): void;

    hasTable(): boolean;
    clearTable(): void;
    getTable(): vf_table_pb.Table | undefined;
    setTable(value?: vf_table_pb.Table): UploadRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UploadRequest): UploadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadRequest;
    static deserializeBinaryFromReader(message: UploadRequest, reader: jspb.BinaryReader): UploadRequest;
}

export namespace UploadRequest {
    export type AsObject = {
        datasetname: string,

        fieldsMap: Array<[string, vf_row_pb.FieldValue.AsObject]>,
        table?: vf_table_pb.Table.AsObject,
    }
}

export class UploadResponse extends jspb.Message { 
    clearResultList(): void;
    getResultList(): Array<vf_table_pb.Table>;
    setResultList(value: Array<vf_table_pb.Table>): UploadResponse;
    addResult(value?: vf_table_pb.Table, index?: number): vf_table_pb.Table;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UploadResponse): UploadResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadResponse;
    static deserializeBinaryFromReader(message: UploadResponse, reader: jspb.BinaryReader): UploadResponse;
}

export namespace UploadResponse {
    export type AsObject = {
        resultList: Array<vf_table_pb.Table.AsObject>,
    }
}
