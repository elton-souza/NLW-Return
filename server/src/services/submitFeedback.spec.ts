import { SubmitFeedback } from "./submitFeedback";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedback(
  {
    create: createFeedbackSpy,
  },
  {
    sendMail: sendMailSpy,
  }
);

describe("Submit feedback", () => {
  it("should be able to submit a feedback", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "example comment",
        screenshot: "data:image/png;base64,2187251vqjvjahsg",
      })
    ).resolves.not.toThrow();

    expect(createFeedbackSpy).toHaveBeenCalled();
    expect(sendMailSpy).toHaveBeenCalled();
    
  });

  it("Should not be able submit feedback without type", async () => {
    await expect(
      submitFeedback.execute({
        type: "",
        comment: "example comment",
        screenshot: "data:image/png;base64,2187251vqjvjahsg",
      })
    ).rejects.toThrow();
  });

  it("Should not be able submit feedback without comment", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "",
        screenshot: "data:image/png;base64,2187251vqjvjahsg",
      })
    ).rejects.toThrow();
  });

  it("Should not be able submit feedback with an invalid screenshot", async () => {
    await expect(
      submitFeedback.execute({
        type: "BUG",
        comment: "ta tudo bugado",
        screenshot: "test.jpg",
      })
    ).rejects.toThrow();
  });
});
