import { flexHelper } from "./flexHelper";

const expectedEmptyCallValue = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
}
const expectedNotEmptyCallValue = {
  flex: 1,
  justifyContent: "flex-start",
  alignItems: "end",
  flexDirection: "column",
}

describe("flexHelper tests", () => {

  it('creates correct values when empty', () => {
    expect(flexHelper({})).toMatchObject(expectedEmptyCallValue);
  });

  it('creates correct values when not empty', () => {
    expect(flexHelper({
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "end",
    })).toMatchObject(expectedNotEmptyCallValue);
  });
});
