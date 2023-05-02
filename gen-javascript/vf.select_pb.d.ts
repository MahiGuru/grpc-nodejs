// package: vf
// file: vf.select.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";
import * as vf_pb from "./vf_pb";
import * as vf_table_pb from "./vf.table_pb";

export class TableRequest extends jspb.Message { 
    getDatasetname(): string;
    setDatasetname(value: string): TableRequest;
    clearColumnsList(): void;
    getColumnsList(): Array<string>;
    setColumnsList(value: Array<string>): TableRequest;
    addColumns(value: string, index?: number): string;

    hasAsofstartdate(): boolean;
    clearAsofstartdate(): void;
    getAsofstartdate(): vf_pb.dateTime | undefined;
    setAsofstartdate(value?: vf_pb.dateTime): TableRequest;

    hasAsofenddate(): boolean;
    clearAsofenddate(): void;
    getAsofenddate(): vf_pb.dateTime | undefined;
    setAsofenddate(value?: vf_pb.dateTime): TableRequest;

    getFiltersMap(): jspb.Map<string, string>;
    clearFiltersMap(): void;

    getDatefiltersMap(): jspb.Map<string, vf_pb.dateTime>;
    clearDatefiltersMap(): void;
    getPagesize(): number;
    setPagesize(value: number): TableRequest;
    getPageno(): number;
    setPageno(value: number): TableRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TableRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TableRequest): TableRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TableRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TableRequest;
    static deserializeBinaryFromReader(message: TableRequest, reader: jspb.BinaryReader): TableRequest;
}

export namespace TableRequest {
    export type AsObject = {
        datasetname: string,
        columnsList: Array<string>,
        asofstartdate?: vf_pb.dateTime.AsObject,
        asofenddate?: vf_pb.dateTime.AsObject,

        filtersMap: Array<[string, string]>,

        datefiltersMap: Array<[string, vf_pb.dateTime.AsObject]>,
        pagesize: number,
        pageno: number,
    }
}

export class TableResponse extends jspb.Message { 
    getTable(): Uint8Array | string;
    getTable_asU8(): Uint8Array;
    getTable_asB64(): string;
    setTable(value: Uint8Array | string): TableResponse;

    hasTable2(): boolean;
    clearTable2(): void;
    getTable2(): vf_table_pb.Table | undefined;
    setTable2(value?: vf_table_pb.Table): TableResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TableResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TableResponse): TableResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TableResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TableResponse;
    static deserializeBinaryFromReader(message: TableResponse, reader: jspb.BinaryReader): TableResponse;
}

export namespace TableResponse {
    export type AsObject = {
        table: Uint8Array | string,
        table2?: vf_table_pb.Table.AsObject,
    }
}

export class FilterValues extends jspb.Message { 
    clearValuesList(): void;
    getValuesList(): Array<FilterValue>;
    setValuesList(value: Array<FilterValue>): FilterValues;
    addValues(value?: FilterValue, index?: number): FilterValue;
    getNot(): boolean;
    setNot(value: boolean): FilterValues;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FilterValues.AsObject;
    static toObject(includeInstance: boolean, msg: FilterValues): FilterValues.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FilterValues, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FilterValues;
    static deserializeBinaryFromReader(message: FilterValues, reader: jspb.BinaryReader): FilterValues;
}

export namespace FilterValues {
    export type AsObject = {
        valuesList: Array<FilterValue.AsObject>,
        not: boolean,
    }
}

export class FilterValue extends jspb.Message { 

    hasString(): boolean;
    clearString(): void;
    getString(): FilterStringValue | undefined;
    setString(value?: FilterStringValue): FilterValue;

    hasNum(): boolean;
    clearNum(): void;
    getNum(): FilterNumValue | undefined;
    setNum(value?: FilterNumValue): FilterValue;

    hasNumrange(): boolean;
    clearNumrange(): void;
    getNumrange(): FilterNumRangeValue | undefined;
    setNumrange(value?: FilterNumRangeValue): FilterValue;

    hasBool(): boolean;
    clearBool(): void;
    getBool(): FilterBoolValue | undefined;
    setBool(value?: FilterBoolValue): FilterValue;

