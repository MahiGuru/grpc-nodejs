// package: userPackage
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as user_pb from "./user_pb";

interface IUserServiceRoutesService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAllUsers: IUserServiceRoutesService_IgetAllUsers;
    getUser: IUserServiceRoutesService_IgetUser;
    deleteUser: IUserServiceRoutesService_IdeleteUser;
    editUser: IUserServiceRoutesService_IeditUser;
    addUser: IUserServiceRoutesService_IaddUser;
}

interface IUserServiceRoutesService_IgetAllUsers extends grpc.MethodDefinition<user_pb.Empty, user_pb.UserListResponse> {
    path: "/userPackage.UserServiceRoutes/getAllUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.Empty>;
    requestDeserialize: grpc.deserialize<user_pb.Empty>;
    responseSerialize: grpc.serialize<user_pb.UserListResponse>;
    responseDeserialize: grpc.deserialize<user_pb.UserListResponse>;
}
interface IUserServiceRoutesService_IgetUser extends grpc.MethodDefinition<user_pb.UserReqId, user_pb.UserResponse> {
    path: "/userPackage.UserServiceRoutes/getUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.UserReqId>;
    requestDeserialize: grpc.deserialize<user_pb.UserReqId>;
    responseSerialize: grpc.serialize<user_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.UserResponse>;
}
interface IUserServiceRoutesService_IdeleteUser extends grpc.MethodDefinition<user_pb.UserReqId, user_pb.UserReqId> {
    path: "/userPackage.UserServiceRoutes/deleteUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.UserReqId>;
    requestDeserialize: grpc.deserialize<user_pb.UserReqId>;
    responseSerialize: grpc.serialize<user_pb.UserReqId>;
    responseDeserialize: grpc.deserialize<user_pb.UserReqId>;
}
interface IUserServiceRoutesService_IeditUser extends grpc.MethodDefinition<user_pb.UserRequest, user_pb.UserResponse> {
    path: "/userPackage.UserServiceRoutes/editUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.UserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.UserRequest>;
    responseSerialize: grpc.serialize<user_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.UserResponse>;
}
interface IUserServiceRoutesService_IaddUser extends grpc.MethodDefinition<user_pb.UserRequest, user_pb.UserResponse> {
    path: "/userPackage.UserServiceRoutes/addUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.UserRequest>;
    requestDeserialize: grpc.deserialize<user_pb.UserRequest>;
    responseSerialize: grpc.serialize<user_pb.UserResponse>;
    responseDeserialize: grpc.deserialize<user_pb.UserResponse>;
}

export const UserServiceRoutesService: IUserServiceRoutesService;

export interface IUserServiceRoutesServer {
    getAllUsers: grpc.handleUnaryCall<user_pb.Empty, user_pb.UserListResponse>;
    getUser: grpc.handleUnaryCall<user_pb.UserReqId, user_pb.UserResponse>;
    deleteUser: grpc.handleUnaryCall<user_pb.UserReqId, user_pb.UserReqId>;
    editUser: grpc.handleUnaryCall<user_pb.UserRequest, user_pb.UserResponse>;
    addUser: grpc.handleUnaryCall<user_pb.UserRequest, user_pb.UserResponse>;
}

export interface IUserServiceRoutesClient {
    getAllUsers(request: user_pb.Empty, callback: (error: grpc.ServiceError | null, response: user_pb.UserListResponse) => void): grpc.ClientUnaryCall;
    getAllUsers(request: user_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserListResponse) => void): grpc.ClientUnaryCall;
    getAllUsers(request: user_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserListResponse) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.UserReqId, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.UserReqId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    getUser(request: user_pb.UserReqId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    deleteUser(request: user_pb.UserReqId, callback: (error: grpc.ServiceError | null, response: user_pb.UserReqId) => void): grpc.ClientUnaryCall;
    deleteUser(request: user_pb.UserReqId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserReqId) => void): grpc.ClientUnaryCall;
    deleteUser(request: user_pb.UserReqId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserReqId) => void): grpc.ClientUnaryCall;
    editUser(request: user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    editUser(request: user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    editUser(request: user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    addUser(request: user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    addUser(request: user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    addUser(request: user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
}

export class UserServiceRoutesClient extends grpc.Client implements IUserServiceRoutesClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getAllUsers(request: user_pb.Empty, callback: (error: grpc.ServiceError | null, response: user_pb.UserListResponse) => void): grpc.ClientUnaryCall;
    public getAllUsers(request: user_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserListResponse) => void): grpc.ClientUnaryCall;
    public getAllUsers(request: user_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserListResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.UserReqId, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.UserReqId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public getUser(request: user_pb.UserReqId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public deleteUser(request: user_pb.UserReqId, callback: (error: grpc.ServiceError | null, response: user_pb.UserReqId) => void): grpc.ClientUnaryCall;
    public deleteUser(request: user_pb.UserReqId, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserReqId) => void): grpc.ClientUnaryCall;
    public deleteUser(request: user_pb.UserReqId, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserReqId) => void): grpc.ClientUnaryCall;
    public editUser(request: user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public editUser(request: user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public editUser(request: user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public addUser(request: user_pb.UserRequest, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public addUser(request: user_pb.UserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
    public addUser(request: user_pb.UserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserResponse) => void): grpc.ClientUnaryCall;
}
