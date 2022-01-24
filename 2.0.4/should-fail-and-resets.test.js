beforeEach(() => {
  jest.resetAllMocks();
});

test("should fail", () => {
  console.error("boom");
});
