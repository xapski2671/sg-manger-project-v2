// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class UserAdded extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UserAdded entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type UserAdded must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("UserAdded", id.toString(), this);
    }
  }

  static load(id: string): UserAdded | null {
    return changetype<UserAdded | null>(store.get("UserAdded", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get username(): string {
    let value = this.get("username");
    return value!.toString();
  }

  set username(value: string) {
    this.set("username", Value.fromString(value));
  }

  get twitter(): string | null {
    let value = this.get("twitter");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set twitter(value: string | null) {
    if (!value) {
      this.unset("twitter");
    } else {
      this.set("twitter", Value.fromString(<string>value));
    }
  }

  get email(): string | null {
    let value = this.get("email");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set email(value: string | null) {
    if (!value) {
      this.unset("email");
    } else {
      this.set("email", Value.fromString(<string>value));
    }
  }

  get bio(): string | null {
    let value = this.get("bio");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set bio(value: string | null) {
    if (!value) {
      this.unset("bio");
    } else {
      this.set("bio", Value.fromString(<string>value));
    }
  }

  get createdCount(): BigInt | null {
    let value = this.get("createdCount");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set createdCount(value: BigInt | null) {
    if (!value) {
      this.unset("createdCount");
    } else {
      this.set("createdCount", Value.fromBigInt(<BigInt>value));
    }
  }

  get backedCount(): BigInt | null {
    let value = this.get("backedCount");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set backedCount(value: BigInt | null) {
    if (!value) {
      this.unset("backedCount");
    } else {
      this.set("backedCount", Value.fromBigInt(<BigInt>value));
    }
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }
}

export class CampaignAdded extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CampaignAdded entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type CampaignAdded must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("CampaignAdded", id.toString(), this);
    }
  }

  static load(id: string): CampaignAdded | null {
    return changetype<CampaignAdded | null>(store.get("CampaignAdded", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get campaignAddress(): Bytes {
    let value = this.get("campaignAddress");
    return value!.toBytes();
  }

  set campaignAddress(value: Bytes) {
    this.set("campaignAddress", Value.fromBytes(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    return value!.toBytes();
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get title(): string {
    let value = this.get("title");
    return value!.toString();
  }

  set title(value: string) {
    this.set("title", Value.fromString(value));
  }

  get description(): string {
    let value = this.get("description");
    return value!.toString();
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }

  get category(): string {
    let value = this.get("category");
    return value!.toString();
  }

  set category(value: string) {
    this.set("category", Value.fromString(value));
  }

  get tags(): Array<string> | null {
    let value = this.get("tags");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set tags(value: Array<string> | null) {
    if (!value) {
      this.unset("tags");
    } else {
      this.set("tags", Value.fromStringArray(<Array<string>>value));
    }
  }

  get goalAmount(): BigInt {
    let value = this.get("goalAmount");
    return value!.toBigInt();
  }

  set goalAmount(value: BigInt) {
    this.set("goalAmount", Value.fromBigInt(value));
  }

  get duration(): BigInt {
    let value = this.get("duration");
    return value!.toBigInt();
  }

  set duration(value: BigInt) {
    this.set("duration", Value.fromBigInt(value));
  }

  get campaignURI(): string {
    let value = this.get("campaignURI");
    return value!.toString();
  }

  set campaignURI(value: string) {
    this.set("campaignURI", Value.fromString(value));
  }

  get funders(): Array<Bytes> | null {
    let value = this.get("funders");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytesArray();
    }
  }

  set funders(value: Array<Bytes> | null) {
    if (!value) {
      this.unset("funders");
    } else {
      this.set("funders", Value.fromBytesArray(<Array<Bytes>>value));
    }
  }

  get funderCount(): BigInt {
    let value = this.get("funderCount");
    return value!.toBigInt();
  }

  set funderCount(value: BigInt) {
    this.set("funderCount", Value.fromBigInt(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }
}

export class CampaignFunded extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CampaignFunded entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type CampaignFunded must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("CampaignFunded", id.toString(), this);
    }
  }

  static load(id: string): CampaignFunded | null {
    return changetype<CampaignFunded | null>(store.get("CampaignFunded", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get funder(): Bytes {
    let value = this.get("funder");
    return value!.toBytes();
  }

  set funder(value: Bytes) {
    this.set("funder", Value.fromBytes(value));
  }

  get campaignAddress(): Bytes {
    let value = this.get("campaignAddress");
    return value!.toBytes();
  }

  set campaignAddress(value: Bytes) {
    this.set("campaignAddress", Value.fromBytes(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }
}

export class CampaignShrunk extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CampaignShrunk entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type CampaignShrunk must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("CampaignShrunk", id.toString(), this);
    }
  }

  static load(id: string): CampaignShrunk | null {
    return changetype<CampaignShrunk | null>(store.get("CampaignShrunk", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get withdrawer(): Bytes {
    let value = this.get("withdrawer");
    return value!.toBytes();
  }

  set withdrawer(value: Bytes) {
    this.set("withdrawer", Value.fromBytes(value));
  }

  get campaignAddress(): Bytes {
    let value = this.get("campaignAddress");
    return value!.toBytes();
  }

  set campaignAddress(value: Bytes) {
    this.set("campaignAddress", Value.fromBytes(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }
}

export class CampaignRemoved extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CampaignRemoved entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type CampaignRemoved must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("CampaignRemoved", id.toString(), this);
    }
  }

  static load(id: string): CampaignRemoved | null {
    return changetype<CampaignRemoved | null>(store.get("CampaignRemoved", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get campaignAddress(): Bytes {
    let value = this.get("campaignAddress");
    return value!.toBytes();
  }

  set campaignAddress(value: Bytes) {
    this.set("campaignAddress", Value.fromBytes(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }
}
