// package: vf.VW
// file: vf.vw.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as vf_pb from "./vf_pb";

export class Item extends jspb.Message { 
    getParent(): string;
    setParent(value: string): Item;
    getCode(): string;
    setCode(value: string): Item;
    getName(): string;
    setName(value: string): Item;
    getType(): Item.ItemType;
    setType(value: Item.ItemType): Item;
    getHandler(): string;
    setHandler(value: string): Item;
    getOwner(): string;
    setOwner(value: string): Item;
    getContent(): string;
    setContent(value: string): Item;
    getIsactive(): boolean;
    setIsactive(value: boolean): Item;
    getIsshared(): boolean;
    setIsshared(value: boolean): Item;
    clearActionsList(): void;
    getActionsList(): Array<string>;
    setActionsList(value: Array<string>): Item;
    addActions(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Item.AsObject;
    static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Item;
    static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
}

export namespace Item {
    export type AsObject = {
        parent: string,
        code: string,
        name: string,
        type: Item.ItemType,
        handler: string,
        owner: string,
        content: string,
        isactive: boolean,
        isshared: boolean,
        actionsList: Array<string>,
    }

    export enum ItemType {
    FOLDER = 0,
    VIEW = 1,
    STATE = 2,
    CONTAINER = 3,
    SETTING = 4,
    }

}

export class ItemRequest extends jspb.Message { 
    getAction(): ItemRequest.ActionType;
    setAction(value: ItemRequest.ActionType): ItemRequest;
    getCode(): string;
    setCode(value: string): ItemRequest;
    getParent(): string;
    setParent(value: string): ItemRequest;
    clearItemsList(): void;
    getItemsList(): Array<Item>;
    setItemsList(value: Array<Item>): ItemRequest;
    addItems(value?: Item, index?: number): Item;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ItemRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ItemRequest): ItemRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ItemRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ItemRequest;
    static deserializeBinaryFromReader(message: ItemRequest, reader: jspb.BinaryReader): ItemRequest;
}

export namespace ItemRequest {
    export type AsObject = {
        action: ItemRequest.ActionType,
        code: string,
        parent: string,
        itemsList: Array<Item.AsObject>,
    }

    export enum ActionType {
    GET = 0,
    ADD = 1,
    UPDATE = 2,
    LAUNCH = 3,
    }

}

export class ItemResponse extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<Item>;
    setItemsList(value: Array<Item>): ItemResponse;
    addItems(value?: Item, index?: number): Item;

    hasSetting(): boolean;
    clearSetting(): void;
    getSetting(): Item | undefined;
    setSetting(value?: Item): ItemResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ItemResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ItemResponse): ItemResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ItemResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ItemResponse;
    static deserializeBinaryFromReader(message: ItemResponse, reader: jspb.BinaryReader): ItemResponse;
}

export namespace ItemResponse {
    export type AsObject = {
        itemsList: Array<Item.AsObject>,
        setting?: Item.AsObject,
    }
}

export class ItemMetaData extends jspb.Message { 
    getId(): number;
    setId(value: number): ItemMetaData;
    getItemcode(): string;
    setItemcode(value: string): ItemMetaData;
    getFieldname(): string;
    setFieldname(value: string): ItemMetaData;
    getFieldtype(): string;
    setFieldtype(value: string): ItemMetaData;
    getDisplayname(): string;
    setDisplayname(value: string): ItemMetaData;
    getDescription(): string;
    setDescription(value: string): ItemMetaData;
    getOrdinal(): number;
    setOrdinal(value: number): ItemMetaData;
    getAggregatetype(): string;
    setAggregatetype(value: string): ItemMetaData;
    getFormat(): string;
    setFormat(value: string): ItemMetaData;
    getFieldlength(): number;
    setFieldlength(value: number): ItemMetaData;
    getFieldprecision(): number;
    setFieldprecision(value: number): ItemMetaData;
    getFieldgroup(): string;
    setFieldgroup(value: string): ItemMetaData;
    getFieldowner(): string;
    setFieldowner(value: string): ItemMetaData;
    getIsrequired(): boolean;
    setIsrequired(value: boolean): ItemMetaData;
    getSource(): string;
    setSource(value: string): ItemMetaData;
    getIsactive(): boolean;
    setIsactive(value: boolean): ItemMetaData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ItemMetaData.AsObject;
    static toObject(includeInstance: boolean, msg: ItemMetaData): ItemMetaData.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ItemMetaData, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ItemMetaData;
    static deserializeBinaryFromReader(message: ItemMetaData, reader: jspb.BinaryReader): ItemMetaData;
}

