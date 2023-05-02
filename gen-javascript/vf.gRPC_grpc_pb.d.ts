// package: vf.gRPC
// file: vf.gRPC.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as vf_gRPC_pb from "./vf.gRPC_pb";
import * as vf_pb from "./vf_pb";

interface IsessionService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    process: IsessionService_IProcess;
    processStream: IsessionService_IProcessStream;
}

interface IsessionService_IProcess extends grpc.MethodDefinition<vf_pb.Request, vf_pb.Response> {
    path: "/vf.gRPC.session/Process";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<vf_pb.Request>;
    requestDeserialize: grpc.deserialize<vf_pb.Request>;
    responseSerialize: grpc.serialize<vf_pb.Response>;
    responseDeserialize: grpc.deserialize<vf_pb.Response>;
}
interface IsessionService_IProcessStream extends grpc.MethodDefinition<vf_pb.Request, vf_pb.Response> {
    path: "/vf.gRPC.session/ProcessStream";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<vf_pb.Request>;
    requestDeserialize: grpc.deserialize<vf_pb.Request>;
    responseSerialize: grpc.serialize<vf_pb.Response>;
    responseDeserialize: grpc.deserialize<vf_pb.Response>;
}

export const sessionService: IsessionService;

export interface IsessionServer {
    process: grpc.handleUnaryCall<vf_pb.Request, vf_pb.Response>;
    processStream: grpc.handleServerStreamingCall<vf_pb.Request, vf_pb.Response>;
}

export interface IsessionClient {
    process(request: vf_pb.Request, callback: (error: grpc.ServiceError | null, response: vf_pb.Response) => void): grpc.ClientUnaryCall;
    process(request: vf_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vf_pb.Response) => void): grpc.ClientUnaryCall;
    process(request: vf_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vf_pb.Response) => void): grpc.ClientUnaryCall;
    processStream(request: vf_pb.Request, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<vf_pb.Response>;
    processStream(request: vf_pb.Request, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<vf_pb.Response>;
}

export class sessionClient extends grpc.Client implements IsessionClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public process(request: vf_pb.Request, callback: (error: grpc.ServiceError | null, response: vf_pb.Response) => void): grpc.ClientUnaryCall;
    public process(request: vf_pb.Request, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: vf_pb.Response) => void): grpc.ClientUnaryCall;
    public process(request: vf_pb.Request, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: vf_pb.Response) => void): grpc.ClientUnaryCall;
    public processStream(request: vf_pb.Request, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<vf_pb.Response>;
    public processStream(request: vf_pb.Request, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<vf_pb.Response>;
}
