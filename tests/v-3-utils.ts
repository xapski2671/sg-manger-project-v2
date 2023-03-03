import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  v3CampaignAdded,
  v3CampaignFunded,
  v3CampaignRemoved,
  v3CampaignShrunk,
  v3UserAdded,
  UserHomeAddrAdded
} from "../generated/v3/v3"

export function createv3CampaignAddedEvent(
  _campaignAddress: Address,
  _creator: Address
): v3CampaignAdded {
  let v3CampaignAddedEvent = changetype<v3CampaignAdded>(newMockEvent())

  v3CampaignAddedEvent.parameters = new Array()

  v3CampaignAddedEvent.parameters.push(
    new ethereum.EventParam(
      "_campaignAddress",
      ethereum.Value.fromAddress(_campaignAddress)
    )
  )
  v3CampaignAddedEvent.parameters.push(
    new ethereum.EventParam("_creator", ethereum.Value.fromAddress(_creator))
  )

  return v3CampaignAddedEvent
}

export function createv3CampaignFundedEvent(
  _funder: Address,
  _campaignAddress: Address
): v3CampaignFunded {
  let v3CampaignFundedEvent = changetype<v3CampaignFunded>(newMockEvent())

  v3CampaignFundedEvent.parameters = new Array()

  v3CampaignFundedEvent.parameters.push(
    new ethereum.EventParam("_funder", ethereum.Value.fromAddress(_funder))
  )
  v3CampaignFundedEvent.parameters.push(
    new ethereum.EventParam(
      "_campaignAddress",
      ethereum.Value.fromAddress(_campaignAddress)
    )
  )

  return v3CampaignFundedEvent
}

export function createv3CampaignRemovedEvent(
  _campaignAddress: Address
): v3CampaignRemoved {
  let v3CampaignRemovedEvent = changetype<v3CampaignRemoved>(newMockEvent())

  v3CampaignRemovedEvent.parameters = new Array()

  v3CampaignRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "_campaignAddress",
      ethereum.Value.fromAddress(_campaignAddress)
    )
  )

  return v3CampaignRemovedEvent
}

export function createv3CampaignShrunkEvent(
  _withdrawer: Address,
  _campaignAddress: Address
): v3CampaignShrunk {
  let v3CampaignShrunkEvent = changetype<v3CampaignShrunk>(newMockEvent())

  v3CampaignShrunkEvent.parameters = new Array()

  v3CampaignShrunkEvent.parameters.push(
    new ethereum.EventParam(
      "_withdrawer",
      ethereum.Value.fromAddress(_withdrawer)
    )
  )
  v3CampaignShrunkEvent.parameters.push(
    new ethereum.EventParam(
      "_campaignAddress",
      ethereum.Value.fromAddress(_campaignAddress)
    )
  )

  return v3CampaignShrunkEvent
}

export function createv3UserAddedEvent(
  _address: Address,
  _username: string,
  _twitter: string,
  _email: string,
  _location: string,
  _bio: string
): v3UserAdded {
  let v3UserAddedEvent = changetype<v3UserAdded>(newMockEvent())

  v3UserAddedEvent.parameters = new Array()

  v3UserAddedEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )
  v3UserAddedEvent.parameters.push(
    new ethereum.EventParam("_username", ethereum.Value.fromString(_username))
  )
  v3UserAddedEvent.parameters.push(
    new ethereum.EventParam("_twitter", ethereum.Value.fromString(_twitter))
  )
  v3UserAddedEvent.parameters.push(
    new ethereum.EventParam("_email", ethereum.Value.fromString(_email))
  )
  v3UserAddedEvent.parameters.push(
    new ethereum.EventParam("_location", ethereum.Value.fromString(_location))
  )
  v3UserAddedEvent.parameters.push(
    new ethereum.EventParam("_bio", ethereum.Value.fromString(_bio))
  )

  return v3UserAddedEvent
}

export function createUserHomeAddrAddedEvent(
  _userAddress: Address,
  _homeAddr: string
): UserHomeAddrAdded {
  let userHomeAddrAddedEvent = changetype<UserHomeAddrAdded>(newMockEvent())

  userHomeAddrAddedEvent.parameters = new Array()

  userHomeAddrAddedEvent.parameters.push(
    new ethereum.EventParam(
      "_userAddress",
      ethereum.Value.fromAddress(_userAddress)
    )
  )
  userHomeAddrAddedEvent.parameters.push(
    new ethereum.EventParam("_homeAddr", ethereum.Value.fromString(_homeAddr))
  )

  return userHomeAddrAddedEvent
}