export namespace ItemMetaData {
    export type AsObject = {
        id: number,
        itemcode: string,
        fieldname: string,
        fieldtype: string,
        displayname: string,
        description: string,
        ordinal: number,
        aggregatetype: string,
        format: string,
        fieldlength: number,
        fieldprecision: number,
        fieldgroup: string,
        fieldowner: string,
        isrequired: boolean,
        source: string,
        isactive: boolean,
    }
}

export class GetItemMetaDataRequest extends jspb.Message { 
    getItemcode(): string;
    setItemcode(value: string): GetItemMetaDataRequest;
    getItemcode2(): string;
    setItemcode2(value: string): GetItemMetaDataRequest;
    getItemcode3(): string;
    setItemcode3(value: string): GetItemMetaDataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetItemMetaDataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetItemMetaDataRequest): GetItemMetaDataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetItemMetaDataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetItemMetaDataRequest;
    static deserializeBinaryFromReader(message: GetItemMetaDataRequest, reader: jspb.BinaryReader): GetItemMetaDataRequest;
}

export namespace GetItemMetaDataRequest {
    export type AsObject = {
        itemcode: string,
        itemcode2: string,
        itemcode3: string,
    }
}

export class GetItemMetaDataResponse extends jspb.Message { 
    clearMetadataList(): void;
    getMetadataList(): Array<ItemMetaData>;
    setMetadataList(value: Array<ItemMetaData>): GetItemMetaDataResponse;
    addMetadata(value?: ItemMetaData, index?: number): ItemMetaData;
    clearMetadata2List(): void;
    getMetadata2List(): Array<ItemMetaData>;
    setMetadata2List(value: Array<ItemMetaData>): GetItemMetaDataResponse;
    addMetadata2(value?: ItemMetaData, index?: number): ItemMetaData;
    clearMetadata3List(): void;
    getMetadata3List(): Array<ItemMetaData>;
    setMetadata3List(value: Array<ItemMetaData>): GetItemMetaDataResponse;
    addMetadata3(value?: ItemMetaData, index?: number): ItemMetaData;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetItemMetaDataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetItemMetaDataResponse): GetItemMetaDataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetItemMetaDataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetItemMetaDataResponse;
    static deserializeBinaryFromReader(message: GetItemMetaDataResponse, reader: jspb.BinaryReader): GetItemMetaDataResponse;
}

export namespace GetItemMetaDataResponse {
    export type AsObject = {
        metadataList: Array<ItemMetaData.AsObject>,
        metadata2List: Array<ItemMetaData.AsObject>,
        metadata3List: Array<ItemMetaData.AsObject>,
    }
}

export class ItemUserGroup extends jspb.Message { 
    getId(): number;
    setId(value: number): ItemUserGroup;
    getItemcode(): string;
    setItemcode(value: string): ItemUserGroup;
    getCode(): string;
    setCode(value: string): ItemUserGroup;
    getName(): string;
    setName(value: string): ItemUserGroup;
    getDesc(): string;
    setDesc(value: string): ItemUserGroup;
    getIsselected(): boolean;
    setIsselected(value: boolean): ItemUserGroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ItemUserGroup.AsObject;
    static toObject(includeInstance: boolean, msg: ItemUserGroup): ItemUserGroup.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ItemUserGroup, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ItemUserGroup;
    static deserializeBinaryFromReader(message: ItemUserGroup, reader: jspb.BinaryReader): ItemUserGroup;
}

export namespace ItemUserGroup {
    export type AsObject = {
        id: number,
        itemcode: string,
        code: string,
        name: string,
        desc: string,
        isselected: boolean,
    }
}

