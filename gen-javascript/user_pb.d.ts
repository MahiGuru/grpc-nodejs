// package: userPackage
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class UserRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): UserRequest;
    getName(): string;
    setName(value: string): UserRequest;
    getUsername(): string;
    setUsername(value: string): UserRequest;
    getLocation(): string;
    setLocation(value: string): UserRequest;
    getPassword(): string;
    setPassword(value: string): UserRequest;
    getEmail(): string;
    setEmail(value: string): UserRequest;
    getPhone(): string;
    setPhone(value: string): UserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UserRequest): UserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserRequest;
    static deserializeBinaryFromReader(message: UserRequest, reader: jspb.BinaryReader): UserRequest;
}

export namespace UserRequest {
    export type AsObject = {
        id: number,
        name: string,
        username: string,
        location: string,
        password: string,
        email: string,
        phone: string,
    }
}

export class UserResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): UserResponse;
    getName(): string;
    setName(value: string): UserResponse;
    getUsername(): string;
    setUsername(value: string): UserResponse;
    getLocation(): string;
    setLocation(value: string): UserResponse;
    getPassword(): string;
    setPassword(value: string): UserResponse;
    getEmail(): string;
    setEmail(value: string): UserResponse;
    getPhone(): string;
    setPhone(value: string): UserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UserResponse): UserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserResponse;
    static deserializeBinaryFromReader(message: UserResponse, reader: jspb.BinaryReader): UserResponse;
}

export namespace UserResponse {
    export type AsObject = {
        id: number,
        name: string,
        username: string,
        location: string,
        password: string,
        email: string,
        phone: string,
    }
}

export class UserListResponse extends jspb.Message { 
    clearUsersList(): void;
    getUsersList(): Array<UserResponse>;
    setUsersList(value: Array<UserResponse>): UserListResponse;
    addUsers(value?: UserResponse, index?: number): UserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UserListResponse): UserListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserListResponse;
    static deserializeBinaryFromReader(message: UserListResponse, reader: jspb.BinaryReader): UserListResponse;
}

export namespace UserListResponse {
    export type AsObject = {
        usersList: Array<UserResponse.AsObject>,
    }
}

export class UserReqId extends jspb.Message { 
    getId(): string;
    setId(value: string): UserReqId;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserReqId.AsObject;
    static toObject(includeInstance: boolean, msg: UserReqId): UserReqId.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserReqId, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserReqId;
    static deserializeBinaryFromReader(message: UserReqId, reader: jspb.BinaryReader): UserReqId;
}

export namespace UserReqId {
    export type AsObject = {
        id: string,
    }
}

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}
