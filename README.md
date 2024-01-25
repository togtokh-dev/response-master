# Response Master

## Example

```bash

import responseMaster from "../src";
import { Request, Response } from "express";
export const getAll = async (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const results = [];
    return responseMaster.JSON(res, {
      data: results,
      message: "message text",
    });
  } catch (error) {
    responseMaster.JSON(res, {
      data: null,
      message: `${error}`,
      messageStatus: "Info",
      status: "NotFound",
    });
    // responseMaster.JSON(res, {
    //   data: null,
    //   message: `${error}`,
    //   messageStatus: "Info",
    //   status: "NotFound",
    //   paginate: {
    //     total: 0,
    //     pageCount: 0,
    //     start: 0,
    //     end: 0,
    //     skip: 0,
    //     nextPage: 0,
    //     prevPage: 0,
    //   },
    // });
  }
};


```
