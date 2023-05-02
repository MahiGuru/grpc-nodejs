// Original file: src/proto/vf.proto

import type { Header as _vf_Header, Header__Output as _vf_Header__Output } from '../vf/Header';
import type { Any as _google_protobuf_Any, Any__Output as _google_protobuf_Any__Output } from '../google/protobuf/Any';

export interface Request {
  'Header'?: (_vf_Header | null);
  'Input'?: (_google_protobuf_Any | null);
}

export interface Request__Output {
  'Header': (_vf_Header__Output | null);
  'Input': (_google_protobuf_Any__Output | null);
}
