import { Observable } from "rxjs";
import {
  SocketEvent,
  SocketEventType,
  SocketSendReply,
} from "@cova/core/socket";

export interface ISocketClient {
  readonly store: ISocketEventStore;

  connect(): Promise<void>;
  sendData<TData>(data: TData, event?: string): Promise<SocketSendReply>;
  sendBytes(bytes: number[], event?: string): Promise<SocketSendReply>;
  close(): void;
}

export interface ISocketEventStore {
  list(by?: { types?: SocketEventType[] }): Required<SocketEvent>[];
  listen(): Observable<Required<SocketEvent>>;
  add(event: SocketEvent): number;
}

export interface IBinaryStore {
  listen(): Observable<Buffer>;
  add(data: Buffer): void;
  close(): void;
  clear(): void;
}
