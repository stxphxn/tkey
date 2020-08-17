/// <reference types="node" />
import BN from "bn.js";
import { curve, ec as EC } from "elliptic";
import { BNString, EncryptedMessage, IServiceProvider, PubKeyType, ServiceProviderArgs } from "../base/commonTypes";
declare class ServiceProviderBase implements IServiceProvider {
    ec: EC;
    enableLogging: boolean;
    postboxKey: BN;
    constructor({ enableLogging, postboxKey }: ServiceProviderArgs);
    encrypt(msg: Buffer): Promise<EncryptedMessage>;
    decrypt(msg: EncryptedMessage): Promise<Buffer>;
    retrievePubKeyPoint(): curve.base.BasePoint;
    retrievePubKey(type: PubKeyType): Buffer;
    sign(msg: BNString): string;
}
export default ServiceProviderBase;
