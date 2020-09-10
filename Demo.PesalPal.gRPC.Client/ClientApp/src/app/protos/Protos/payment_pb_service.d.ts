// package: Payment
// file: Protos/payment.proto

import * as Protos_payment_pb from "../Protos/payment_pb";
import {grpc} from "@improbable-eng/grpc-web";

type PaymentServiceMakePayment = {
  readonly methodName: string;
  readonly service: typeof PaymentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof Protos_payment_pb.MakePaymentRequest;
  readonly responseType: typeof Protos_payment_pb.MakePaymentReply;
};

type PaymentServiceGetPaymentDetails = {
  readonly methodName: string;
  readonly service: typeof PaymentService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof Protos_payment_pb.GetPaymentDetailsRequest;
  readonly responseType: typeof Protos_payment_pb.GetPaymentDetailsReply;
};

export class PaymentService {
  static readonly serviceName: string;
  static readonly MakePayment: PaymentServiceMakePayment;
  static readonly GetPaymentDetails: PaymentServiceGetPaymentDetails;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class PaymentServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  makePayment(
    requestMessage: Protos_payment_pb.MakePaymentRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: Protos_payment_pb.MakePaymentReply|null) => void
  ): UnaryResponse;
  makePayment(
    requestMessage: Protos_payment_pb.MakePaymentRequest,
    callback: (error: ServiceError|null, responseMessage: Protos_payment_pb.MakePaymentReply|null) => void
  ): UnaryResponse;
  getPaymentDetails(
    requestMessage: Protos_payment_pb.GetPaymentDetailsRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: Protos_payment_pb.GetPaymentDetailsReply|null) => void
  ): UnaryResponse;
  getPaymentDetails(
    requestMessage: Protos_payment_pb.GetPaymentDetailsRequest,
    callback: (error: ServiceError|null, responseMessage: Protos_payment_pb.GetPaymentDetailsReply|null) => void
  ): UnaryResponse;
}