export class ItemUserGroupRequest extends jspb.Message { 
    getAction(): ItemUserGroupRequest.ActionType;
    setAction(value: ItemUserGroupRequest.ActionType): ItemUserGroupRequest;
    getCode(): string;
    setCode(value: string): ItemUserGroupRequest;
    clearGroupsList(): void;
    getGroupsList(): Array<ItemUserGroup>;
    setGroupsList(value: Array<ItemUserGroup>): ItemUserGroupRequest;
    addGroups(value?: ItemUserGroup, index?: number): ItemUserGroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ItemUserGroupRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ItemUserGroupRequest): ItemUserGroupRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ItemUserGroupRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ItemUserGroupRequest;
    static deserializeBinaryFromReader(message: ItemUserGroupRequest, reader: jspb.BinaryReader): ItemUserGroupRequest;
}

export namespace ItemUserGroupRequest {
    export type AsObject = {
        action: ItemUserGroupRequest.ActionType,
        code: string,
        groupsList: Array<ItemUserGroup.AsObject>,
    }

    export enum ActionType {
    GET = 0,
    UPDATE = 2,
    }

}

export class ItemUserGroupResponse extends jspb.Message { 
    clearGroupsList(): void;
    getGroupsList(): Array<ItemUserGroup>;
    setGroupsList(value: Array<ItemUserGroup>): ItemUserGroupResponse;
    addGroups(value?: ItemUserGroup, index?: number): ItemUserGroup;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ItemUserGroupResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ItemUserGroupResponse): ItemUserGroupResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ItemUserGroupResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ItemUserGroupResponse;
    static deserializeBinaryFromReader(message: ItemUserGroupResponse, reader: jspb.BinaryReader): ItemUserGroupResponse;
}

export namespace ItemUserGroupResponse {
    export type AsObject = {
        groupsList: Array<ItemUserGroup.AsObject>,
    }
}

export class SupportRequest extends jspb.Message { 
    getSubject(): string;
    setSubject(value: string): SupportRequest;
    getComments(): string;
    setComments(value: string): SupportRequest;
    clearImagesList(): void;
    getImagesList(): Array<Image>;
    setImagesList(value: Array<Image>): SupportRequest;
    addImages(value?: Image, index?: number): Image;
    clearLogsList(): void;
    getLogsList(): Array<File>;
    setLogsList(value: Array<File>): SupportRequest;
    addLogs(value?: File, index?: number): File;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SupportRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SupportRequest): SupportRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SupportRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SupportRequest;
    static deserializeBinaryFromReader(message: SupportRequest, reader: jspb.BinaryReader): SupportRequest;
}

export namespace SupportRequest {
    export type AsObject = {
        subject: string,
        comments: string,
        imagesList: Array<Image.AsObject>,
        logsList: Array<File.AsObject>,
    }
}

export class File extends jspb.Message { 
    getName(): string;
    setName(value: string): File;
    getContent(): Uint8Array | string;
    getContent_asU8(): Uint8Array;
    getContent_asB64(): string;
    setContent(value: Uint8Array | string): File;

    hasLastmodified(): boolean;
    clearLastmodified(): void;
    getLastmodified(): vf_pb.dateTime | undefined;
    setLastmodified(value?: vf_pb.dateTime): File;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): File.AsObject;
    static toObject(includeInstance: boolean, msg: File): File.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: File, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): File;
    static deserializeBinaryFromReader(message: File, reader: jspb.BinaryReader): File;
}

export namespace File {
    export type AsObject = {
        name: string,
        content: Uint8Array | string,
        lastmodified?: vf_pb.dateTime.AsObject,
    }
}

export class Image extends jspb.Message { 
    getFormat(): string;
    setFormat(value: string): Image;
    getContent(): Uint8Array | string;
    getContent_asU8(): Uint8Array;
    getContent_asB64(): string;
    setContent(value: Uint8Array | string): Image;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Image.AsObject;
    static toObject(includeInstance: boolean, msg: Image): Image.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Image, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Image;
    static deserializeBinaryFromReader(message: Image, reader: jspb.BinaryReader): Image;
}

export namespace Image {
    export type AsObject = {
        format: string,
        content: Uint8Array | string,
    }
}

export class SupportResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): SupportResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SupportResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SupportResponse): SupportResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SupportResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SupportResponse;
    static deserializeBinaryFromReader(message: SupportResponse, reader: jspb.BinaryReader): SupportResponse;
}

export namespace SupportResponse {
    export type AsObject = {
        message: string,
    }
}
