import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./proto/generated/user";
import { UserResponse } from "./proto/generated/userPackage/UserResponse";
import { UserRequest } from "./proto/generated/userPackage/UserRequest";
import { UserReqId } from "./proto/generated/userPackage/UserReqId";
import { UserListResponse } from "./proto/generated/userPackage/UserListResponse";
import * as usersData from './usersdata.json';

const PROTO_PATH = "./dist/proto/user.proto";

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    defaults: true,
    oneofs: true,
});
const protoDescriptor = grpc.loadPackageDefinition(
    packageDefinition
) as unknown as ProtoGrpcType;

const userPackage = protoDescriptor.userPackage; 
const users: any = usersData;
const userData = users.default;
class gRPC extends grpc.Server {
    constructor() {
        super();
        this.addService(userPackage.UserServiceRoutes.service, {
            getAllUsers: (call: any, callback: grpc.sendUnaryData<UserListResponse>) => {
                callback(null, {users: userData});
                console.log("getAllUsers data === ", userData);
            },
            getUser: (
                call: grpc.ServerUnaryCall<UserRequest, UserResponse>,
                callback: grpc.sendUnaryData<UserResponse>
            ) => {
                const { id } =  call.request;
                console.log("call.request >>>> ", call.request);
                const user = userData?.find((user: any) => user.id == id);
                console.log("call.Response >>>> ", user);
        
                callback(null, user);
            },
            deleteUser: (
                call: grpc.ServerUnaryCall<UserReqId, UserReqId>, 
                callback: grpc.sendUnaryData<UserReqId>) => {
                    callback(null, call.request)
            },
            editUser: (
                call: grpc.ServerUnaryCall<UserReqId, UserReqId>, 
                callback: grpc.sendUnaryData<UserReqId>) => {
                    callback(null, call.request)
            },
            addUser: (
                call: grpc.ServerUnaryCall<UserReqId, UserReqId>, 
                callback: grpc.sendUnaryData<UserReqId>) => {
                    callback(null, call.request)
            },
        });
    } 
}

function main() {
    const server = new gRPC();
    server.bindAsync(
        "0.0.0.0:50051",
        grpc.ServerCredentials.createInsecure(),
        (err) => {
            if (err) {
                console.log("error server", err);
            } else {
                console.log("Starting gRPC server on port 0.0.0.0:50051");
                server.start();
            }
        }
    );
}

main();
