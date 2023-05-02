// package: vf
// file: vf.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

export class Header extends jspb.Message { 
    getTopic(): string;
    setTopic(value: string): Header;
    getUser(): string;
    setUser(value: string): Header;
    getHost(): string;
    setHost(value: string): Header;
    getApp(): string;
    setApp(value: string): Header;
    getToken(): string;
    setToken(value: string): Header;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Header.AsObject;
    static toObject(includeInstance: boolean, msg: Header): Header.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Header, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Header;
    static deserializeBinaryFromReader(message: Header, reader: jspb.BinaryReader): Header;
}

export namespace Header {
    export type AsObject = {
        topic: string,
        user: string,
        host: string,
        app: string,
        token: string,
    }
}

export class dateTime extends jspb.Message { 
    getValue(): Uint8Array | string;
    getValue_asU8(): Uint8Array;
    getValue_asB64(): string;
    setValue(value: Uint8Array | string): dateTime;
    getYear(): number;
    setYear(value: number): dateTime;
    getMonth(): number;
    setMonth(value: number): dateTime;
    getDay(): number;
    setDay(value: number): dateTime;
    getHour(): number;
    setHour(value: number): dateTime;
    getMinute(): number;
    setMinute(value: number): dateTime;
    getSecond(): number;
    setSecond(value: number): dateTime;
    getMillisecond(): number;
    setMillisecond(value: number): dateTime;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): dateTime.AsObject;
    static toObject(includeInstance: boolean, msg: dateTime): dateTime.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: dateTime, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): dateTime;
    static deserializeBinaryFromReader(message: dateTime, reader: jspb.BinaryReader): dateTime;
}

export namespace dateTime {
    export type AsObject = {
        value: Uint8Array | string,
        year: number,
        month: number,
        day: number,
        hour: number,
        minute: number,
        second: number,
        millisecond: number,
    }
}

export class Exception extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): Exception;
    getStacktrace(): string;
    setStacktrace(value: string): Exception;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Exception.AsObject;
    static toObject(includeInstance: boolean, msg: Exception): Exception.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Exception, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Exception;
    static deserializeBinaryFromReader(message: Exception, reader: jspb.BinaryReader): Exception;
}

export namespace Exception {
    export type AsObject = {
        message: string,
        stacktrace: string,
    }
}

export class Request extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): Header | undefined;
    setHeader(value?: Header): Request;

    hasInput(): boolean;
    clearInput(): void;
    getInput(): google_protobuf_any_pb.Any | undefined;
    setInput(value?: google_protobuf_any_pb.Any): Request;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Request.AsObject;
    static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Request;
    static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
    export type AsObject = {
        header?: Header.AsObject,
        input?: google_protobuf_any_pb.Any.AsObject,
    }
}

export class Response extends jspb.Message { 

    hasHeader(): boolean;
    clearHeader(): void;
    getHeader(): Header | undefined;
    setHeader(value?: Header): Response;

    hasOutput(): boolean;
    clearOutput(): void;
    getOutput(): google_protobuf_any_pb.Any | undefined;
    setOutput(value?: google_protobuf_any_pb.Any): Response;

    hasError(): boolean;
    clearError(): void;
    getError(): Exception | undefined;
    setError(value?: Exception): Response;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Response.AsObject;
    static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Response;
    static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
    export type AsObject = {
        header?: Header.AsObject,
        output?: google_protobuf_any_pb.Any.AsObject,
        error?: Exception.AsObject,
    }
}

export class TopicRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TopicRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TopicRequest): TopicRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TopicRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TopicRequest;
    static deserializeBinaryFromReader(message: TopicRequest, reader: jspb.BinaryReader): TopicRequest;
}

export namespace TopicRequest {
    export type AsObject = {
    }
}

export class TopicResponse extends jspb.Message { 
    clearTopicsList(): void;
    getTopicsList(): Array<string>;
    setTopicsList(value: Array<string>): TopicResponse;
    addTopics(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TopicResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TopicResponse): TopicResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TopicResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TopicResponse;
    static deserializeBinaryFromReader(message: TopicResponse, reader: jspb.BinaryReader): TopicResponse;
}

export namespace TopicResponse {
    export type AsObject = {
        topicsList: Array<string>,
    }
}

export const Topic: jspb.ExtensionFieldInfo<string>;
