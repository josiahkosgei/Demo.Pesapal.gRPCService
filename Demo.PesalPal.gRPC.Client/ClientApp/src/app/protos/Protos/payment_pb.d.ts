// package: Payment
// file: Protos/payment.proto

import * as jspb from "google-protobuf";

export class MakePaymentRequest extends jspb.Message {
  getTrackingid(): string;
  setTrackingid(value: string): void;

  getPaymentmethod(): string;
  setPaymentmethod(value: string): void;

  getPaymentstatus(): string;
  setPaymentstatus(value: string): void;

  getReference(): string;
  setReference(value: string): void;

  getBuyername(): string;
  setBuyername(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getAmount(): string;
  setAmount(value: string): void;

  getPhonenumber(): string;
  setPhonenumber(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MakePaymentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MakePaymentRequest): MakePaymentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MakePaymentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MakePaymentRequest;
  static deserializeBinaryFromReader(message: MakePaymentRequest, reader: jspb.BinaryReader): MakePaymentRequest;
}

export namespace MakePaymentRequest {
  export type AsObject = {
    trackingid: string,
    paymentmethod: string,
    paymentstatus: string,
    reference: string,
    buyername: string,
    email: string,
    amount: string,
    phonenumber: string,
  }
}

export class MakePaymentReply extends jspb.Message {
  getTrackingid(): string;
  setTrackingid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MakePaymentReply.AsObject;
  static toObject(includeInstance: boolean, msg: MakePaymentReply): MakePaymentReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MakePaymentReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MakePaymentReply;
  static deserializeBinaryFromReader(message: MakePaymentReply, reader: jspb.BinaryReader): MakePaymentReply;
}

export namespace MakePaymentReply {
  export type AsObject = {
    trackingid: string,
  }
}

export class GetPaymentDetailsRequest extends jspb.Message {
  getTrackingid(): string;
  setTrackingid(value: string): void;

  getReference(): string;
  setReference(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentDetailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentDetailsRequest): GetPaymentDetailsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPaymentDetailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentDetailsRequest;
  static deserializeBinaryFromReader(message: GetPaymentDetailsRequest, reader: jspb.BinaryReader): GetPaymentDetailsRequest;
}

export namespace GetPaymentDetailsRequest {
  export type AsObject = {
    trackingid: string,
    reference: string,
  }
}

export class GetPaymentDetailsReply extends jspb.Message {
  getTrackingid(): string;
  setTrackingid(value: string): void;

  getPaymentmethod(): string;
  setPaymentmethod(value: string): void;

  getPaymentstatus(): string;
  setPaymentstatus(value: string): void;

  getReference(): string;
  setReference(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPaymentDetailsReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetPaymentDetailsReply): GetPaymentDetailsReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPaymentDetailsReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPaymentDetailsReply;
  static deserializeBinaryFromReader(message: GetPaymentDetailsReply, reader: jspb.BinaryReader): GetPaymentDetailsReply;
}

export namespace GetPaymentDetailsReply {
  export type AsObject = {
    trackingid: string,
    paymentmethod: string,
    paymentstatus: string,
    reference: string,
  }
}

export class LineItem extends jspb.Message {
  getParticulars(): string;
  setParticulars(value: string): void;

  getUniqueid(): string;
  setUniqueid(value: string): void;

  getQuantity(): number;
  setQuantity(value: number): void;

  getUnitcost(): number;
  setUnitcost(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LineItem.AsObject;
  static toObject(includeInstance: boolean, msg: LineItem): LineItem.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LineItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LineItem;
  static deserializeBinaryFromReader(message: LineItem, reader: jspb.BinaryReader): LineItem;
}

export namespace LineItem {
  export type AsObject = {
    particulars: string,
    uniqueid: string,
    quantity: number,
    unitcost: number,
  }
}

export class DirectOrderUrlRequest extends jspb.Message {
  getAmount(): string;
  setAmount(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getType(): string;
  setType(value: string): void;

  getReference(): string;
  setReference(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getFirstname(): string;
  setFirstname(value: string): void;

  getLastname(): string;
  setLastname(value: string): void;

  getPhonenumber(): string;
  setPhonenumber(value: string): void;

  clearLineitemsList(): void;
  getLineitemsList(): Array<LineItem>;
  setLineitemsList(value: Array<LineItem>): void;
  addLineitems(value?: LineItem, index?: number): LineItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DirectOrderUrlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DirectOrderUrlRequest): DirectOrderUrlRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DirectOrderUrlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DirectOrderUrlRequest;
  static deserializeBinaryFromReader(message: DirectOrderUrlRequest, reader: jspb.BinaryReader): DirectOrderUrlRequest;
}

export namespace DirectOrderUrlRequest {
  export type AsObject = {
    amount: string,
    description: string,
    type: string,
    reference: string,
    email: string,
    firstname: string,
    lastname: string,
    phonenumber: string,
    lineitemsList: Array<LineItem.AsObject>,
  }
}

export class DirectOrderUrlReply extends jspb.Message {
  getTrackingid(): string;
  setTrackingid(value: string): void;

  getReference(): string;
  setReference(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DirectOrderUrlReply.AsObject;
  static toObject(includeInstance: boolean, msg: DirectOrderUrlReply): DirectOrderUrlReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DirectOrderUrlReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DirectOrderUrlReply;
  static deserializeBinaryFromReader(message: DirectOrderUrlReply, reader: jspb.BinaryReader): DirectOrderUrlReply;
}

export namespace DirectOrderUrlReply {
  export type AsObject = {
    trackingid: string,
    reference: string,
  }
}