    getFilterCase(): FilterValue.FilterCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FilterValue.AsObject;
    static toObject(includeInstance: boolean, msg: FilterValue): FilterValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FilterValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FilterValue;
    static deserializeBinaryFromReader(message: FilterValue, reader: jspb.BinaryReader): FilterValue;
}

export namespace FilterValue {
    export type AsObject = {
        string?: FilterStringValue.AsObject,
        num?: FilterNumValue.AsObject,
        numrange?: FilterNumRangeValue.AsObject,
        bool?: FilterBoolValue.AsObject,
    }

    export enum FilterCase {
        FILTER_NOT_SET = 0,
        STRING = 1,
        NUM = 2,
        NUMRANGE = 3,
        BOOL = 4,
    }

}

export class FilterStringValue extends jspb.Message { 
    getOperator(): FilterStringValue.Operators;
    setOperator(value: FilterStringValue.Operators): FilterStringValue;
    getValue(): string;
    setValue(value: string): FilterStringValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FilterStringValue.AsObject;
    static toObject(includeInstance: boolean, msg: FilterStringValue): FilterStringValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FilterStringValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FilterStringValue;
    static deserializeBinaryFromReader(message: FilterStringValue, reader: jspb.BinaryReader): FilterStringValue;
}

export namespace FilterStringValue {
    export type AsObject = {
        operator: FilterStringValue.Operators,
        value: string,
    }

    export enum Operators {
    EQUAL = 0,
    STARTSWITH = 12,
    ENDSWITH = 13,
    CONTAINS = 14,
    }

}

export class FilterBoolValue extends jspb.Message { 
    getValue(): boolean;
    setValue(value: boolean): FilterBoolValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FilterBoolValue.AsObject;
    static toObject(includeInstance: boolean, msg: FilterBoolValue): FilterBoolValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FilterBoolValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FilterBoolValue;
    static deserializeBinaryFromReader(message: FilterBoolValue, reader: jspb.BinaryReader): FilterBoolValue;
}

export namespace FilterBoolValue {
    export type AsObject = {
        value: boolean,
    }
}

export class FilterNumValue extends jspb.Message { 
    getOperator(): FilterNumValue.Operators;
    setOperator(value: FilterNumValue.Operators): FilterNumValue;

    hasInt32(): boolean;
    clearInt32(): void;
    getInt32(): number;
    setInt32(value: number): FilterNumValue;

    hasDouble(): boolean;
    clearDouble(): void;
    getDouble(): number;
    setDouble(value: number): FilterNumValue;

    hasFloat(): boolean;
    clearFloat(): void;
    getFloat(): number;
    setFloat(value: number): FilterNumValue;

    hasInt64(): boolean;
    clearInt64(): void;
    getInt64(): number;
    setInt64(value: number): FilterNumValue;

    hasDatetime(): boolean;
    clearDatetime(): void;
    getDatetime(): number;
    setDatetime(value: number): FilterNumValue;

    getValueCase(): FilterNumValue.ValueCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FilterNumValue.AsObject;
    static toObject(includeInstance: boolean, msg: FilterNumValue): FilterNumValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FilterNumValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FilterNumValue;
    static deserializeBinaryFromReader(message: FilterNumValue, reader: jspb.BinaryReader): FilterNumValue;
}

export namespace FilterNumValue {
    export type AsObject = {
        operator: FilterNumValue.Operators,
        int32: number,
        pb_double: number,
        pb_float: number,
        int64: number,
        datetime: number,
    }

    export enum Operators {
    EQUAL = 0,
    GREATER = 22,
    GREATEREQUAL = 23,
    LESSER = 34,
    LESSEREQUAL = 35,
    }


    export enum ValueCase {
        VALUE_NOT_SET = 0,
        INT32 = 2,
        DOUBLE = 3,
        FLOAT = 4,
        INT64 = 5,
        DATETIME = 6,
    }

}

export class FilterNumRangeValue extends jspb.Message { 

