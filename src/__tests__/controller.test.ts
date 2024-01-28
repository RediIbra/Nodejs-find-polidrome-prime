import { Request, Response } from "express";
import { postNumbers } from "../controllers/controller";

describe("postNumbers controller", () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    mockRequest = {
      body: {
        numbers: [121, 131, 7, 22, 11, 14, 117, 151],
      },
    };

    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
  });

  it("When we put only numbers", async () => {
    await postNumbers(mockRequest as Request, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.json).toHaveBeenCalledWith(expect.any(Object));
  });

  it("When we put string", async () => {
    mockRequest.body.numbers = ["hello", 2, 3];
    await postNumbers(mockRequest as Request, mockResponse as Response);

    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalledWith({
      error: "Please put only numbers",
    });
  });

  it("When we put negative numbers", async () => {
    mockRequest.body.numbers = [-2, 2, 3];
    await postNumbers(mockRequest as Request, mockResponse as Response);

    expect(mockResponse.status).toHaveBeenCalledWith(400);
    expect(mockResponse.json).toHaveBeenCalledWith({
      error: "You cant put numbers equal to 0 or less",
    });
  });
});
