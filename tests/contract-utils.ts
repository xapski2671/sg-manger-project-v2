import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  ContractCampaignAdded,
  ContractCampaignFunded,
  ContractCampaignRemoved,
  ContractCampaignShrunk,
  ContractUserAdded
} from "../generated/Contract/Contract"

export function createContractCampaignAddedEvent(
  _campaignAddress: Address,
  _creator: Address
): ContractCampaignAdded {
  let contractCampaignAddedEvent = changetype<ContractCampaignAdded>(
    newMockEvent()
  )

  contractCampaignAddedEvent.parameters = new Array()

  contractCampaignAddedEvent.parameters.push(
    new ethereum.EventParam(
      "_campaignAddress",
      ethereum.Value.fromAddress(_campaignAddress)
    )
  )
  contractCampaignAddedEvent.parameters.push(
    new ethereum.EventParam("_creator", ethereum.Value.fromAddress(_creator))
  )

  return contractCampaignAddedEvent
}

export function createContractCampaignFundedEvent(
  _funder: Address,
  _campaignAddress: Address
): ContractCampaignFunded {
  let contractCampaignFundedEvent = changetype<ContractCampaignFunded>(
    newMockEvent()
  )

  contractCampaignFundedEvent.parameters = new Array()

  contractCampaignFundedEvent.parameters.push(
    new ethereum.EventParam("_funder", ethereum.Value.fromAddress(_funder))
  )
  contractCampaignFundedEvent.parameters.push(
    new ethereum.EventParam(
      "_campaignAddress",
      ethereum.Value.fromAddress(_campaignAddress)
    )
  )

  return contractCampaignFundedEvent
}

export function createContractCampaignRemovedEvent(
  _campaignAddress: Address
): ContractCampaignRemoved {
  let contractCampaignRemovedEvent = changetype<ContractCampaignRemoved>(
    newMockEvent()
  )

  contractCampaignRemovedEvent.parameters = new Array()

  contractCampaignRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "_campaignAddress",
      ethereum.Value.fromAddress(_campaignAddress)
    )
  )

  return contractCampaignRemovedEvent
}

export function createContractCampaignShrunkEvent(
  _withdrawer: Address,
  _campaignAddress: Address
): ContractCampaignShrunk {
  let contractCampaignShrunkEvent = changetype<ContractCampaignShrunk>(
    newMockEvent()
  )

  contractCampaignShrunkEvent.parameters = new Array()

  contractCampaignShrunkEvent.parameters.push(
    new ethereum.EventParam(
      "_withdrawer",
      ethereum.Value.fromAddress(_withdrawer)
    )
  )
  contractCampaignShrunkEvent.parameters.push(
    new ethereum.EventParam(
      "_campaignAddress",
      ethereum.Value.fromAddress(_campaignAddress)
    )
  )

  return contractCampaignShrunkEvent
}

export function createContractUserAddedEvent(
  _address: Address,
  _username: string,
  _twitter: string,
  _email: string,
  _bio: string
): ContractUserAdded {
  let contractUserAddedEvent = changetype<ContractUserAdded>(newMockEvent())

  contractUserAddedEvent.parameters = new Array()

  contractUserAddedEvent.parameters.push(
    new ethereum.EventParam("_address", ethereum.Value.fromAddress(_address))
  )
  contractUserAddedEvent.parameters.push(
    new ethereum.EventParam("_username", ethereum.Value.fromString(_username))
  )
  contractUserAddedEvent.parameters.push(
    new ethereum.EventParam("_twitter", ethereum.Value.fromString(_twitter))
  )
  contractUserAddedEvent.parameters.push(
    new ethereum.EventParam("_email", ethereum.Value.fromString(_email))
  )
  contractUserAddedEvent.parameters.push(
    new ethereum.EventParam("_bio", ethereum.Value.fromString(_bio))
  )

  return contractUserAddedEvent
}