    hasMinvalue(): boolean;
    clearMinvalue(): void;
    getMinvalue(): FilterNumMinValue | undefined;
    setMinvalue(value?: FilterNumMinValue): FilterNumRangeValue;

    hasMaxvalue(): boolean;
    clearMaxvalue(): void;
    getMaxvalue(): FilterNumMaxValue | undefined;
    setMaxvalue(value?: FilterNumMaxValue): FilterNumRangeValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FilterNumRangeValue.AsObject;
    static toObject(includeInstance: boolean, msg: FilterNumRangeValue): FilterNumRangeValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FilterNumRangeValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FilterNumRangeValue;
    static deserializeBinaryFromReader(message: FilterNumRangeValue, reader: jspb.BinaryReader): FilterNumRangeValue;
}

export namespace FilterNumRangeValue {
    export type AsObject = {
        minvalue?: FilterNumMinValue.AsObject,
        maxvalue?: FilterNumMaxValue.AsObject,
    }
}

export class FilterNumMinValue extends jspb.Message { 
    getOperator(): FilterNumMinValue.Operators;
    setOperator(value: FilterNumMinValue.Operators): FilterNumMinValue;

    hasInt32(): boolean;
    clearInt32(): void;
    getInt32(): number;
    setInt32(value: number): FilterNumMinValue;

    hasDouble(): boolean;
    clearDouble(): void;
    getDouble(): number;
    setDouble(value: number): FilterNumMinValue;

    hasFloat(): boolean;
    clearFloat(): void;
    getFloat(): number;
    setFloat(value: number): FilterNumMinValue;

    hasInt64(): boolean;
    clearInt64(): void;
    getInt64(): number;
    setInt64(value: number): FilterNumMinValue;

    hasDatetime(): boolean;
    clearDatetime(): void;
    getDatetime(): number;
    setDatetime(value: number): FilterNumMinValue;

    getValueCase(): FilterNumMinValue.ValueCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FilterNumMinValue.AsObject;
    static toObject(includeInstance: boolean, msg: FilterNumMinValue): FilterNumMinValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FilterNumMinValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FilterNumMinValue;
    static deserializeBinaryFromReader(message: FilterNumMinValue, reader: jspb.BinaryReader): FilterNumMinValue;
}

export namespace FilterNumMinValue {
    export type AsObject = {
        operator: FilterNumMinValue.Operators,
        int32: number,
        pb_double: number,
        pb_float: number,
        int64: number,
        datetime: number,
    }

    export enum Operators {
    INVALID = 0,
    GREATER = 22,
    GREATEREQUAL = 23,
    }


    export enum ValueCase {
        VALUE_NOT_SET = 0,
        INT32 = 2,
        DOUBLE = 3,
        FLOAT = 4,
        INT64 = 5,
        DATETIME = 6,
    }

}

export class FilterNumMaxValue extends jspb.Message { 
    getOperator(): FilterNumMaxValue.Operators;
    setOperator(value: FilterNumMaxValue.Operators): FilterNumMaxValue;

    hasInt32(): boolean;
    clearInt32(): void;
    getInt32(): number;
    setInt32(value: number): FilterNumMaxValue;

    hasDouble(): boolean;
    clearDouble(): void;
    getDouble(): number;
    setDouble(value: number): FilterNumMaxValue;

    hasFloat(): boolean;
    clearFloat(): void;
    getFloat(): number;
    setFloat(value: number): FilterNumMaxValue;

    hasInt64(): boolean;
    clearInt64(): void;
    getInt64(): number;
    setInt64(value: number): FilterNumMaxValue;

    hasDatetime(): boolean;
    clearDatetime(): void;
    getDatetime(): number;
    setDatetime(value: number): FilterNumMaxValue;

    getValueCase(): FilterNumMaxValue.ValueCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FilterNumMaxValue.AsObject;
    static toObject(includeInstance: boolean, msg: FilterNumMaxValue): FilterNumMaxValue.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FilterNumMaxValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FilterNumMaxValue;
    static deserializeBinaryFromReader(message: FilterNumMaxValue, reader: jspb.BinaryReader): FilterNumMaxValue;
}

