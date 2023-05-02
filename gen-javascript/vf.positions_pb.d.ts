// package: vf.positions
// file: vf.positions.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as vf_pb from "./vf_pb";

export class PositionsRequest extends jspb.Message { 

    hasAsofdate(): boolean;
    clearAsofdate(): void;
    getAsofdate(): vf_pb.dateTime | undefined;
    setAsofdate(value?: vf_pb.dateTime): PositionsRequest;
    getVertinvcode(): string;
    setVertinvcode(value: string): PositionsRequest;
    getPodcode(): string;
    setPodcode(value: string): PositionsRequest;
    getFundcode(): string;
    setFundcode(value: string): PositionsRequest;
    getStrategycode(): string;
    setStrategycode(value: string): PositionsRequest;
    getCounterpartycode(): string;
    setCounterpartycode(value: string): PositionsRequest;
    getLongshort(): string;
    setLongshort(value: string): PositionsRequest;
    getAccount(): string;
    setAccount(value: string): PositionsRequest;
    getSubaccount(): string;
    setSubaccount(value: string): PositionsRequest;
    getIsactive(): boolean;
    setIsactive(value: boolean): PositionsRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PositionsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PositionsRequest): PositionsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PositionsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PositionsRequest;
    static deserializeBinaryFromReader(message: PositionsRequest, reader: jspb.BinaryReader): PositionsRequest;
}

export namespace PositionsRequest {
    export type AsObject = {
        asofdate?: vf_pb.dateTime.AsObject,
        vertinvcode: string,
        podcode: string,
        fundcode: string,
        strategycode: string,
        counterpartycode: string,
        longshort: string,
        account: string,
        subaccount: string,
        isactive: boolean,
    }
}
