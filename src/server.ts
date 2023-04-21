import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./proto/generated/user";
import { UserResponse } from "./proto/generated/userPackage/UserResponse";
import { UserRequest } from "./proto/generated/userPackage/UserRequest";
import { error } from "console";
import { UserReqId } from "./proto/generated/userPackage/UserReqId";
import { UserListResponse } from "./proto/generated/userPackage/UserListResponse";

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

const usersData = [
    {
        id: 1,
        name: "Mahepal",
        location: "Hyderbad",
        username: "mahepal_g",
        password: "mahepal123$",
        email: "mahepal.g@gmail.com",
        phone: "9441016550",
    },
    {
        id: 2,
        name: "Srinivas",
        location: "Begalore",
        username: "srinivas_k",
        password: "srinivas123$",
        email: "srinivas.k@gmail.com",
        phone: "7341016550",
    },
    {
        id: 3,
        name: "Ranjith",
        location: "Delhi",
        username: "ranjith_m",
        password: "ranjith123$",
        email: "ranjith.m@gmail.com",
        phone: "8765422622",
    },
    {
        id: 4,
        name: "Lav Patel",
        location: "Gujarat",
        username: "lav_p",
        password: "lav123$",
        email: "lavpatel.p@gmail.com",
        phone: "9876633333",
    }
];

class gRPC extends grpc.Server {
    constructor() {
        super();
        this.addService(userPackage.UserServiceRoutes.service, {
            getAllUsers: (call: any, callback: grpc.sendUnaryData<UserListResponse>) => {
                callback(null, {users: usersData});
                console.log("Get ALl users data ", usersData);
            },
            getUser: this.getClient,
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

    protected getClient(
        call: grpc.ServerUnaryCall<UserRequest, UserResponse>,
        callback: grpc.sendUnaryData<UserResponse>
    ) {
        const { id } =  call.request;
        console.log("call.request >>>> ", call.request);
        const user = usersData?.find((user) => user.id == id);
        console.log("call.Response >>>> ", user);

        callback(null, user);
    }
}

function main() {
    const server = new gRPC();
    server.bindAsync(
        "0.0.0.0:50051",
        grpc.ServerCredentials.createInsecure(),
        (err) => {
            console.log("ERROR == ", err);
            if (err) {
                console.log("error server", err, error);
            } else {
                console.log("Starting gRPC server on port 0.0.0.0:50051");
                server.start();
            }
        }
    );
}

main();
