// Original file: src/proto/vf.dataset.proto


// Original file: src/proto/vf.dataset.proto

export const _vf_DataSetRequest_ActionType = {
  get: 'get',
  add: 'add',
  update: 'update',
} as const;

export type _vf_DataSetRequest_ActionType =
  | 'get'
  | 0
  | 'add'
  | 1
  | 'update'
  | 2

export type _vf_DataSetRequest_ActionType__Output = typeof _vf_DataSetRequest_ActionType[keyof typeof _vf_DataSetRequest_ActionType]

export interface DataSetRequest {
  'Action'?: (_vf_DataSetRequest_ActionType);
  'Code'?: (string);
}

export interface DataSetRequest__Output {
  'Action': (_vf_DataSetRequest_ActionType__Output);
  'Code': (string);
}
