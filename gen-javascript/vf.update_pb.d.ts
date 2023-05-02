// package: vf.update
// file: vf.update.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";
import * as vf_pb from "./vf_pb";
import * as vf_row_pb from "./vf.row_pb";
import * as vf_select_pb from "./vf.select_pb";

export class UpdateRequest extends jspb.Message { 
    clearSectionsList(): void;
    getSectionsList(): Array<Section>;
    setSectionsList(value: Array<Section>): UpdateRequest;
    addSections(value?: Section, index?: number): Section;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRequest): UpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRequest;
    static deserializeBinaryFromReader(message: UpdateRequest, reader: jspb.BinaryReader): UpdateRequest;
}

export namespace UpdateRequest {
    export type AsObject = {
        sectionsList: Array<Section.AsObject>,
    }
}

export class UpdateResponse extends jspb.Message { 
    clearStatusesList(): void;
    getStatusesList(): Array<Status>;
    setStatusesList(value: Array<Status>): UpdateResponse;
    addStatuses(value?: Status, index?: number): Status;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateResponse): UpdateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateResponse;
    static deserializeBinaryFromReader(message: UpdateResponse, reader: jspb.BinaryReader): UpdateResponse;
}

export namespace UpdateResponse {
    export type AsObject = {
        statusesList: Array<Status.AsObject>,
    }
}

export class Section extends jspb.Message { 
    getDatasetname(): string;
    setDatasetname(value: string): Section;

    getValuesMap(): jspb.Map<string, vf_row_pb.FieldValue>;
    clearValuesMap(): void;

    getFiltersMap(): jspb.Map<string, vf_select_pb.FilterValues>;
    clearFiltersMap(): void;
    getValidatecommit(): boolean;
    setValidatecommit(value: boolean): Section;
    getMaxaffected(): number;
    setMaxaffected(value: number): Section;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Section.AsObject;
    static toObject(includeInstance: boolean, msg: Section): Section.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Section, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Section;
    static deserializeBinaryFromReader(message: Section, reader: jspb.BinaryReader): Section;
}

export namespace Section {
    export type AsObject = {
        datasetname: string,

        valuesMap: Array<[string, vf_row_pb.FieldValue.AsObject]>,

        filtersMap: Array<[string, vf_select_pb.FilterValues.AsObject]>,
        validatecommit: boolean,
        maxaffected: number,
    }
}

export class Status extends jspb.Message { 
    getDatasetname(): string;
    setDatasetname(value: string): Status;
    getAffected(): number;
    setAffected(value: number): Status;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Status.AsObject;
    static toObject(includeInstance: boolean, msg: Status): Status.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Status, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Status;
    static deserializeBinaryFromReader(message: Status, reader: jspb.BinaryReader): Status;
}

export namespace Status {
    export type AsObject = {
        datasetname: string,
        affected: number,
    }
}
