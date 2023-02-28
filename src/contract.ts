import { BigInt, store } from "@graphprotocol/graph-ts"
import {
  ContractCampaignAdded as ContractCampaignAddedEvent,
  ContractCampaignFunded as ContractCampaignFundedEvent,
  ContractCampaignRemoved as ContractCampaignRemovedEvent,
  ContractCampaignShrunk as ContractCampaignShrunkEvent,
  ContractUserAdded as ContractUserAddedEvent
} from "../generated/Contract/Contract"
import {
  ContractCampaignAdded,
  ContractCampaignFunded,
  ContractCampaignRemoved,
  ContractCampaignShrunk,
  ContractUserAdded
} from "../generated/schema"

export function handleCampaignAdded(event: ContractCampaignAddedEvent): void {
  let campaignAdded = ContractCampaignAdded.load(event.params._campaignAddress.toHexString())
  let userAdded = ContractUserAdded.load(event.params._creator.toHexString())

  if(!campaignAdded){
    campaignAdded = new ContractCampaignAdded(event.params._campaignAddress.toHexString())
    campaignAdded.funderCount = BigInt.fromString("0")
    campaignAdded.funders = []
  }
  if(!userAdded){
    userAdded = new ContractUserAdded(event.params._creator.toHexString())
    userAdded.createdCount = BigInt.fromString("0")
    userAdded.backedCount = BigInt.fromString("0")
  }

  campaignAdded.campaignAddress = event.params._campaignAddress
  campaignAdded.creator = event.params._creator

  userAdded.createdCount = userAdded.createdCount!.plus(BigInt.fromString("1"))

  campaignAdded.save()
  userAdded.save()
}

export function handleCampaignFunded(event: ContractCampaignFundedEvent): void {
  let campaignAdded = ContractCampaignAdded.load(event.params._campaignAddress.toHexString())
  let userAdded = ContractUserAdded.load(event.params._funder.toHexString())

  if(!userAdded){
    userAdded = new ContractUserAdded(event.params._funder.toHexString())
    userAdded.createdCount = BigInt.fromString("0")
    userAdded.backedCount = BigInt.fromString("0")
  }

  campaignAdded!.funders!.push(event.params._funder)
  campaignAdded!.funderCount.plus(BigInt.fromString("1"))

  userAdded.backedCount = userAdded.backedCount!.plus(BigInt.fromString("1"))

  campaignAdded!.save()
  userAdded.save()
}

export function handleCampaignRemoved(event: ContractCampaignRemovedEvent): void {
  let id = event.params._campaignAddress.toHexString()
  store.remove("ContractCampaignAdded", id)
}

export function handleCampaignShrunk(event: ContractCampaignShrunkEvent): void {
  let campaignAdded = ContractCampaignAdded.load(event.params._campaignAddress.toHexString())
  let userAdded = ContractUserAdded.load(event.params._withdrawer.toHexString())

  if(!userAdded){
    userAdded = new ContractUserAdded(event.params._withdrawer.toHexString())
    userAdded.createdCount = BigInt.fromString("0")
    userAdded.backedCount = BigInt.fromString("0")
  }

  if(campaignAdded!.funders!.includes(event.params._withdrawer)){
    const index = campaignAdded!.funders!.indexOf(event.params._withdrawer)
    campaignAdded!.funders!.splice(index, 1)
  }
  campaignAdded!.funderCount.minus(BigInt.fromString("1"))

  userAdded.backedCount = userAdded.backedCount!.minus(BigInt.fromString("1"))
  
  campaignAdded!.save()
  userAdded.save()
}

export function handleContractUserAdded(event: ContractUserAddedEvent): void {
  let userAdded = ContractUserAdded.load(event.params._address.toHexString())

  if(!userAdded){
    userAdded = new ContractUserAdded(event.params._address.toHexString())
    userAdded.createdCount = BigInt.fromString("0")
    userAdded.backedCount = BigInt.fromString("0")
  }

  userAdded.address = event.params._address
  userAdded.username = event.params._username
  userAdded.twitter = event.params._twitter
  userAdded.email = event.params._email
  userAdded.bio = event.params._bio
  userAdded.createdAt = event.block.timestamp

  userAdded.save()
}