// Original file: src/proto/vf.proto


export interface dateTime {
  'Value'?: (Buffer | Uint8Array | string);
  'Year'?: (number);
  'Month'?: (number);
  'Day'?: (number);
  'Hour'?: (number);
  'Minute'?: (number);
  'Second'?: (number);
  'Millisecond'?: (number);
}

export interface dateTime__Output {
  'Value': (Buffer);
  'Year': (number);
  'Month': (number);
  'Day': (number);
  'Hour': (number);
  'Minute': (number);
  'Second': (number);
  'Millisecond': (number);
}
