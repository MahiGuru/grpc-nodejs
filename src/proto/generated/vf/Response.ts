// Original file: src/proto/vf.proto

import type { Header as _vf_Header, Header__Output as _vf_Header__Output } from '../vf/Header';
import type { Any as _google_protobuf_Any, Any__Output as _google_protobuf_Any__Output } from '../google/protobuf/Any';
import type { Exception as _vf_Exception, Exception__Output as _vf_Exception__Output } from '../vf/Exception';

export interface Response {
  'Header'?: (_vf_Header | null);
  'Output'?: (_google_protobuf_Any | null);
  'Error'?: (_vf_Exception | null);
}

export interface Response__Output {
  'Header': (_vf_Header__Output | null);
  'Output': (_google_protobuf_Any__Output | null);
  'Error': (_vf_Exception__Output | null);
}
