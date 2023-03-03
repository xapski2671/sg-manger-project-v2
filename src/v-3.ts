import { BigInt, store } from "@graphprotocol/graph-ts"
import {
  v3CampaignAdded as v3CampaignAddedEvent,
  v3CampaignFunded as v3CampaignFundedEvent,
  v3CampaignRemoved as v3CampaignRemovedEvent,
  v3CampaignShrunk as v3CampaignShrunkEvent,
  v3UserAdded as v3UserAddedEvent,
  UserHomeAddrAdded as UserHomeAddrAddedEvent
} from "../generated/v3/v3"
import {
  v3CampaignAdded,
  v3CampaignFunded,
  v3CampaignRemoved,
  v3CampaignShrunk,
  v3UserAdded,
  UserHomeAddrAdded
} from "../generated/schema"

export function handlev3CampaignAdded(event: v3CampaignAddedEvent): void {
  let campaignAdded = v3CampaignAdded.load(event.params._campaignAddress.toHexString())
  let userAdded = v3UserAdded.load(event.params._creator.toHexString())

  if(!campaignAdded){
    campaignAdded = new v3CampaignAdded(event.params._campaignAddress.toHexString())
    campaignAdded.funderCount = BigInt.fromString("0")
    campaignAdded.funders = []
  }
  if(!userAdded){
    userAdded = new v3UserAdded(event.params._creator.toHexString())
    userAdded.createdCount = BigInt.fromString("0")
    userAdded.backedCount = BigInt.fromString("0")
  }

  campaignAdded.campaignAddress = event.params._campaignAddress
  campaignAdded.creator = event.params._creator

  userAdded.created!.push(event.params._campaignAddress)
  userAdded.createdCount = userAdded.createdCount!.plus(BigInt.fromString("1"))

  campaignAdded.save()
  userAdded.save()
}

export function handlev3CampaignFunded(event: v3CampaignFundedEvent): void {
  let campaignAdded = v3CampaignAdded.load(event.params._campaignAddress.toHexString())
  let userAdded = v3UserAdded.load(event.params._funder.toHexString())

  if(!userAdded){
    userAdded = new v3UserAdded(event.params._funder.toHexString())
    userAdded.createdCount = BigInt.fromString("0")
    userAdded.backedCount = BigInt.fromString("0")
  }

  campaignAdded!.funders!.push(event.params._funder)
  campaignAdded!.funderCount.plus(BigInt.fromString("1"))

  userAdded.backed!.push(event.params._campaignAddress)
  userAdded.backedCount = userAdded.backedCount!.plus(BigInt.fromString("1"))

  campaignAdded!.save()
  userAdded.save()
}

export function handlev3CampaignRemoved(event: v3CampaignRemovedEvent): void {
  let id = event.params._campaignAddress.toHexString()
  store.remove("v3CampaignAdded", id)
}

export function handlev3CampaignShrunk(event: v3CampaignShrunkEvent): void {
  let campaignAdded = v3CampaignAdded.load(event.params._campaignAddress.toHexString())
  let userAdded = v3UserAdded.load(event.params._withdrawer.toHexString())

  if(!userAdded){
    userAdded = new v3UserAdded(event.params._withdrawer.toHexString())
    userAdded.createdCount = BigInt.fromString("0")
    userAdded.backedCount = BigInt.fromString("0")
  }

  if(campaignAdded!.funders!.includes(event.params._withdrawer)){
    const index = campaignAdded!.funders!.indexOf(event.params._withdrawer)
    campaignAdded!.funders!.splice(index, 1)
  }
  campaignAdded!.funderCount.minus(BigInt.fromString("1"))

  if(userAdded.backed!.includes(event.params._campaignAddress)){
    const index = userAdded.backed!.indexOf(event.params._campaignAddress)
    userAdded.backed!.splice(index, 1)
  }
  userAdded.backedCount = userAdded.backedCount!.minus(BigInt.fromString("1"))
  
  campaignAdded!.save()
  userAdded.save()
}

export function handlev3UserAdded(event: v3UserAddedEvent): void {
  let userAdded = v3UserAdded.load(event.params._address.toHexString())

  if(!userAdded){
    userAdded = new v3UserAdded(event.params._address.toHexString())
    userAdded.createdCount = BigInt.fromString("0")
    userAdded.backedCount = BigInt.fromString("0")
  }

  userAdded.address = event.params._address
  userAdded.username = event.params._username
  userAdded.twitter = event.params._twitter
  userAdded.email = event.params._email
  userAdded.location = event.params._location
  userAdded.bio = event.params._bio
  userAdded.createdAt = event.block.timestamp

  userAdded.save()
}

export function handleUserHomeAddrAdded(event: UserHomeAddrAddedEvent): void {
  let userAdded = v3UserAdded.load(event.params._userAddress.toHexString())
  if(!userAdded){
    userAdded = new v3UserAdded(event.params._userAddress.toHexString())
    userAdded.createdCount = BigInt.fromString("0")
    userAdded.backedCount = BigInt.fromString("0")
  }

  userAdded.homeAddr = event.params._homeAddr
  userAdded.save()
}