export namespace FilterNumMaxValue {
    export type AsObject = {
        operator: FilterNumMaxValue.Operators,
        int32: number,
        pb_double: number,
        pb_float: number,
        int64: number,
        datetime: number,
    }

    export enum Operators {
    INVALID = 0,
    LESSER = 34,
    LESSEREQUAL = 35,
    }


    export enum ValueCase {
        VALUE_NOT_SET = 0,
        INT32 = 2,
        DOUBLE = 3,
        FLOAT = 4,
        INT64 = 5,
        DATETIME = 6,
    }

}

export class SelectRequest extends jspb.Message { 
    getDatasetname(): string;
    setDatasetname(value: string): SelectRequest;
    clearColumnsList(): void;
    getColumnsList(): Array<string>;
    setColumnsList(value: Array<string>): SelectRequest;
    addColumns(value: string, index?: number): string;

    getFiltersMap(): jspb.Map<string, FilterValues>;
    clearFiltersMap(): void;
    clearGroupbyList(): void;
    getGroupbyList(): Array<GroupField>;
    setGroupbyList(value: Array<GroupField>): SelectRequest;
    addGroupby(value?: GroupField, index?: number): GroupField;
    clearOrderbyList(): void;
    getOrderbyList(): Array<SortField>;
    setOrderbyList(value: Array<SortField>): SelectRequest;
    addOrderby(value?: SortField, index?: number): SortField;
    getPagesize(): number;
    setPagesize(value: number): SelectRequest;
    getPageno(): number;
    setPageno(value: number): SelectRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SelectRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SelectRequest): SelectRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SelectRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SelectRequest;
    static deserializeBinaryFromReader(message: SelectRequest, reader: jspb.BinaryReader): SelectRequest;
}

export namespace SelectRequest {
    export type AsObject = {
        datasetname: string,
        columnsList: Array<string>,

        filtersMap: Array<[string, FilterValues.AsObject]>,
        groupbyList: Array<GroupField.AsObject>,
        orderbyList: Array<SortField.AsObject>,
        pagesize: number,
        pageno: number,
    }
}

export class SelectResponse extends jspb.Message { 

    hasResult(): boolean;
    clearResult(): void;
    getResult(): vf_table_pb.Table | undefined;
    setResult(value?: vf_table_pb.Table): SelectResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SelectResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SelectResponse): SelectResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SelectResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SelectResponse;
    static deserializeBinaryFromReader(message: SelectResponse, reader: jspb.BinaryReader): SelectResponse;
}

export namespace SelectResponse {
    export type AsObject = {
        result?: vf_table_pb.Table.AsObject,
    }
}

export class SortField extends jspb.Message { 
    getName(): string;
    setName(value: string): SortField;
    getOrder(): SortField.Sort;
    setOrder(value: SortField.Sort): SortField;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SortField.AsObject;
    static toObject(includeInstance: boolean, msg: SortField): SortField.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SortField, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SortField;
    static deserializeBinaryFromReader(message: SortField, reader: jspb.BinaryReader): SortField;
}

export namespace SortField {
    export type AsObject = {
        name: string,
        order: SortField.Sort,
    }

    export enum Sort {
    ASCENDING = 0,
    DESCENDING = 10,
    }

}

export class GroupField extends jspb.Message { 
    getName(): string;
    setName(value: string): GroupField;
    getAlias(): string;
    setAlias(value: string): GroupField;
    getAggr(): GroupField.Group;
    setAggr(value: GroupField.Group): GroupField;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GroupField.AsObject;
    static toObject(includeInstance: boolean, msg: GroupField): GroupField.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GroupField, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GroupField;
    static deserializeBinaryFromReader(message: GroupField, reader: jspb.BinaryReader): GroupField;
}

export namespace GroupField {
    export type AsObject = {
        name: string,
        alias: string,
        aggr: GroupField.Group,
    }

    export enum Group {
    NONE = 0,
    AVG = 5,
    COUNT = 10,
    COUNTDISTINCT = 11,
    FIRST = 15,
    LAST = 20,
    MAX = 25,
    MEDIAN = 30,
    MIN = 35,
    STDDEV = 40,
    SUM = 45,
    }

}
