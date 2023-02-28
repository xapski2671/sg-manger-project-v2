import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { ContractCampaignAdded } from "../generated/schema"
import { ContractCampaignAdded as ContractCampaignAddedEvent } from "../generated/Contract/Contract"
import { handleContractCampaignAdded } from "../src/contract"
import { createContractCampaignAddedEvent } from "./contract-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _campaignAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _creator = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newContractCampaignAddedEvent = createContractCampaignAddedEvent(
      _campaignAddress,
      _creator
    )
    handleContractCampaignAdded(newContractCampaignAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ContractCampaignAdded created and stored", () => {
    assert.entityCount("ContractCampaignAdded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ContractCampaignAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_campaignAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ContractCampaignAdded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_creator",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
