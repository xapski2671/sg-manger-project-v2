import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { ExampleEntity } from "../generated/schema"
import { CampaignAdded } from "../generated/CrowdFunder/CrowdFunder"
import { handleCampaignAdded } from "../src/crowd-funder"
import { createCampaignAddedEvent } from "./crowd-funder-utils"

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
    let _title = "Example string value"
    let _description = "Example string value"
    let _category = "Example string value"
    let _tags = ["Example string value"]
    let _goalAmount = BigInt.fromI32(234)
    let _duration = BigInt.fromI32(234)
    let _campaignURI = "Example string value"
    let newCampaignAddedEvent = createCampaignAddedEvent(
      _campaignAddress,
      _creator,
      _title,
      _description,
      _category,
      _tags,
      _goalAmount,
      _duration,
      _campaignURI
    )
    handleCampaignAdded(newCampaignAddedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ExampleEntity created and stored", () => {
    assert.entityCount("ExampleEntity", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "_campaignAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "_creator",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "_title",
      "Example string value"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "_description",
      "Example string value"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "_category",
      "Example string value"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "_tags",
      "[Example string value]"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "_goalAmount",
      "234"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "_duration",
      "234"
    )
    assert.fieldEquals(
      "ExampleEntity",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a",
      "_campaignURI",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
